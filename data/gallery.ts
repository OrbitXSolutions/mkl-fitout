import { ServiceIconKey } from '@/components/atomic/atoms/ServiceIcons'

export type GalleryImage = {
    id: string
    src: string
    alt: string
    category: ServiceIconKey
    tags: string[]
}

export const galleryImages: GalleryImage[] = [
    // New Living Room Images
    {
        id: 'living-room-2',
        src: '/images/gallary/cool-living-room.jpg',
        alt: 'Cool modern living room design',
        category: 'living-room',
        tags: ['modern', 'cool', 'contemporary']
    },
    {
        id: 'living-room-3',
        src: '/images/gallary/cool-living-room2.jpg',
        alt: 'Stylish living room with modern furniture',
        category: 'living-room',
        tags: ['stylish', 'modern', 'furniture']
    },
    {
        id: 'living-room-4',
        src: '/images/gallary/cool-living-room3.jpg',
        alt: 'Contemporary living room interior',
        category: 'living-room',
        tags: ['contemporary', 'interior', 'modern']
    },
    {
        id: 'living-room-5',
        src: '/images/gallary/cool-living-room5.jpg',
        alt: 'Elegant living room with sophisticated design',
        category: 'living-room',
        tags: ['elegant', 'sophisticated', 'luxury']
    },
    {
        id: 'living-room-6',
        src: '/images/gallary/cool-living-room6.jpg',
        alt: 'Modern living room with clean lines',
        category: 'living-room',
        tags: ['modern', 'clean', 'minimalist']
    },
    {
        id: 'living-room-7',
        src: '/images/gallary/cool-living-room7.jpg',
        alt: 'Contemporary living room with artistic touches',
        category: 'living-room',
        tags: ['contemporary', 'artistic', 'modern']
    },

    // Hotel Reception Images
    {
        id: 'hotel-reception-1',
        src: '/images/gallary/hotel-reception.jpg',
        alt: 'Luxury hotel reception area',
        category: 'office',
        tags: ['luxury', 'hotel', 'reception']
    },
    {
        id: 'hotel-reception-2',
        src: '/images/gallary/hotel-reception2.jpg',
        alt: 'Modern hotel reception design',
        category: 'office',
        tags: ['modern', 'hotel', 'professional']
    },

    // Restaurant Images
    {
        id: 'cafe-4',
        src: '/images/gallary/beautiful-interior-restaurant-modern-hotel.jpg',
        alt: 'Beautiful modern restaurant interior',
        category: 'cafe-restaurant',
        tags: ['beautiful', 'modern', 'elegant']
    },
    {
        id: 'cafe-5',
        src: '/images/gallary/beautiful-interior-restaurant-modern-hotel2.jpg',
        alt: 'Contemporary restaurant design',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'modern', 'stylish']
    },

    // Roof/Outdoor Space
    {
        id: 'roof-1',
        src: '/images/gallary/cool-roof.jpg',
        alt: 'Cool rooftop terrace design',
        category: 'apartment',
        tags: ['rooftop', 'terrace', 'outdoor']
    },

    // Apartment
    {
        id: 'apartment-1',
        src: '/images/gallary/ultraluxurious-minimalist-home-interior-with-highend-designer-furniture-sophisticated-decor.jpg',
        alt: 'Luxury minimalist apartment interior',
        category: 'apartment',
        tags: ['modern', 'luxury', 'minimalist']
    },
    {
        id: 'apartment-2',
        src: '/images/gallary/2150165498.jpg',
        alt: 'Modern apartment living space',
        category: 'apartment',
        tags: ['contemporary', 'open-plan']
    },

    // House
    {
        id: 'house-1',
        src: '/images/gallary/3d-room-interior-with-classic-design-furniture.jpg',
        alt: 'Classic house interior design',
        category: 'house',
        tags: ['classic', 'traditional', 'elegant']
    },
    {
        id: 'house-2',
        src: '/images/gallary/3d-room-interior-with-classic-design-furniture (1).jpg',
        alt: 'Traditional house living room',
        category: 'house',
        tags: ['traditional', 'warm', 'classic']
    },

    // Bathroom
    {
        id: 'bathroom-1',
        src: '/images/gallary/7041372_423.jpg',
        alt: 'Modern bathroom design',
        category: 'bathroom',
        tags: ['modern', 'clean', 'spa-like']
    },

    // Kitchen
    {
        id: 'kitchen-1',
        src: '/images/gallary/black-wooden-table.jpg',
        alt: 'Modern kitchen with black wooden table',
        category: 'kitchen',
        tags: ['modern', 'wood', 'minimalist']
    },

    // Bedroom
    {
        id: 'bedroom-1',
        src: '/images/gallary/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv.jpg',
        alt: 'Luxury bedroom suite design',
        category: 'bedroom',
        tags: ['luxury', 'hotel-style', 'modern']
    },
    {
        id: 'bedroom-2',
        src: '/images/gallary/3d-rendering-luxury-bedroom-suite-hotel-with-tv-cabinet-wardrobe.jpg',
        alt: 'Bedroom with built-in wardrobe',
        category: 'bedroom',
        tags: ['luxury', 'storage', 'wardrobe']
    },
    {
        id: 'bedroom-3',
        src: '/images/gallary/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet.jpg',
        alt: 'Modern bedroom with TV cabinet',
        category: 'bedroom',
        tags: ['modern', 'entertainment', 'luxury']
    },
    {
        id: 'bedroom-4',
        src: '/images/gallary/illustration-bedroom-interior.jpg',
        alt: 'Cozy bedroom interior',
        category: 'bedroom',
        tags: ['cozy', 'warm', 'illustration']
    },
    {
        id: 'bedroom-5',
        src: '/images/gallary/bed-arrangements-still-life.jpg',
        alt: 'Elegant bed arrangement',
        category: 'bedroom',
        tags: ['elegant', 'styling', 'luxury']
    },
    {
        id: 'bedroom-6',
        src: '/images/gallary/bed-arrangements-still-life (1).jpg',
        alt: 'Comfortable bedroom setup',
        category: 'bedroom',
        tags: ['comfort', 'cozy', 'arrangement']
    },
    {
        id: 'bedroom-7',
        src: '/images/gallary/bed-arrangements-still-life (2).jpg',
        alt: 'Stylish bedroom decor',
        category: 'bedroom',
        tags: ['stylish', 'decor', 'modern']
    },

    // Living Room
    {
        id: 'living-room-1',
        src: '/images/gallary/digital-lavender-interior-design.jpg',
        alt: 'Digital lavender living room design',
        category: 'living-room',
        tags: ['digital', 'colorful', 'modern']
    },

    // Office
    {
        id: 'office-1',
        src: '/images/gallary/loft-luxury-cafe-lounge-restaurant.jpg',
        alt: 'Luxury office lounge area',
        category: 'office',
        tags: ['luxury', 'lounge', 'professional']
    },

    // Cafe/Restaurant
    {
        id: 'cafe-1',
        src: '/images/gallary/beautiful-interior-restaurant-modern-hotel-with-white-cloth-tables-soft-chairs-serving-tables-with-live-roses-3d-rendering.jpg',
        alt: 'Elegant restaurant interior with white tables',
        category: 'cafe-restaurant',
        tags: ['elegant', 'fine-dining', 'modern']
    },
    {
        id: 'cafe-2',
        src: '/images/gallary/restaurant-hall-with-round-square-tables-some-chairs-plants.jpg',
        alt: 'Restaurant hall with mixed table arrangements',
        category: 'cafe-restaurant',
        tags: ['casual', 'plants', 'spacious']
    },
    {
        id: 'cafe-3',
        src: '/images/gallary/modern-restaurant.jpg',
        alt: 'Modern restaurant design',
        category: 'cafe-restaurant',
        tags: ['modern', 'contemporary', 'stylish']
    }
]

