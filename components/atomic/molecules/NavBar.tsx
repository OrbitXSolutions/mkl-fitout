'use client'

import { Logo } from '../atoms/Logo'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NAV_LINKS = [
  { route: '/', key: 'nav.home' },
  { route: '/about', key: 'nav.about' },
  { route: '/services', key: 'nav.services' },
  { route: '/#gallery', key: 'nav.gallery' },
  // { route: '/#stats', key: 'nav.stats' },
  { route: '/about#contact', key: 'nav.contact' },
]



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
          <li key={link.route}>

            <Link href={link.route}>
              {t(link.key)}
            </Link>

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