import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Crown, Car, Mountain, UserCheck, Building2 } from 'lucide-react'
import { ArrowUpRight } from "lucide-react"
const services = [
  {
    id: 'luxury',
    title: 'سيارات فاخرة',
    description: 'تجربة قيادة استثنائية مع أفخم السيارات في السوق. مرسيدس، بي إم دبليو، أودي وغيرها من العلامات الراقية.',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
  },
  {
    id: 'sedan',
    title: 'سيارات سيدان',
    description: 'راحة وعملية للاستخدام اليومي. سيارات موثوقة واقتصادية مناسبة للعمل والتنقل.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
  },
  {
    id: 'suv',
    title: 'سيارات SUV',
    description: 'قوة ومساحة لجميع المغامرات. مثالية للعائلات والرحلات الطويلة.',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
  },
  {
    id: 'driver',
    title: 'خدمة السائق',
    description: 'استمتع برحلتك مع سائق محترف. خدمة مميزة للمناسبات والاجتماعات الهامة.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
  {
    id: 'corporate',
    title: 'تعاقدات الشركات',
    description: 'حلول متكاملة لأساطيل الشركات. عقود طويلة الأجل بأسعار تنافسية وخدمة مخصصة.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background">
        {/* Hero Section */}
          <section className="relative py-15 overflow-hidden">
         
           {/* Background Image */}
           <div className="absolute inset-0">
             <Image
               src="https://scar-auto-rental.com/wp-content/uploads/2026/04/the-jeep-compass-mod-photo-1-1.webp"
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
               خدماتنا
             </h1>
         
             <p className="text-white/80 text-lg max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من خدمات تأجير السيارات لتلبية جميع احتياجاتك
            </p>
         
           </div>
         
         </section>


     

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm card-hover group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          <section className="py-9 bg-background">
      <div className="max-w-6xl mx-auto px-5">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden group">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://scar-auto-rental.com/wp-content/uploads/2026/04/eff846879382a0808512243d5621fbd972bb4f52-scaled.webp')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative p-8 text-white z-10">

              <h3 className="text-2xl font-bold mb-4">
                تأجير سيارات يومي ولفترات طويلة
              </h3>

              <p className="mb-4 text-white/90">
                اختر من بين أسطولنا المتنوع من السيارات الفارهة، والسيدان، والسيارات العائلية (SUV)، مع خطط إيجار تبدأ من 5 أيام.
              </p>

              <p className="text-red-400 font-semibold mb-6">
                خيارات متاحة أسبوعية • شهرية • سنوية
              </p>

              
              <a
  href="/contact"
  className="inline-flex items-center gap-2 font-medium bg-[#313f52] text-white px-5 py-3 rounded-xl hover:bg-[#2a3545] hover:gap-3 transition-all"
>
 استكشف الأسطول  <ArrowUpRight size={18} />
</a>

            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden group">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://scar-auto-rental.com/wp-content/uploads/2026/04/bbb9c866905e7b30464ac7d7cc60db40ebd11040-scaled.webp')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative p-8 text-white z-10">

              <h3 className="text-2xl font-bold mb-4">
                إيجار السيارات للشركات والمؤسسات
              </h3>

              <p className="mb-4 text-white/90">
                حلول تنقل مخصصة للشركات، والبنوك، والهيئات الدبلوماسية مع عقود طويلة الأمد ودعم فني ذو أولوية.
              </p>

              <p className="text-red-400 font-semibold mb-6">
                إدارة الأسطول لمؤسستك
              </p>

             
              <a
  href="/contact"
  className="inline-flex items-center gap-2 font-medium bg-[#313f52] text-white px-5 py-3 rounded-xl hover:bg-[#2a3545] hover:gap-3 transition-all"
>
  طلب عرض سعر للشركات
  <ArrowUpRight size={18} />
</a>

            </div>
          </div>

           {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden group">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://scar-auto-rental.com/wp-content/uploads/2026/04/b59b192765cc02708094c833ec49afd66719ae82-scaled.webp')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative p-8 text-white z-10">

              <h3 className="text-2xl font-bold mb-4">
               خدمة السائق المحترف
              </h3>

              <p className="mb-4 text-white/90">
               سائقون ذوو خبرة وكفاءة عالية متاحون عند الطلب لضمان أقصى درجات الراحة والرفاهية.
              </p>

              <p className="text-red-400 font-semibold mb-6">
               متاحة لجميع فئات السيارات
              </p>

              

              <a
  href="/contact"
  className="inline-flex items-center gap-2 font-medium bg-[#313f52] text-white px-5 py-3 rounded-xl hover:bg-[#2a3545] hover:gap-3 transition-all"
>
 إضافة سائق للحجز  <ArrowUpRight size={18} />
</a>

            </div>
          </div>
           {/* Card 4 */}
            <div className="relative rounded-2xl overflow-hidden group">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://scar-auto-rental.com/wp-content/uploads/2026/04/bbb9c866905e7b30464ac7d7cc60db40ebd11040-scaled.webp')",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative p-8 text-white z-10">

              <h3 className="text-2xl font-bold mb-4">
              تغطية تأمينية مرنة
              </h3>

              <p className="text-red-400 font-semibold mb-6">
               تأمين شامل
              </p>

              <p className="mb-4 text-white/90">
خيارات تأمينية واضحة مصممة لضمان راحة بالك.              </p>

              <p className="text-red-400 font-semibold mb-6">
               تأمين شامل
              </p>

               <p className="mb-4 text-white/90">
إعفاء كامل من المسؤولية

سعر التأمين يعتمد على فئة السيارة </p>

              <a
  href="/contact"
  className="inline-flex items-center gap-2 font-medium bg-[#313f52] text-white px-5 py-3 rounded-xl hover:bg-[#2a3545] hover:gap-3 transition-all"
>
  طلب عرض سعر للشركات
  <ArrowUpRight size={18} />
</a>

            </div>
          </div>

        </div>
      </div>
    </section>

        <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#fae7e7] rounded-3xl p-8 md:p-12 shadow-sm">

          {/* Text Content */}
          <div className="text-center md:text-right">

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              هل أنت مستعد للانطلاق؟
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              اختر سيارتك وأكمل حجزك في دقائق واستمتع بتجربة قيادة فاخرة.
            </p>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/booking" className="inline-flex items-center gap-2">
                احجز الآن
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>

          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">

            <Image
              src="https://scar-auto-rental.com/wp-content/uploads/2026/04/image-1-1.webp"
              alt="Car CTA"
              width={540}
              height={324}
              className="object-contain hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
      </main>
      <Footer />
    </>
  )
}
