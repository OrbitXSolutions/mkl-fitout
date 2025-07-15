import { LegalTabs } from '@/components/atomic/organisms/LegalTabs'

export const metadata = {
    title: 'Legal Information | MKL-Fitout',
    description: 'Terms of Use and Privacy Policy for MKL-Fitout interior design and woodwork services in UAE. Learn about our service agreements, warranties, and data protection policies.'
}

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