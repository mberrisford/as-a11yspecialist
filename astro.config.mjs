import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://a11yspecialist.netlify.app',
  output: 'server',
  integrations: [
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-dark-high-contrast',
        dark: 'github-dark-high-contrast',
      },
    },
  },
});

