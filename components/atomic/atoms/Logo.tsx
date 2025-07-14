import { cn } from '@/lib/utils'
import Image from 'next/image'

function Logo({ className = '' }) {
  return (
    <Image
      src="/images/Logo.png"
      alt="MKL-Fitout Logo"
      width={64}
      height={64}
      className={cn(className, 'object-contain')}
      objectFit='contain'
      priority
    />
  )
}

export { Logo } 