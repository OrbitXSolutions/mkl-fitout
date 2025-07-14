import { TextAnimate } from '@/components/magicui/text-animate'
import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: string
  className?: string
  [key: string]: any
}

function SectionTitle({ children, className = '', ...props }: SectionTitleProps) {
  return (
    <TextAnimate className={`text-3xl font-bold mb-4 ${className}`} {...props}>
      {children}
    </TextAnimate>
  )
}

export { SectionTitle } 