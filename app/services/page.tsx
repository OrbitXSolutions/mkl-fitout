import { getServices } from '@/data/services'
import { ServicesGrid } from '@/components/atomic/organisms/ServicesGrid'
import { ServicesHero } from '@/components/atomic/organisms/ServicesHero'
import { TrustBanner } from '@/components/atomic/organisms/TrustBanner'

export const metadata = {
    title: 'Services | MKL-Fitout',
    description: 'Discover our range of bespoke interior and woodwork services.',
}

export default async function ServicesPage() {
    const services = await getServices()
    return (
        <main>
            {/* Hero */}
            <ServicesHero />
            {/* Grid */}
            <ServicesGrid services={services} />
            {/* Trust banner */}
            {/* <TrustBanner /> */}
        </main>
    )
} 