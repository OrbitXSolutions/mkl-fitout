import { cn } from '@/lib/utils'

interface IconProps {
    className?: string
    size?: number
}

export function ApartmentIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17 11V3H7v4H3v14h18V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z" />
        </svg>
    )
}

export function HouseIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    )
}

export function BathroomIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7 7H5c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V6c0-2.21-1.79-4-4-4S1 3.79 1 6v1c0 1.1.9 2 2 2h4v11c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1z" />
            <path d="M16 11.5c0-.83-.67-1.5-1.5-1.5S13 10.67 13 11.5 13.67 13 14.5 13 16 12.33 16 11.5z" />
            <path d="M20.5 16H14v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2H3.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z" />
        </svg>
    )
}

export function KitchenIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6V4h2v6l2.5-1.5L13 10V4h5v16z" />
            <circle cx="15" cy="8" r="1" />
            <circle cx="15" cy="11" r="1" />
        </svg>
    )
}

export function BedroomIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67L19 19h1l.67-2H22v-5c0-1.1-.9-2-2-2zm-9-2h2v2h-2V8zm-4 0h2v2H7V8zm10 6H7v-2h10v2z" />
        </svg>
    )
}

export function LivingRoomIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h1v2h2v-2h10v2h2v-2h1c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-5-1v1H9V7h6zm5 8H4v-5h3v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1h3v5z" />
        </svg>
    )
}

export function OfficeIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
    )
}

export function CafeIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3z" />
            <path d="M4 19h16v2H4z" />
        </svg>
    )
}

export function ClassroomIcon({ className, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
    )
}

// Service icon mapping for easy access
export const serviceIcons = {
    apartment: ApartmentIcon,
    house: HouseIcon,
    bathroom: BathroomIcon,
    kitchen: KitchenIcon,
    bedroom: BedroomIcon,
    'living-room': LivingRoomIcon,
    office: OfficeIcon,
    'cafe-restaurant': CafeIcon,
    classroom: ClassroomIcon,
} as const

export type ServiceIconKey = keyof typeof serviceIcons 