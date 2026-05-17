import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
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
import {
  buildPageMetadata,
  getOrganizationSchema,
  getServicesSchema,
  getWebsiteSchema,
} from "@/lib/seo"

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
  const metadata = buildPageMetadata({
    title,
    description,
    path: "/",
    keywords: locale === "ar"
      ? ["مكل فيتوت", "أعمال نجارة", "تنفيذ داخلي عجمان", "ديكور داخلي الإمارات"]
      : ["interior fit out company Ajman", "joinery and woodwork UAE"],
  })

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      locale: locale === "ar" ? "ar_AE" : "en_US",
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
  const structuredData = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getServicesSchema(),
  ]

  return (
    <html lang={locale} dir={dir}>
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18136954453"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18136954453');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <RootWrapper>
          <div className="flex flex-col min-h-screen bg-background">
            <NavBar />
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
