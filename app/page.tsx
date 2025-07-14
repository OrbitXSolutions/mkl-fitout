import { Suspense } from 'react'
import { NavBar } from '@/components/atomic/molecules/NavBar'
import { HeroSection } from '@/components/atomic/organisms/HeroSection'
import { AboutSection } from '@/components/atomic/organisms/AboutSection'
import { ServicesSection } from '@/components/atomic/organisms/ServicesSection'
import { GallerySection } from '@/components/atomic/organisms/GallerySection'
import { StatsSection } from '@/components/atomic/organisms/StatsSection'
import { ContactSection } from '@/components/atomic/organisms/ContactSection'
import { FooterSection } from '@/components/atomic/organisms/FooterSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Suspense fallback={null}>
        <NavBar />
      </Suspense>
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        {/* <StatsSection /> */}
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
