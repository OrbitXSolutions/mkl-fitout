import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/services", "/legal"]
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}