// Service category definitions with colors and names
export const serviceCategories = {
    apartment: {
        name: 'Apartment',
        color: '#6366f1', // indigo
        bgColor: '#eef2ff'
    },
    house: {
        name: 'House',
        color: '#f59e0b', // amber
        bgColor: '#fffbeb'
    },
    bathroom: {
        name: 'Bathroom',
        color: '#06b6d4', // cyan
        bgColor: '#ecfeff'
    },
    kitchen: {
        name: 'Kitchen',
        color: '#84cc16', // lime
        bgColor: '#f7fee7'
    },
    bedroom: {
        name: 'Bedroom',
        color: '#ec4899', // pink
        bgColor: '#fdf2f8'
    },
    'living-room': {
        name: 'Living Room',
        color: '#8b5cf6', // violet
        bgColor: '#f5f3ff'
    },
    office: {
        name: 'Office',
        color: '#64748b', // slate
        bgColor: '#f8fafc'
    },
    'cafe-restaurant': {
        name: 'Cafe/Restaurant',
        color: '#ea580c', // orange
        bgColor: '#fff7ed'
    },
    classroom: {
        name: 'Classroom',
        color: '#059669', // emerald
        bgColor: '#ecfdf5'
    }
} as const

export function getImagesByCategory(category: ServiceIconKey | 'all'): GalleryImage[] {
    if (category === 'all') {
        return galleryImages
    }
    return galleryImages.filter(image => image.category === category)
}

export function getAllCategories(): ServiceIconKey[] {
    return Object.keys(serviceCategories) as ServiceIconKey[]
} 