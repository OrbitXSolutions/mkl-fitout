'use client'

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { Logo } from '../atoms/Logo'
import Link from 'next/link'
import LoadingIndicator from '../atoms/LoadingIndicator'

interface NavLink {
    route: string;
    key: string;
}

interface SideDrawerProps {
    navLinks: NavLink[];
    t: (key: string) => string;
}

export function SideDrawer({ navLinks, t }: SideDrawerProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-neutral-900 text-white border-r-neutral-800 p-0">
                <SheetHeader className="p-4 border-b border-neutral-800 flex flex-row items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo className="w-8 h-8" />
                        <span className="font-bold text-lg">MKL-Fitout</span>
                        <LoadingIndicator />
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="p-4">
                    <ul className="flex flex-col gap-4 text-lg">
                        {navLinks.map(link => (
                            <li key={link.route}>
                                <SheetClose asChild>
                                    <Link href={link.route} className="block py-2 hover:text-primary transition-colors">
                                        {t(link.key)}
                                        <LoadingIndicator />
                                    </Link>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
} 