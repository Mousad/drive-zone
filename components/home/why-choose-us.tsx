import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from "lucide-react"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const benefits = [
  'أسعار تنافسية وشفافة بدون رسوم مخفية',
  'أسطول متنوع من السيارات الحديثة',
  'خدمة عملاء على مدار الساعة',
  'تأمين شامل لراحة بالك',
  'توصيل واستلام من أي مكان',
  'صيانة دورية لجميع السيارات',
]

export function WhyChooseUs() {
  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://scar-auto-rental.com/wp-content/uploads/2026/04/choosing-secondhand-auto-car-rental-1.webp"
                alt="سيارة فاخرة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />
            </div>

            {/* Content */}
            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                لماذا تختار <span>Drive <span className="text-[#d42228]">Zone</span> </span> 
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                نحن نقدم تجربة تأجير سيارات استثنائية تجمع بين الفخامة والراحة والأسعار التنافسية.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">

                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>

                    <span className="text-foreground">
                      {benefit}
                    </span>

                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/about">
                  تعرف علينا أكثر
                </Link>
              </Button>

            </div>

          </div>

        </div>
      </section>

      {/* INSURANCE SECTION */}
      <section className="py-6">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid md:grid-cols-2 items-center gap-6 bg-gradient-to-r from-primary/10 via-secondary to-primary/5 rounded-3xl p-8 md:p-12">

            {/* Image */}
           <div className="object-contain translate-x-11">
  <Image
    src="https://scar-auto-rental.com/wp-content/uploads/2026/04/hand-hovers-blue-toy-car-seemingly-ready-play-1.webp"
    alt="car insurance"
    width={450}
    height={350}
    className="object-contain"
  />
</div>

            {/* Content */}
            <div className="text-center md:text-right">

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                قُد بثقة
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                اختر بين التأمين الشامل أو القياسي حسب احتياجك.
              </p>

              <Button asChild className="bg-accent hover:bg-accent/90 text-white px-6 py-3">
                <Link href="/services">
                  عرض تفاصيل التأمين
                </Link>
              </Button>

            </div>

          </div>

        </div>
      </section>
       <section className="py-3 bg-[#f5f4f0]">
  <div className="max-w-6xl mx-auto px-4">

    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        تأمين يناسب احتياجاتك وتطلعاتك
      </h2>
      <p className="text-muted-foreground">
        اختر التغطية التي تمنحك راحة البال أثناء القيادة
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Standard Insurance */}
      <div className="bg-[#d42228] border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl text-[#fbfaf6] font-bold mb-6">التأمين القياسي</h3>

        <ul className="space-y-4 mb-6 text-[#fbfaf6]">
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#313f52] text-[#fbfaf6] flex items-center justify-center rounded-lg">
              ✔
            </div>
            بدون تكاليف إضافية
          </li>

          <li className="flex items-center gap-3 text-[#fbfaf6]">
            <div className="w-8 h-8 bg-[#313f52] text-[#fbfaf6] flex items-center justify-center rounded-lg">
              ✔
            </div>
            تتحمل 30٪ من المسؤولية عند الضرر
          </li>
        </ul>

        <p className="text-muted text-[#fbfaf6] mb-6">
          هذا التأمين مشمول تلقائياً مع الإيجار. في حال حدوث أي أضرار،
          يتحمل المستأجر 30٪ فقط من تكلفة الإصلاح.
        </p>

        <ul className="text-sm text-[#fbfaf6] space-y-2 mb-6">
          <li>• مشمول مع الإيجار</li>
          <li>• خيار اقتصادي</li>
          <li>• مناسب للإيجارات القصيرة</li>
        </ul>

        <a
          href="/fleet"
          className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          اختيار التأمين القياسي
        </a>
      </div>

      {/* Full Insurance */}
      <div className="bg-[#313f52] border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
        <h3 className="text-2xl text-[#fbfaf6] font-bold mb-6">التأمين الشامل</h3>

        <ul className="space-y-4 mb-6 text-[#fbfaf6]">
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#fae7e7] flex text-[#d42228] items-center justify-center rounded-lg">
              ✔
            </div>
            مسؤولية صفرية — راحة تامة
          </li>

          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#fae7e7] flex text-[#d42228] flex items-center justify-center rounded-lg">
              ✔
            </div>
            السعر حسب نوع المركبة
          </li>
        </ul>

        <p className="text-[#fbfaf6] mb-6">
          قد بكل ثقة. في حال حدوث أي أضرار، لن تتحمل أي تكاليف.
        </p>

        <ul className="text-sm text-[#fbfaf6] space-y-2 mb-6">
          <li>• لا مسؤولية مالية</li>
          <li>• تجربة خالية من القلق</li>
          <li>• الأكثر طلباً</li>
          <li>• السعر يختلف حسب السيارة</li>
        </ul>

        <a
          href="/fleet"
          className="inline-block bg-[#d42228] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          اختيار التأمين الشامل
        </a>
      </div>

    </div>
  </div>
</section>

  <section className="py-4 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h3 className="text-1xl md:text-3xl font-bold mb-6">
          تابعنا أو تواصل معنا عبر منصاتنا
        </h3>

        <p className="text-muted-foreground mb-10">
         
        </p>

        <div className="flex items-center justify-center gap-6">

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white hover:scale-110 transition"
          >
            <Instagram size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61585725211041"
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition"
          >
            <Facebook size={24} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201103907766"
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white hover:scale-110 transition"
          >
            <MessageCircle size={24} />
          </a>

        </div>

      </div>
    </section>

       <section className="py-8 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            تواصل معنا
          </h2>
          <p className="text-muted-foreground">
            نحن هنا لخدمتك، لا تتردد في التواصل معنا في أي وقت
          </p>
        </div>

        {/* Content */}
        <div className="grid  md:grid-cols-3 gap-8">

          {/* Address */}
          <div className="bg-card p-6 rounded-2xl shadow-sm text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-primary mb-2">العنوان</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              المحور المركزي، مدينة السادس من أكتوبر<br />
              مول ويست بوينت، الدور الثاني<br />
              مكتب 11W
            </p>
          </div>

          {/* Phone */}
          <div className="bg-card p-6 rounded-2xl shadow-sm text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-primary mb-2">رقم الهاتف</h3>
            <a
              href="tel:01103907766"
              className="text-muted-foreground hover:text-accent transition"
            >
              01103907766
            </a>
          </div>

          {/* Email */}
          <div className="bg-card p-6 rounded-2xl shadow-sm text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-primary mb-2">البريد الإلكتروني</h3>
            <a
              href="mailto:scarautogroup2025@gmail.com"
              className="text-muted-foreground hover:text-accent transition"
            >
              scarautogroup2025@gmail.com
            </a>
          </div>

        </div>

      </div>
    </section>

        <section className="py-2 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            موقعنا على Google Maps
          </h3>
          
        </div>

        {/* Map */}
        <div className="w-full h-[260px] md:h-[500px] rounded-2xl overflow-hidden shadow-md border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.5658658999273!2d30.928188625605816!3d29.958537974967015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857007ff15e27%3A0xf99e1a3e0520a9ea!2sDrive%20Zone!5e1!3m2!1sar!2seg!4v1777502200496!5m2!1sar!2seg"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>



   
    </>
  )
}