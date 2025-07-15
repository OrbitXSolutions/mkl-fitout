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
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      {/* <StatsSection /> */}
      <ContactSection />
    </>
  )
}
