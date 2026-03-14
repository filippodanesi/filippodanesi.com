import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  title: 'Web Scraper',
  description: 'Extract and analyze clean text content from any website.',
  alternates: {
    canonical: `${siteUrl}/projects/web-scraper`,
  },
  openGraph: {
    title: 'Web Scraper ~ Filippo Danesi',
    description: 'Extract and analyze clean text content from any website.',
    url: `${siteUrl}/projects/web-scraper`,
    type: 'website',
    images: [
      {
        url: '/api/og?title=Web%20Scraper',
        width: 1200,
        height: 630,
        alt: 'Web Scraper ~ Filippo Danesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Scraper ~ Filippo Danesi',
    description: 'Extract and analyze clean text content from any website.',
    images: ['/api/og?title=Web%20Scraper'],
  },
}

export default function WebScraper() {
  return (
    <>
      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">Web Scraper</h1>
        <p className="page-description">Extract and analyze clean text content from any website.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="section-content">
          <p>Enter a URL, get the text back without ads, nav, or styling. I use it mainly for competitor content analysis.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li>Clean text extraction from any URL</li>
            <li>Removes ads, navigation, and styling</li>
            <li>Content analysis and statistics</li>
            <li>Export capabilities</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Stack</h2>
        <div className="skills-list">
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Vite</span>
          <span className="skill-tag">Firecrawl</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Links</h2>
        <div className="project-links">
          <a href="https://github.com/filippodanesi/web-scraper" target="_blank" rel="noopener" className="project-link">GitHub →</a>
        </div>
      </section>
    </>
  )
}
