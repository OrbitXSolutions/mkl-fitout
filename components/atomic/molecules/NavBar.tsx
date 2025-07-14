'use client'

import { Logo } from '../atoms/Logo'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'

const NAV_LINKS = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'gallery', key: 'nav.gallery' },
  { id: 'stats', key: 'nav.stats' },
  { id: 'contact', key: 'nav.contact' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function NavBar({ className = '' }) {
  const t = useTranslations()
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`sticky top-0 z-50 text-white bg-blue-900/80 backdrop-blur flex items-center justify-between px-4 py-2 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-4">
        <Logo className="w-12 h-12" />
      </div>
      <ul className="hidden md:flex gap-6 text-base font-medium">
        {NAV_LINKS.map(link => (
          <li key={link.id}>
            <button
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="hover:text-primary transition-colors"
            >
              {t(link.key)}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
      </div>
    </motion.nav>
  )
}

export { NavBar } 