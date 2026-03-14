import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEOLinkr',
  description: 'CLI tool for automated internal link insertion into blog articles.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects/seolinkr',
  },
}

export default function SEOLinkr() {
  return (
    <>
      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">SEOLinkr</h1>
        <p className="page-description">CLI + web app for automated internal link insertion into blog articles.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="section-content">
          <p>Uses sitemap data, multilingual embeddings, Google Search Console metrics, and the Claude API to place semantically relevant internal links into blog articles. Supports Markdown, DOCX, and XLSX. Built for multi-market e-commerce content workflows.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li>Multi-signal candidate scoring (embeddings, taxonomy, GSC, headings)</li>
            <li>Claude-powered link insertion with natural anchor text</li>
            <li>Google Search Console integration</li>
            <li>Bulk processing with rate-limit handling</li>
            <li>Cross-link detection between blog articles</li>
            <li>Link audit with configurable rules</li>
            <li>Web UI and composable CLI commands</li>
            <li>Multi-format support (Markdown, DOCX, XLSX)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Stack</h2>
        <div className="skills-list">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">FastAPI</span>
          <span className="skill-tag">Next.js</span>
          <span className="skill-tag">Anthropic</span>
          <span className="skill-tag">Google Search Console</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Links</h2>
        <div className="project-links">
          <a href="https://github.com/filippodanesi/seolinkr" target="_blank" rel="noopener" className="project-link">GitHub →</a>
        </div>
      </section>
    </>
  )
}
