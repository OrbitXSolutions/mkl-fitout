'use client'

import { motion } from 'motion/react'
import { ServiceCard } from '../molecules/ServiceCard'
import type { Feature } from '@/data/features'
import { useTranslations } from 'next-intl'

interface ServicesGridProps {
    services: Feature[]
}

function ServicesGrid({ services }: ServicesGridProps) {
    const t = useTranslations('services')
    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {t('OurServices')}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '6rem' }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
                    />
                </motion.div>

                {/* Enhanced grid with stagger animations */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.8 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 12,
                                    }
                                },
                            }}
                            className={`${i % 2 === 1 ? 'md:mt-8' : ''}`} // Stagger every other card
                        >
                            <ServiceCard service={service} index={i} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="relative z-10">View All Projects</span>
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export { ServicesGrid } 