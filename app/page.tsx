'use client'

import React, { useState } from 'react'
import { HeroSection } from '@/components/atomic/organisms/HeroSection'
import { AboutSection } from '@/components/atomic/organisms/AboutSection'
import { DesignSection } from '@/components/atomic/organisms/DesignSection'
import { RendersCarousel } from '@/components/atomic/organisms/RendersCarousel'
import { FeaturesSection } from '@/components/atomic/organisms/FeaturesSection'
import { GallerySection } from '@/components/atomic/organisms/GallerySection'
import { ContactSection } from '@/components/atomic/organisms/ContactSection'
import { StatsSection } from '@/components/atomic/organisms/StatsSection'
import { TrustBanner } from '@/components/atomic/organisms/TrustBanner'
import { Feature } from '@/data/features'
import { ServiceIconKey } from '@/components/atomic/atoms/ServiceIcons'

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceIconKey | 'all'>('all')

  const handleFeatureSelect = (feature: Feature) => {
    // Map feature IDs to service categories for filtering
    const featureToCategory: Record<string, ServiceIconKey> = {
      'joinery': 'bedroom', // Custom woodwork maps to bedroom
      'interior-fitout': 'living-room', // Interior fitout maps to living room
      '3d-design': 'office', // 3D design maps to office
      'renovation': 'kitchen' // Renovation maps to kitchen
    }

    const category = featureToCategory[feature.id]
    if (category) {
      setSelectedCategory(category)
    }
  }

  return (
    <div className='overflow-auto'>
      <HeroSection />
      <AboutSection />

      <RendersCarousel />
      <FeaturesSection
        onFeatureSelect={handleFeatureSelect}
      />
      <GallerySection
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {/* <StatsSection />
      <TrustBanner /> */}
      <DesignSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
