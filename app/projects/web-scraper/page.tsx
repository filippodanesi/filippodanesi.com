import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Scraper',
  description: 'Extract and analyze clean text content from any website.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects/web-scraper',
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
          <p>Extract clean, formatted text content from any website by entering a URL. Useful for research, analysis, or content aggregation without the clutter of website styling.</p>
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
