'use client'

import { useState, useMemo, Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BookingSteps } from '@/components/booking/booking-steps'
import { CarSelection } from '@/components/booking/car-selection'
import { RentalDuration } from '@/components/booking/rental-duration'
import { LocationDates } from '@/components/booking/location-dates'
import { InsuranceSelection } from '@/components/booking/insurance-selection'
import { DocumentUpload } from '@/components/booking/document-upload'
import { PersonalDetails } from '@/components/booking/personal-details'
import { PaymentMethod } from '@/components/booking/payment-method'
import { BookingSummary } from '@/components/booking/booking-summary'
import { cars } from '@/lib/cars-data'

export interface BookingData {
  carId: string
  duration: 'weekly' | 'monthly' | 'yearly' | ''
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  returnDate: string
  insurance: 'basic' | 'full' | ''
  documents: {
    id: File | null
    license: File | null
    residence: File | null
  }
  personalInfo: {
    firstName: string
    phone: string
    email: string
    ageConfirmed: boolean
  }
  paymentMethod: 'visa' | 'cash' | ''
}

const initialBookingData: BookingData = {
  carId: '',
  duration: '',
  pickupLocation: '',
  dropoffLocation: '',
  pickupDate: '',
  returnDate: '',
  insurance: '',
  documents: {
    id: null,
    license: null,
    residence: null,
  },
  personalInfo: {
    firstName: '',
    phone: '',
    email: '',
    ageConfirmed: false,
  },
  paymentMethod: '',
}

const steps = [
  { id: 1, title: 'اختيار السيارة' },
  { id: 2, title: 'مدة الإيجار' },
  { id: 3, title: 'المواقع والتواريخ' },
  { id: 4, title: 'التأمين' },
  { id: 5, title: 'المستندات' },
  { id: 6, title: 'البيانات الشخصية' },
  { id: 7, title: 'الدفع' },
]

function BookingContent() {
  const searchParams = useSearchParams()
  const preselectedCar = searchParams.get('car') || ''
  const pickupFromUrl = searchParams.get('pickup') || ''
  const dropoffFromUrl = searchParams.get('dropoff') || ''
  const pickupDateFromUrl = searchParams.get('pickupDate') || ''
  const returnDateFromUrl = searchParams.get('returnDate') || ''
  
  const [currentStep, setCurrentStep] = useState(preselectedCar ? 2 : 1)
  const [bookingData, setBookingData] = useState<BookingData>({
    ...initialBookingData,
    carId: preselectedCar,
    pickupLocation: pickupFromUrl,
    dropoffLocation: dropoffFromUrl,
    pickupDate: pickupDateFromUrl,
    returnDate: returnDateFromUrl,
  })

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const selectedCar = useMemo(() => {
    return cars.find((c) => c.id === bookingData.carId)
  }, [bookingData.carId])

  const estimatedPrice = useMemo(() => {
    if (!selectedCar || !bookingData.duration) return 0
    
    switch (bookingData.duration) {
      case 'weekly':
        return selectedCar.pricePerWeek
      case 'monthly':
        return selectedCar.pricePerMonth
      case 'yearly':
        return selectedCar.pricePerMonth * 10
      default:
        return 0
    }
  }, [selectedCar, bookingData.duration])

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CarSelection
            selectedCarId={bookingData.carId}
            onSelect={(carId) => updateBookingData({ carId })}
            onNext={nextStep}
          />
        )
      case 2:
        return (
          <RentalDuration
            selectedDuration={bookingData.duration}
            onSelect={(duration) => updateBookingData({ duration })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case 3:
        return (
          <LocationDates
            pickupLocation={bookingData.pickupLocation}
            dropoffLocation={bookingData.dropoffLocation}
            pickupDate={bookingData.pickupDate}
            returnDate={bookingData.returnDate}
            onUpdate={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case 4:
        return (
          <InsuranceSelection
            selectedInsurance={bookingData.insurance}
            onSelect={(insurance) => updateBookingData({ insurance })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case 5:
        return (
          <DocumentUpload
            documents={bookingData.documents}
            onUpdate={(documents) => updateBookingData({ documents })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case 6:
        return (
          <PersonalDetails
            personalInfo={bookingData.personalInfo}
            onUpdate={(personalInfo) => updateBookingData({ personalInfo })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case 7:
        return (
          <PaymentMethod
            selectedMethod={bookingData.paymentMethod}
            onSelect={(paymentMethod) => updateBookingData({ paymentMethod })}
            onBack={prevStep}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Step Indicator */}
        <BookingSteps steps={steps} currentStep={currentStep} />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {renderStep()}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <BookingSummary
              car={selectedCar}
              bookingData={bookingData}
              estimatedPrice={estimatedPrice}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-background min-h-screen">

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
        
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85"
              alt="Booking background"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              الحجز
            </h1>

            <p className="text-white/80 text-sm md:text-base">
              أكمل خطوات الحجز للحصول على سيارتك بسهولة
            </p>
          </div>

        </section>

        {/* Booking Content */}
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">جاري التحميل...</div>}>
          <BookingContent />
        </Suspense>

      </main>

      <Footer />
    </>
  )
}