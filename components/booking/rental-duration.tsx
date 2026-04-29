'use client'

import { Button } from '@/components/ui/button'
import { Calendar, CalendarDays, CalendarRange } from 'lucide-react'
import { cn } from '@/lib/utils'

type Duration = 'weekly' | 'monthly' | 'yearly' | ''

interface RentalDurationProps {
  selectedDuration: Duration
  onSelect: (duration: Duration) => void
  onNext: () => void
  onBack: () => void
}

const durations = [
  {
    id: 'weekly' as const,
    title: 'أسبوعي',
    description: 'إيجار لمدة أسبوع واحد أو أكثر',
    icon: Calendar,
  },
  {
    id: 'monthly' as const,
    title: 'شهري',
    description: 'إيجار لمدة شهر واحد أو أكثر',
    icon: CalendarDays,
  },
  {
    id: 'yearly' as const,
    title: 'سنوي',
    description: 'إيجار طويل الأجل بأسعار مميزة',
    icon: CalendarRange,
  },
]

export function RentalDuration({ selectedDuration, onSelect, onNext, onBack }: RentalDurationProps) {
  const isValid = selectedDuration !== ''

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">مدة الإيجار</h2>
        <p className="text-muted-foreground">اختر مدة الإيجار المناسبة لك</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {durations.map((duration) => (
          <button
            key={duration.id}
            onClick={() => onSelect(duration.id)}
            className={cn(
              'p-6 rounded-xl text-center transition-all',
              selectedDuration === duration.id
                ? 'bg-accent/10 ring-2 ring-accent'
                : 'bg-card ring-1 ring-border hover:ring-accent/50'
            )}
          >
            <duration.icon
              className={cn(
                'w-10 h-10 mx-auto mb-4',
                selectedDuration === duration.id ? 'text-accent' : 'text-muted-foreground'
              )}
            />
            <h3 className="font-bold text-primary mb-2">{duration.title}</h3>
            <p className="text-sm text-muted-foreground">{duration.description}</p>
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
