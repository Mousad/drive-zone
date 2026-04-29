import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/fleet', label: 'الأسطول' },
  { href: '/booking', label: 'الحجز' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/contact', label: 'تواصل معنا' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
             <span>Drive <span className="text-[#d42228]">Zone</span> </span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              تجربة فاخرة لتأجير السيارات بأسعار واضحة وخدمة احترافية. نقدم أفضل السيارات بأعلى معايير الجودة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 Scar Auto All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="https://soob-portfolio.vercel.app/" className="text-primary-foreground/60 hover:text-accent transition-colors">
                 DEIV
              </Link>
              <Link href="/" className="text-primary-foreground/60 hover:text-accent transition-colors">
                 والأحكام
              </Link>
              <Link href="/" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
