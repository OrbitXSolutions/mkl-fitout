'use client'

import React from 'react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

function LocationSection() {
    const t = useTranslations('location')
    const isMobile = useIsMobile()

    const handleDirectionsClick = () => {
        window.open('https://maps.google.com/?q=25.387035377589253,55.472446475388026', '_blank')
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    }

    const mapVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.3
            }
        }
    }

    const locationInfo = [
        {
            icon: MapPin,
            title: t('info.address'),
            content: CONTACT_INFO.address,
            color: 'text-blue-600'
        },
        {
            icon: Phone,
            title: t('info.phone'),
            content: CONTACT_INFO.phone,
            href: `tel:${CONTACT_INFO.phone}`,
            color: 'text-purple-600'
        },
        {
            icon: Mail,
            title: t('info.email'),
            content: CONTACT_INFO.email,
            href: `mailto:${CONTACT_INFO.email}`,
            color: 'text-red-600'
        }
    ]

    return (
        <section className={`${isMobile ? 'py-12' : 'py-20'} px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isMobile ? 'space-y-8' : 'space-y-12'}`}
                >
                    {/* Section Header */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center space-y-4"
                    >
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground`}>
                            {t('title')}
                        </h2>
                        <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-2xl mx-auto`}>
                            {t('subtitle')}
                        </p>
                    </motion.div>

                    <div className={`${isMobile ? 'grid grid-cols-1' : 'grid lg:grid-cols-2'} gap-8 lg:gap-16 items-start`}>
                        {/* Left Column - Map */}
                        <motion.div
                            variants={mapVariants}
                            className={`${isMobile ? 'order-1' : 'order-2 lg:order-1'}`}
                        >
                            <motion.div
                                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-1 scale-105"></div>
                                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5542.904862069215!2d55.472446475388026!3d25.387035377589253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIzJzEzLjMiTiA1NcKwMjgnMzAuMSJF!5e1!3m2!1sen!2sae!4v1753037060554!5m2!1sen!2sae"
                                        width="100%"
                                        height={isMobile ? "300" : "450"}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="MKL Fitout Location - Ajman Industrial Area"
                                        className="w-full"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Location Info */}
                        <motion.div
                            variants={itemVariants}
                            className={`${isMobile ? 'order-2' : 'order-1 lg:order-2'} ${isMobile ? 'space-y-6' : 'space-y-8'}`}
                        >
                            {/* Location Information Cards */}
                            <div className={`${isMobile ? 'space-y-4' : 'space-y-6'}`}>
                                {locationInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group"
                                        >
                                            <motion.div
                                                whileHover={{ scale: isMobile ? 1.05 : 1.1, rotate: isMobile ? 2 : 5 }}
                                                transition={{ duration: 0.2 }}
                                                className={`${isMobile ? 'p-2' : 'p-3'} rounded-xl bg-white shadow-sm border group-hover:shadow-md transition-all duration-300 ${info.color}`}
                                            >
                                                <Icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                                            </motion.div>
                                            <div className="flex-1 space-y-1">
                                                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-foreground`}>
                                                    {info.title}
                                                </h3>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:underline`}
                                                    >
                                                        {info.content}
                                                    </a>
                                                ) : (
                                                    <p className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground`}>
                                                        {info.content}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className={`${isMobile ? 'space-y-3' : 'space-y-4'} ${isMobile ? 'pt-4' : 'pt-6'}`}
                            >
                                <motion.div
                                    whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={handleDirectionsClick}
                                        size={isMobile ? "default" : "lg"}
                                        className={`w-full bg-gradient-to-r from-secondary/80 to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                                    >
                                        {t('buttons.getDirections')}
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="outline"
                                        size={isMobile ? "default" : "lg"}
                                        className={`w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-xl transition-all duration-300`}
                                        onClick={() => {
                                            const contactSection = document.getElementById('contact')
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' })
                                            }
                                        }}
                                    >
                                        {t('buttons.contactUs')}
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Additional Info */}
                            <motion.div
                                variants={itemVariants}
                                className={`bg-primary/5 rounded-2xl ${isMobile ? 'p-4' : 'p-6'} space-y-3`}
                            >
                                <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-foreground`}>
                                    {t('showroom.title')}
                                </h4>
                                <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground leading-relaxed`}>
                                    {t('showroom.description')}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export { LocationSection } 