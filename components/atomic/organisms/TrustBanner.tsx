'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const BRAND_LOGOS = [
    '/images/next.svg',
    '/vercel.svg',
    '/globe.svg',
]

function TrustBanner({ className = '' }) {
    const t = useTranslations('trustBanner')
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`py-12 px-4 bg-white shadow-inner ${className}`}
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
                <h2 className="text-2xl font-bold text-center">{t('headline')}</h2>
                <div className="flex flex-wrap justify-center items-center gap-6 opacity-75">
                    {BRAND_LOGOS.map(src => (
                        <Image key={src} src={src} alt="brand" width={100} height={60} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export { TrustBanner } 