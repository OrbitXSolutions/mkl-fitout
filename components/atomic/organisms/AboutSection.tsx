'use client'

import { SectionTitle } from '../atoms/SectionTitle'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'

function AboutSection({ className = '' }) {
  const t = useTranslations('about')
  return (
    <section id="about" className={`py-16 px-4 bg-white ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <SectionTitle>{t('title')}</SectionTitle>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          {t('content')}
        </p>
      </motion.div>
    </section>
  )
}

export { AboutSection } 