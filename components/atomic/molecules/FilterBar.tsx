'use client'

import React from 'react'
import { motion } from 'motion/react'
import { serviceIcons, ServiceIconKey } from '../atoms/ServiceIcons'
import { serviceCategories, getAllCategories } from '@/data/gallery'
import { cn } from '@/lib/utils'

interface FilterButtonProps {
    category: ServiceIconKey | 'all'
    isActive: boolean
    onClick: () => void
    index: number
}

function FilterButton({ category, isActive, onClick, index }: FilterButtonProps) {
    const IconComponent = category !== 'all' ? serviceIcons[category] : null
    const categoryInfo = category !== 'all' ? serviceCategories[category] : {
        name: 'All',
        color: '#6b7280',
        bgColor: '#f9fafb'
    }

    return (
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.645, 0.045, 0.355, 1]
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
            onClick={onClick}
            className={cn(
                "relative group px-6 py-3 rounded-2xl border-2 transition-all duration-500 ease-out",
                "flex items-center gap-3 font-medium text-sm justify-center",
                "hover:shadow-lg hover:shadow-black/10 active:shadow-inner",
                isActive ? "shadow-lg" : "shadow-sm"
            )}
            style={{
                borderColor: isActive ? categoryInfo.color : '#e5e7eb',
                backgroundColor: isActive ? categoryInfo.color : 'white',
                color: isActive ? 'white' : categoryInfo.color
            }}
        >
            {/* Background pulse effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: categoryInfo.color }}
                initial={{ scale: 1, opacity: 0 }}
                animate={isActive ? {
                    scale: [1, 1.02, 1],
                    opacity: [0, 0.1, 0],
                    transition: { duration: 2, repeat: Infinity }
                } : {}}
            />

            {/* Icon */}
            {IconComponent && (
                <motion.div
                    animate={isActive ? {
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.6 }
                    } : {}}
                >
                    <IconComponent
                        size={18}
                        className="transition-all duration-300"
                    />
                </motion.div>
            )}

            {/* All icon for 'all' category */}
            {category === 'all' && (
                <motion.div
                    className="w-4 h-4 rounded-full border-2 border-current relative"
                    animate={isActive ? {
                        rotate: [0, 360],
                        transition: { duration: 1, repeat: Infinity, ease: "linear" }
                    } : {}}
                >
                    <div className="absolute inset-1 rounded-full bg-current" />
                </motion.div>
            )}

            {/* Text */}
            <span className="relative z-10 transition-all duration-300">
                {categoryInfo.name}
            </span>

            {/* Active indicator */}
            {isActive && (
                <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white p-[2px] shadow-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <div
                        className="w-full h-full rounded-full"
                        style={{ backgroundColor: categoryInfo.color }}
                    />
                </motion.div>
            )}

            {/* Ripple effect on click */}
            <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: categoryInfo.color }}
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{
                    scale: [0, 1.2],
                    opacity: [0.3, 0],
                    transition: { duration: 0.4 }
                }}
            />
        </motion.button>
    )
}

interface FilterBarProps {
    activeCategory: ServiceIconKey | 'all'
    onCategoryChange: (category: ServiceIconKey | 'all') => void
    className?: string
}

function FilterBar({ activeCategory, onCategoryChange, className }: FilterBarProps) {
    const categories = getAllCategories()
    const allCategories: (ServiceIconKey | 'all')[] = ['all', ...categories]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
                "w-full px-4",
                className
            )}
        >
            <div className="flex flex-wrap gap-3 justify-center">
                {allCategories.map((category, index) => (
                    <FilterButton
                        key={category}
                        category={category}
                        isActive={activeCategory === category}
                        onClick={() => onCategoryChange(category)}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export { FilterBar } 