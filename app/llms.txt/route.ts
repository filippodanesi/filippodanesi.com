import { lastModified } from '../content-dates'

const siteUrl = 'https://www.filippodanesi.com'

const body = `# Filippo Danesi

> Global SEO & AI Search Manager at Triumph International. Organic search and
> LLM visibility (GEO/AEO) for enterprise fashion e-commerce across EMEA and
> APAC, plus the internal tooling behind it. Based near Zurich, Switzerland.

## Pages

- [Home](${siteUrl}/): What I do, current roles, and an index of the tools I build.
- [About](${siteUrl}/about): Full professional background, experience, education, and skills. Downloadable CV.
- [Projects](${siteUrl}/projects): Open-source SEO and AI tools, each with its own page and GitHub repository.
- [Contact](${siteUrl}/contact): Email and social profiles.

## Projects

- [VisionDescribe](${siteUrl}/projects/vision-describe): Turns product images into multilingual product copy for e-commerce and store-locator platforms.
- [SEOLinkr](${siteUrl}/projects/seolinkr): CLI and web app that inserts semantically relevant internal links into blog articles, using embeddings, Google Search Console data, and the Claude API.
- [NLU Analyzer](${siteUrl}/projects/nlu-analyzer): Analyzes text with IBM Watson NLU and suggests improvements with GPT and Claude.
- [Web Scraper](${siteUrl}/projects/web-scraper): Extracts clean, formatted text from any URL.

## Full text

- [llms-full.txt](https://www.filippodanesi.com/llms-full.txt): The whole site as plain text in one fetch, written in the third person.

## Key facts

- Role: Global SEO & AI Search Manager at Triumph International (Zurich, Switzerland), since May 2025.
- Scope: organic and generative search across 15+ multilingual e-commerce sites in EMEA and APAC.
- Also Product Owner of Verbalist, an AI content-generation B2B SaaS, at NUR Digital Marketing.
- Specialisms: Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), LLM visibility measurement, technical and international SEO, app store optimisation (ASO), AI content pipelines.
- Writes about GEO, AEO, and AI search at https://www.serp-secrets.com. Semrush Ambassador since November 2025.
- Profiles: https://www.linkedin.com/in/filippodanesi, https://github.com/filippodanesi
- Contact: hello@filippodanesi.com

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
