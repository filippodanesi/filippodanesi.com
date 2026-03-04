import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VisionDescribe',
  description: 'AI-powered product copy generator for e-commerce and store locator platforms.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects/vision-describe',
  },
}

export default function VisionDescribe() {
  return (
    <>
      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">VisionDescribe</h1>
        <p className="page-description">AI-powered product copy generator for e-commerce and store locator platforms.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="section-content">
          <p>Uses GPT and Claude to generate brand-compliant product descriptions, bullet points, and optimized copy for multiple e-commerce platforms — with real-time cost tracking and multi-language support. Handles large catalogs (1000+ items) with hybrid client-side and server-side pipelines.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li>Multi-platform support (e-commerce, Amazon, store locator)</li>
            <li>Batch processing for large product catalogs</li>
            <li>Real-time token usage and cost tracking</li>
            <li>Image analysis with vision models</li>
            <li>Color and size translation mappings</li>
            <li>Content validation and policy compliance</li>
            <li>Multi-language content generation (50+ languages)</li>
            <li>Smart column detection and field mapping</li>
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
          <span className="skill-tag">Supabase</span>
          <span className="skill-tag">Vercel</span>
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
