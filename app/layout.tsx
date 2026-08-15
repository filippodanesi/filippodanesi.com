import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import { PersonJsonLd, WebSiteJsonLd } from './components/JsonLd'

const siteUrl = 'https://www.filippodanesi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Filippo Danesi ~ SEO & AI Search: GEO, AEO, LLM Visibility',
    template: '%s ~ Filippo Danesi',
  },
  description: 'I run organic and AI search for Triumph across 15+ e-commerce sites in EMEA and APAC, and build the tools that make it scale. GEO, AEO, technical SEO.',
  authors: [{ name: 'Filippo Danesi', url: siteUrl }],
  creator: 'Filippo Danesi',
  publisher: 'Filippo Danesi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'x-default': siteUrl,
      'en': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Filippo Danesi',
    title: 'Filippo Danesi ~ SEO & AI Search: GEO, AEO, LLM Visibility',
    description: 'I run organic and AI search for Triumph across 15+ e-commerce sites in EMEA and APAC, and build the tools that make it scale. GEO, AEO, technical SEO.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Filippo Danesi ~ SEO & AI Search: GEO, AEO, LLM Visibility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filippo Danesi ~ SEO & AI Search: GEO, AEO, LLM Visibility',
    description: 'I run organic and AI search for Triumph across 15+ e-commerce sites in EMEA and APAC, and build the tools that make it scale. GEO, AEO, technical SEO.',
    images: ['/api/og'],
    creator: '@filippodanesi',
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <PersonJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <ThemeProvider>
          <div className="container">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
