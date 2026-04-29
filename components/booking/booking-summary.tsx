import Image from 'next/image'
import type { Car } from '@/lib/cars-data'
import type { BookingData } from '@/app/booking/page'

interface BookingSummaryProps {
  car: Car | undefined
  bookingData: BookingData
  estimatedPrice: number
}

const durationLabels: Record<string, string> = {
  weekly: 'أسبوعي',
  monthly: 'شهري',
  yearly: 'سنوي',
}

const insuranceLabels: Record<string, string> = {
  basic: 'تأمين أساسي',
  full: 'تأمين شامل',
}

const paymentLabels: Record<string, string> = {
  visa: 'بطاقة ائتمان / فيزا',
  cash: 'الدفع نقداً',
}

export function BookingSummary({ car, bookingData, estimatedPrice }: BookingSummaryProps) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm sticky top-24">
      <h3 className="text-lg font-bold text-primary mb-4">ملخص الحجز</h3>

      {car ? (
        <>
          {/* Car Info */}
          <div className="flex gap-4 pb-4 border-b border-border">
            <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-primary">{car.name}</h4>
              <p className="text-sm text-muted-foreground">{car.categoryAr}</p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="py-4 space-y-3 border-b border-border">
            {bookingData.duration && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">مدة الإيجار</span>
                <span className="text-foreground font-medium">
                  {durationLabels[bookingData.duration]}
                </span>
              </div>
            )}
            {bookingData.pickupLocation && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">مكان الاستلام</span>
                <span className="text-foreground font-medium">
                  {bookingData.pickupLocation}
                </span>
              </div>
            )}
            {bookingData.dropoffLocation && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">مكان التسليم</span>
                <span className="text-foreground font-medium">
                  {bookingData.dropoffLocation}
                </span>
              </div>
            )}
            {bookingData.pickupDate && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">تاريخ الاستلام</span>
                <span className="text-foreground font-medium" dir="ltr">
                  {bookingData.pickupDate}
                </span>
              </div>
            )}
            {bookingData.returnDate && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">تاريخ العودة</span>
                <span className="text-foreground font-medium" dir="ltr">
                  {bookingData.returnDate}
                </span>
              </div>
            )}
            {bookingData.insurance && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">التأمين</span>
                <span className="text-foreground font-medium">
                  {insuranceLabels[bookingData.insurance]}
                </span>
              </div>
            )}
            {bookingData.paymentMethod && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">طريقة الدفع</span>
                <span className="text-foreground font-medium">
                  {paymentLabels[bookingData.paymentMethod]}
                </span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="pt-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">السعر التقديري</span>
              <div className="text-left">
                <span className="text-2xl font-bold text-accent">
                  {estimatedPrice > 0
                    ? estimatedPrice.toLocaleString('ar-EG')
                    : '---'}
                </span>
                <span className="text-sm text-muted-foreground mr-1">ج.م</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              * السعر النهائي قد يختلف بناءً على المدة الفعلية والإضافات
            </p>
          </div>
        </>
      ) : (
        <div className="py-8 text-center text-muted-foreground">
          <p>اختر سيارة لعرض التفاصيل</p>
        </div>
      )}
    </div>
  )
}
