import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `# ===================================
# Robot Access Policy
# Last updated: ${new Date().toISOString().split('T')[0]}
# ===================================

# Default: Allow all legitimate crawlers
User-agent: *
Allow: /

# ===================================
# ALLOWED BOTS
# ===================================

# AI Search & Answer Engines
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

# ===================================
# BLOCKED BOTS
# ===================================

# AI Scrapers & Non-Transparent Bots
User-agent: Amazonbot
User-agent: Anthropic-ai
User-agent: Applebot-Extended
User-agent: AwarioRssBot
User-agent: AwarioSmartBot
User-agent: Bytespider
User-agent: CCBot
User-agent: ChatGPT-User
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: Cohere-ai
User-agent: DataForSeoBot
User-agent: FacebookBot
User-agent: ImagesiftBot
User-agent: Magpie-crawler
User-agent: Omgili
User-agent: Omgilibot
User-agent: Peer39_crawler
User-agent: Peer39_crawler/1.0
User-agent: YouBot
Disallow: /

# ===================================
# RESTRICTED PATHS
# ===================================

# Block access to system endpoints
Disallow: /cdn-cgi/

# ===================================
# SITEMAPS
# ===================================

Sitemap: ${sitemapURL.href}`;

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