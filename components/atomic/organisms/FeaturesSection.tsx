'use client'

import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { features, Feature } from '@/data/features'

interface FeatureCardProps {
    feature: Feature
    index: number
    onFeatureClick?: (feature: Feature) => void
}

function FeatureCard({ feature, index, onFeatureClick }: FeatureCardProps) {
    const t = useTranslations('services')

    // Generate color scheme based on feature index
    const colorSchemes = [
        {
            color: '#3b82f6',
            bgColor: '#eff6ff',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            color: '#10b981',
            bgColor: '#ecfdf5',
            gradient: 'from-emerald-500 to-emerald-600'
        },
        {
            color: '#f59e0b',
            bgColor: '#fffbeb',
            gradient: 'from-amber-500 to-amber-600'
        },
        {
            color: '#ef4444',
            bgColor: '#fef2f2',
            gradient: 'from-red-500 to-red-600'
        }
    ]

    const colorScheme = colorSchemes[index % colorSchemes.length]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.645, 0.045, 0.355, 1]
            }}
            whileHover={{
                y: -8,
                transition: {
                    duration: 0.3,
                    ease: [0.645, 0.045, 0.355, 1]
                }
            }}
            onClick={() => onFeatureClick?.(feature)}
            className="group cursor-pointer"
        >
            <Card
                className={cn(
                    "relative h-full p-6 text-center border-2 transition-all duration-500 ease-out overflow-hidden",
                    "hover:shadow-2xl hover:shadow-black/10 hover:border-opacity-50",
                    "bg-white flex flex-col"
                )}
                style={{
                    borderColor: colorScheme.color + '20',
                }}
            >
                {/* Background gradient effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at center, ${colorScheme.color}08 0%, transparent 70%)`
                    }}
                />

                {/* Icon container with animated background */}
                <motion.div
                    className="relative mb-4 mx-auto w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                    style={{
                        backgroundColor: colorScheme.bgColor
                    }}
                    whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.1,
                        transition: { duration: 0.6 }
                    }}
                >
                    <span
                        className="text-3xl transition-all duration-500 group-hover:scale-110"
                        style={{ filter: `hue-rotate(${index * 90}deg)` }}
                    >
                        {feature.icon}
                    </span>

                    {/* Pulse effect */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ backgroundColor: colorScheme.color }}
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{
                            scale: [1, 1.2, 1.4],
                            opacity: [0, 0.2, 0],
                            transition: { duration: 0.8, repeat: Infinity }
                        }}
                    />
                </motion.div>

                {/* Title */}
                <motion.h3
                    className="text-lg font-bold mb-2 transition-colors duration-500 flex-grow"
                    style={{
                        color: colorScheme.color
                    }}
                >
                    {t(feature.titleKey)}
                </motion.h3>

                {/* Summary */}
                <motion.p
                    className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                >
                    {t(feature.summaryKey)}
                </motion.p>

                {/* Animated underline */}
                <motion.div
                    className="h-1 rounded-full mx-auto transition-all duration-500 mt-auto"
                    style={{ backgroundColor: colorScheme.color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '60%' }}
                />

                {/* Decorative elements */}
                <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: colorScheme.color }}
                    initial={{ scale: 0 }}
                    whileHover={{
                        scale: 1,
                        transition: { delay: 0.2 }
                    }}
                />
                <motion.div
                    className="absolute bottom-4 left-4 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: colorScheme.color }}
                    initial={{ scale: 0 }}
                    whileHover={{
                        scale: 1,
                        transition: { delay: 0.3 }
                    }}
                />

                {/* Hover overlay */}
                <motion.div
                    className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                        `bg-gradient-to-br ${colorScheme.gradient}`
                    )}
                />
            </Card>
        </motion.div>
    )
}

interface FeaturesSectionProps {
    className?: string
    onFeatureSelect?: (feature: Feature) => void
}

function FeaturesSection({ className = '', onFeatureSelect }: FeaturesSectionProps) {
    const t = useTranslations('features')

    const handleFeatureClick = (feature: Feature) => {
        onFeatureSelect?.(feature)
        // Smooth scroll to gallery section
        const gallerySection = document.getElementById('gallery')
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="features" className={`py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto text-center"
            >
                <SectionTitle className="mb-4">
                    {t('title')}
                </SectionTitle>

                <motion.p
                    className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {t('subtitle')}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}
                            onFeatureClick={handleFeatureClick}
                        />
                    ))}
                </div>

                {/* Floating particles animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export { FeaturesSection } 