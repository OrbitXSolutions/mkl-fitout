'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface LegalTabsProps {
    lastUpdated: string
}

function FadeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

interface LegalSectionProps {
    title: string
    content: string
    index: number
}

function LegalSection({ title, content, index }: LegalSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 last:mb-0"
        >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                {content}
            </p>
        </motion.section>
    )
}

function LegalTabs({ lastUpdated }: LegalTabsProps) {
    const t = useTranslations('legal')
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab') || 'terms'
    const [tabState, setTabState] = useState(tab)

    const termsContent = t.raw('termsContent') as {
        title: string
        [key: string]: { title: string; content: string } | string
    }

    const privacyContent = t.raw('privacyContent') as {
        title: string
        [key: string]: { title: string; content: string } | string
    }

    const termsKeys = Object.keys(termsContent).filter(key => key.startsWith('section'))
    const privacyKeys = Object.keys(privacyContent).filter(key => key.startsWith('section'))

    return (
        <div className="min-h-screen">
            <Tabs value={tabState} onValueChange={setTabState} className="w-full">
                <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 pb-4 mb-8">
                    <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                        <TabsTrigger value="terms" className="text-sm font-medium">
                            {t('terms')}
                        </TabsTrigger>
                        <TabsTrigger value="privacy" className="text-sm font-medium">
                            {t('privacy')}
                        </TabsTrigger>
                    </TabsList>
                </div>

                <AnimatePresence mode="wait">
                    {tabState === 'terms' && (
                        <TabsContent value="terms" forceMount className="focus:outline-none">
                            <FadeWrapper>
                                <article className="max-w-4xl mx-auto">
                                    {/* Header */}
                                    <motion.header
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center mb-12 pb-8 border-b-2 border-gray-100"
                                    >
                                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                            {termsContent.title}
                                        </h1>
                                        <p className="text-gray-600 text-lg">
                                            <span className="font-medium">{t('lastUpdated')}</span> {lastUpdated}
                                        </p>
                                    </motion.header>

                                    {/* Content sections */}
                                    <div className="space-y-8">
                                        {termsKeys.map((key, index) => {
                                            const section = termsContent[key] as { title: string; content: string }
                                            return (
                                                <LegalSection
                                                    key={key}
                                                    title={section.title}
                                                    content={section.content}
                                                    index={index}
                                                />
                                            )
                                        })}
                                    </div>

                                    {/* Footer */}
                                    <motion.footer
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-16 pt-8 border-t border-gray-200 text-center"
                                    >
                                        <div className="bg-gray-50 rounded-lg p-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                                            <p className="text-gray-600 text-sm">
                                                MKL-Fitout - Interiors & Wood Works<br />
                                                Industrial Area, Ajman, UAE<br />
                                                Email: info@mklfitout.ae<br />
                                                Phone: +971 50 970 0715
                                            </p>
                                        </div>
                                    </motion.footer>
                                </article>
                            </FadeWrapper>
                        </TabsContent>
                    )}

                    {tabState === 'privacy' && (
                        <TabsContent value="privacy" forceMount className="focus:outline-none">
                            <FadeWrapper>
                                <article className="max-w-4xl mx-auto">
                                    {/* Header */}
                                    <motion.header
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center mb-12 pb-8 border-b-2 border-gray-100"
                                    >
                                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                            {privacyContent.title}
                                        </h1>
                                        <p className="text-gray-600 text-lg">
                                            <span className="font-medium">{t('lastUpdated')}</span> {lastUpdated}
                                        </p>
                                    </motion.header>

                                    {/* Content sections */}
                                    <div className="space-y-8">
                                        {privacyKeys.map((key, index) => {
                                            const section = privacyContent[key] as { title: string; content: string }
                                            return (
                                                <LegalSection
                                                    key={key}
                                                    title={section.title}
                                                    content={section.content}
                                                    index={index}
                                                />
                                            )
                                        })}
                                    </div>

                                    {/* Footer */}
                                    <motion.footer
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-16 pt-8 border-t border-gray-200 text-center"
                                    >
                                        <div className="bg-gray-50 rounded-lg p-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                                            <p className="text-gray-600 text-sm">
                                                MKL-Fitout - Interiors & Wood Works<br />
                                                Industrial Area, Ajman, UAE<br />
                                                Email: info@mklfitout.ae<br />
                                                Phone: +971 50 970 0715
                                            </p>
                                        </div>
                                    </motion.footer>
                                </article>
                            </FadeWrapper>
                        </TabsContent>
                    )}
                </AnimatePresence>
            </Tabs>
        </div>
    )
}

export { LegalTabs } 