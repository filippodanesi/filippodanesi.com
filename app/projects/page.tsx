import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open source projects by Filippo Danesi - AI tools, SEO utilities, and web applications.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects',
  },
}

const projects = [
  {
    name: 'AI Copy Assistant',
    description: 'Enterprise-grade AI-powered content generation for e-commerce and retail.',
    slug: 'ai-copy-assistant',
  },
  {
    name: 'Vision Describe',
    description: 'AI-powered product description generator from images.',
    slug: 'vision-describe',
  },
  {
    name: 'NLU Analyzer',
    description: 'Watson NLU & AI Text Optimizer for content analysis.',
    slug: 'nlu-analyzer',
  },
  {
    name: 'Web Scraper',
    description: 'Extract and analyze text content from any website.',
    slug: 'web-scraper',
  },
]

export default function Projects() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-description">Open source tools and applications.</p>
      </header>

      <div className="project-list">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="project-item">
            <div>
              <span className="project-name">{project.name}</span>
              <p className="project-description">{project.description}</p>
            </div>
            <span className="project-arrow">→</span>
          </Link>
        ))}
      </div>
    </>
  )
}
