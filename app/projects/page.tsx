import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Tools I built to automate parts of my SEO workflow.',
  alternates: {
    canonical: 'https://www.filippodanesi.com/projects',
  },
}

const projects = [
  {
    name: 'AI Copy Assistant',
    description: 'Generates product descriptions for e-commerce catalogs using GPT and Claude.',
    slug: 'ai-copy-assistant',
  },
  {
    name: 'Vision Describe',
    description: 'Turns product images into multilingual descriptions.',
    slug: 'vision-describe',
  },
  {
    name: 'NLU Analyzer',
    description: 'Analyzes text with IBM Watson NLU, then suggests improvements with GPT/Claude.',
    slug: 'nlu-analyzer',
  },
  {
    name: 'Web Scraper',
    description: 'Pulls clean text from any URL. Useful for competitor analysis.',
    slug: 'web-scraper',
  },
]

export default function Projects() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-description">Tools I built to automate parts of my SEO workflow.</p>
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
