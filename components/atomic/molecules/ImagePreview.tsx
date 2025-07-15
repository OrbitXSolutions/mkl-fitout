'use client'

import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { GalleryImage } from '@/data/gallery'

interface ImagePreviewProps {
    image: GalleryImage | null
    onClose: () => void
}

export function ImagePreview({ image, onClose }: ImagePreviewProps) {
    React.useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', handleEsc)

        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [onClose])

    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors z-10"
                        onClick={onClose}
                        aria-label="Close image preview"
                    >
                        <X size={24} />
                    </motion.button>

                    <motion.div
                        layoutId={`gallery-image-${image.id}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 200,
                        }}
                        className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='relative w-full h-full'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white pointer-events-none"
                        >
                            <h3 className="text-2xl font-bold">{image.alt}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {image.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
} 