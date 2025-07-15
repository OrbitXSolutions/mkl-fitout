'use client'

import React from 'react'
import { motion } from 'motion/react'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/lib/constants/contact-info'
import Image from 'next/image'
import { MessageCircle, Eye } from 'lucide-react'

interface DesignSectionProps {
    className?: string
}

function DesignSection({ className = '' }: DesignSectionProps) {
    const locale = useLocale()

    // Localized content
    const content = {
        en: {
            title: "We Design Your Space with Precision and Purpose – All Within Budget",
            description: [
                "At MKL Fitout, we specialize in delivering tailored interior design solutions that elevate both residential and commercial spaces. From concept to completion, we carefully select color palettes, furnishings, and finishes to reflect your vision and desired ambiance.",
                "Our expert team brings extensive experience in crafting diverse styles—from modern and minimal to traditional and industrial—ensuring each project aligns with your preferences and budget. We always present a detailed design proposal before execution to guarantee transparency and satisfaction.",
                "Recognized as one of Dubai's leading interior design firms, MKL Fitout is committed to transforming spaces with creativity, functionality, and value. Partnering with our professionals means choosing excellence for your interior transformation."
            ],
            ctaWhatsApp: "Contact Us",
            ctaProjects: "See Our Services"
        },
        ar: {
            title: "نصمم مساحتك بدقة وهدف - ضمن الميزانية المحددة",
            description: [
                "في MKL Fitout، نتخصص في تقديم حلول التصميم الداخلي المصممة خصيصاً لترقية المساحات السكنية والتجارية. من المفهوم إلى الإنجاز، نختار بعناية لوحات الألوان والأثاث واللمسات الأخيرة لتعكس رؤيتك والأجواء المرغوبة.",
                "فريقنا الخبير يجلب خبرة واسعة في صناعة أنماط متنوعة - من الحديث والبسيط إلى التقليدي والصناعي - مما يضمن أن كل مشروع يتماشى مع تفضيلاتك وميزانيتك. نقدم دائماً اقتراح تصميم مفصل قبل التنفيذ لضمان الشفافية والرضا.",
                "معترف بنا كإحدى شركات التصميم الداخلي الرائدة في دبي، MKL Fitout ملتزمة بتحويل المساحات بالإبداع والوظائف والقيمة. الشراكة مع محترفينا تعني اختيار التميز لتحويل التصميم الداخلي الخاص بك."
            ],
            ctaWhatsApp: "تواصل معنا",
            ctaProjects: "شاهد خدماتنا"
        }
    }

    const currentContent = content[locale as keyof typeof content] || content.en

    const handleWhatsAppClick = () => {
        window.open(CONTACT_INFO.whatsapp, '_blank')
    }

    const handleProjectsClick = () => {
        const gallerySection = document.getElementById('gallery')
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className={`py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
                        className="relative overflow-hidden rounded-3xl"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/gallary/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet.jpg"
                                alt="Modern interior design showcase"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                            {/* Floating decorative elements */}
                            <motion.div
                                className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Eye className="w-6 h-6 text-amber-600" />
                            </motion.div>
                        </div>

                        {/* Background decorative circles */}
                        <motion.div
                            className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full -z-10"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full -z-10"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [360, 180, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.645, 0.045, 0.355, 1] }}
                        className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                            style={{
                                background: 'linear-gradient(135deg, #d4a574 0%, #8b6914 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {currentContent.title}
                        </motion.h2>

                        <div className="space-y-6 mb-10">
                            {currentContent.description.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    className="text-lg text-gray-700 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            className={`flex flex-col sm:flex-row gap-4 ${locale === 'ar' ? 'sm:justify-end' : 'sm:justify-start'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Button
                                onClick={handleProjectsClick}
                                variant="outline"
                                size="lg"
                                className="group border-2 border-gray-300 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300"
                            >
                                <Eye className="w-5 h-5 mr-2 group-hover:text-amber-600 transition-colors" />
                                {currentContent.ctaProjects}
                            </Button>

                            <Button
                                onClick={handleWhatsAppClick}
                                size="lg"
                                className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                {currentContent.ctaWhatsApp}
                            </Button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            className={`mt-8 pt-8 border-t border-gray-200 ${locale === 'ar' ? 'text-right' : 'text-left'}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    {locale === 'ar' ? 'متاح الآن' : 'Available Now'}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                    {locale === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                    {locale === 'ar' ? 'ضمان الجودة' : 'Quality Guaranteed'}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating particles background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                x: [0, Math.random() * 30 - 15, 0],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { DesignSection } 