import type { MetadataRoute } from 'next'
import { contentDates } from './content-dates'

const baseUrl = 'https://www.filippodanesi.com'

// changeFrequency and priority are ignored by Google, so only lastModified
// is declared here, and it comes from the real content dates.
const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/projects', priority: 0.7 },
  { path: '/projects/vision-describe', priority: 0.6 },
  { path: '/projects/seolinkr', priority: 0.6 },
  { path: '/projects/nlu-analyzer', priority: 0.6 },
  { path: '/projects/web-scraper', priority: 0.6 },
  { path: '/contact', priority: 0.5 },
  { path: '/privacy', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: path === '/' ? baseUrl : `${baseUrl}${path}`,
    lastModified: contentDates[path],
    priority,
  }))
}
