import { AboutTwoColumn } from '@/components/atomic/organisms/AboutTwoColumn'
import { ContactSection } from '@/components/atomic/organisms/ContactSection'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
    title: 'About MKL-Fitout | Interior Fit-Out Company in Ajman, UAE',
    description: 'Learn about MKL-Fitout, our in-house production capabilities, and how to contact our interior fit-out and custom woodwork team in Ajman, UAE.',
    path: '/about',
    keywords: ['about MKL-Fitout', 'interior fit-out company Ajman', 'joinery company UAE', 'contact interior design company UAE'],
})

export default function AboutContactPage() {
    return (
        <div>
            <AboutTwoColumn />
            <ContactSection />
        </div>
    )
} 