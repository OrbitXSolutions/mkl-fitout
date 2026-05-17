import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/services", "/legal"]
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    alternates: {
      languages: {
        en: `${SITE_URL}${route === "/" ? "/?lang=en" : `${route}?lang=en`}`,
        ar: `${SITE_URL}${route === "/" ? "/?lang=ar" : `${route}?lang=ar`}`,
      },
    },
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/legal" ? 0.5 : 0.8,
  }))
}