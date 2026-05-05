'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'العنوان',
    content: 'المحور المركزي، مدينة السادس من أكتوبر، مول ويست بوينت، الدور الثاني، مكتب 11w',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'الهاتف',
    content: '01055539598',
    href: 'tel:01103907766',
    dir: 'ltr',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    content: 'scarautogroup2025@gmail.com',
    href: 'mailto:scarautogroup2025@gmail.com',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    content: 'السبت - الخميس: 9:00 - 21:00 | الجمعة: 14:00 - 21:00',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
            <div className="absolute inset-0 bg-primary/70" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              تواصل معنا
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو حجز
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-8">
                  معلومات التواصل
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            dir={item.dir}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Google Map بدل Placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden border h-64">
                  <iframe
                    src="https://maps.google.com/maps?q=6th%20of%20October%20City%2C%20Westpoint%20Mall%2C%202nd%20Floor%2C%20Office%2011w&t=m&z=15&output=embed&iwloc=near"
                    
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  أرسل لنا رسالة
                </h2>

                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      تم إرسال رسالتك بنجاح!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      سنتواصل معك في أقرب وقت ممكن
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ name: '', email: '', phone: '', message: '' })
                      }}
                      variant="outline"
                    >
                      إرسال رسالة أخرى
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        required
                        placeholder="أدخل اسمك الكامل"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        required
                        placeholder="example@email.com"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-left focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="أدخل رقم هاتفك"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-left focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        الرسالة
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        required
                        rows={4}
                        placeholder="اكتب رسالتك هنا..."
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 py-6"
                    >
                      {isSubmitting ? (
                        'جاري الإرسال...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 ml-2" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>

                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}