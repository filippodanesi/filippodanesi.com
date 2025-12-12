import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vision Describe',
  description: 'AI-powered tool that generates professional product descriptions from images using GPT and Claude.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects/vision-describe',
  },
}

export default function VisionDescribe() {
  return (
    <>
      <header className="page-header">
        <Link href="/projects" className="breadcrumb">← Projects</Link>
        <h1 className="page-title">Vision Describe</h1>
        <p className="page-description">AI-powered tool that generates professional product descriptions from images.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <div className="section-content">
          <p>Generate compelling, multilingual product content at scale from product images. Perfect for e-commerce businesses looking to create SEO-optimized descriptions.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li>AI image analysis with GPT and Claude</li>
            <li>Multilingual support for European languages</li>
            <li>URL crawling for existing product descriptions</li>
            <li>CSV batch translation</li>
            <li>Category-specific content generation</li>
            <li>GDPR compliant</li>
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
          <span className="skill-tag">Drizzle</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Links</h2>
        <div className="project-links">
          <a href="https://github.com/filippodanesi/vision-describe" target="_blank" rel="noopener" className="project-link">GitHub →</a>
        </div>
      </section>
    </>
  )
}
