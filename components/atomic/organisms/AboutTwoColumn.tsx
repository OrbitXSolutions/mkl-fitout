'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { ServiceCard } from '../molecules/ServiceCard'
import { features } from '@/data/features'

function AboutTwoColumn({ className = '' }) {
    const t = useTranslations('aboutPage')
    return (
        <section className={`py-20 px-4 bg-white ${className}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left – Vision & Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{t('visionTitle', { defaultValue: 'Our Vision' })}</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('visionText', { defaultValue: 'To be the UAE’s leading interior and woodwork company known for quality, reliability and timeless design.' })}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{t('missionTitle', { defaultValue: 'Our Mission' })}</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('missionText', { defaultValue: 'Deliver complete interior solutions that exceed client expectations through precision, creativity and in-house craftsmanship.' })}
                        </p>
                    </div>
                </motion.div>

                {/* Right – What we do recap */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {features.slice(0, 2).map((s, i) => (
                        <ServiceCard key={s.id} service={s} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export { AboutTwoColumn } 