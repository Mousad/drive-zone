import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, Users, Car, Clock, Target, Eye } from 'lucide-react'

const stats = [
  { value: '+500', label: 'عميل سعيد' },
  { value: '+50', label: 'سيارة  ' },
  { value: '+5', label: 'سنوات خبرة' },
  { value: '24/7', label: 'خدمة عملاء' },
]

const values = [
  {
    icon: Award,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا',
  },
  {
    icon: Users,
    title: 'خدمة العملاء',
    description: 'عملاؤنا هم أولويتنا ورضاهم هدفنا الأول',
  },
  {
    icon: Car,
    title: 'التنوع',
    description: 'نوفر مجموعة متنوعة من السيارات لتلبية جميع الاحتياجات',
  },
  {
    icon: Clock,
    title: 'الموثوقية',
    description: 'خدمة موثوقة على مدار الساعة طوال أيام الأسبوع',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background">
        {/* Hero Section */}
      <section className="relative py-18 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85"
      alt="About us background"
      fill
      className="object-cover"
      priority
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-primary/70" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
    
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      من نحن
    </h1>

    <p className="text-white/80 text-lg max-w-2xl mx-auto">
      تعرف على قصتنا ورؤيتنا لتقديم أفضل خدمة تأجير سيارات
    </p>

  </div>

</section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://scar-auto-rental.com/wp-content/uploads/2026/04/hand-hovers-blue-toy-car-seemingly-ready-play-1-1.webp"
                  alt="Scar Auto Group"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  قصتنا
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    بدأت <span className="text-[#d42228] text-[22px]">S<span className="text-[#101213]">car</span></span> رحلتها بهدف واحد واضح: تقديم تجربة تأجير سيارات استثنائية تجمع بين الفخامة والراحة والأسعار التنافسية.
                  </p>
                  <p>
                    منذ انطلاقنا، عملنا بجد على بناء أسطول متنوع من أفضل السيارات، وتطوير فريق محترف يضع رضا العميل في المقام الأول.
                  </p>
                  <p>
                    اليوم، نفخر بخدمة مئات العملاء الراضين، ونستمر في التطور لنقدم أفضل خدمة ممكنة في سوق تأجير السيارات.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-7 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85"
      alt="cars background"
      fill
      className="object-cover"
      priority
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 lg:px-8">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {stats.map((stat, index) => (
        <div key={index} className="text-white">

          <p className="text-3xl md:text-5xl font-bold text-accent mb-2">
            {stat.value}
          </p>

          <p className="text-white/80">
            {stat.label}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

        {/* Vision & Mission */}
       <section className="py-8">
  <div className="container mx-auto px-4 lg:px-8">

    <div className="grid grid-cols-2 gap-8">

      {/* Vision */}
      <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">

        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <Eye className="w-7 h-7 text-accent" />
        </div>

        <h3 className="text-2xl font-bold text-primary mb-2">
          رؤيتنا
        </h3>

        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          أن نكون الخيار الأول لتأجير السيارات
        </p>

      </div>

      {/* Mission */}
      <div className="bg-card rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">

        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <Target className="w-7 h-7 text-accent" />
        </div>

        <h3 className="text-2xl font-bold text-primary mb-2">
          رسالتنا
        </h3>

        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          تقديم تجربة تأجير سيارات مريحة وبأسعار شفافة.
        </p>

      </div>

    </div>

  </div>
</section>
        {/* Values Section */}
        <section className="py-7 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">قيمنا</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                القيم التي نلتزم بها في كل تعامل مع عملائنا
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center card-hover shadow-sm"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                انضم إلى عائلة <span className="text-[#d42228]">S<span className="text-[#101213]">CAR</span></span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                احجز سيارتك الآن واستمتع بتجربة قيادة لا تُنسى
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="/booking">احجز الآن</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
