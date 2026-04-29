'use client'

import { Button } from '@/components/ui/button'
import { Shield, ShieldCheck, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type Insurance = 'basic' | 'full' | ''

interface InsuranceSelectionProps {
  selectedInsurance: Insurance
  onSelect: (insurance: Insurance) => void
  onNext: () => void
  onBack: () => void
}

const insuranceOptions = [
  {
    id: 'full' as const,
    title: 'تأمين شامل',
    description: 'تغطية كاملة ضد جميع الأضرار والحوادث',
    icon: ShieldCheck,
    features: [
      'تغطية شاملة للحوادث',
      'تغطية ضد السرقة',
      'تغطية الأضرار الطبيعية',
      'المساعدة على الطريق 24/7',
      'سيارة بديلة في حالة الحوادث',
    ],
    recommended: true,
  },
  {
    id: 'basic' as const,
    title: 'تأمين أساسي',
    description: 'تغطية للأضرار الأساسية والطرف الثالث',
    icon: Shield,
    features: [
      'تغطية الطرف الثالث',
      'تغطية الأضرار الأساسية',
      'المساعدة على الطريق',
    ],
    recommended: false,
  },
]

export function InsuranceSelection({ selectedInsurance, onSelect, onNext, onBack }: InsuranceSelectionProps) {
  const isValid = selectedInsurance !== ''

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">التأمين</h2>
        <p className="text-muted-foreground">اختر نوع التأمين المناسب لك</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {insuranceOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={cn(
              'relative p-6 rounded-xl text-right transition-all',
              selectedInsurance === option.id
                ? 'bg-accent/10 ring-2 ring-accent'
                : 'bg-card ring-1 ring-border hover:ring-accent/50'
            )}
          >
            {option.recommended && (
              <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                موصى به
              </span>
            )}
            <option.icon
              className={cn(
                'w-10 h-10 mb-4',
                selectedInsurance === option.id ? 'text-accent' : 'text-muted-foreground'
              )}
            />
            <h3 className="font-bold text-primary text-lg mb-2">{option.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
            <ul className="space-y-2">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

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
