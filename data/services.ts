export type Service = {
    id: string
    titleKey: string
    summaryKey: string
    image: string
    icon: string
    features: string[]
}

export const services: Service[] = [
    {
        id: 'joinery',
        titleKey: 'joinery.title',
        summaryKey: 'joinery.summary',
        image: '/images/gallary/2150165498.jpg',
        icon: '🪚',
        features: ['joinery.feature1', 'joinery.feature2', 'joinery.feature3']
    },
    {
        id: 'interior-fitout',
        titleKey: 'fitout.title',
        summaryKey: 'fitout.summary',
        image: '/images/gallary/illustration-bedroom-interior.jpg',
        icon: '🏠',
        features: ['fitout.feature1', 'fitout.feature2', 'fitout.feature3']
    },
    {
        id: '3d-design',
        titleKey: 'design.title',
        summaryKey: 'design.summary',
        image: '/images/gallary/digital-lavender-interior-design.jpg',
        icon: '🎨',
        features: ['design.feature1', 'design.feature2', 'design.feature3']
    },
    {
        id: 'renovation',
        titleKey: 'renovation.title',
        summaryKey: 'renovation.summary',
        image: '/images/gallary/modern-restaurant.jpg',
        icon: '🔨',
        features: ['renovation.feature1', 'renovation.feature2', 'renovation.feature3']
    }
]

export async function getServices() {
    // Local data – simulate build-time fetch
    return services
} 