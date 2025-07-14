'use client'

import { SectionTitle } from '../atoms/SectionTitle'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'

const STATS = [
  { key: 'projects', value: 1279 },
  { key: 'clients', value: 500 },
  { key: 'years', value: 15 },
  { key: 'team', value: 99 },
  { key: 'awards', value: 7 },
]

function StatsSection({ className = '' }) {
  const t = useTranslations('stats')
  return (
    <section id="stats" className={`py-16 px-4 bg-gray-50 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <SectionTitle>{t('title')}</SectionTitle>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS.map(stat => (
            <div key={stat.key} className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-md">
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-base font-medium text-gray-700">{t(stat.key)}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export { StatsSection } 