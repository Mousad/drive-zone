'use client'

import { Button } from '@/components/ui/button'
import { User, Phone, Mail, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BookingData } from '@/app/booking/page'

interface PersonalDetailsProps {
  personalInfo: BookingData['personalInfo']
  onUpdate: (personalInfo: BookingData['personalInfo']) => void
  onNext: () => void
  onBack: () => void
}

export function PersonalDetails({ personalInfo, onUpdate, onNext, onBack }: PersonalDetailsProps) {
  const isValid =
    personalInfo.firstName.trim() !== '' &&
    personalInfo.phone.trim() !== '' &&
    personalInfo.email.trim() !== '' &&
    personalInfo.ageConfirmed

  const updateField = (field: keyof BookingData['personalInfo'], value: string | boolean) => {
    onUpdate({
      ...personalInfo,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">البيانات الشخصية</h2>
        <p className="text-muted-foreground">أدخل بياناتك الشخصية لإتمام الحجز</p>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            الاسم الأول <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={personalInfo.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              placeholder="أدخل اسمك الأول"
              className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            رقم الهاتف <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              value={personalInfo.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="أدخل رقم هاتفك"
              dir="ltr"
              className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent text-left"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            البريد الإلكتروني <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="example@email.com"
              dir="ltr"
              className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent text-left"
            />
          </div>
        </div>

        {/* Age Confirmation */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => updateField('ageConfirmed', !personalInfo.ageConfirmed)}
            className="flex items-center gap-3"
          >
            <div
              className={cn(
                'w-6 h-6 rounded border-2 flex items-center justify-center transition-colors',
                personalInfo.ageConfirmed
                  ? 'bg-accent border-accent'
                  : 'border-input hover:border-accent'
              )}
            >
              {personalInfo.ageConfirmed && (
                <Check className="w-4 h-4 text-accent-foreground" />
              )}
            </div>
            <span className="text-foreground">
              أؤكد أن عمري يتجاوز 21 عاماً <span className="text-accent">*</span>
            </span>
          </button>
        </div>
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
