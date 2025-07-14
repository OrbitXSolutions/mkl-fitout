'use client'

import { SectionTitle } from '../atoms/SectionTitle'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import Image from 'next/image'

const GALLERY_IMAGES = Array.from({ length: 8 }, (_, i) => `/images/hero-image-placeholder.jpg`)

function GallerySection({ className = '' }) {
  const t = useTranslations('gallery')
  return (
    <section id="gallery" className={`py-16 px-4 bg-white ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <SectionTitle>{t('title')}</SectionTitle>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <Image src={src} alt={`Gallery ${i + 1}`} width={400} height={300} className="object-cover w-full h-48" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export { GallerySection } 