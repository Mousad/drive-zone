import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FleetPreview } from '@/components/home/fleet-preview'
import { FeaturesSection } from '@/components/home/features-section'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import Link from "next/link"

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M19.11 17.53c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.66 1.13 2.84c.14.18 1.96 3 4.75 4.2.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
      <path d="M16 3C9.38 3 4 8.38 4 15c0 2.34.68 4.52 1.86 6.36L4 29l7.86-1.82C13.68 28.32 14.82 28.6 16 28.6c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22.6c-1.16 0-2.3-.22-3.36-.66l-.24-.1-4.66 1.08 1.12-4.54-.16-.24A9.57 9.57 0 0 1 6.4 15C6.4 9.7 10.7 5.4 16 5.4S25.6 9.7 25.6 15 21.3 25.6 16 25.6z"/>
    </svg>
  )
}

function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/201055539598"
      target="_blank"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all animate-bounce">
        <WhatsAppIcon />
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <FleetPreview />
        <FeaturesSection />
        <WhyChooseUs />

        {/* زر واتساب العائم (فقط في الهوم) */}
        <WhatsAppButton />
           
  </main>

      <Footer />
    </>
  )
}