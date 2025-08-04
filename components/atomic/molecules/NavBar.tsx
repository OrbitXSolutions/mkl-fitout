'use client'

import { Logo } from '../atoms/Logo'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/use-mobile'
import { SideDrawer } from './SideDrawer'
import LoadingIndicator from '../atoms/LoadingIndicator'
import { usePathname } from 'next/navigation'


const NAV_LINKS = [
  { route: '/', key: 'nav.home' },
  { route: '/about', key: 'nav.about' },
  { route: '/services', key: 'nav.services' },
  // { route: '/#gallery', key: 'nav.gallery' },
  // { route: '/#stats', key: 'nav.stats' },
  { route: '/about#contact', key: 'nav.contact' },
]



function NavBar({ className = '' }) {
  const t = useTranslations()
  const isMobile = useIsMobile()
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`sticky top-0 z-50 text-white bg-primary backdrop-blur flex items-center justify-between px-4 py-2 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-4">
        <Logo className="w-12 h-12" />
        <span className="text-xl font-bold tracking-wide mt-2 text-nowrap w-1">MKL-Fitout</span>
      </div>
      <ul className="hidden md:flex gap-6 text-base font-medium">
        {NAV_LINKS.map(link => (
          <li key={link.route}>

            <Link
              href={link.route}
              className={`flex items-center gap-2 px-2 py-1 transition-colors border-b-2 ${pathname === link.route
                ? 'font-semibold'
                : 'border-transparent hover:border-primary/60 hover:text-secondary'
                }`}
              aria-current={pathname === link.route ? 'page' : undefined}
            >
              {t(link.key)}
              <LoadingIndicator />
            </Link>

          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        {isMobile && <SideDrawer navLinks={NAV_LINKS} t={t} />}
      </div>
    </motion.nav>
  )
}

export { NavBar } 