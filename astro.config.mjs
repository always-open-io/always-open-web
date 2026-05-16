import { defineConfig } from 'astro/config';

export default defineConfig({
      site: 'https://openalways.io',
      output: 'static',
      redirects: {
              '/privacy-policy': '/privacy',
      },
});
