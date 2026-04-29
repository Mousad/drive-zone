'use client'

import { useState } from 'react'
import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { cars } from '@/lib/cars-data'
import { notFound } from 'next/navigation'
import { ChevronRight, ChevronLeft, Users, Fuel, Calendar, Settings, Shield, Check } from 'lucide-react'

interface CarDetailsPageProps {
  params: Promise<{ id: string }>
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = use(params)
  const car = cars.find((c) => c.id === id)
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedInsurance, setSelectedInsurance] = useState<'basic' | 'full'>('full')

  if (!car) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.gallery.length) % car.gallery.length)
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-secondary py-4">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-accent">
                الرئيسية
              </Link>
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              <Link href="/fleet" className="text-muted-foreground hover:text-accent">
                الأسطول
              </Link>
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              <span className="text-primary font-medium">{car.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={car.gallery[currentImageIndex]}
                  alt={car.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="الصورة التالية"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {car.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-accent' : 'bg-white/60'
                      }`}
                      aria-label={`الانتقال للصورة ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {car.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-2 transition-all ${
                      index === currentImageIndex
                        ? 'ring-accent'
                        : 'ring-transparent hover:ring-accent/50'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${car.name} - صورة ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                  {car.categoryAr}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {car.name}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {car.description}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">المقاعد</p>
                  <p className="text-lg font-bold text-primary">{car.specs.seats}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Settings className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">ناقل الحركة</p>
                  <p className="text-lg font-bold text-primary">{car.specs.transmission}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Fuel className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">نوع الوقود</p>
                  <p className="text-lg font-bold text-primary">{car.specs.fuelType}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">سنة الصنع</p>
                  <p className="text-lg font-bold text-primary">{car.specs.year}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">المميزات</h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 text-accent" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Insurance Options */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  خيارات التأمين
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedInsurance('full')}
                    className={`p-4 rounded-xl border-2 text-right transition-colors ${
                      selectedInsurance === 'full'
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <h4 className="font-bold text-primary mb-1">تأمين شامل</h4>
                    <p className="text-sm text-muted-foreground">
                      تغطية كاملة ضد جميع الأضرار والحوادث
                    </p>
                  </button>
                  <button
                    onClick={() => setSelectedInsurance('basic')}
                    className={`p-4 rounded-xl border-2 text-right transition-colors ${
                      selectedInsurance === 'basic'
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <h4 className="font-bold text-primary mb-1">تأمين أساسي</h4>
                    <p className="text-sm text-muted-foreground">
                      تغطية للأضرار الأساسية والطرف الثالث
                    </p>
                  </button>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4">الأسعار</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">يومي</p>
                    <p className="text-xl font-bold text-accent">
                      {car.pricePerDay.toLocaleString('ar-EG')}
                    </p>
                    <p className="text-xs text-muted-foreground">ج.م</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">أسبوعي</p>
                    <p className="text-xl font-bold text-accent">
                      {car.pricePerWeek.toLocaleString('ar-EG')}
                    </p>
                    <p className="text-xs text-muted-foreground">ج.م</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">شهري</p>
                    <p className="text-xl font-bold text-accent">
                      {car.pricePerMonth.toLocaleString('ar-EG')}
                    </p>
                    <p className="text-xs text-muted-foreground">ج.م</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold"
              >
                <Link href={`/booking?car=${car.id}`}>
                  احجز الآن
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
