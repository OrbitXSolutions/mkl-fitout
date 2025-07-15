'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import type { Feature } from '@/data/features'

interface ServiceCardProps {
    service: Feature
    index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
    const t = useTranslations('servicesDetail')

    return (
        <motion.article
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image section with parallax effect */}
            <div className="relative h-64 overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={service.image}
                        alt={t(service.titleKey)}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:brightness-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Floating icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="absolute top-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/30"
                >
                    {service.icon}
                </motion.div>
            </div>

            {/* Content section */}
            <div className="relative p-8 space-y-6">
                <div className="space-y-3">
                    <motion.h3
                        className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300"
                    >
                        {t(service.titleKey)}
                    </motion.h3>

                    <p className="text-gray-600 leading-relaxed">
                        {t(service.summaryKey)}
                    </p>
                </div>

                {/* Features list */}
                <motion.ul className="space-y-2">
                    {service.features.map((featureKey, idx) => (
                        <motion.li
                            key={featureKey}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.1 + 0.4 }}
                            className="flex items-center text-sm text-gray-700 "
                        >
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 me-2" />
                            {t(featureKey)}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:from-primary/90 hover:to-primary/70 relative overflow-hidden group/btn"
                >
                    <span className="relative z-10">{t('contact')}</span>
                    <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.button>
            </div>
        </motion.article>
    )
}

export { ServiceCard } 