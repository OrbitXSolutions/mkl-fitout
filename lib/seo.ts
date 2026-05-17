import type { Metadata } from "next"
import { CONTACT_INFO } from "@/lib/constants/contact-info"

export const SITE_URL = "https://mklfitout.ae"
export const SITE_NAME = "MKL-Fitout"
export const DEFAULT_OG_IMAGE = "/images/og-image.jpg"

const defaultKeywords = [
  "MKL-Fitout",
  "MKL Fitout",
  "mkl fitout uae",
  "interior fit-out UAE",
  "interior fit out Ajman",
  "fit out company UAE",
  "fit out contractor Ajman",
  "custom woodwork UAE",
  "custom joinery Ajman",
  "joinery factory UAE",
  "interior design and fit-out UAE",
  "residential fit out UAE",
  "commercial fit out UAE",
  "villa interior fit out",
  "office fit out Ajman",
  "restaurant fit out UAE",
  "shop fit out UAE",
  "kitchen cabinets Ajman",
  "wardrobes UAE",
  "full renovation UAE",
  "3D interior design UAE",
  "عجمان",
  "الإمارات",
  "شركة تنفيذ داخلي",
  "تنفيذ الديكور",
  "أعمال خشبية",
  "نجارة مخصصة",
  "تفصيل مطابخ",
  "تفصيل خزائن",
  "تشطيبات داخلية",
]

type PageMetadataInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: PageMetadataInput): Metadata {
  const resolvedUrl = new URL(path, SITE_URL).toString()
  const metadataKeywords = [...defaultKeywords, ...keywords]

  return {
    title,
    description,
    keywords: metadataKeywords,
    applicationName: SITE_NAME,
    category: "Interior Design & Fit-Out",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: resolvedUrl,
      languages: {
        en: `${SITE_URL}${path === "/" ? "/?lang=en" : `${path}?lang=en`}`,
        ar: `${SITE_URL}${path === "/" ? "/?lang=ar" : `${path}?lang=ar`}`,
        "x-default": resolvedUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: resolvedUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    logo: `${SITE_URL}/images/Logo.png`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ajman Industrial Area 1",
      addressLocality: "Ajman",
      addressCountry: "AE",
    },
    areaServed: ["Ajman", "Dubai", "Sharjah", "United Arab Emirates"],
    hasMap: CONTACT_INFO.location,
    sameAs: [
      CONTACT_INFO.instagram,
      CONTACT_INFO.facebook,
      CONTACT_INFO.tiktok,
      CONTACT_INFO.whatsapp,
      CONTACT_INFO.location,
    ],
    description:
      "Interior fit-out, joinery, custom woodwork, renovation, and design services for residential and commercial spaces in the UAE.",
  }
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "ar"],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function getServicesSchema() {
  const services = [
    {
      name: "Custom Woodwork & Joinery",
      description:
        "Premium quality doors, wardrobes, kitchen cabinets, wall claddings, and custom furniture.",
    },
    {
      name: "Interior Design & Fit-Out",
      description:
        "Complete turnkey interior solutions for villas, apartments, offices, clinics, restaurants, and retail spaces.",
    },
    {
      name: "3D Concept Design",
      description:
        "Realistic 3D visualizations and conceptual designs to preview spaces before execution.",
    },
    {
      name: "Full Renovation & Finishing",
      description:
        "Comprehensive renovation services including painting, flooring, ceilings, partitions, lighting, and electrical work.",
    },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MKL-Fitout Services",
    url: `${SITE_URL}/services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: "United Arab Emirates",
        provider: {
          "@type": "LocalBusiness",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    })),
  }
}