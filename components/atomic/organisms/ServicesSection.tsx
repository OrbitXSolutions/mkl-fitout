'use client'

import { SectionTitle } from '../atoms/SectionTitle'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const SERVICES = [
  { key: 'woodwork', icon: '🪵' },
  { key: 'fitout', icon: '🏢' },
  { key: 'concept', icon: '🎨' },
  { key: 'renovation', icon: '🔨' },
]

function ServicesSection({ className = '' }) {
  const t = useTranslations('services')
  return (
    <section id="services" className={`py-16 px-4 bg-gray-50 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <SectionTitle>{t('title')}</SectionTitle>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map(service => (
            <div key={service.key} className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-md">
              <span className="text-4xl">{service.icon}</span>
              <span className="text-lg font-semibold">{t(service.key)}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export { ServicesSection } 