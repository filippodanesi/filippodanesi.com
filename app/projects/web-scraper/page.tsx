import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, SoftwareSourceCodeJsonLd } from '../../components/JsonLd'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  title: {
    absolute: 'Web Scraper: clean text from any URL ~ Filippo Danesi',
  },
  description: 'Extracts clean, formatted text from any URL, stripped of navigation and boilerplate. Useful for competitor analysis and for feeding content into LLMs.',
  alternates: {
    canonical: `${siteUrl}/projects/web-scraper`,
  },
  openGraph: {
    title: 'Web Scraper: clean text from any URL ~ Filippo Danesi',
    description: 'Extracts clean, formatted text from any URL, stripped of navigation and boilerplate. Useful for competitor analysis and for feeding content into LLMs.',
    url: `${siteUrl}/projects/web-scraper`,
    type: 'website',
    images: [
      {
        url: '/api/og?title=Web%20Scraper',
        width: 1200,
        height: 630,
        alt: 'Web Scraper: clean text from any URL ~ Filippo Danesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Scraper: clean text from any URL ~ Filippo Danesi',
    description: 'Extracts clean, formatted text from any URL, stripped of navigation and boilerplate. Useful for competitor analysis and for feeding content into LLMs.',
    images: ['/api/og?title=Web%20Scraper'],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: siteUrl },
  { name: 'Projects', url: `${siteUrl}/projects` },
  { name: 'Web Scraper', url: `${siteUrl}/projects/web-scraper` },
]

export default function WebScraper() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <SoftwareSourceCodeJsonLd
        name="Web Scraper"
        description="Pulls clean text from any URL. Useful for competitor analysis."
        slug="web-scraper"
        codeRepository="https://github.com/filippodanesi/web-scraper"
        programmingLanguage={['TypeScript']}
      />

      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">Web Scraper</h1>
        <p className="page-description">Extracts clean, formatted text from any URL, stripped of navigation and boilerplate. Useful for competitor analysis and for feeding content into LLMs.</p>
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
