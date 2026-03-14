import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  title: 'NLU Analyzer',
  description: 'Analyzes text with IBM Watson NLU and suggests improvements using GPT and Claude.',
  alternates: {
    canonical: `${siteUrl}/projects/nlu-analyzer`,
  },
  openGraph: {
    title: 'NLU Analyzer ~ Filippo Danesi',
    description: 'Analyzes text with IBM Watson NLU and suggests improvements using GPT and Claude.',
    url: `${siteUrl}/projects/nlu-analyzer`,
    type: 'website',
    images: [
      {
        url: '/api/og?title=NLU%20Analyzer',
        width: 1200,
        height: 630,
        alt: 'NLU Analyzer ~ Filippo Danesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NLU Analyzer ~ Filippo Danesi',
    description: 'Analyzes text with IBM Watson NLU and suggests improvements using GPT and Claude.',
    images: ['/api/og?title=NLU%20Analyzer'],
  },
}

export default function NLUAnalyzer() {
  return (
    <>
      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">NLU Analyzer</h1>
        <p className="page-description">Analyzes text with IBM Watson NLU and suggests improvements using GPT and Claude.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="section-content">
          <p>Paste any text, get a breakdown of keywords, entities, concepts, and categories from Watson NLU. Then use GPT or Claude to get rewrite suggestions based on the analysis.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li>Text analysis with IBM Watson NLU</li>
            <li>Extract keywords, entities, concepts, and categories</li>
            <li>AI-powered content optimization suggestions</li>
            <li>Target keyword highlighting</li>
            <li>Export results in JSON or CSV</li>
            <li>Dark mode support</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Stack</h2>
        <div className="skills-list">
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Vite</span>
          <span className="skill-tag">IBM Watson</span>
          <span className="skill-tag">OpenAI</span>
          <span className="skill-tag">Anthropic</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Links</h2>
        <div className="project-links">
          <a href="https://github.com/filippodanesi/nlu-analyzer" target="_blank" rel="noopener" className="project-link">GitHub →</a>
        </div>
      </section>
    </>
  )
}
