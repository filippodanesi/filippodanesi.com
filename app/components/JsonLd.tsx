export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Filippo Danesi',
    url: 'https://www.filippodanesi.com',
    image: 'https://www.filippodanesi.com/og-image.png',
    sameAs: [
      'https://linkedin.com/in/filippodanesi',
      'https://github.com/filippodanesi',
      'https://www.serp-secrets.com',
    ],
    jobTitle: 'SEO & AI Search Manager',
    worksFor: {
      '@type': 'Organization',
      name: 'Triumph International',
      url: 'https://en.wikipedia.org/wiki/Triumph_International',
    },
    alumniOf: [],
    knowsAbout: [
      'SEO',
      'Content Marketing',
      'Technical SEO',
      'AI',
      'LLM',
      'NLP',
      'NLU',
      'GEO',
      'AEO',
      'Python',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zurich',
      addressCountry: 'CH',
    },
    email: 'hello@filippodanesi.com',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Filippo Danesi',
    url: 'https://www.filippodanesi.com',
    description: 'SEO specialist focused on organic search and AI search visibility for enterprise e-commerce.',
    author: {
      '@type': 'Person',
      name: 'Filippo Danesi',
    },
    inLanguage: 'en',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
