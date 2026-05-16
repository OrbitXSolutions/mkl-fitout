import { getFeatures } from '@/data/features'
import { ServicesGrid } from '@/components/atomic/organisms/ServicesGrid'
import { ServicesHero } from '@/components/atomic/organisms/ServicesHero'
import { TrustBanner } from '@/components/atomic/organisms/TrustBanner'
import { GallerySection } from '@/components/atomic/organisms/GallerySection'
import { ServiceIconKey } from '@/components/atomic/atoms/ServiceIcons'
import { ContactSection } from '@/components/atomic/organisms/ContactSection'
import { buildPageMetadata } from '@/lib/seo'


export const metadata = buildPageMetadata({
    title: 'Interior Fit-Out Services | Joinery, Woodwork & Renovation UAE',
    description: 'Explore MKL-Fitout services including interior fit-out, custom joinery, woodwork, 3D design, and full renovation for residential and commercial spaces in the UAE.',
    path: '/services',
    keywords: ['interior fit-out services UAE', 'custom joinery Ajman', 'woodwork company UAE', 'full renovation services Ajman'],
})

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