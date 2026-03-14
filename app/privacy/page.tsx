import type { Metadata } from 'next'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy policy for filippodanesi.com. Learn how analytics data is collected and used.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: 'Privacy ~ Filippo Danesi',
    description: 'Privacy policy for filippodanesi.com. Learn how analytics data is collected and used.',
    url: `${siteUrl}/privacy`,
    type: 'website',
    images: [
      {
        url: '/api/og?title=Privacy',
        width: 1200,
        height: 630,
        alt: 'Privacy ~ Filippo Danesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy ~ Filippo Danesi',
    description: 'Privacy policy for filippodanesi.com. Learn how analytics data is collected and used.',
    images: ['/api/og?title=Privacy'],
  },
}

export default function Privacy() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Privacy</h1>
      </header>

      <section className="section">
        <h2 className="section-title">Analytics</h2>
        <div className="section-content">
          <p>This site uses Vercel Analytics to collect anonymous traffic data. No cookies are used and no personal data is collected or stored.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Data Collection</h2>
        <div className="section-content">
          <p>The only data collected includes page views, referrer URLs, country (aggregated), device type, and browser type. This data cannot be used to identify individual users.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Contact</h2>
        <div className="section-content">
          <p>For any privacy-related questions, contact <a href="mailto:hello@filippodanesi.com">hello@filippodanesi.com</a></p>
        </div>
      </section>
    </>
  )
}
