import { AboutTwoColumn } from '@/components/atomic/organisms/AboutTwoColumn'
import { ContactSection } from '@/components/atomic/organisms/ContactSection'

export const metadata = {
    title: 'About & Contact | MKL-Fitout',
    description: 'Learn about our vision, mission and get in touch with MKL-Fitout.'
}

export default function AboutContactPage() {
    return (
        <main>
            <AboutTwoColumn />
            <ContactSection />
        </main>
    )
} 