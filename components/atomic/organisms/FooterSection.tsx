'use client'

import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Logo } from '../atoms/Logo'

function FooterSection({ className = '' }) {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className={`bg-neutral-900 text-neutral-100 pt-12 pb-6 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0"
      >
        {/* Branding */}
        <div className="flex-1 flex flex-col gap-3 items-start">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold tracking-wide mt-2">MKL-Fitout</span>
          <span className="text-sm text-neutral-400 max-w-xs">{t('tagline', { defaultValue: 'Interiors & Wood Works – Dubai, UAE' })}</span>
        </div>
        {/* Navigation */}
        <nav aria-label="Footer" className="flex-1 flex flex-col gap-2 md:items-center">
          <span className="font-semibold mb-2">{t('quickLinks', { defaultValue: 'Quick Links' })}</span>
          <ul className="flex flex-col gap-1 text-neutral-300">
            <li><a href="#home" className="hover:text-primary transition-colors">{t('nav.home', { defaultValue: 'Home' })}</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">{t('nav.about', { defaultValue: 'About' })}</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">{t('nav.services', { defaultValue: 'Services' })}</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors">{t('nav.gallery', { defaultValue: 'Gallery' })}</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact', { defaultValue: 'Contact' })}</a></li>
          </ul>
        </nav>
        {/* Contact & Social */}
        <address className="flex-1 not-italic flex flex-col gap-2 md:items-end text-sm text-neutral-300">
          <span className="font-semibold mb-2">{t('contact', { defaultValue: 'Contact' })}</span>
          <span>{CONTACT_INFO.address}</span>
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
          <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
          <div className="flex gap-3 mt-2">
            {/* Placeholder social icons */}
            {/* <a href="#" aria-label="Instagram" className="hover:text-primary"><svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6.5A3.5 3.5 0 1 0 10 13.5A3.5 3.5 0 1 0 10 6.5ZM16.5 5.5A1 1 0 1 1 15.5 4.5A1 1 0 0 1 16.5 5.5ZM18 10A8 8 0 1 1 2 10A8 8 0 0 1 18 10ZM10 2A8 8 0 1 0 10 18A8 8 0 0 0 10 2Z" /></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17 2H3C2.447 2 2 2.447 2 3V17C2 17.553 2.447 18 3 18H10V12H8V10H10V8.5C10 6.57 11.57 5 13.5 5H15V7H13.5C13.224 7 13 7.224 13 7.5V10H15L14.5 12H13V18H17C17.553 18 18 17.553 18 17V3C18 2.447 17.553 2 17 2Z" /></svg></a> */}
          </div>
        </address>
      </motion.div>
      <div className="border-t border-neutral-800 mt-10 pt-6 text-xs text-neutral-400 flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto gap-2">
        <span>&copy; {year} MKL-Fitout. {t('rights', { defaultValue: 'All rights reserved.' })}</span>
        {/* <span>
          <a href="#" className="hover:text-primary">{t('privacy', { defaultValue: 'Privacy Policy' })}</a>
          {' | '}
          <a href="#" className="hover:text-primary">{t('terms', { defaultValue: 'Terms of Use' })}</a>
        </span> */}
      </div>
    </footer>
  )
}

export { FooterSection } 