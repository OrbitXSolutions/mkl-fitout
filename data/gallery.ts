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
    },

    // Random Images - First 50 (Batch 1)
    // Apartment Category (6 images)
    {
        id: 'random-apartment-1',
        src: '/images/gallary/random/IMG-20250722-WA0001.jpg',
        alt: 'Modern apartment interior with contemporary design',
        category: 'apartment',
        tags: ['modern', 'contemporary', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-2',
        src: '/images/gallary/random/IMG-20250722-WA0002.jpg',
        alt: 'Luxury apartment living space with elegant furnishings',
        category: 'apartment',
        tags: ['luxury', 'elegant', 'apartment', 'furnishings']
    },
    {
        id: 'random-apartment-3',
        src: '/images/gallary/random/IMG-20250722-WA0003.jpg',
        alt: 'Contemporary apartment design with minimalist approach',
        category: 'apartment',
        tags: ['contemporary', 'minimalist', 'apartment', 'design']
    },
    {
        id: 'random-apartment-4',
        src: '/images/gallary/random/IMG-20250722-WA0004.jpg',
        alt: 'Stylish apartment interior with modern decor',
        category: 'apartment',
        tags: ['stylish', 'modern', 'apartment', 'decor']
    },
    {
        id: 'random-apartment-5',
        src: '/images/gallary/random/IMG-20250722-WA0005.jpg',
        alt: 'Sophisticated apartment space with premium finishes',
        category: 'apartment',
        tags: ['sophisticated', 'premium', 'apartment', 'finishes']
    },
    {
        id: 'random-apartment-6',
        src: '/images/gallary/random/IMG-20250722-WA0006.jpg',
        alt: 'Urban apartment interior with contemporary styling',
        category: 'apartment',
        tags: ['urban', 'contemporary', 'apartment', 'styling']
    },

    // House Category (6 images)
    {
        id: 'random-house-1',
        src: '/images/gallary/random/IMG-20250722-WA0007.jpg',
        alt: 'Elegant house interior with classic architectural elements',
        category: 'house',
        tags: ['elegant', 'classic', 'house', 'architecture']
    },
    {
        id: 'random-house-2',
        src: '/images/gallary/random/IMG-20250722-WA0008.jpg',
        alt: 'Luxury house design with sophisticated living spaces',
        category: 'house',
        tags: ['luxury', 'sophisticated', 'house', 'living']
    },
    {
        id: 'random-house-3',
        src: '/images/gallary/random/IMG-20250722-WA0009.jpg',
        alt: 'Modern house interior with contemporary aesthetics',
        category: 'house',
        tags: ['modern', 'contemporary', 'house', 'aesthetics']
    },
    {
        id: 'random-house-4',
        src: '/images/gallary/random/IMG-20250722-WA0010.jpg',
        alt: 'Traditional house design with warm ambiance',
        category: 'house',
        tags: ['traditional', 'warm', 'house', 'ambiance']
    },
    {
        id: 'random-house-5',
        src: '/images/gallary/random/IMG-20250722-WA0011.jpg',
        alt: 'Spacious house interior with premium materials',
        category: 'house',
        tags: ['spacious', 'premium', 'house', 'materials']
    },
    {
        id: 'random-house-6',
        src: '/images/gallary/random/IMG-20250722-WA0012.jpg',
        alt: 'Contemporary house design with clean lines',
        category: 'house',
        tags: ['contemporary', 'clean', 'house', 'lines']
    },

    // Bathroom Category (6 images)
    {
        id: 'random-bathroom-1',
        src: '/images/gallary/random/IMG-20250722-WA0013.jpg',
        alt: 'Modern bathroom design with sleek fixtures',
        category: 'bathroom',
        tags: ['modern', 'sleek', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-2',
        src: '/images/gallary/random/IMG-20250722-WA0014.jpg',
        alt: 'Luxury bathroom with spa-like features',
        category: 'bathroom',
        tags: ['luxury', 'spa-like', 'bathroom', 'features']
    },
    {
        id: 'random-bathroom-3',
        src: '/images/gallary/random/IMG-20250722-WA0015.jpg',
        alt: 'Contemporary bathroom with minimalist design',
        category: 'bathroom',
        tags: ['contemporary', 'minimalist', 'bathroom', 'design']
    },
    {
        id: 'random-bathroom-4',
        src: '/images/gallary/random/IMG-20250722-WA0016.jpg',
        alt: 'Elegant bathroom with premium finishes',
        category: 'bathroom',
        tags: ['elegant', 'premium', 'bathroom', 'finishes']
    },
    {
        id: 'random-bathroom-5',
        src: '/images/gallary/random/IMG-20250722-WA0017.jpg',
        alt: 'Stylish bathroom with modern amenities',
        category: 'bathroom',
        tags: ['stylish', 'modern', 'bathroom', 'amenities']
    },
    {
        id: 'random-bathroom-6',
        src: '/images/gallary/random/IMG-20250722-WA0018.jpg',
        alt: 'Sophisticated bathroom design with clean aesthetics',
        category: 'bathroom',
        tags: ['sophisticated', 'clean', 'bathroom', 'aesthetics']
    },

    // Kitchen Category (6 images)
    {
        id: 'random-kitchen-1',
        src: '/images/gallary/random/IMG-20250722-WA0019.jpg',
        alt: 'Modern kitchen with contemporary appliances',
        category: 'kitchen',
        tags: ['modern', 'contemporary', 'kitchen', 'appliances']
    },
    {
        id: 'random-kitchen-2',
        src: '/images/gallary/random/IMG-20250722-WA0020.jpg',
        alt: 'Luxury kitchen design with premium cabinetry',
        category: 'kitchen',
        tags: ['luxury', 'premium', 'kitchen', 'cabinetry']
    },
    {
        id: 'random-kitchen-3',
        src: '/images/gallary/random/IMG-20250722-WA0021.jpg',
        alt: 'Contemporary kitchen with sleek countertops',
        category: 'kitchen',
        tags: ['contemporary', 'sleek', 'kitchen', 'countertops']
    },
    {
        id: 'random-kitchen-4',
        src: '/images/gallary/random/IMG-20250722-WA0022.jpg',
        alt: 'Elegant kitchen with sophisticated layout',
        category: 'kitchen',
        tags: ['elegant', 'sophisticated', 'kitchen', 'layout']
    },
    {
        id: 'random-kitchen-5',
        src: '/images/gallary/random/IMG-20250722-WA0023.jpg',
        alt: 'Stylish kitchen with modern design elements',
        category: 'kitchen',
        tags: ['stylish', 'modern', 'kitchen', 'elements']
    },
    {
        id: 'random-kitchen-6',
        src: '/images/gallary/random/IMG-20250722-WA0024.jpg',
        alt: 'Functional kitchen with practical workspace',
        category: 'kitchen',
        tags: ['functional', 'practical', 'kitchen', 'workspace']
    },

    // Bedroom Category (6 images)
    {
        id: 'random-bedroom-1',
        src: '/images/gallary/random/IMG-20250722-WA0025.jpg',
        alt: 'Modern bedroom with contemporary furnishings',
        category: 'bedroom',
        tags: ['modern', 'contemporary', 'bedroom', 'furnishings']
    },
    {
        id: 'random-bedroom-2',
        src: '/images/gallary/random/IMG-20250722-WA0026.jpg',
        alt: 'Luxury bedroom design with premium bedding',
        category: 'bedroom',
        tags: ['luxury', 'premium', 'bedroom', 'bedding']
    },
    {
        id: 'random-bedroom-3',
        src: '/images/gallary/random/IMG-20250722-WA0027.jpg',
        alt: 'Cozy bedroom with warm ambiance',
        category: 'bedroom',
        tags: ['cozy', 'warm', 'bedroom', 'ambiance']
    },
    {
        id: 'random-bedroom-4',
        src: '/images/gallary/random/IMG-20250722-WA0028.jpg',
        alt: 'Elegant bedroom with sophisticated decor',
        category: 'bedroom',
        tags: ['elegant', 'sophisticated', 'bedroom', 'decor']
    },
    {
        id: 'random-bedroom-5',
        src: '/images/gallary/random/IMG-20250722-WA0029.jpg',
        alt: 'Contemporary bedroom with clean design',
        category: 'bedroom',
        tags: ['contemporary', 'clean', 'bedroom', 'design']
    },
    {
        id: 'random-bedroom-6',
        src: '/images/gallary/random/IMG-20250722-WA0030.jpg',
        alt: 'Stylish bedroom with modern aesthetics',
        category: 'bedroom',
        tags: ['stylish', 'modern', 'bedroom', 'aesthetics']
    },

    // Living Room Category (6 images)
    {
        id: 'random-living-room-1',
        src: '/images/gallary/random/IMG-20250722-WA0031.jpg',
        alt: 'Modern living room with contemporary seating',
        category: 'living-room',
        tags: ['modern', 'contemporary', 'living-room', 'seating']
    },
    {
        id: 'random-living-room-2',
        src: '/images/gallary/random/IMG-20250722-WA0032.jpg',
        alt: 'Luxury living room with elegant furnishings',
        category: 'living-room',
        tags: ['luxury', 'elegant', 'living-room', 'furnishings']
    },
    {
        id: 'random-living-room-3',
        src: '/images/gallary/random/IMG-20250722-WA0033.jpg',
        alt: 'Contemporary living room with sophisticated design',
        category: 'living-room',
        tags: ['contemporary', 'sophisticated', 'living-room', 'design']
    },
    {
        id: 'random-living-room-4',
        src: '/images/gallary/random/IMG-20250722-WA0034.jpg',
        alt: 'Cozy living room with warm atmosphere',
        category: 'living-room',
        tags: ['cozy', 'warm', 'living-room', 'atmosphere']
    },
    {
        id: 'random-living-room-5',
        src: '/images/gallary/random/IMG-20250722-WA0035.jpg',
        alt: 'Stylish living room with modern decor',
        category: 'living-room',
        tags: ['stylish', 'modern', 'living-room', 'decor']
    },
    {
        id: 'random-living-room-6',
        src: '/images/gallary/random/IMG-20250722-WA0036.jpg',
        alt: 'Elegant living room with premium finishes',
        category: 'living-room',
        tags: ['elegant', 'premium', 'living-room', 'finishes']
    },

    // Office Category (6 images)
    {
        id: 'random-office-1',
        src: '/images/gallary/random/IMG-20250722-WA0037.jpg',
        alt: 'Modern office space with contemporary design',
        category: 'office',
        tags: ['modern', 'contemporary', 'office', 'design']
    },
    {
        id: 'random-office-2',
        src: '/images/gallary/random/IMG-20250722-WA0038.jpg',
        alt: 'Professional office with sophisticated layout',
        category: 'office',
        tags: ['professional', 'sophisticated', 'office', 'layout']
    },
    {
        id: 'random-office-3',
        src: '/images/gallary/random/IMG-20250722-WA0039.jpg',
        alt: 'Contemporary office with modern amenities',
        category: 'office',
        tags: ['contemporary', 'modern', 'office', 'amenities']
    },
    {
        id: 'random-office-4',
        src: '/images/gallary/random/IMG-20250722-WA0040.jpg',
        alt: 'Elegant office space with premium finishes',
        category: 'office',
        tags: ['elegant', 'premium', 'office', 'finishes']
    },
    {
        id: 'random-office-5',
        src: '/images/gallary/random/IMG-20250722-WA0041.jpg',
        alt: 'Stylish office with contemporary aesthetics',
        category: 'office',
        tags: ['stylish', 'contemporary', 'office', 'aesthetics']
    },
    {
        id: 'random-office-6',
        src: '/images/gallary/random/IMG-20250722-WA0042.jpg',
        alt: 'Functional office with practical workspace',
        category: 'office',
        tags: ['functional', 'practical', 'office', 'workspace']
    },

    // Cafe/Restaurant Category (6 images)
    {
        id: 'random-cafe-1',
        src: '/images/gallary/random/IMG-20250722-WA0043.jpg',
        alt: 'Modern cafe interior with contemporary design',
        category: 'cafe-restaurant',
        tags: ['modern', 'contemporary', 'cafe', 'interior']
    },
    {
        id: 'random-cafe-2',
        src: '/images/gallary/random/IMG-20250722-WA0044.jpg',
        alt: 'Elegant restaurant with sophisticated ambiance',
        category: 'cafe-restaurant',
        tags: ['elegant', 'sophisticated', 'restaurant', 'ambiance']
    },
    {
        id: 'random-cafe-3',
        src: '/images/gallary/random/IMG-20250722-WA0045.jpg',
        alt: 'Contemporary dining space with modern decor',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'modern', 'dining', 'decor']
    },
    {
        id: 'random-cafe-4',
        src: '/images/gallary/random/IMG-20250722-WA0046.jpg',
        alt: 'Stylish cafe with warm atmosphere',
        category: 'cafe-restaurant',
        tags: ['stylish', 'warm', 'cafe', 'atmosphere']
    },
    {
        id: 'random-cafe-5',
        src: '/images/gallary/random/IMG-20250722-WA0047.jpg',
        alt: 'Luxury restaurant with premium dining experience',
        category: 'cafe-restaurant',
        tags: ['luxury', 'premium', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-6',
        src: '/images/gallary/random/IMG-20250722-WA0048.jpg',
        alt: 'Cozy cafe with comfortable seating',
        category: 'cafe-restaurant',
        tags: ['cozy', 'comfortable', 'cafe', 'seating']
    },

    // Classroom Category (6 images)
    {
        id: 'random-classroom-1',
        src: '/images/gallary/random/IMG-20250722-WA0049.jpg',
        alt: 'Modern classroom with contemporary learning environment',
        category: 'classroom',
        tags: ['modern', 'contemporary', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-2',
        src: '/images/gallary/random/IMG-20250722-WA0050.jpg',
        alt: 'Functional classroom with practical design',
        category: 'classroom',
        tags: ['functional', 'practical', 'classroom', 'design']
    },
    {
        id: 'random-classroom-3',
        src: '/images/gallary/random/IMG-20250722-WA0051.jpg',
        alt: 'Contemporary educational space with modern amenities',
        category: 'classroom',
        tags: ['contemporary', 'modern', 'educational', 'amenities']
    },
    {
        id: 'random-classroom-4',
        src: '/images/gallary/random/IMG-20250722-WA0052.jpg',
        alt: 'Elegant classroom with sophisticated learning environment',
        category: 'classroom',
        tags: ['elegant', 'sophisticated', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-5',
        src: '/images/gallary/random/IMG-20250722-WA0053.jpg',
        alt: 'Stylish classroom with contemporary aesthetics',
        category: 'classroom',
        tags: ['stylish', 'contemporary', 'classroom', 'aesthetics']
    },
    {
        id: 'random-classroom-6',
        src: '/images/gallary/random/IMG-20250722-WA0054.jpg',
        alt: 'Professional classroom with modern teaching facilities',
        category: 'classroom',
        tags: ['professional', 'modern', 'classroom', 'facilities']
    },

    // Random Images - Second 50 (Batch 2)
    // Apartment Category (6 images)
    {
        id: 'random-apartment-7',
        src: '/images/gallary/random/IMG-20250722-WA0055.jpg',
        alt: 'Contemporary apartment with sleek design elements',
        category: 'apartment',
        tags: ['contemporary', 'sleek', 'apartment', 'design']
    },
    {
        id: 'random-apartment-8',
        src: '/images/gallary/random/IMG-20250722-WA0056.jpg',
        alt: 'Modern apartment interior with minimalist approach',
        category: 'apartment',
        tags: ['modern', 'minimalist', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-9',
        src: '/images/gallary/random/IMG-20250722-WA0057.jpg',
        alt: 'Luxury apartment with sophisticated furnishings',
        category: 'apartment',
        tags: ['luxury', 'sophisticated', 'apartment', 'furnishings']
    },
    {
        id: 'random-apartment-10',
        src: '/images/gallary/random/IMG-20250722-WA0058.jpg',
        alt: 'Elegant apartment living space with premium finishes',
        category: 'apartment',
        tags: ['elegant', 'premium', 'apartment', 'finishes']
    },
    {
        id: 'random-apartment-11',
        src: '/images/gallary/random/IMG-20250722-WA0059.jpg',
        alt: 'Contemporary apartment with modern amenities',
        category: 'apartment',
        tags: ['contemporary', 'modern', 'apartment', 'amenities']
    },
    {
        id: 'random-apartment-12',
        src: '/images/gallary/random/IMG-20250722-WA0060.jpg',
        alt: 'Stylish apartment with artistic design touches',
        category: 'apartment',
        tags: ['stylish', 'artistic', 'apartment', 'design']
    },

    // House Category (6 images)
    {
        id: 'random-house-7',
        src: '/images/gallary/random/IMG-20250722-WA0061.jpg',
        alt: 'Modern house exterior with contemporary architecture',
        category: 'house',
        tags: ['modern', 'contemporary', 'house', 'architecture']
    },
    {
        id: 'random-house-8',
        src: '/images/gallary/random/IMG-20250722-WA0062.jpg',
        alt: 'Luxury house with elegant design features',
        category: 'house',
        tags: ['luxury', 'elegant', 'house', 'features']
    },
    {
        id: 'random-house-9',
        src: '/images/gallary/random/IMG-20250722-WA0063.jpg',
        alt: 'Contemporary house with sophisticated styling',
        category: 'house',
        tags: ['contemporary', 'sophisticated', 'house', 'styling']
    },
    {
        id: 'random-house-10',
        src: '/images/gallary/random/IMG-20250722-WA0064.jpg',
        alt: 'Modern house with clean architectural lines',
        category: 'house',
        tags: ['modern', 'clean', 'house', 'architectural']
    },
    {
        id: 'random-house-11',
        src: '/images/gallary/random/IMG-20250722-WA0065.jpg',
        alt: 'Elegant house with premium construction quality',
        category: 'house',
        tags: ['elegant', 'premium', 'house', 'construction']
    },
    {
        id: 'random-house-12',
        src: '/images/gallary/random/IMG-20250722-WA0066.jpg',
        alt: 'Contemporary house with modern design elements',
        category: 'house',
        tags: ['contemporary', 'modern', 'house', 'elements']
    },

    // Bathroom Category (6 images)
    {
        id: 'random-bathroom-7',
        src: '/images/gallary/random/IMG-20250722-WA0067.jpg',
        alt: 'Modern bathroom with contemporary fixtures',
        category: 'bathroom',
        tags: ['modern', 'contemporary', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-8',
        src: '/images/gallary/random/IMG-20250722-WA0068.jpg',
        alt: 'Luxury bathroom with elegant design',
        category: 'bathroom',
        tags: ['luxury', 'elegant', 'bathroom', 'design']
    },
    {
        id: 'random-bathroom-9',
        src: '/images/gallary/random/IMG-20250722-WA0069.jpg',
        alt: 'Contemporary bathroom with sophisticated styling',
        category: 'bathroom',
        tags: ['contemporary', 'sophisticated', 'bathroom', 'styling']
    },
    {
        id: 'random-bathroom-10',
        src: '/images/gallary/random/IMG-20250722-WA0070.jpg',
        alt: 'Modern bathroom with clean aesthetic',
        category: 'bathroom',
        tags: ['modern', 'clean', 'bathroom', 'aesthetic']
    },
    {
        id: 'random-bathroom-11',
        src: '/images/gallary/random/IMG-20250722-WA0071.jpg',
        alt: 'Elegant bathroom with premium finishes',
        category: 'bathroom',
        tags: ['elegant', 'premium', 'bathroom', 'finishes']
    },
    {
        id: 'random-bathroom-12',
        src: '/images/gallary/random/IMG-20250722-WA0072.jpg',
        alt: 'Contemporary bathroom with modern amenities',
        category: 'bathroom',
        tags: ['contemporary', 'modern', 'bathroom', 'amenities']
    },

    // Kitchen Category (6 images)
    {
        id: 'random-kitchen-7',
        src: '/images/gallary/random/IMG-20250722-WA0073.jpg',
        alt: 'Modern kitchen with contemporary appliances',
        category: 'kitchen',
        tags: ['modern', 'contemporary', 'kitchen', 'appliances']
    },
    {
        id: 'random-kitchen-8',
        src: '/images/gallary/random/IMG-20250722-WA0074.jpg',
        alt: 'Luxury kitchen with elegant cabinetry',
        category: 'kitchen',
        tags: ['luxury', 'elegant', 'kitchen', 'cabinetry']
    },
    {
        id: 'random-kitchen-9',
        src: '/images/gallary/random/IMG-20250722-WA0075.jpg',
        alt: 'Contemporary kitchen with sophisticated design',
        category: 'kitchen',
        tags: ['contemporary', 'sophisticated', 'kitchen', 'design']
    },
    {
        id: 'random-kitchen-10',
        src: '/images/gallary/random/IMG-20250722-WA0076.jpg',
        alt: 'Modern kitchen with clean countertops',
        category: 'kitchen',
        tags: ['modern', 'clean', 'kitchen', 'countertops']
    },
    {
        id: 'random-kitchen-11',
        src: '/images/gallary/random/IMG-20250722-WA0077.jpg',
        alt: 'Elegant kitchen with premium materials',
        category: 'kitchen',
        tags: ['elegant', 'premium', 'kitchen', 'materials']
    },
    {
        id: 'random-kitchen-12',
        src: '/images/gallary/random/IMG-20250722-WA0078.jpg',
        alt: 'Contemporary kitchen with modern functionality',
        category: 'kitchen',
        tags: ['contemporary', 'modern', 'kitchen', 'functionality']
    },

    // Bedroom Category (6 images)
    {
        id: 'random-bedroom-7',
        src: '/images/gallary/random/IMG-20250722-WA0079.jpg',
        alt: 'Modern bedroom with contemporary furnishings',
        category: 'bedroom',
        tags: ['modern', 'contemporary', 'bedroom', 'furnishings']
    },
    {
        id: 'random-bedroom-8',
        src: '/images/gallary/random/IMG-20250722-WA0080.jpg',
        alt: 'Luxury bedroom with elegant design',
        category: 'bedroom',
        tags: ['luxury', 'elegant', 'bedroom', 'design']
    },
    {
        id: 'random-bedroom-9',
        src: '/images/gallary/random/IMG-20250722-WA0081.jpg',
        alt: 'Contemporary bedroom with sophisticated styling',
        category: 'bedroom',
        tags: ['contemporary', 'sophisticated', 'bedroom', 'styling']
    },
    {
        id: 'random-bedroom-10',
        src: '/images/gallary/random/IMG-20250722-WA0082.jpg',
        alt: 'Modern bedroom with clean aesthetic',
        category: 'bedroom',
        tags: ['modern', 'clean', 'bedroom', 'aesthetic']
    },
    {
        id: 'random-bedroom-11',
        src: '/images/gallary/random/IMG-20250722-WA0083.jpg',
        alt: 'Elegant bedroom with premium finishes',
        category: 'bedroom',
        tags: ['elegant', 'premium', 'bedroom', 'finishes']
    },
    {
        id: 'random-bedroom-12',
        src: '/images/gallary/random/IMG-20250722-WA0084.jpg',
        alt: 'Contemporary bedroom with modern comfort',
        category: 'bedroom',
        tags: ['contemporary', 'modern', 'bedroom', 'comfort']
    },

    // Living Room Category (6 images)
    {
        id: 'random-living-room-7',
        src: '/images/gallary/random/IMG-20250722-WA0085.jpg',
        alt: 'Modern living room with contemporary design',
        category: 'living-room',
        tags: ['modern', 'contemporary', 'living-room', 'design']
    },
    {
        id: 'random-living-room-8',
        src: '/images/gallary/random/IMG-20250722-WA0086.jpg',
        alt: 'Luxury living room with elegant furnishings',
        category: 'living-room',
        tags: ['luxury', 'elegant', 'living-room', 'furnishings']
    },
    {
        id: 'random-living-room-9',
        src: '/images/gallary/random/IMG-20250722-WA0087.jpg',
        alt: 'Contemporary living room with sophisticated styling',
        category: 'living-room',
        tags: ['contemporary', 'sophisticated', 'living-room', 'styling']
    },
    {
        id: 'random-living-room-10',
        src: '/images/gallary/random/IMG-20250722-WA0088.jpg',
        alt: 'Modern living room with clean aesthetic',
        category: 'living-room',
        tags: ['modern', 'clean', 'living-room', 'aesthetic']
    },
    {
        id: 'random-living-room-11',
        src: '/images/gallary/random/IMG-20250722-WA0089.jpg',
        alt: 'Elegant living room with premium finishes',
        category: 'living-room',
        tags: ['elegant', 'premium', 'living-room', 'finishes']
    },
    {
        id: 'random-living-room-12',
        src: '/images/gallary/random/IMG-20250722-WA0090.jpg',
        alt: 'Contemporary living room with modern comfort',
        category: 'living-room',
        tags: ['contemporary', 'modern', 'living-room', 'comfort']
    },

    // Office Category (6 images)
    {
        id: 'random-office-7',
        src: '/images/gallary/random/IMG-20250722-WA0091.jpg',
        alt: 'Modern office with contemporary workspace design',
        category: 'office',
        tags: ['modern', 'contemporary', 'office', 'workspace']
    },
    {
        id: 'random-office-8',
        src: '/images/gallary/random/IMG-20250722-WA0092.jpg',
        alt: 'Luxury office with elegant professional environment',
        category: 'office',
        tags: ['luxury', 'elegant', 'office', 'professional']
    },
    {
        id: 'random-office-9',
        src: '/images/gallary/random/IMG-20250722-WA0093.jpg',
        alt: 'Contemporary office with sophisticated business design',
        category: 'office',
        tags: ['contemporary', 'sophisticated', 'office', 'business']
    },
    {
        id: 'random-office-10',
        src: '/images/gallary/random/IMG-20250722-WA0094.jpg',
        alt: 'Modern office with clean corporate aesthetic',
        category: 'office',
        tags: ['modern', 'clean', 'office', 'corporate']
    },
    {
        id: 'random-office-11',
        src: '/images/gallary/random/IMG-20250722-WA0095.jpg',
        alt: 'Elegant office with premium professional finishes',
        category: 'office',
        tags: ['elegant', 'premium', 'office', 'professional']
    },
    {
        id: 'random-office-12',
        src: '/images/gallary/random/IMG-20250722-WA0096.jpg',
        alt: 'Contemporary office with modern business amenities',
        category: 'office',
        tags: ['contemporary', 'modern', 'office', 'business']
    },

    // Cafe/Restaurant Category (6 images)
    {
        id: 'random-cafe-restaurant-7',
        src: '/images/gallary/random/IMG-20250722-WA0097.jpg',
        alt: 'Modern cafe with contemporary dining atmosphere',
        category: 'cafe-restaurant',
        tags: ['modern', 'contemporary', 'cafe', 'dining']
    },
    {
        id: 'random-cafe-restaurant-8',
        src: '/images/gallary/random/IMG-20250722-WA0098.jpg',
        alt: 'Luxury restaurant with elegant dining experience',
        category: 'cafe-restaurant',
        tags: ['luxury', 'elegant', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-restaurant-9',
        src: '/images/gallary/random/IMG-20250722-WA0099.jpg',
        alt: 'Contemporary cafe with sophisticated ambiance',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'sophisticated', 'cafe', 'ambiance']
    },
    {
        id: 'random-cafe-restaurant-10',
        src: '/images/gallary/random/IMG-20250722-WA0100.jpg',
        alt: 'Modern restaurant with clean dining aesthetic',
        category: 'cafe-restaurant',
        tags: ['modern', 'clean', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-restaurant-11',
        src: '/images/gallary/random/IMG-20250722-WA0101.jpg',
        alt: 'Elegant cafe with premium dining finishes',
        category: 'cafe-restaurant',
        tags: ['elegant', 'premium', 'cafe', 'dining']
    },
    {
        id: 'random-cafe-restaurant-12',
        src: '/images/gallary/random/IMG-20250722-WA0102.jpg',
        alt: 'Contemporary restaurant with modern dining comfort',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'modern', 'restaurant', 'comfort']
    },

    // Classroom Category (6 images)
    {
        id: 'random-classroom-7',
        src: '/images/gallary/random/IMG-20250722-WA0103.jpg',
        alt: 'Modern classroom with contemporary learning environment',
        category: 'classroom',
        tags: ['modern', 'contemporary', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-8',
        src: '/images/gallary/random/IMG-20250722-WA0104.jpg',
        alt: 'Luxury classroom with elegant educational design',
        category: 'classroom',
        tags: ['luxury', 'elegant', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-9',
        src: '/images/gallary/random/IMG-20250722-WA0105.jpg',
        alt: 'Contemporary classroom with sophisticated teaching space',
        category: 'classroom',
        tags: ['contemporary', 'sophisticated', 'classroom', 'teaching']
    },
    {
        id: 'random-classroom-10',
        src: '/images/gallary/random/IMG-20250722-WA0106.jpg',
        alt: 'Modern classroom with clean educational aesthetic',
        category: 'classroom',
        tags: ['modern', 'clean', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-11',
        src: '/images/gallary/random/IMG-20250722-WA0107.jpg',
        alt: 'Elegant classroom with premium learning finishes',
        category: 'classroom',
        tags: ['elegant', 'premium', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-12',
        src: '/images/gallary/random/IMG-20250722-WA0108.jpg',
        alt: 'Contemporary classroom with modern educational amenities',
        category: 'classroom',
        tags: ['contemporary', 'modern', 'classroom', 'amenities']
    },

    // Random Images - Third 50 (Batch 3)
    // Apartment Category (6 images)
    {
        id: 'random-apartment-13',
        src: '/images/gallary/random/IMG-20250722-WA0109.jpg',
        alt: 'Luxury apartment with premium interior finishes',
        category: 'apartment',
        tags: ['luxury', 'premium', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-14',
        src: '/images/gallary/random/IMG-20250722-WA0110.jpg',
        alt: 'Modern apartment with sophisticated design elements',
        category: 'apartment',
        tags: ['modern', 'sophisticated', 'apartment', 'design']
    },
    {
        id: 'random-apartment-15',
        src: '/images/gallary/random/IMG-20250722-WA0111.jpg',
        alt: 'Contemporary apartment with elegant living space',
        category: 'apartment',
        tags: ['contemporary', 'elegant', 'apartment', 'living']
    },
    {
        id: 'random-apartment-16',
        src: '/images/gallary/random/IMG-20250722-WA0112.jpg',
        alt: 'Stylish apartment with modern amenities',
        category: 'apartment',
        tags: ['stylish', 'modern', 'apartment', 'amenities']
    },
    {
        id: 'random-apartment-17',
        src: '/images/gallary/random/IMG-20250722-WA0113.jpg',
        alt: 'Premium apartment with contemporary aesthetics',
        category: 'apartment',
        tags: ['premium', 'contemporary', 'apartment', 'aesthetics']
    },
    {
        id: 'random-apartment-18',
        src: '/images/gallary/random/IMG-20250722-WA0114.jpg',
        alt: 'Luxury apartment with sophisticated interior design',
        category: 'apartment',
        tags: ['luxury', 'sophisticated', 'apartment', 'interior']
    },

    // House Category (6 images)
    {
        id: 'random-house-13',
        src: '/images/gallary/random/IMG-20250722-WA0115.jpg',
        alt: 'Elegant house with premium architectural design',
        category: 'house',
        tags: ['elegant', 'premium', 'house', 'architectural']
    },
    {
        id: 'random-house-14',
        src: '/images/gallary/random/IMG-20250722-WA0116.jpg',
        alt: 'Modern house with contemporary exterior',
        category: 'house',
        tags: ['modern', 'contemporary', 'house', 'exterior']
    },
    {
        id: 'random-house-15',
        src: '/images/gallary/random/IMG-20250722-WA0117.jpg',
        alt: 'Luxury house with sophisticated landscaping',
        category: 'house',
        tags: ['luxury', 'sophisticated', 'house', 'landscaping']
    },
    {
        id: 'random-house-16',
        src: '/images/gallary/random/IMG-20250722-WA0118.jpg',
        alt: 'Contemporary house with modern design elements',
        category: 'house',
        tags: ['contemporary', 'modern', 'house', 'design']
    },
    {
        id: 'random-house-17',
        src: '/images/gallary/random/IMG-20250722-WA0119.jpg',
        alt: 'Premium house with elegant architectural features',
        category: 'house',
        tags: ['premium', 'elegant', 'house', 'architectural']
    },
    {
        id: 'random-house-18',
        src: '/images/gallary/random/IMG-20250722-WA0120.jpg',
        alt: 'Stylish house with contemporary aesthetics',
        category: 'house',
        tags: ['stylish', 'contemporary', 'house', 'aesthetics']
    },

    // Bathroom Category (6 images)
    {
        id: 'random-bathroom-13',
        src: '/images/gallary/random/IMG-20250722-WA0121.jpg',
        alt: 'Luxury bathroom with premium fixtures and finishes',
        category: 'bathroom',
        tags: ['luxury', 'premium', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-14',
        src: '/images/gallary/random/IMG-20250722-WA0122.jpg',
        alt: 'Modern bathroom with contemporary design',
        category: 'bathroom',
        tags: ['modern', 'contemporary', 'bathroom', 'design']
    },
    {
        id: 'random-bathroom-15',
        src: '/images/gallary/random/IMG-20250722-WA0123.jpg',
        alt: 'Elegant bathroom with sophisticated amenities',
        category: 'bathroom',
        tags: ['elegant', 'sophisticated', 'bathroom', 'amenities']
    },
    {
        id: 'random-bathroom-16',
        src: '/images/gallary/random/IMG-20250722-WA0124.jpg',
        alt: 'Contemporary bathroom with modern fixtures',
        category: 'bathroom',
        tags: ['contemporary', 'modern', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-17',
        src: '/images/gallary/random/IMG-20250722-WA0125.jpg',
        alt: 'Premium bathroom with luxury finishes',
        category: 'bathroom',
        tags: ['premium', 'luxury', 'bathroom', 'finishes']
    },
    {
        id: 'random-bathroom-18',
        src: '/images/gallary/random/IMG-20250722-WA0126.jpg',
        alt: 'Stylish bathroom with elegant design elements',
        category: 'bathroom',
        tags: ['stylish', 'elegant', 'bathroom', 'design']
    },

    // Kitchen Category (6 images)
    {
        id: 'random-kitchen-13',
        src: '/images/gallary/random/IMG-20250722-WA0127.jpg',
        alt: 'Luxury kitchen with premium appliances and finishes',
        category: 'kitchen',
        tags: ['luxury', 'premium', 'kitchen', 'appliances']
    },
    {
        id: 'random-kitchen-14',
        src: '/images/gallary/random/IMG-20250722-WA0128.jpg',
        alt: 'Modern kitchen with contemporary cabinetry',
        category: 'kitchen',
        tags: ['modern', 'contemporary', 'kitchen', 'cabinetry']
    },
    {
        id: 'random-kitchen-15',
        src: '/images/gallary/random/IMG-20250722-WA0129.jpg',
        alt: 'Elegant kitchen with sophisticated design',
        category: 'kitchen',
        tags: ['elegant', 'sophisticated', 'kitchen', 'design']
    },
    {
        id: 'random-kitchen-16',
        src: '/images/gallary/random/IMG-20250722-WA0130.jpg',
        alt: 'Contemporary kitchen with modern amenities',
        category: 'kitchen',
        tags: ['contemporary', 'modern', 'kitchen', 'amenities']
    },
    {
        id: 'random-kitchen-17',
        src: '/images/gallary/random/IMG-20250722-WA0131.jpg',
        alt: 'Premium kitchen with luxury finishes',
        category: 'kitchen',
        tags: ['premium', 'luxury', 'kitchen', 'finishes']
    },
    {
        id: 'random-kitchen-18',
        src: '/images/gallary/random/IMG-20250722-WA0132.jpg',
        alt: 'Stylish kitchen with elegant countertops',
        category: 'kitchen',
        tags: ['stylish', 'elegant', 'kitchen', 'countertops']
    },

    // Bedroom Category (6 images)
    {
        id: 'random-bedroom-13',
        src: '/images/gallary/random/IMG-20250722-WA0133.jpg',
        alt: 'Luxury bedroom with premium furnishings',
        category: 'bedroom',
        tags: ['luxury', 'premium', 'bedroom', 'furnishings']
    },
    {
        id: 'random-bedroom-14',
        src: '/images/gallary/random/IMG-20250722-WA0134.jpg',
        alt: 'Modern bedroom with contemporary design',
        category: 'bedroom',
        tags: ['modern', 'contemporary', 'bedroom', 'design']
    },
    {
        id: 'random-bedroom-15',
        src: '/images/gallary/random/IMG-20250722-WA0135.jpg',
        alt: 'Elegant bedroom with sophisticated decor',
        category: 'bedroom',
        tags: ['elegant', 'sophisticated', 'bedroom', 'decor']
    },
    {
        id: 'random-bedroom-16',
        src: '/images/gallary/random/IMG-20250722-WA0136.jpg',
        alt: 'Contemporary bedroom with modern amenities',
        category: 'bedroom',
        tags: ['contemporary', 'modern', 'bedroom', 'amenities']
    },
    {
        id: 'random-bedroom-17',
        src: '/images/gallary/random/IMG-20250722-WA0137.jpg',
        alt: 'Premium bedroom with luxury finishes',
        category: 'bedroom',
        tags: ['premium', 'luxury', 'bedroom', 'finishes']
    },
    {
        id: 'random-bedroom-18',
        src: '/images/gallary/random/IMG-20250722-WA0138.jpg',
        alt: 'Stylish bedroom with elegant design elements',
        category: 'bedroom',
        tags: ['stylish', 'elegant', 'bedroom', 'design']
    },

    // Living Room Category (6 images)
    {
        id: 'random-living-room-13',
        src: '/images/gallary/random/IMG-20250722-WA0139.jpg',
        alt: 'Luxury living room with premium furnishings',
        category: 'living-room',
        tags: ['luxury', 'premium', 'living-room', 'furnishings']
    },
    {
        id: 'random-living-room-14',
        src: '/images/gallary/random/IMG-20250722-WA0140.jpg',
        alt: 'Modern living room with contemporary design',
        category: 'living-room',
        tags: ['modern', 'contemporary', 'living-room', 'design']
    },
    {
        id: 'random-living-room-15',
        src: '/images/gallary/random/IMG-20250722-WA0141.jpg',
        alt: 'Elegant living room with sophisticated decor',
        category: 'living-room',
        tags: ['elegant', 'sophisticated', 'living-room', 'decor']
    },
    {
        id: 'random-living-room-16',
        src: '/images/gallary/random/IMG-20250722-WA0142.jpg',
        alt: 'Contemporary living room with modern amenities',
        category: 'living-room',
        tags: ['contemporary', 'modern', 'living-room', 'amenities']
    },
    {
        id: 'random-living-room-17',
        src: '/images/gallary/random/IMG-20250722-WA0143.jpg',
        alt: 'Premium living room with luxury finishes',
        category: 'living-room',
        tags: ['premium', 'luxury', 'living-room', 'finishes']
    },
    {
        id: 'random-living-room-18',
        src: '/images/gallary/random/IMG-20250722-WA0144.jpg',
        alt: 'Stylish living room with elegant design elements',
        category: 'living-room',
        tags: ['stylish', 'elegant', 'living-room', 'design']
    },

    // Office Category (6 images)
    {
        id: 'random-office-13',
        src: '/images/gallary/random/IMG-20250722-WA0145.jpg',
        alt: 'Luxury office with premium workspace design',
        category: 'office',
        tags: ['luxury', 'premium', 'office', 'workspace']
    },
    {
        id: 'random-office-14',
        src: '/images/gallary/random/IMG-20250722-WA0146.jpg',
        alt: 'Modern office with contemporary professional environment',
        category: 'office',
        tags: ['modern', 'contemporary', 'office', 'professional']
    },
    {
        id: 'random-office-15',
        src: '/images/gallary/random/IMG-20250722-WA0147.jpg',
        alt: 'Elegant office with sophisticated business amenities',
        category: 'office',
        tags: ['elegant', 'sophisticated', 'office', 'business']
    },
    {
        id: 'random-office-16',
        src: '/images/gallary/random/IMG-20250722-WA0148.jpg',
        alt: 'Contemporary office with modern corporate design',
        category: 'office',
        tags: ['contemporary', 'modern', 'office', 'corporate']
    },
    {
        id: 'random-office-17',
        src: '/images/gallary/random/IMG-20250722-WA0149.jpg',
        alt: 'Premium office with luxury professional finishes',
        category: 'office',
        tags: ['premium', 'luxury', 'office', 'professional']
    },
    {
        id: 'random-office-18',
        src: '/images/gallary/random/IMG-20250722-WA0150.jpg',
        alt: 'Stylish office with elegant business environment',
        category: 'office',
        tags: ['stylish', 'elegant', 'office', 'business']
    },

    // Cafe/Restaurant Category (6 images)
    {
        id: 'random-cafe-restaurant-13',
        src: '/images/gallary/random/IMG-20250722-WA0151.jpg',
        alt: 'Luxury restaurant with premium dining atmosphere',
        category: 'cafe-restaurant',
        tags: ['luxury', 'premium', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-restaurant-14',
        src: '/images/gallary/random/IMG-20250722-WA0152.jpg',
        alt: 'Modern cafe with contemporary culinary design',
        category: 'cafe-restaurant',
        tags: ['modern', 'contemporary', 'cafe', 'culinary']
    },
    {
        id: 'random-cafe-restaurant-15',
        src: '/images/gallary/random/IMG-20250722-WA0153.jpg',
        alt: 'Elegant restaurant with sophisticated dining space',
        category: 'cafe-restaurant',
        tags: ['elegant', 'sophisticated', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-restaurant-16',
        src: '/images/gallary/random/IMG-20250722-WA0154.jpg',
        alt: 'Contemporary cafe with modern hospitality design',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'modern', 'cafe', 'hospitality']
    },
    {
        id: 'random-cafe-restaurant-17',
        src: '/images/gallary/random/IMG-20250722-WA0155.jpg',
        alt: 'Premium restaurant with luxury dining amenities',
        category: 'cafe-restaurant',
        tags: ['premium', 'luxury', 'restaurant', 'amenities']
    },
    {
        id: 'random-cafe-restaurant-18',
        src: '/images/gallary/random/IMG-20250722-WA0156.jpg',
        alt: 'Stylish cafe with elegant culinary environment',
        category: 'cafe-restaurant',
        tags: ['stylish', 'elegant', 'cafe', 'culinary']
    },

    // Classroom Category (6 images)
    {
        id: 'random-classroom-13',
        src: '/images/gallary/random/IMG-20250722-WA0157.jpg',
        alt: 'Luxury classroom with premium educational facilities',
        category: 'classroom',
        tags: ['luxury', 'premium', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-14',
        src: '/images/gallary/random/IMG-20250722-WA0158.jpg',
        alt: 'Modern classroom with contemporary learning environment',
        category: 'classroom',
        tags: ['modern', 'contemporary', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-15',
        src: '/images/gallary/random/IMG-20250722-WA0159.jpg',
        alt: 'Elegant classroom with sophisticated teaching space',
        category: 'classroom',
        tags: ['elegant', 'sophisticated', 'classroom', 'teaching']
    },
    {
        id: 'random-classroom-16',
        src: '/images/gallary/random/IMG-20250722-WA0160.jpg',
        alt: 'Contemporary classroom with modern educational design',
        category: 'classroom',
        tags: ['contemporary', 'modern', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-17',
        src: '/images/gallary/random/IMG-20250722-WA0161.jpg',
        alt: 'Premium classroom with luxury learning amenities',
        category: 'classroom',
        tags: ['premium', 'luxury', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-18',
        src: '/images/gallary/random/IMG-20250722-WA0162.jpg',
        alt: 'Stylish classroom with elegant educational environment',
        category: 'classroom',
        tags: ['stylish', 'elegant', 'classroom', 'educational']
    },

    // Random Images - Fourth 50 (Batch 4)
    // Apartment Category (6 images)
    {
        id: 'random-apartment-19',
        src: '/images/gallary/random/IMG-20250722-WA0163.jpg',
        alt: 'Contemporary apartment with modern interior design',
        category: 'apartment',
        tags: ['contemporary', 'modern', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-20',
        src: '/images/gallary/random/IMG-20250722-WA0164.jpg',
        alt: 'Luxury apartment with sophisticated living space',
        category: 'apartment',
        tags: ['luxury', 'sophisticated', 'apartment', 'living']
    },
    {
        id: 'random-apartment-21',
        src: '/images/gallary/random/IMG-20250722-WA0165.jpg',
        alt: 'Modern apartment with elegant design elements',
        category: 'apartment',
        tags: ['modern', 'elegant', 'apartment', 'design']
    },
    {
        id: 'random-apartment-22',
        src: '/images/gallary/random/IMG-20250722-WA0166.jpg',
        alt: 'Premium apartment with contemporary amenities',
        category: 'apartment',
        tags: ['premium', 'contemporary', 'apartment', 'amenities']
    },
    {
        id: 'random-apartment-23',
        src: '/images/gallary/random/IMG-20250722-WA0167.jpg',
        alt: 'Stylish apartment with modern interior finishes',
        category: 'apartment',
        tags: ['stylish', 'modern', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-24',
        src: '/images/gallary/random/IMG-20250722-WA0168.jpg',
        alt: 'Elegant apartment with sophisticated design',
        category: 'apartment',
        tags: ['elegant', 'sophisticated', 'apartment', 'design']
    },

    // House Category (6 images)
    {
        id: 'random-house-19',
        src: '/images/gallary/random/IMG-20250722-WA0169.jpg',
        alt: 'Modern house with contemporary architecture',
        category: 'house',
        tags: ['modern', 'contemporary', 'house', 'architecture']
    },
    {
        id: 'random-house-20',
        src: '/images/gallary/random/IMG-20250722-WA0170.jpg',
        alt: 'Luxury house with premium interior design',
        category: 'house',
        tags: ['luxury', 'premium', 'house', 'interior']
    },
    {
        id: 'random-house-21',
        src: '/images/gallary/random/IMG-20250722-WA0171.jpg',
        alt: 'Elegant house with sophisticated living spaces',
        category: 'house',
        tags: ['elegant', 'sophisticated', 'house', 'living']
    },
    {
        id: 'random-house-22',
        src: '/images/gallary/random/IMG-20250722-WA0172.jpg',
        alt: 'Contemporary house with modern amenities',
        category: 'house',
        tags: ['contemporary', 'modern', 'house', 'amenities']
    },
    {
        id: 'random-house-23',
        src: '/images/gallary/random/IMG-20250722-WA0173.jpg',
        alt: 'Premium house with stylish design elements',
        category: 'house',
        tags: ['premium', 'stylish', 'house', 'design']
    },
    {
        id: 'random-house-24',
        src: '/images/gallary/random/IMG-20250722-WA0174.jpg',
        alt: 'Modern house with elegant interior finishes',
        category: 'house',
        tags: ['modern', 'elegant', 'house', 'interior']
    },

    // Bathroom Category (6 images)
    {
        id: 'random-bathroom-19',
        src: '/images/gallary/random/IMG-20250722-WA0175.jpg',
        alt: 'Luxury bathroom with premium fixtures',
        category: 'bathroom',
        tags: ['luxury', 'premium', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-20',
        src: '/images/gallary/random/IMG-20250722-WA0176.jpg',
        alt: 'Modern bathroom with contemporary design',
        category: 'bathroom',
        tags: ['modern', 'contemporary', 'bathroom', 'design']
    },
    {
        id: 'random-bathroom-21',
        src: '/images/gallary/random/IMG-20250722-WA0177.jpg',
        alt: 'Elegant bathroom with sophisticated amenities',
        category: 'bathroom',
        tags: ['elegant', 'sophisticated', 'bathroom', 'amenities']
    },
    {
        id: 'random-bathroom-22',
        src: '/images/gallary/random/IMG-20250722-WA0178.jpg',
        alt: 'Premium bathroom with stylish finishes',
        category: 'bathroom',
        tags: ['premium', 'stylish', 'bathroom', 'finishes']
    },
    {
        id: 'random-bathroom-23',
        src: '/images/gallary/random/IMG-20250722-WA0179.jpg',
        alt: 'Contemporary bathroom with modern fixtures',
        category: 'bathroom',
        tags: ['contemporary', 'modern', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-24',
        src: '/images/gallary/random/IMG-20250722-WA0180.jpg',
        alt: 'Sophisticated bathroom with luxury amenities',
        category: 'bathroom',
        tags: ['sophisticated', 'luxury', 'bathroom', 'amenities']
    },

    // Kitchen Category (6 images)
    {
        id: 'random-kitchen-19',
        src: '/images/gallary/random/IMG-20250722-WA0181.jpg',
        alt: 'Modern kitchen with contemporary appliances',
        category: 'kitchen',
        tags: ['modern', 'contemporary', 'kitchen', 'appliances']
    },
    {
        id: 'random-kitchen-20',
        src: '/images/gallary/random/IMG-20250722-WA0182.jpg',
        alt: 'Luxury kitchen with premium cabinetry',
        category: 'kitchen',
        tags: ['luxury', 'premium', 'kitchen', 'cabinetry']
    },
    {
        id: 'random-kitchen-21',
        src: '/images/gallary/random/IMG-20250722-WA0183.jpg',
        alt: 'Elegant kitchen with sophisticated design',
        category: 'kitchen',
        tags: ['elegant', 'sophisticated', 'kitchen', 'design']
    },
    {
        id: 'random-kitchen-22',
        src: '/images/gallary/random/IMG-20250722-WA0184.jpg',
        alt: 'Premium kitchen with stylish finishes',
        category: 'kitchen',
        tags: ['premium', 'stylish', 'kitchen', 'finishes']
    },
    {
        id: 'random-kitchen-23',
        src: '/images/gallary/random/IMG-20250722-WA0185.jpg',
        alt: 'Contemporary kitchen with modern amenities',
        category: 'kitchen',
        tags: ['contemporary', 'modern', 'kitchen', 'amenities']
    },
    {
        id: 'random-kitchen-24',
        src: '/images/gallary/random/IMG-20250722-WA0186.jpg',
        alt: 'Sophisticated kitchen with luxury features',
        category: 'kitchen',
        tags: ['sophisticated', 'luxury', 'kitchen', 'features']
    },

    // Bedroom Category (6 images)
    {
        id: 'random-bedroom-19',
        src: '/images/gallary/random/IMG-20250722-WA0187.jpg',
        alt: 'Luxury bedroom with premium furnishings',
        category: 'bedroom',
        tags: ['luxury', 'premium', 'bedroom', 'furnishings']
    },
    {
        id: 'random-bedroom-20',
        src: '/images/gallary/random/IMG-20250722-WA0188.jpg',
        alt: 'Modern bedroom with contemporary design',
        category: 'bedroom',
        tags: ['modern', 'contemporary', 'bedroom', 'design']
    },
    {
        id: 'random-bedroom-21',
        src: '/images/gallary/random/IMG-20250722-WA0189.jpg',
        alt: 'Elegant bedroom with sophisticated decor',
        category: 'bedroom',
        tags: ['elegant', 'sophisticated', 'bedroom', 'decor']
    },
    {
        id: 'random-bedroom-22',
        src: '/images/gallary/random/IMG-20250722-WA0190.jpg',
        alt: 'Premium bedroom with stylish amenities',
        category: 'bedroom',
        tags: ['premium', 'stylish', 'bedroom', 'amenities']
    },
    {
        id: 'random-bedroom-23',
        src: '/images/gallary/random/IMG-20250722-WA0191.jpg',
        alt: 'Contemporary bedroom with modern features',
        category: 'bedroom',
        tags: ['contemporary', 'modern', 'bedroom', 'features']
    },
    {
        id: 'random-bedroom-24',
        src: '/images/gallary/random/IMG-20250722-WA0192.jpg',
        alt: 'Sophisticated bedroom with luxury design',
        category: 'bedroom',
        tags: ['sophisticated', 'luxury', 'bedroom', 'design']
    },

    // Living Room Category (6 images)
    {
        id: 'random-living-room-19',
        src: '/images/gallary/random/IMG-20250722-WA0193.jpg',
        alt: 'Modern living room with contemporary furniture',
        category: 'living-room',
        tags: ['modern', 'contemporary', 'living-room', 'furniture']
    },
    {
        id: 'random-living-room-20',
        src: '/images/gallary/random/IMG-20250722-WA0194.jpg',
        alt: 'Luxury living room with premium design',
        category: 'living-room',
        tags: ['luxury', 'premium', 'living-room', 'design']
    },
    {
        id: 'random-living-room-21',
        src: '/images/gallary/random/IMG-20250722-WA0195.jpg',
        alt: 'Elegant living room with sophisticated decor',
        category: 'living-room',
        tags: ['elegant', 'sophisticated', 'living-room', 'decor']
    },
    {
        id: 'random-living-room-22',
        src: '/images/gallary/random/IMG-20250722-WA0196.jpg',
        alt: 'Premium living room with stylish amenities',
        category: 'living-room',
        tags: ['premium', 'stylish', 'living-room', 'amenities']
    },
    {
        id: 'random-living-room-23',
        src: '/images/gallary/random/IMG-20250722-WA0197.jpg',
        alt: 'Contemporary living room with modern features',
        category: 'living-room',
        tags: ['contemporary', 'modern', 'living-room', 'features']
    },
    {
        id: 'random-living-room-24',
        src: '/images/gallary/random/IMG-20250722-WA0198.jpg',
        alt: 'Sophisticated living room with luxury finishes',
        category: 'living-room',
        tags: ['sophisticated', 'luxury', 'living-room', 'finishes']
    },

    // Office Category (6 images)
    {
        id: 'random-office-19',
        src: '/images/gallary/random/IMG-20250722-WA0199.jpg',
        alt: 'Modern office with contemporary workspace',
        category: 'office',
        tags: ['modern', 'contemporary', 'office', 'workspace']
    },
    {
        id: 'random-office-20',
        src: '/images/gallary/random/IMG-20250722-WA0200.jpg',
        alt: 'Luxury office with premium amenities',
        category: 'office',
        tags: ['luxury', 'premium', 'office', 'amenities']
    },
    {
        id: 'random-office-21',
        src: '/images/gallary/random/IMG-20250722-WA0201.jpg',
        alt: 'Elegant office with sophisticated design',
        category: 'office',
        tags: ['elegant', 'sophisticated', 'office', 'design']
    },
    {
        id: 'random-office-22',
        src: '/images/gallary/random/IMG-20250722-WA0202.jpg',
        alt: 'Premium office with stylish workspace',
        category: 'office',
        tags: ['premium', 'stylish', 'office', 'workspace']
    },
    {
        id: 'random-office-23',
        src: '/images/gallary/random/IMG-20250722-WA0203.jpg',
        alt: 'Contemporary office with modern features',
        category: 'office',
        tags: ['contemporary', 'modern', 'office', 'features']
    },
    {
        id: 'random-office-24',
        src: '/images/gallary/random/IMG-20250722-WA0204.jpg',
        alt: 'Sophisticated office with luxury amenities',
        category: 'office',
        tags: ['sophisticated', 'luxury', 'office', 'amenities']
    },

    // Cafe/Restaurant Category (6 images)
    {
        id: 'random-cafe-restaurant-19',
        src: '/images/gallary/random/IMG-20250722-WA0205.jpg',
        alt: 'Modern restaurant with contemporary dining space',
        category: 'cafe-restaurant',
        tags: ['modern', 'contemporary', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-restaurant-20',
        src: '/images/gallary/random/IMG-20250722-WA0206.jpg',
        alt: 'Luxury restaurant with premium atmosphere',
        category: 'cafe-restaurant',
        tags: ['luxury', 'premium', 'restaurant', 'atmosphere']
    },
    {
        id: 'random-cafe-restaurant-21',
        src: '/images/gallary/random/IMG-20250722-WA0207.jpg',
        alt: 'Elegant restaurant with sophisticated design',
        category: 'cafe-restaurant',
        tags: ['elegant', 'sophisticated', 'restaurant', 'design']
    },
    {
        id: 'random-cafe-restaurant-22',
        src: '/images/gallary/random/IMG-20250722-WA0208.jpg',
        alt: 'Premium restaurant with stylish dining area',
        category: 'cafe-restaurant',
        tags: ['premium', 'stylish', 'restaurant', 'dining']
    },
    {
        id: 'random-cafe-restaurant-23',
        src: '/images/gallary/random/IMG-20250722-WA0209.jpg',
        alt: 'Contemporary restaurant with modern amenities',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'modern', 'restaurant', 'amenities']
    },
    {
        id: 'random-cafe-restaurant-24',
        src: '/images/gallary/random/IMG-20250722-WA0210.jpg',
        alt: 'Sophisticated restaurant with luxury features',
        category: 'cafe-restaurant',
        tags: ['sophisticated', 'luxury', 'restaurant', 'features']
    },

    // Classroom Category (6 images)
    {
        id: 'random-classroom-19',
        src: '/images/gallary/random/IMG-20250722-WA0211.jpg',
        alt: 'Modern classroom with contemporary learning space',
        category: 'classroom',
        tags: ['modern', 'contemporary', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-20',
        src: '/images/gallary/random/IMG-20250722-WA0212.jpg',
        alt: 'Luxury classroom with premium educational facilities',
        category: 'classroom',
        tags: ['luxury', 'premium', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-21',
        src: '/images/gallary/random/IMG-20250722-WA0213.jpg',
        alt: 'Elegant classroom with sophisticated teaching environment',
        category: 'classroom',
        tags: ['elegant', 'sophisticated', 'classroom', 'teaching']
    },
    {
        id: 'random-classroom-22',
        src: '/images/gallary/random/IMG-20250722-WA0214.jpg',
        alt: 'Premium classroom with stylish learning amenities',
        category: 'classroom',
        tags: ['premium', 'stylish', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-23',
        src: '/images/gallary/random/IMG-20250722-WA0215.jpg',
        alt: 'Contemporary classroom with modern educational design',
        category: 'classroom',
        tags: ['contemporary', 'modern', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-24',
        src: '/images/gallary/random/IMG-20250722-WA0216.jpg',
        alt: 'Sophisticated classroom with luxury learning space',
        category: 'classroom',
        tags: ['sophisticated', 'luxury', 'classroom', 'learning']
    },

    // Random Images - Fifth 50 (Batch 5)
    // Apartment Category (6 images)
    {
        id: 'random-apartment-25',
        src: '/images/gallary/random/IMG-20250722-WA0217.jpg',
        alt: 'Modern apartment with contemporary interior design',
        category: 'apartment',
        tags: ['modern', 'contemporary', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-26',
        src: '/images/gallary/random/IMG-20250722-WA0218.jpg',
        alt: 'Luxury apartment with sophisticated living space',
        category: 'apartment',
        tags: ['luxury', 'sophisticated', 'apartment', 'living']
    },
    {
        id: 'random-apartment-27',
        src: '/images/gallary/random/IMG-20250722-WA0219.jpg',
        alt: 'Elegant apartment with premium amenities',
        category: 'apartment',
        tags: ['elegant', 'premium', 'apartment', 'amenities']
    },
    {
        id: 'random-apartment-28',
        src: '/images/gallary/random/IMG-20250722-WA0220.jpg',
        alt: 'Contemporary apartment with stylish design',
        category: 'apartment',
        tags: ['contemporary', 'stylish', 'apartment', 'design']
    },
    {
        id: 'random-apartment-29',
        src: '/images/gallary/random/IMG-20250722-WA0221.jpg',
        alt: 'Premium apartment with modern interior',
        category: 'apartment',
        tags: ['premium', 'modern', 'apartment', 'interior']
    },
    {
        id: 'random-apartment-30',
        src: '/images/gallary/random/IMG-20250722-WA0222.jpg',
        alt: 'Sophisticated apartment with luxury finishes',
        category: 'apartment',
        tags: ['sophisticated', 'luxury', 'apartment', 'finishes']
    },

    // House Category (6 images)
    {
        id: 'random-house-25',
        src: '/images/gallary/random/IMG-20250722-WA0223.jpg',
        alt: 'Modern house with contemporary architecture',
        category: 'house',
        tags: ['modern', 'contemporary', 'house', 'architecture']
    },
    {
        id: 'random-house-26',
        src: '/images/gallary/random/IMG-20250722-WA0224.jpg',
        alt: 'Luxury house with sophisticated design',
        category: 'house',
        tags: ['luxury', 'sophisticated', 'house', 'design']
    },
    {
        id: 'random-house-27',
        src: '/images/gallary/random/IMG-20250722-WA0225.jpg',
        alt: 'Elegant house with premium features',
        category: 'house',
        tags: ['elegant', 'premium', 'house', 'features']
    },
    {
        id: 'random-house-28',
        src: '/images/gallary/random/IMG-20250722-WA0226.jpg',
        alt: 'Contemporary house with stylish interior',
        category: 'house',
        tags: ['contemporary', 'stylish', 'house', 'interior']
    },
    {
        id: 'random-house-29',
        src: '/images/gallary/random/IMG-20250722-WA0227.jpg',
        alt: 'Premium house with modern amenities',
        category: 'house',
        tags: ['premium', 'modern', 'house', 'amenities']
    },
    {
        id: 'random-house-30',
        src: '/images/gallary/random/IMG-20250722-WA0228.jpg',
        alt: 'Sophisticated house with luxury finishes',
        category: 'house',
        tags: ['sophisticated', 'luxury', 'house', 'finishes']
    },

    // Bathroom Category (6 images)
    {
        id: 'random-bathroom-25',
        src: '/images/gallary/random/IMG-20250722-WA0229.jpg',
        alt: 'Modern bathroom with contemporary fixtures',
        category: 'bathroom',
        tags: ['modern', 'contemporary', 'bathroom', 'fixtures']
    },
    {
        id: 'random-bathroom-26',
        src: '/images/gallary/random/IMG-20250722-WA0230.jpg',
        alt: 'Luxury bathroom with sophisticated design',
        category: 'bathroom',
        tags: ['luxury', 'sophisticated', 'bathroom', 'design']
    },
    {
        id: 'random-bathroom-27',
        src: '/images/gallary/random/IMG-20250722-WA0231.jpg',
        alt: 'Elegant bathroom with premium amenities',
        category: 'bathroom',
        tags: ['elegant', 'premium', 'bathroom', 'amenities']
    },
    {
        id: 'random-bathroom-28',
        src: '/images/gallary/random/IMG-20250722-WA0232.jpg',
        alt: 'Contemporary bathroom with stylish features',
        category: 'bathroom',
        tags: ['contemporary', 'stylish', 'bathroom', 'features']
    },
    {
        id: 'random-bathroom-29',
        src: '/images/gallary/random/IMG-20250722-WA0233.jpg',
        alt: 'Premium bathroom with modern design',
        category: 'bathroom',
        tags: ['premium', 'modern', 'bathroom', 'design']
    },
    {
        id: 'random-bathroom-30',
        src: '/images/gallary/random/IMG-20250722-WA0234.jpg',
        alt: 'Sophisticated bathroom with luxury finishes',
        category: 'bathroom',
        tags: ['sophisticated', 'luxury', 'bathroom', 'finishes']
    },

    // Kitchen Category (6 images)
    {
        id: 'random-kitchen-25',
        src: '/images/gallary/random/IMG-20250722-WA0235.jpg',
        alt: 'Modern kitchen with contemporary appliances',
        category: 'kitchen',
        tags: ['modern', 'contemporary', 'kitchen', 'appliances']
    },
    {
        id: 'random-kitchen-26',
        src: '/images/gallary/random/IMG-20250722-WA0236.jpg',
        alt: 'Luxury kitchen with sophisticated design',
        category: 'kitchen',
        tags: ['luxury', 'sophisticated', 'kitchen', 'design']
    },
    {
        id: 'random-kitchen-27',
        src: '/images/gallary/random/IMG-20250722-WA0237.jpg',
        alt: 'Elegant kitchen with premium features',
        category: 'kitchen',
        tags: ['elegant', 'premium', 'kitchen', 'features']
    },
    {
        id: 'random-kitchen-28',
        src: '/images/gallary/random/IMG-20250722-WA0238.jpg',
        alt: 'Contemporary kitchen with stylish cabinets',
        category: 'kitchen',
        tags: ['contemporary', 'stylish', 'kitchen', 'cabinets']
    },
    {
        id: 'random-kitchen-29',
        src: '/images/gallary/random/IMG-20250722-WA0239.jpg',
        alt: 'Premium kitchen with modern amenities',
        category: 'kitchen',
        tags: ['premium', 'modern', 'kitchen', 'amenities']
    },
    {
        id: 'random-kitchen-30',
        src: '/images/gallary/random/IMG-20250722-WA0240.jpg',
        alt: 'Sophisticated kitchen with luxury finishes',
        category: 'kitchen',
        tags: ['sophisticated', 'luxury', 'kitchen', 'finishes']
    },

    // Bedroom Category (6 images)
    {
        id: 'random-bedroom-25',
        src: '/images/gallary/random/IMG-20250722-WA0241.jpg',
        alt: 'Modern bedroom with contemporary furniture',
        category: 'bedroom',
        tags: ['modern', 'contemporary', 'bedroom', 'furniture']
    },
    {
        id: 'random-bedroom-26',
        src: '/images/gallary/random/IMG-20250722-WA0242.jpg',
        alt: 'Luxury bedroom with sophisticated design',
        category: 'bedroom',
        tags: ['luxury', 'sophisticated', 'bedroom', 'design']
    },
    {
        id: 'random-bedroom-27',
        src: '/images/gallary/random/IMG-20250722-WA0243.jpg',
        alt: 'Elegant bedroom with premium amenities',
        category: 'bedroom',
        tags: ['elegant', 'premium', 'bedroom', 'amenities']
    },
    {
        id: 'random-bedroom-28',
        src: '/images/gallary/random/IMG-20250722-WA0244.jpg',
        alt: 'Contemporary bedroom with stylish decor',
        category: 'bedroom',
        tags: ['contemporary', 'stylish', 'bedroom', 'decor']
    },
    {
        id: 'random-bedroom-29',
        src: '/images/gallary/random/IMG-20250722-WA0245.jpg',
        alt: 'Premium bedroom with modern features',
        category: 'bedroom',
        tags: ['premium', 'modern', 'bedroom', 'features']
    },
    {
        id: 'random-bedroom-30',
        src: '/images/gallary/random/IMG-20250722-WA0246.jpg',
        alt: 'Sophisticated bedroom with luxury finishes',
        category: 'bedroom',
        tags: ['sophisticated', 'luxury', 'bedroom', 'finishes']
    },

    // Living Room Category (6 images)
    {
        id: 'random-living-room-25',
        src: '/images/gallary/random/IMG-20250722-WA0247.jpg',
        alt: 'Modern living room with contemporary design',
        category: 'living-room',
        tags: ['modern', 'contemporary', 'living-room', 'design']
    },
    {
        id: 'random-living-room-26',
        src: '/images/gallary/random/IMG-20250722-WA0248.jpg',
        alt: 'Luxury living room with sophisticated furniture',
        category: 'living-room',
        tags: ['luxury', 'sophisticated', 'living-room', 'furniture']
    },
    {
        id: 'random-living-room-27',
        src: '/images/gallary/random/IMG-20250722-WA0249.jpg',
        alt: 'Elegant living room with premium amenities',
        category: 'living-room',
        tags: ['elegant', 'premium', 'living-room', 'amenities']
    },
    {
        id: 'random-living-room-28',
        src: '/images/gallary/random/IMG-20250722-WA0250.jpg',
        alt: 'Contemporary living room with stylish decor',
        category: 'living-room',
        tags: ['contemporary', 'stylish', 'living-room', 'decor']
    },
    {
        id: 'random-living-room-29',
        src: '/images/gallary/random/IMG-20250722-WA0251.jpg',
        alt: 'Premium living room with modern features',
        category: 'living-room',
        tags: ['premium', 'modern', 'living-room', 'features']
    },
    {
        id: 'random-living-room-30',
        src: '/images/gallary/random/IMG-20250722-WA0252.jpg',
        alt: 'Sophisticated living room with luxury finishes',
        category: 'living-room',
        tags: ['sophisticated', 'luxury', 'living-room', 'finishes']
    },

    // Office Category (6 images)
    {
        id: 'random-office-25',
        src: '/images/gallary/random/IMG-20250722-WA0253.jpg',
        alt: 'Modern office with contemporary workspace',
        category: 'office',
        tags: ['modern', 'contemporary', 'office', 'workspace']
    },
    {
        id: 'random-office-26',
        src: '/images/gallary/random/IMG-20250722-WA0254.jpg',
        alt: 'Luxury office with sophisticated design',
        category: 'office',
        tags: ['luxury', 'sophisticated', 'office', 'design']
    },
    {
        id: 'random-office-27',
        src: '/images/gallary/random/IMG-20250722-WA0255.jpg',
        alt: 'Elegant office with premium amenities',
        category: 'office',
        tags: ['elegant', 'premium', 'office', 'amenities']
    },
    {
        id: 'random-office-28',
        src: '/images/gallary/random/IMG-20250722-WA0256.jpg',
        alt: 'Contemporary office with stylish furniture',
        category: 'office',
        tags: ['contemporary', 'stylish', 'office', 'furniture']
    },
    {
        id: 'random-office-29',
        src: '/images/gallary/random/IMG-20250722-WA0257.jpg',
        alt: 'Premium office with modern features',
        category: 'office',
        tags: ['premium', 'modern', 'office', 'features']
    },
    {
        id: 'random-office-30',
        src: '/images/gallary/random/IMG-20250722-WA0258.jpg',
        alt: 'Sophisticated office with luxury finishes',
        category: 'office',
        tags: ['sophisticated', 'luxury', 'office', 'finishes']
    },

    // Cafe/Restaurant Category (6 images)
    {
        id: 'random-cafe-restaurant-25',
        src: '/images/gallary/random/IMG-20250722-WA0259.jpg',
        alt: 'Modern cafe with contemporary dining space',
        category: 'cafe-restaurant',
        tags: ['modern', 'contemporary', 'cafe', 'dining']
    },
    {
        id: 'random-cafe-restaurant-26',
        src: '/images/gallary/random/IMG-20250722-WA0260.jpg',
        alt: 'Luxury restaurant with sophisticated ambiance',
        category: 'cafe-restaurant',
        tags: ['luxury', 'sophisticated', 'restaurant', 'ambiance']
    },
    {
        id: 'random-cafe-restaurant-27',
        src: '/images/gallary/random/IMG-20250722-WA0261.jpg',
        alt: 'Elegant cafe with premium dining experience',
        category: 'cafe-restaurant',
        tags: ['elegant', 'premium', 'cafe', 'dining']
    },
    {
        id: 'random-cafe-restaurant-28',
        src: '/images/gallary/random/IMG-20250722-WA0262.jpg',
        alt: 'Contemporary restaurant with stylish decor',
        category: 'cafe-restaurant',
        tags: ['contemporary', 'stylish', 'restaurant', 'decor']
    },
    {
        id: 'random-cafe-restaurant-29',
        src: '/images/gallary/random/IMG-20250722-WA0263.jpg',
        alt: 'Premium cafe with modern amenities',
        category: 'cafe-restaurant',
        tags: ['premium', 'modern', 'cafe', 'amenities']
    },
    {
        id: 'random-cafe-restaurant-30',
        src: '/images/gallary/random/IMG-20250722-WA0264.jpg',
        alt: 'Sophisticated restaurant with luxury finishes',
        category: 'cafe-restaurant',
        tags: ['sophisticated', 'luxury', 'restaurant', 'finishes']
    },

    // Classroom Category (6 images)
    {
        id: 'random-classroom-25',
        src: '/images/gallary/random/IMG-20250722-WA0265.jpg',
        alt: 'Modern classroom with contemporary learning space',
        category: 'classroom',
        tags: ['modern', 'contemporary', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-26',
        src: '/images/gallary/random/IMG-20250722-WA0266.jpg',
        alt: 'Luxury classroom with sophisticated educational facilities',
        category: 'classroom',
        tags: ['luxury', 'sophisticated', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-27',
        src: '/images/gallary/random/IMG-20250722-WA0267.jpg',
        alt: 'Elegant classroom with premium teaching environment',
        category: 'classroom',
        tags: ['elegant', 'premium', 'classroom', 'teaching']
    },
    {
        id: 'random-classroom-28',
        src: '/images/gallary/random/IMG-20250722-WA0268.jpg',
        alt: 'Contemporary classroom with stylish learning amenities',
        category: 'classroom',
        tags: ['contemporary', 'stylish', 'classroom', 'learning']
    },
    {
        id: 'random-classroom-29',
        src: '/images/gallary/random/IMG-20250722-WA0269.jpg',
        alt: 'Premium classroom with modern educational design',
        category: 'classroom',
        tags: ['premium', 'modern', 'classroom', 'educational']
    },
    {
        id: 'random-classroom-30',
        src: '/images/gallary/random/IMG-20250722-WA0270.jpg',
        alt: 'Sophisticated classroom with luxury learning space',
        category: 'classroom',
        tags: ['sophisticated', 'luxury', 'classroom', 'learning']
    },

    // Random Images - Final Batch (11 images)
    // Apartment Category (1 image)
    {
        id: 'random-apartment-31',
        src: '/images/gallary/random/IMG-20250722-WA0271.jpg',
        alt: 'Contemporary apartment with modern interior design',
        category: 'apartment',
        tags: ['contemporary', 'modern', 'apartment', 'interior']
    },

    // House Category (1 image)
    {
        id: 'random-house-31',
        src: '/images/gallary/random/IMG-20250722-WA0272.jpg',
        alt: 'Luxury house with sophisticated architectural design',
        category: 'house',
        tags: ['luxury', 'sophisticated', 'house', 'architectural']
    },

    // Bathroom Category (1 image)
    {
        id: 'random-bathroom-31',
        src: '/images/gallary/random/IMG-20250722-WA0273.jpg',
        alt: 'Modern bathroom with elegant fixtures and design',
        category: 'bathroom',
        tags: ['modern', 'elegant', 'bathroom', 'fixtures']
    },

    // Kitchen Category (1 image)
    {
        id: 'random-kitchen-31',
        src: '/images/gallary/random/IMG-20250722-WA0274.jpg',
        alt: 'Contemporary kitchen with premium appliances',
        category: 'kitchen',
        tags: ['contemporary', 'premium', 'kitchen', 'appliances']
    },

    // Bedroom Category (1 image)
    {
        id: 'random-bedroom-31',
        src: '/images/gallary/random/IMG-20250722-WA0275.jpg',
        alt: 'Luxury bedroom with sophisticated sleeping space',
        category: 'bedroom',
        tags: ['luxury', 'sophisticated', 'bedroom', 'sleeping']
    },

    // Living Room Category (1 image)
    {
        id: 'random-living-room-31',
        src: '/images/gallary/random/IMG-20250722-WA0276.jpg',
        alt: 'Modern living room with contemporary furniture',
        category: 'living-room',
        tags: ['modern', 'contemporary', 'living-room', 'furniture']
    },

    // Office Category (1 image)
    {
        id: 'random-office-31',
        src: '/images/gallary/random/IMG-20250722-WA0277.jpg',
        alt: 'Contemporary office with professional workspace',
        category: 'office',
        tags: ['contemporary', 'professional', 'office', 'workspace']
    },

    // Cafe/Restaurant Category (1 image)
    {
        id: 'random-cafe-restaurant-31',
        src: '/images/gallary/random/IMG-20250722-WA0278.jpg',
        alt: 'Elegant restaurant with sophisticated dining atmosphere',
        category: 'cafe-restaurant',
        tags: ['elegant', 'sophisticated', 'restaurant', 'dining']
    },

    // Classroom Category (1 image)
    {
        id: 'random-classroom-31',
        src: '/images/gallary/random/IMG-20250722-WA0279.jpg',
        alt: 'Modern classroom with contemporary educational space',
        category: 'classroom',
        tags: ['modern', 'contemporary', 'classroom', 'educational']
    },

    // Additional images for better distribution
    // Apartment Category (1 additional image)
    {
        id: 'random-apartment-32',
        src: '/images/gallary/random/IMG-20250722-WA0280.jpg',
        alt: 'Premium apartment with luxury interior finishes',
        category: 'apartment',
        tags: ['premium', 'luxury', 'apartment', 'finishes']
    },

    // House Category (1 additional image)
    {
        id: 'random-house-32',
        src: '/images/gallary/random/IMG-20250722-WA0281.jpg',
        alt: 'Contemporary house with modern architectural elements',
        category: 'house',
        tags: ['contemporary', 'modern', 'house', 'architectural']
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