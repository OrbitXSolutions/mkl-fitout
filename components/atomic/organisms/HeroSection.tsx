'use client'

import { TypingAnimation } from '@/components/magicui/typing-animation'
import { useTranslations } from 'next-intl'
import { Logo } from '../atoms/Logo'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/use-mobile'
import { useEffect, useRef, useState } from 'react'
import { TextAnimate } from '@/components/magicui/text-animate'

function HeroSection({ className = '' }) {
  const t = useTranslations('hero')
 const isMobile = useIsMobile();
 const ref = useRef<HTMLDivElement>(null);
 const isInView = useInView(ref, { amount: 0.5 }) // 0.5 = 50% visible

  return (
    <section id="home" className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>


      <motion.div
      initial={{ scale: 1 }}
      animate={{ scale:  [1, 1.15, 1, 1.20, 1], translateX: isMobile ? [0, 15, 0, -15, 0] : [0, 50, 0, -100, 0] }}
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
        <div ref={ref} className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 px-4 relative z-10"
        >
          <Logo className="w-20 h-20 mb-2" />
          {isInView &&  <TypingAnimation className="text-white text-4xl md:text-5xl font-bold" duration={60}>
            {t('headline')}
          </TypingAnimation>}
         
          <p className="text-white text-lg md:text-2xl max-w-2xl mt-2">
          <TextAnimate animation="blurInUp" by="character" duration={1} delay={2}>
            {t('subheadline')}
          </TextAnimate>
          </p>

          <motion.button
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                '0 0 0px 0px rgba(59,130,246,0.5)',
                '0 0 16px 4px rgba(59,130,246,0.7)',
                '0 0 0px 0px rgba(59,130,246,0.5)'
              ]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-primary/90 transition"
          >
            {t('cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export { HeroSection } 