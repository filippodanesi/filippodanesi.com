import { lastModified } from '../content-dates'

const siteUrl = 'https://www.filippodanesi.com'

// Stable @id anchors so every page references the same two nodes
// instead of repeating disconnected copies of them.
export const PERSON_ID = `${siteUrl}/#person`
export const WEBSITE_ID = `${siteUrl}/#website`

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Filippo Danesi',
    givenName: 'Filippo',
    familyName: 'Danesi',
    url: siteUrl,
    mainEntityOfPage: `${siteUrl}/about`,
    image: `${siteUrl}/api/og`,
    description:
      'SEO and AI search manager working on organic search and LLM visibility for enterprise e-commerce across EMEA and APAC.',
    sameAs: [
      'https://www.linkedin.com/in/filippodanesi',
      'https://github.com/filippodanesi',
      'https://x.com/filippodanesi',
      'https://www.serp-secrets.com',
    ],
    jobTitle: ['Global SEO & AI Search Manager', 'Product Owner'],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Global SEO & AI Search Manager',
      occupationLocation: {
        '@type': 'City',
        name: 'Zurich',
      },
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Triumph International',
      url: 'https://en.wikipedia.org/wiki/Triumph_International',
      sameAs: 'https://www.wikidata.org/wiki/Q671216',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Pisa',
        sameAs: 'https://en.wikipedia.org/wiki/University_of_Pisa',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'IED European Institute of Design',
        sameAs: 'https://en.wikipedia.org/wiki/Istituto_Europeo_di_Design',
      },
      {
        '@type': 'EducationalOrganization',
        name: '24ORE Business School',
      },
      {
        '@type': 'EducationalOrganization',
        name: "Centro Studi Comunicare l'Impresa",
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Istituto Modartech',
      },
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'Italian', alternateName: 'it' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'German', alternateName: 'de' },
      { '@type': 'Language', name: 'French', alternateName: 'fr' },
    ],
    knowsAbout: [
      'SEO',
      'Content Marketing',
      'Technical SEO',
      'International SEO',
      'AI',
      'LLM',
      'NLP',
      'NLU',
      'Generative Engine Optimization',
      'Answer Engine Optimization',
      'App Store Optimization',
      'Structured Data',
      'Python',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zurich',
      addressCountry: 'CH',
    },
    email: 'hello@filippodanesi.com',
  }

  return <JsonLdScript data={jsonLd} />
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Filippo Danesi',
    url: siteUrl,
    description:
      'Organic and AI search for enterprise e-commerce: GEO, AEO, technical SEO, and the tools behind them.',
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    inLanguage: 'en',
  }

  return <JsonLdScript data={jsonLd} />
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

  return <JsonLdScript data={jsonLd} />
}

export function ProfilePageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/about#webpage`,
    url: `${siteUrl}/about`,
    name: 'About Filippo Danesi',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    mainEntity: { '@id': PERSON_ID },
    dateModified: lastModified('/about'),
    inLanguage: 'en',
  }

  return <JsonLdScript data={jsonLd} />
}

export function ContactPageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: 'Contact Filippo Danesi',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    dateModified: lastModified('/contact'),
    inLanguage: 'en',
  }

  return <JsonLdScript data={jsonLd} />
}

export function ProjectsCollectionJsonLd({
  projects,
}: {
  projects: { name: string; description: string; slug: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/projects#webpage`,
    url: `${siteUrl}/projects`,
    name: 'Projects',
    isPartOf: { '@id': WEBSITE_ID },
    author: { '@id': PERSON_ID },
    dateModified: lastModified('/projects'),
    inLanguage: 'en',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/projects/${project.slug}`,
        name: project.name,
        description: project.description,
      })),
    },
  }

  return <JsonLdScript data={jsonLd} />
}

export function SoftwareSourceCodeJsonLd({
  name,
  description,
  slug,
  codeRepository,
  programmingLanguage,
}: {
  name: string
  description: string
  slug: string
  codeRepository: string
  programmingLanguage: string[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    '@id': `${siteUrl}/projects/${slug}#software`,
    name,
    description,
    url: `${siteUrl}/projects/${slug}`,
    codeRepository,
    programmingLanguage,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    dateModified: lastModified(`/projects/${slug}`),
    inLanguage: 'en',
  }

  return <JsonLdScript data={jsonLd} />
}
