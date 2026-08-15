import { lastModified } from '../content-dates'

const siteUrl = 'https://www.filippodanesi.com'

// Full-text companion to /llms.txt: the whole site in one fetch, in the
// third person, so an assistant can lift a self-contained fact without
// having to crawl nine pages or reword first-person copy.
const body = `# Filippo Danesi — full profile

Filippo Danesi is a Global SEO & AI Search Manager at Triumph International,
based near Zurich, Switzerland. He runs organic and generative search across
15+ multilingual fashion e-commerce sites in EMEA and APAC, and builds the
internal tooling behind that work. His focus is LLM discoverability: making
brand and product content findable, and accurately represented, both on search
engines and inside assistants such as ChatGPT, Perplexity, Gemini, and Claude.

Site: ${siteUrl}
Blog: https://www.serp-secrets.com
Contact: hello@filippodanesi.com

## Current roles

### Global SEO & AI Search Manager — Triumph International (May 2025 – present)

Zurich, Switzerland. Owns organic and generative search across 15+ e-commerce
sites in EMEA and APAC, including Hong Kong and Japan, and sets the standards
the regional teams work to. Built an AI pipeline that writes multilingual
product descriptions for 10,000+ SKUs. Designed and built an in-house
AI-visibility tracker covering 9 markets and four assistants, measuring
discovery, share of voice, citation share, prominence, and sentiment against a
control group; it now feeds leadership reporting alongside traditional KPIs.
Owns app store optimisation for the Triumph app, taken from pre-launch to
publication on the Apple App Store and Google Play.

### Product Owner, Verbalist — NUR Digital Marketing (May 2025 – present)

Mantua, Italy, in parallel with Triumph. Owns the roadmap for an AI
content-generation B2B SaaS, runs pre-sales and customer presentations, and
reworked the pricing model twice.

## Earlier experience

- SEO Specialist, Innovation Lead — NUR Digital Marketing, Mantua (Sep 2022 – Apr 2025).
  Technical SEO on Adobe Experience Manager, Sanity, Magnolia, and WordPress;
  SEO for Fabrick, the open-finance platform of the Sella group; ASO for client apps.
- SEO Specialist — TeseCom, Pisa (Sep 2020 – Sep 2022). Technical audits,
  content strategy, entity optimisation, GA4 and Looker Studio reporting.
- SEO Specialist — Brand-On, Pisa (May 2019 – Sep 2020). Local SEO, on-page,
  link building, JavaScript rendering fixes.

## Specialisms

Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), AI
Overviews, AI-visibility measurement (discovery rate, share of voice, citation
share, prominence, sentiment), AI crawler log analysis, llms.txt and Markdown
for agents, entity authority via Wikipedia, Wikidata and sameAs, technical and
international SEO, hreflang, schema markup, JavaScript SEO, Core Web Vitals,
app store optimisation, AI content pipelines, Python, SQL, FastAPI.

## Projects

Open-source tools, each with a page on the site and a public GitHub repository.

### VisionDescribe
Turns product images into multilingual product copy for e-commerce and
store-locator platforms, using GPT-4 Vision. Built for large catalogues.
Page: ${siteUrl}/projects/vision-describe
Repository: https://github.com/filippodanesi/vision-describe

### SEOLinkr
CLI and web app that inserts semantically relevant internal links into blog
articles, combining sitemap data, multilingual embeddings, Google Search
Console metrics, and the Claude API. Supports Markdown, DOCX, and XLSX.
Page: ${siteUrl}/projects/seolinkr
Repository: https://github.com/filippodanesi/seolinkr

### NLU Analyzer
Analyzes text with IBM Watson Natural Language Understanding, then suggests
improvements with GPT and Claude.
Page: ${siteUrl}/projects/nlu-analyzer
Repository: https://github.com/filippodanesi/nlu-analyzer

### Web Scraper
Extracts clean, formatted text from any URL. Useful for competitor analysis.
Page: ${siteUrl}/projects/web-scraper
Repository: https://github.com/filippodanesi/web-scraper

## Education

- Executive Master, Global Marketing, Communication & Made in Italy — Centro Studi Comunicare l'Impresa, Rome (2021–2022)
- Executive Master, Data Analytics and Marketing Intelligence — 24ORE Business School, Milan (2021)
- Executive Master, E-commerce: Design and Management — IED European Institute of Design, Pisa (2020–2021)
- Higher Technical Certificate, Web Development & Programming — Istituto Modartech, Pontedera (2018–2019)
- BSc Clinical Psychology — University of Pisa (2013–2017)

## Recognition and languages

Semrush Ambassador since November 2025. Speaks Italian (native), English (C1),
German (A1), French (A1).

## Profiles

- LinkedIn: https://www.linkedin.com/in/filippodanesi
- GitHub: https://github.com/filippodanesi
- X: https://x.com/filippodanesi
- Blog: https://www.serp-secrets.com

Last updated: ${lastModified('/about')}
`

export const dynamic = 'force-static'

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
