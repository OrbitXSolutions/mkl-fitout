import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { getLocale } from "next-intl/server"
import { cookies } from "next/headers"
import { COOKIES_KEYS } from "@/lib/constants/cookies-keys"
import { RootWrapper } from "@/components/core/providers/root-wrapper"
import { setCurrentLocale } from "./_actions/set-current-locale"
import { getMessages } from "next-intl/server"

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
  const description = seo.description || 'Premium interior fit-out, custom woodwork, and joinery services in Dubai, UAE. Residential & commercial solutions with in-house production and expert teams.'
  const image = '/images/og-image.png'
  return {
    title,
    description,
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
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  )
}
