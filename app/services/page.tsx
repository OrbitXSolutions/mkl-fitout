import { getFeatures } from '@/data/features'
import { ServicesGrid } from '@/components/atomic/organisms/ServicesGrid'
import { ServicesHero } from '@/components/atomic/organisms/ServicesHero'
import { TrustBanner } from '@/components/atomic/organisms/TrustBanner'
import { GallerySection } from '@/components/atomic/organisms/GallerySection'
import { ServiceIconKey } from '@/components/atomic/atoms/ServiceIcons'
import { ContactSection } from '@/components/atomic/organisms/ContactSection'


export const metadata = {
    title: 'Services | MKL-Fitout',
    description: 'Discover our range of bespoke interior and woodwork services.',
}

export default async function ServicesPage() {
    const services = await getFeatures()
    return (
        <>
            {/* Hero */}
            <ServicesHero />
            {/* Grid */}
            <ServicesGrid services={services} />
            <GallerySection

            />
            {/* Trust banner */}
            {/* <TrustBanner /> */}

            <ContactSection />
        </>
    )
} 