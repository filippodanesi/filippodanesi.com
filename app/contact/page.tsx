import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '../components/JsonLd'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Filippo Danesi.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact ~ Filippo Danesi',
    description: 'Contact Filippo Danesi.',
    url: `${siteUrl}/contact`,
    type: 'website',
    images: [
      {
        url: '/api/og?title=Contact',
        width: 1200,
        height: 630,
        alt: 'Contact ~ Filippo Danesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ~ Filippo Danesi',
    description: 'Contact Filippo Danesi.',
    images: ['/api/og?title=Contact'],
  },
}

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: siteUrl },
    { name: 'Contact', url: `${siteUrl}/contact` },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <header className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-description">
          Available for consulting, speaking, or general questions.
        </p>
      </header>

      <div className="contact-list">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href="mailto:hello@filippodanesi.com" className="contact-value">
            hello@filippodanesi.com
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">LinkedIn</span>
          <a
            href="https://linkedin.com/in/filippodanesi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            filippodanesi
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">GitHub</span>
          <a
            href="https://github.com/filippodanesi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            filippodanesi
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Location</span>
          <span className="contact-value">Zurich, CH</span>
        </div>
      </div>
    </>
  )
}
