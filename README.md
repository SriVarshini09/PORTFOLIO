# Sri Varshini — Portfolio

Multi-page portfolio built with [Astro](https://astro.build). Dark "quiet instrument panel" style: near-black, one cyan accent, Inter + DM Mono.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Name, socials, email, resume, photo, archive repos, hackathons, tech stack | `src/site.ts` |
| Projects (one page each at `/work/<file-name>`) | `src/content/projects/*.md` |
| Research (`/research/<file-name>`) | `src/content/research/*.md` |
| Roles (`/experience/<file-name>`) | `src/content/experience/*.md` |
| Writing (`/writing/<file-name>`) | `src/content/writing/*.md` |
| Colors, fonts, shared styles | `src/styles/global.css` |
| Pages and templates | `src/pages/` |

The fields each kind of file accepts are listed in `src/content.config.ts`.

## Common edits

- **Resume:** save it as `public/resume.pdf`. The Resume buttons appear on the live site once the file exists.
- **Email:** set `email` in `src/site.ts`. Every email link stays hidden while it is empty.
- **Photo:** save it as `public/photo.jpg` (or `.png` / `.webp`). It appears as a framed portrait on Home and About. A 3:4 portrait crop works best.
- **New project:** copy a file in `src/content/projects/`, rename it, edit it. `featured: true` puts it on the home page; `building: true` adds the "Currently building" label; `order` sets its position.
- **New post:** copy `src/content/writing/how-to-write-a-post.md`. Keep `draft: true` while writing: drafts show in `npm run dev` only and never on the live site. Set `draft: false` to publish.

## Resume

The resume text lives in `resume/resume.md`. After editing it, run:

```bash
npm run resume
```

That rebuilds `public/resume.pdf` (the file behind the site's Resume buttons) and tells you whether it still fits on one page. No Chrome or Edge? Open `resume/resume.html` in any browser and use **Print → Save as PDF**.

## Previous version

The original single-page site is kept in `_previous-version/` for reference. It is not part of the build.
