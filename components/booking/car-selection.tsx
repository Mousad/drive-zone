'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cars } from '@/lib/cars-data'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarSelectionProps {
  selectedCarId: string
  onSelect: (carId: string) => void
  onNext: () => void
}

export function CarSelection({ selectedCarId, onSelect, onNext }: CarSelectionProps) {
  const isValid = selectedCarId !== ''

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">اختيار السيارة</h2>
        <p className="text-muted-foreground">اختر السيارة المناسبة لك</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
        {cars.map((car) => (
          <button
            key={car.id}
            onClick={() => onSelect(car.id)}
            className={cn(
              'relative bg-card rounded-xl overflow-hidden text-right transition-all',
              selectedCarId === car.id
                ? 'ring-2 ring-accent'
                : 'ring-1 ring-border hover:ring-accent/50'
            )}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
              {selectedCarId === car.id && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-primary">{car.name}</h3>
              <p className="text-sm text-muted-foreground">{car.categoryAr}</p>
              <p className="text-accent font-bold mt-2">
                {car.pricePerDay.toLocaleString('ar-EG')} ج.م / يوم
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-start pt-4">
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
