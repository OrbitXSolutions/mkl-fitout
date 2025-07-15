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

function LegalTabs({ lastUpdated }: LegalTabsProps) {
    const t = useTranslations('legal')
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab') || 'terms'
    const [tabState, setTabState] = useState(tab)

    return (
        <Tabs value={tabState} onValueChange={setTabState} className="w-full">
            <TabsList className="mb-8">
                <TabsTrigger value="terms">{t('terms')}</TabsTrigger>
                <TabsTrigger value="privacy">{t('privacy')}</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
                {tab === 'terms' && (
                    <TabsContent value="terms" forceMount>
                        <FadeWrapper>
                            <div className="prose dark:prose-invert max-w-3xl mx-auto">
                                <h2>{t('terms')}</h2>
                                <p>{t('lastUpdated')} {lastUpdated}</p>
                                <p>[Placeholder legal text...]</p>
                            </div>
                        </FadeWrapper>
                    </TabsContent>
                )}
                {tab === 'privacy' && (
                    <TabsContent value="privacy" forceMount>
                        <FadeWrapper>
                            <div className="prose dark:prose-invert max-w-3xl mx-auto">
                                <h2>{t('privacy')}</h2>
                                <p>{t('lastUpdated')} {lastUpdated}</p>
                                <p>[Placeholder privacy policy...]</p>
                            </div>
                        </FadeWrapper>
                    </TabsContent>
                )}
            </AnimatePresence>
        </Tabs>
    )
}

export { LegalTabs } 