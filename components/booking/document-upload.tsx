'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Upload, FileText, Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BookingData } from '@/app/booking/page'

interface DocumentUploadProps {
  documents: BookingData['documents']
  onUpdate: (documents: BookingData['documents']) => void
  onNext: () => void
  onBack: () => void
}

const documentTypes = [
  {
    id: 'id' as const,
    title: 'الهوية / الجواز',
    description: 'صورة من بطاقة الهوية أو جواز السفر',
    required: true,
  },
  {
    id: 'license' as const,
    title: 'رخصة القيادة',
    description: 'صورة من رخصة القيادة السارية',
    required: true,
  },
  {
    id: 'residence' as const,
    title: 'عقد الإقامة',
    description: 'صورة من عقد الإيجار أو ملكية السكن',
    required: false,
  },
]

export function DocumentUpload({ documents, onUpdate, onNext, onBack }: DocumentUploadProps) {
  const fileInputRefs = {
    id: useRef<HTMLInputElement>(null),
    license: useRef<HTMLInputElement>(null),
    residence: useRef<HTMLInputElement>(null),
  }

  const isValid = documents.id !== null && documents.license !== null

  const handleFileChange = (docType: keyof typeof documents, file: File | null) => {
    onUpdate({
      ...documents,
      [docType]: file,
    })
  }

  const removeFile = (docType: keyof typeof documents) => {
    onUpdate({
      ...documents,
      [docType]: null,
    })
    if (fileInputRefs[docType].current) {
      fileInputRefs[docType].current.value = ''
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">رفع المستندات</h2>
        <p className="text-muted-foreground">قم برفع المستندات المطلوبة لإتمام الحجز</p>
      </div>

      <div className="space-y-4">
        {documentTypes.map((doc) => {
          const file = documents[doc.id]
          const hasFile = file !== null

          return (
            <div
              key={doc.id}
              className={cn(
                'p-5 rounded-xl border-2 border-dashed transition-colors',
                hasFile ? 'border-accent bg-accent/5' : 'border-border'
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center',
                      hasFile ? 'bg-accent/20' : 'bg-muted'
                    )}
                  >
                    {hasFile ? (
                      <Check className="w-6 h-6 text-accent" />
                    ) : (
                      <FileText className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">
                      {doc.title}
                      {doc.required && (
                        <span className="text-accent mr-1">*</span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                    {hasFile && (
                      <p className="text-sm text-accent mt-1">{file.name}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {hasFile && (
                    <button
                      onClick={() => removeFile(doc.id)}
                      className="p-2 text-muted-foreground hover:text-accent transition-colors"
                      aria-label="إزالة الملف"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                  <input
                    ref={fileInputRefs[doc.id]}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null
                      handleFileChange(doc.id, file)
                    }}
                  />
                  <Button
                    type="button"
                    variant={hasFile ? 'outline' : 'default'}
                    size="sm"
                    onClick={() => fileInputRefs[doc.id].current?.click()}
                    className={hasFile ? '' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}
                  >
                    <Upload className="w-4 h-4 ml-2" />
                    {hasFile ? 'تغيير' : 'رفع'}
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-sm text-muted-foreground">
        <span className="text-accent">*</span> الحقول المطلوبة
      </p>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          السابق
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValid}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
        >
          التالي
        </Button>
      </div>
    </div>
  )
}
