'use client'

import React from 'react'
import { motion } from 'motion/react'
import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Globe, Building2 } from 'lucide-react'

function MeetFounderSection() {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8
            }
        }
    }

    const underlineVariants = {
        hidden: { width: 0 },
        visible: {
            width: '100%',
            transition: {
                duration: 0.8,
                delay: 0.5
            }
        }
    }

    const contactItems = [
        {
            icon: Phone,
            label: 'Mobile',
            value: CONTACT_INFO.phone,
            href: `tel:${CONTACT_INFO.phone}`,
            color: 'text-blue-600'
        },
        {
            icon: Building2,
            label: 'Landline',
            value: '06 565 9913',
            href: 'tel:065659913',
            color: 'text-green-600'
        },
        {
            icon: Mail,
            label: 'Email',
            value: CONTACT_INFO.email,
            href: `mailto:${CONTACT_INFO.email}`,
            color: 'text-red-600'
        },
        {
            icon: Globe,
            label: 'Website',
            value: 'www.mklfitout.ae',
            href: CONTACT_INFO.website,
            color: 'text-purple-600',
            external: true
        }
    ]

    return (
        <section style={{ direction: 'ltr' }} dir="ltr" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Column - Founder Image */}
                    <motion.div
                        variants={imageVariants}
                        className="relative order-2 lg:order-1"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105"></div>
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <img
                                    src="/images/founder.png"
                                    alt="Mohamed Lakmes – Founder & CEO of MKL Interiors & Decor"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        variants={itemVariants}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        {/* Company Tagline */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm font-medium text-secondary-foreground uppercase tracking-wider"
                        >
                            MKL Interiors & Decor (S.P.S. LLC)
                        </motion.p>

                        {/* Main Heading with Animated Underline */}
                        <div className="space-y-2">
                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
                            >
                                MOHAMED LAKMES
                            </motion.h2>
                            <motion.div
                                variants={underlineVariants}
                                className="h-1 bg-gradient-to-r from-secondary to-primary rounded-full"
                            />
                        </div>

                        {/* Sub-heading */}
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl lg:text-3xl font-semibold text-muted-foreground"
                        >
                            Founder & CEO
                        </motion.h3>

                        {/* Contact Information */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <address className="not-italic">
                                <ul className="space-y-3">
                                    {contactItems.map((item, index) => {
                                        const Icon = item.icon
                                        return (
                                            <motion.li
                                                key={index}
                                                variants={itemVariants}
                                                className="flex items-center space-x-4 group"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                    className={`p-2 rounded-lg bg-white shadow-sm border group-hover:shadow-md transition-all duration-300 ${item.color}`}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <span className="text-sm font-medium text-muted-foreground block">
                                                        {item.label}
                                                    </span>
                                                    <a
                                                        href={item.href}
                                                        target={item.external ? '_blank' : undefined}
                                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 group-hover:underline"
                                                    >
                                                        {item.value}
                                                    </a>
                                                </div>
                                            </motion.li>
                                        )
                                    })}
                                </ul>
                            </address>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            variants={itemVariants}
                            className="pt-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={handleContactClick}
                                    size="lg"
                                    className="bg-gradient-to-r from-secondary/70 to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Let's Talk
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export { MeetFounderSection } 