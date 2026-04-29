'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Calendar } from 'lucide-react'
import { locations } from '@/lib/cars-data'
import type { BookingData } from '@/app/booking/page'

interface LocationDatesProps {
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  returnDate: string
  onUpdate: (data: Partial<BookingData>) => void
  onNext: () => void
  onBack: () => void
}

export function LocationDates({
  pickupLocation,
  dropoffLocation,
  pickupDate,
  returnDate,
  onUpdate,
  onNext,
  onBack,
}: LocationDatesProps) {
  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]
  
  const isValid = pickupLocation && dropoffLocation && pickupDate && returnDate && 
    new Date(returnDate) > new Date(pickupDate)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">المواقع والتواريخ</h2>
        <p className="text-muted-foreground">حدد مكان وتاريخ الاستلام والتسليم</p>
      </div>

      <div className="space-y-5">
        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            مكان الاستلام
          </label>
          <div className="relative">
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={pickupLocation}
              onChange={(e) => onUpdate({ pickupLocation: e.target.value })}
              className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent appearance-none"
            >
              <option value="">اختر مكان الاستلام</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dropoff Location */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            مكان التسليم
          </label>
          <div className="relative">
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={dropoffLocation}
              onChange={(e) => onUpdate({ dropoffLocation: e.target.value })}
              className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent appearance-none"
            >
              <option value="">اختر مكان التسليم</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              تاريخ الاستلام
            </label>
            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="date"
                value={pickupDate}
                min={today}
                onChange={(e) => onUpdate({ pickupDate: e.target.value })}
                className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              تاريخ العودة
            </label>
            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="date"
                value={returnDate}
                min={pickupDate || today}
                onChange={(e) => onUpdate({ returnDate: e.target.value })}
                className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-card text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-muted rounded-xl h-48 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">خريطة المواقع</p>
          </div>
        </div>
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
