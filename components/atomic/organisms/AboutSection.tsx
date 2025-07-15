'use client'

import { SectionTitle } from '../atoms/SectionTitle'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { TextAnimate } from '@/components/magicui/text-animate'

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

      </motion.div>
      <TextAnimate animation="slideUp" by="word" as="p" delay={0.3} duration={2} className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
        {t('content')}
      </TextAnimate>
    </section>
  )
}

export { AboutSection } 