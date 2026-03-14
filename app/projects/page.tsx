import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Tools I built to automate parts of my SEO workflow.',
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: 'Projects ~ Filippo Danesi',
    description: 'Tools I built to automate parts of my SEO workflow.',
    url: `${siteUrl}/projects`,
    type: 'website',
    images: [
      {
        url: '/api/og?title=Projects',
        width: 1200,
        height: 630,
        alt: 'Projects ~ Filippo Danesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects ~ Filippo Danesi',
    description: 'Tools I built to automate parts of my SEO workflow.',
    images: ['/api/og?title=Projects'],
  },
}

const projects = [
  {
    name: 'VisionDescribe',
    description: 'AI-powered product copy generator for e-commerce and store locator platforms.',
    slug: 'vision-describe',
  },
  {
    name: 'SEOLinkr',
    description: 'CLI + web app for automated internal link insertion into blog articles.',
    slug: 'seolinkr',
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
