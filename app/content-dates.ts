// Last significant content change per route, in YYYY-MM-DD.
//
// Used by sitemap.ts (lastmod) and by the page schema (dateModified).
// Keep these honest: bump a date only when the page copy actually changes,
// not on every deploy. A lastmod that moves on every build is noise, and
// search engines stop trusting the signal.
export const contentDates: Record<string, string> = {
  '/': '2026-08-15',
  '/about': '2026-08-15',
  '/projects': '2026-08-15',
  '/projects/vision-describe': '2026-08-15',
  '/projects/seolinkr': '2026-08-15',
  '/projects/nlu-analyzer': '2026-08-15',
  '/projects/web-scraper': '2026-08-15',
  '/contact': '2026-03-14',
  '/privacy': '2026-03-14',
}

export function lastModified(path: string): string {
  return contentDates[path] ?? '2026-03-14'
}
