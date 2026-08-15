import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // /api/og generates the Open Graph cards, so it must stay crawlable
        allow: ['/', '/api/og'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.filippodanesi.com/sitemap.xml',
    host: 'https://www.filippodanesi.com',
  }
}
