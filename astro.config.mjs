import { defineConfig } from 'astro/config';

// The live address, used for canonical URLs and share links.
export default defineConfig({
  site: 'https://portfoliosri-chi.vercel.app',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
