import { LegalTabs } from '@/components/atomic/organisms/LegalTabs'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
    title: 'Legal Information | MKL-Fitout UAE',
    description: 'Read the terms of use and privacy policy for MKL-Fitout interior fit-out, joinery, and woodwork services in the UAE.',
    path: '/legal',
    keywords: ['MKL-Fitout privacy policy', 'MKL-Fitout terms', 'fit out company legal information UAE'],
})

export default function LegalPage() {
    const lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    return (
        <div className="py-16 px-4 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <LegalTabs lastUpdated={lastUpdated} />
            </div>
        </div>
    )
} 