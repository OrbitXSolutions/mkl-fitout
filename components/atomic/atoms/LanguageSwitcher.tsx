'use client'
import { useTransition } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { toggleLanguage } from '@/app/_actions/lange-toggle'

function LanguageSwitcher({ className = '' }) {
  const t = useTranslations('langSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) return
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('lang', nextLocale)
    startTransition(async() => {
      await toggleLanguage(nextLocale)
      router.replace(`${pathname}?${params.toString()}`)
    })
  }

  // Determine the next locale and label
  const isEnglish = locale === 'en'
  const nextLocale = isEnglish ? 'ar' : 'en'
  // Use translation key if available, else fallback
  const label = isEnglish ? (t?.('ar', { defaultValue: 'العربية' }) || 'العربية') : (t?.('en', { defaultValue: 'English' }) || 'English')

  return (
    <button
      type="button"
      onClick={() => switchLocale(nextLocale)}
      aria-label={label}
      className={`px-2 py-1 rounded font-bold underline ${className}`}
      disabled={isPending}
    >
      {label}
    </button>
  )
}

export { LanguageSwitcher } 