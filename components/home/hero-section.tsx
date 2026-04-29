'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Calendar, MapPin, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { locations } from '@/lib/cars-data'
import Link from 'next/link'
const logos = [
  "	https://logos.skyscnr.com/images/carhire/vendors/215.png",
  "https://logos.skyscnr.com/images/carhire/vendors/673.png",
  "	https://logos.skyscnr.com/images/carhire/vendors/2119.png",
  "	https://logos.skyscnr.com/images/carhire/vendors/650.png",
  "https://logos.skyscnr.com/images/carhire/vendors/702.png",
  "https://logos.skyscnr.com/images/carhire/vendors/2243.png",
]
export function HeroSection() {
  const router = useRouter()
  const [carType, setCarType] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()

    if (pickupLocation) params.set('pickup', pickupLocation)
    if (dropoffLocation) params.set('dropoff', dropoffLocation)
    if (pickupDate) params.set('pickupDate', pickupDate)
    if (returnDate) params.set('returnDate', returnDate)
    if (carType) params.set('type', carType)

    router.push(`/booking?${params.toString()}`)
  }

  return (
 
  <>
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
       <div className="absolute inset-0">
  <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/vidm.mp4" type="video/mp4" />
</video>

  {/* Overlay */}
 
</div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-right">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            احجز سيارتك خلال دقائق
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
            تجربة فاخرة لتأجير السيارات بأسعار واضحة وخدمة احترافية
          </p>

        <div className="flex flex-row gap-4 justify-center lg:justify-start">
  
  <Button
    asChild
    size="lg"
    className="bg-accent text-lg px-6 w-auto"
  >
    <Link href="/fleet">استكشف الأسطول</Link>
  </Button>

  <Button
    asChild
    size="lg"
    variant="outline"
    className="border-white text-[#1b4332] hover:bg-white px-6 w-auto"
  >
    <Link href="/contact">تواصل معنا</Link>
  </Button>

</div>
        </div>
      </section>

      {/* 🔥 FORM SECTION */}
      <section className="relative -mt-22 z-20 pb-30">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="glass backdrop-blur-md bg-white/80 rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              احجز سيارتك الآن
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Car Type */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  نوع السيارة
                </label>
                <div className="relative">
                  <Car className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 rounded-lg border border-input bg-white focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="">اختر نوع السيارة</option>
                    <option value="luxury">سيارات فاخرة</option>
                    <option value="sedan">سيارات سيدان</option>
                    <option value="suv">سيارات SUV</option>
                  </select>
                </div>
              </div>

             <div className="grid grid-cols-2 gap-6">

  {/* Pickup */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-primary">
      مكان الاستلام
    </label>

    <div className="relative">
      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

      <select
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
        className="w-full pr-10 pl-4 py-3 rounded-xl border border-input bg-white
                   focus:ring-2 focus:ring-accent focus:border-transparent
                   transition shadow-sm"
      >
        <option value="">  الاستلام</option>
        {locations.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Dropoff */}
  <div className="space-y-2">
    <label className="block text-sm font-medium text-primary">
      مكان التسليم
    </label>

    <div className="relative">
      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

      <select
        value={dropoffLocation}
        onChange={(e) => setDropoffLocation(e.target.value)}
        className="w-full pr-10 pl-4 py-3 rounded-xl border border-input bg-white
                   focus:ring-2 focus:ring-accent focus:border-transparent
                   transition shadow-sm"
      >
        <option value="">  التسليم</option>
        {locations.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </select>
    </div>
  </div>

</div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
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
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full pr-10 pl-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-accent"
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
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full pr-10 pl-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold"
              >
                احجز الآن
              </Button>

            </form>
          </div>

        </div>
      </section>

     <section className="py-6 bg-secondary">
  <div className="container mx-auto px-6">

    <h3 className="text-center text-lg font-semibold text-primary mb-8">
      شركاؤنا
    </h3>

    {/* Grid instead of marquee */}
    <div className="grid grid-cols-3 gap-6 items-center justify-items-center">

      {logos.slice(0, 6).map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
        >
          <img
            src={logo}
            alt="brand"
            className="h-10 object-contain opacity-70 hover:opacity-100 transition"
          />
        </div>
      ))}

    </div>

  </div>
</section>
  </>



  )
}