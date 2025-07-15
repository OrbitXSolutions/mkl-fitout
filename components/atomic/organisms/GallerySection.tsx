'use client'

import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { FilterBar } from '../molecules/FilterBar'
import { ServiceIconKey } from '../atoms/ServiceIcons'
import { galleryImages, getImagesByCategory, GalleryImage } from '@/data/gallery'
import { cn } from '@/lib/utils'
import { ImagePreview } from '../molecules/ImagePreview'

interface GalleryItemProps {
  image: GalleryImage
  index: number
  onClick: () => void
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  return (
    <motion.div
      layout
      layoutId={`gallery-image-${image.id}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.645, 0.045, 0.355, 1]
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              className="text-white text-center"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">View Details</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Image info */}
        <motion.div
          className="p-4 bg-white"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.05 + 0.2 }}
        >
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {image.alt}
          </h3>
          <div className="flex flex-wrap gap-1">
            {image.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
            {image.tags.length > 2 && (
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{image.tags.length - 2}
              </span>
            )}
          </div>
        </motion.div>

        {/* Decorative corner */}
        <div className="absolute top-3 right-3 w-2 h-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}

interface GallerySectionProps {
  className?: string
  activeCategory?: ServiceIconKey | 'all'
  onCategoryChange?: (category: ServiceIconKey | 'all') => void
}

function GallerySection({
  className = '',
  activeCategory: initialCategory = 'all',
  onCategoryChange: externalCategoryChange
}: GallerySectionProps) {
  const t = useTranslations('gallery')
  const [activeCategory, setActiveCategory] = React.useState<ServiceIconKey | 'all'>(initialCategory)
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null)

  // Handle category change (internal or external)
  const handleCategoryChange = (category: ServiceIconKey | 'all') => {
    setActiveCategory(category)
    externalCategoryChange?.(category)
  }

  // Update internal state when external category changes
  React.useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  const filteredImages = getImagesByCategory(activeCategory)

  return (
    <section id="gallery" className={cn("py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle className="mb-4">{t('title')}</SectionTitle>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          className="mb-12"
        />

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No images found
            </h3>
            <p className="text-gray-600">
              We're still working on adding images for this category.
            </p>
          </motion.div>
        )}

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-50 to-yellow-50 rounded-full opacity-50" />
        </div>
      </motion.div>
      <ImagePreview image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

export { GallerySection } 