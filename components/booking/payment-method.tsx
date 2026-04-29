'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CreditCard, Banknote, Check, Home, Car } from 'lucide-react'
import { cn } from '@/lib/utils'

type PaymentMethod = 'visa' | 'cash' | ''

interface PaymentMethodProps {
  selectedMethod: PaymentMethod
  onSelect: (method: PaymentMethod) => void
  onBack: () => void
}

const paymentOptions = [
  {
    id: 'visa' as const,
    title: 'بطاقة ائتمان / فيزا',
    description: 'الدفع الآمن عبر الإنترنت',
    icon: CreditCard,
  },
  {
    id: 'cash' as const,
    title: 'الدفع نقداً عند الاستلام',
    description: 'ادفع نقداً عند استلام السيارة',
    icon: Banknote,
  },
]

export function PaymentMethod({ selectedMethod, onSelect, onBack }: PaymentMethodProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const isValid = selectedMethod !== ''

  const handleConfirm = async () => {
    if (!isValid) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsComplete(true)
  }

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <Check className="w-10 h-10 text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2">تم تأكيد الحجز بنجاح!</h2>
        <p className="text-muted-foreground mb-6">
          سيتم التواصل معك قريباً لتأكيد التفاصيل
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          رقم الحجز: <span className="font-bold text-primary">SCAR-{Date.now().toString().slice(-8)}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              العودة للرئيسية
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/fleet" className="inline-flex items-center gap-2">
              <Car className="w-4 h-4" />
              تصفح الأسطول
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">طريقة الدفع</h2>
        <p className="text-muted-foreground">اختر طريقة الدفع المناسبة لك</p>
      </div>

      <div className="space-y-4">
        {paymentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={cn(
              'w-full p-5 rounded-xl flex items-center gap-4 text-right transition-all',
              selectedMethod === option.id
                ? 'bg-accent/10 ring-2 ring-accent'
                : 'bg-card ring-1 ring-border hover:ring-accent/50'
            )}
          >
            <div
              className={cn(
                'w-12 h-12 rounded-lg flex items-center justify-center',
                selectedMethod === option.id ? 'bg-accent/20' : 'bg-muted'
              )}
            >
              <option.icon
                className={cn(
                  'w-6 h-6',
                  selectedMethod === option.id ? 'text-accent' : 'text-muted-foreground'
                )}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-primary">{option.title}</h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
            <div
              className={cn(
                'w-6 h-6 rounded-full border-2 flex items-center justify-center',
                selectedMethod === option.id
                  ? 'border-accent bg-accent'
                  : 'border-muted-foreground'
              )}
            >
              {selectedMethod === option.id && (
                <Check className="w-4 h-4 text-accent-foreground" />
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          السابق
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={!isValid || isSubmitting}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
        >
          {isSubmitting ? 'جاري التأكيد...' : 'تأكيد الحجز'}
        </Button>
      </div>
    </div>
  )
}
