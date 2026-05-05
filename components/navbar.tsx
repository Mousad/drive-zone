'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/fleet', label: 'الأسطول' },
  { href: '/booking', label: 'الحجز' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل معنا' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <Link href="/" className="flex items-center">
  <Image
    src="https://scar-auto-rental.com/wp-content/uploads/2026/04/logo__scar_page-0001-removebg-preview-1.webp"
    alt="DriveZone Logo"
    width={140}
    height={70}
    className="h-10 w-auto object-contain"
    priority
  />
</Link>
     {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
           
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">احجز الآن</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-base font-medium py-2 transition-colors',
                    pathname === link.href
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
               
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/booking">احجز الآن</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
