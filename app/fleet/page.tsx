'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { cars, categories } from '@/lib/cars-data'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { User, FileText, BadgeCheck } from "lucide-react"

const requirements = [
  {
    title: "الهوية الشخصية",
    icon: User,
  },
  {
    title: "رخصة قيادة سارية",
    icon: BadgeCheck,
  },
  {
    title: "عقد إقامة (اختياري)",
    icon: FileText,
  },
]

function FleetContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all')

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const categoryMatch = selectedCategory === 'all' || car.category === selectedCategory
      
      let priceMatch = true
      if (priceRange === 'low') {
        priceMatch = car.pricePerDay < 500
      } else if (priceRange === 'medium') {
        priceMatch = car.pricePerDay >= 500 && car.pricePerDay < 1200
      } else if (priceRange === 'high') {
        priceMatch = car.pricePerDay >= 1200
      }
      
      return categoryMatch && priceMatch
    })
  }, [selectedCategory, priceRange])

  return (
    <>
      {/* Hero Section */}
     <section className="relative pt-22 pb-6 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://scar-auto-rental.com/wp-content/uploads/2026/04/the-jeep-compass-mod-photo-1-2-scaled.webp"
      alt="fleet background"
      fill
      className="object-cover"
      priority
    />

    {/* Overlay */}

  </div>

  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">

    <div className="text-center">

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        الأسطول
      </h1>

      <p className="text-white/80 text-lg max-w-2xl mx-auto">
        اختر من بين مجموعة متنوعة من السيارات الفاخرة والعملية
      </p>

    </div>

  </div>

</section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-1 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-2 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-primary hover:bg-accent/10'
                }`}
              >
                الكل
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card text-primary hover:bg-accent/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Price Filter */}
          
          </div>
        </div>
      </section>
      

      {/* Cars Grid */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                لا توجد سيارات تطابق معايير البحث
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm card-hover group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-medium">
                        {car.categoryAr}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {car.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {car.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        
                       
                      </div>
                      <Button
                        asChild
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Link href={`/fleet/${car.id}`}>
                          عرض التفاصيل
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
          <section className="py-20 bg-[#fbfaf6]">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            متطلبات الحجز
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {requirements.map((item, index) => (
            <div
              key={index}
              className="bg-[#fae7e7] rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#fae7e7] flex items-center justify-center">
                <item.icon className="w-8 h-8 text-[#1b4332]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>

    </>
  )
}

export default function FleetPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Suspense fallback={<div className="min-h-screen" />}>
          <FleetContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
