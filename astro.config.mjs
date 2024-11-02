import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://serp-secrets-com.vercel.app',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
    imagesConfig: { 
      sizes: [320, 640, 1280],
      domains: []
    },
    isr: { expiration: 60 * 60 * 24 },
  }),
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      },
    }),
  ],
});