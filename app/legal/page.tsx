import { LegalTabs } from '@/components/atomic/organisms/LegalTabs'

export const metadata = {
    title: 'Legal | MKL-Fitout',
    description: 'Terms of Use and Privacy Policy information.'
}

export default function LegalPage() {
    const lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    return (
        <main className="py-16 px-4 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <LegalTabs lastUpdated={lastUpdated} />
            </div>
        </main>
    )
} 