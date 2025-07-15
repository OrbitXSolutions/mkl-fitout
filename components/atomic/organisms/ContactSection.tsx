'use client'

import { SectionTitle } from '../atoms/SectionTitle'
import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { ContactForm } from './ContactForm'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { SocialLinks } from '../molecules/SocialLinks'

function ContactSection({ className = '' }) {
  const t = useTranslations('contact');
  const locale = useLocale();
  return (
    <section id="contact" className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Aside: Contact Info */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 items-center md:items-start"
        >
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{t('infoTitle')}</h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="text-primary w-6 h-6 flex-shrink-0" />
              <span className="font-medium">{locale === 'ar' ? CONTACT_INFO.addressAr : CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Mail className="text-primary w-6 h-6 flex-shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">{CONTACT_INFO.email}</a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Phone className="text-primary w-6 h-6 flex-shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">{CONTACT_INFO.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Globe className="text-primary w-6 h-6 flex-shrink-0" />
              <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{CONTACT_INFO.website}</a>
            </div>
            <SocialLinks className="mt-4" />
          </div>
        </motion.aside>
        {/* Main: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

export { ContactSection } 