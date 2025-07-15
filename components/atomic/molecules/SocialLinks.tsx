'use client'

import React from 'react'
import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { SocialIcon } from '../atoms/SocialIcon'

const socialLinks = [
    { name: 'facebook', href: CONTACT_INFO.facebook, label: 'Facebook' },
    { name: 'instagram', href: CONTACT_INFO.instagram, label: 'Instagram' },
    { name: 'tiktok', href: CONTACT_INFO.tiktok, label: 'TikTok' },
    { name: 'whatsapp', href: CONTACT_INFO.whatsapp, label: 'WhatsApp' },
] as const

export function SocialLinks({ className = '' }: { className?: string }) {
    return (
        <div className={`flex gap-4 ${className}`}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-neutral-400 hover:text-primary transition-colors"
                >
                    <SocialIcon name={social.name} className="w-6 h-6" />
                </a>
            ))}
        </div>
    )
} 