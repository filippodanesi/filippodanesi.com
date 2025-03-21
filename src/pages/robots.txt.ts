import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
# Block AI Training and Content Scraping Bots
User-agent: Amazonbot
User-agent: Anthropic-ai
User-agent: Applebot-Extended
User-agent: AwarioRssBot
User-agent: AwarioSmartBot
User-agent: Bytespider
User-agent: CCBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-Web
User-agent: Cohere-ai
User-agent: DataForSeoBot
User-agent: FacebookBot
User-agent: Google-Extended
User-agent: GPTBot
User-agent: ImagesiftBot
User-agent: Magpie-crawler
User-agent: Omgili
User-agent: Omgilibot
User-agent: Peer39_crawler
User-agent: Peer39_crawler/1.0
User-agent: PerplexityBot
User-agent: YouBot
Disallow: /

# Allow Search Engine Crawlers
User-agent: *
Allow: /

# Block System and Technical URLs
Disallow: /cdn-cgi/

# Sitemaps
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    if (!site) {
        return new Response('Site URL not configured', { status: 500 });
    }
    
    const sitemapURL = new URL('sitemap-index.xml', site);
    
    return new Response(getRobotsTxt(sitemapURL), {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=3600'
        }
    });
};