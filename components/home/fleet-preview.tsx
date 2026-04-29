import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { categories } from '@/lib/cars-data'

export function FleetPreview() {
  return (
    <section className="py-2 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            استكشف أسطولنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختر من بين مجموعة متنوعة من السيارات الفاخرة والعملية
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/fleet?category=${category.id}`}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-hover">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-medium">
                    عرض السيارات
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/fleet" className="inline-flex items-center gap-2">
              عرض جميع السيارات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
