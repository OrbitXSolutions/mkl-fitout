'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { SparklesText } from '@/components/magicui/sparkles-text'
import Image from 'next/image'

function ServicesHero({ className = '' }) {
    const t = useTranslations('servicesHero')

    return (
        <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
            <Image
                src="/images/hero-image-placeholder.jpg"
                alt="Hero background"
                fill
                style={{ objectFit: 'cover', transition: 'opacity 1s' }}
                priority
            />
            {/* Dark shade overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/20 to-purple-50/10">

                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%)',
                            'radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.15) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 15, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="space-y-8"
                >
                    {/* Main title with sparkles */}
                    <div className="space-y-4">
                        <SparklesText
                            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-white"
                            sparklesCount={8}
                        >
                            {t('title')}
                        </SparklesText>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '4rem' }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                        />
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>

                    {/* Floating cards preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex justify-center items-center gap-4 mt-12"
                    >
                        {['🪚', '🏠', '🎨', '🔨'].map((icon, idx) => (
                            <motion.div
                                key={icon}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.8 + idx * 0.1,
                                    duration: 0.5,
                                    type: 'spring',
                                    stiffness: 200
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-white/30 cursor-pointer"
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export { ServicesHero } 