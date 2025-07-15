'use client'

import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Logo } from '../atoms/Logo'
import Link from 'next/link'
import { SocialLinks } from '../molecules/SocialLinks'

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
          <span className="text-sm text-neutral-400 max-w-xs">{t('tagline', { defaultValue: 'Interiors & Wood Works – Ajman, UAE' })}</span>
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
          <a href={`tel:${CONTACT_INFO.phone}`} dir='ltr' style={{ direction: 'ltr' }} className="hover:text-primary transition-colors text-end">{CONTACT_INFO.phone}</a>
          <SocialLinks className="mt-4" />
        </address>
      </motion.div>
      <div className="border-t border-neutral-800 mt-10 pt-6 text-xs text-neutral-400 flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto gap-2">
        <span>&copy; {year} MKL-Fitout. {t('rights', { defaultValue: 'All rights reserved.' })}</span>
        <span>
          <Link href="/legal?tab=privacy" className="hover:text-primary">{t('privacy', { defaultValue: 'Privacy Policy' })}</Link>
          {' | '}
          <Link href="/legal?tab=terms" className="hover:text-primary">{t('terms', { defaultValue: 'Terms of Use' })}</Link>
        </span>
      </div>
    </footer>
  )
}

export { FooterSection } 