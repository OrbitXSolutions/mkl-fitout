'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel'
import { galleryImages } from '@/data/gallery'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

function RendersCarousel({ className = '' }: { className?: string }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const t = useTranslations('renders')

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
    )

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const renderImages = galleryImages.filter(img =>
        img.category === 'living-room' ||
        img.category === 'bedroom' ||
        img.category === 'kitchen'
    ).slice(0, 5)

    return (
        <section className={cn("py-20 px-4 bg-gray-50 overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                >
                    {t('subtitle')}
                </motion.p>
            </div>
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full max-w-7xl mx-auto"
                opts={{
                    loop: true,
                }}
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
            >
                <CarouselContent>
                    {renderImages.map((image, index) => (
                        <CarouselItem key={index} className="group">
                            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="100vw"
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                                <AnimatePresence>
                                    {current === index && (
                                        <motion.div
                                            className="absolute inset-0 flex flex-col justify-end p-12 text-white"
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -40 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <motion.h3
                                                className="text-3xl font-bold"
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                {image.alt}
                                            </motion.h3>
                                            <motion.p
                                                className="text-lg max-w-xl"
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                {image.tags.join(', ')}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-900 border-none shadow-xl transition-all scale-95 hover:scale-100" />
                <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-900 border-none shadow-xl transition-all scale-95 hover:scale-100" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex justify-center gap-2 p-1 bg-white/20 backdrop-blur-sm rounded-full">
                        {renderImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-500 ease-out",
                                    i === current ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/75'
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export { RendersCarousel } 