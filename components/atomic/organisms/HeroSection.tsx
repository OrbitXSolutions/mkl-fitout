'use client'

import { TypingAnimation } from '@/components/magicui/typing-animation'
import { useTranslations } from 'next-intl'
import { Logo } from '../atoms/Logo'
import { motion } from 'motion/react'
import Image from 'next/image'

function HeroSection({ className = '' }) {
  const t = useTranslations('hero')

  return (
    <section id="home" className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.15, 1, 1.20, 1], translateX: [0, 50, 0, -100, 0] }}
      className='relative inset-0 w-full min-h-[70vh]'
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      style={{ display: 'inline-block' }}
    >

<Image
        src="/images/hero-image-placeholder.jpg"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover', transition: 'opacity 1s' }}
        priority
        sizes="100vw"
      />
    </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 px-4 relative z-10"
        >
          <Logo className="w-20 h-20 mb-2" />
          <TypingAnimation className="text-white text-4xl md:text-5xl font-bold" duration={60}>
            {t('headline')}
          </TypingAnimation>
          <p className="text-white text-lg md:text-2xl max-w-2xl mt-2">
            {t('subheadline')}
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-primary/90 transition">
          {t('cta')}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export { HeroSection } 