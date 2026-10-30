import { defineConfig } from 'astro/config';

// Set `site` to the real domain once it's known (used for canonical URLs).
export default defineConfig({
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
