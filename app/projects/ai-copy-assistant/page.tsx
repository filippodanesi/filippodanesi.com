import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Copy Assistant',
  description: 'Generates product descriptions for e-commerce catalogs using GPT and Claude.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects/ai-copy-assistant',
  },
}

export default function AICopyAssistant() {
  return (
    <>
      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">AI Copy Assistant</h1>
        <p className="page-description">Generates product descriptions for e-commerce catalogs using GPT and Claude.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="section-content">
          <p>Takes a product catalog (CSV or feed), sends each product to GPT or Claude, and returns optimized descriptions in multiple languages. Tracks API costs in real time.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li>AI-powered product description generation</li>
            <li>Multi-language content support</li>
            <li>Real-time cost tracking</li>
            <li>Batch processing for large catalogs</li>
            <li>E-commerce platform integration</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Stack</h2>
        <div className="skills-list">
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Vite</span>
          <span className="skill-tag">OpenAI</span>
          <span className="skill-tag">Anthropic</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Links</h2>
        <div className="project-links">
          <a href="https://github.com/filippodanesi/ai-copy-assistant" target="_blank" rel="noopener" className="project-link">GitHub →</a>
        </div>
      </section>
    </>
  )
}
