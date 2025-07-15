import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { getLocale } from "next-intl/server"
import { cookies } from "next/headers"
import { COOKIES_KEYS } from "@/lib/constants/cookies-keys"
import { RootWrapper } from "@/components/core/providers/root-wrapper"
import { setCurrentLocale } from "./_actions/set-current-locale"
import { getMessages } from "next-intl/server"
import { NavBar } from "@/components/atomic/molecules/NavBar"
import { Suspense } from "react"
import { FooterSection } from "@/components/atomic/organisms/FooterSection"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const messages = await getMessages()
  const seo = messages.seo || {}
  const title = seo.title || 'MKL-Fitout | Interior Fit-Out & Woodwork UAE'
  const description = seo.description || 'Premium interior fit-out, custom woodwork, and joinery services in Ajman, UAE. Residential & commercial solutions with in-house production and expert teams.'
  const image = '/images/og-image.jpg'
  return {
    title,
    description,
    keywords: ['MKL-Fitout', 'Interior Fit-Out', 'Woodwork', 'UAE', 'Ajman', 'Residential', 'Commercial', 'Production', 'Expert Teams',

      // Arabic:
      'مكل فيتوت', 'تصميم وتنفيذ المباني', 'أعمال الأثاث', 'الإمارة العربية المتحدة', 'عجمان', 'منازل', 'مكاتب', 'إنتاج', 'فرق خبراء',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url: 'https://mklfitout.ae',
      siteName: 'MKL-Fitout',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@mklfitout',
    },
    metadataBase: new URL("https://mklfitout.ae"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/?lang=en",
        ar: "/?lang=ar",
      },
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootWrapper>
          <div className="flex flex-col min-h-screen bg-background">
            <Suspense fallback={null}>
              <NavBar />
            </Suspense>
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <FooterSection />
          </div>
        </RootWrapper>
      </body>
    </html>
  )
}
