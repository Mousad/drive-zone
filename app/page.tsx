import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FleetPreview } from '@/components/home/fleet-preview'
import { FeaturesSection } from '@/components/home/features-section'
import { WhyChooseUs } from '@/components/home/why-choose-us'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FleetPreview />
        <FeaturesSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
