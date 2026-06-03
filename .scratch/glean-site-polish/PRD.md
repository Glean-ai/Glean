Status: ready-for-agent

# Glean-Site Polish — Fix Gaps & Productionise

## Problem Statement

The glean-site marketing website was built quickly and has several gaps that hurt credibility, discoverability, and user experience. The blog has a single hardcoded post that 404s on any other slug. The README is still default Next.js boilerplate. There are no error pages, loading states, or social preview image. Config files are empty or hardcode production domains. These issues make the site feel incomplete and unprofessional to visitors.

## Solution

Polish the glean-site to production quality. Fix the blog routing so it supports multiple posts properly. Add missing pages (404, error boundary). Replace boilerplate README. Move hardcoded values to environment variables. Add OG image for social sharing. Optimize the logo SVG. Clean up stale planning references.

## User Stories

1. As a blog reader, I want to visit any blog post slug without getting a 404, so that all published posts are accessible.
2. As a blog reader, I want each blog post to have its own title and meta description, so that social shares and bookmarks show the correct preview.
3. As a website visitor, I want to see a custom 404 page when I visit a broken link, so that I don't hit a blank page and can navigate back.
4. As a website visitor, I want to see a friendly error page when something goes wrong, so that I'm not confused by a crash screen.
5. As a website visitor, I want to see loading states while pages are rendering, so that I know content is coming.
6. As a developer landing on the GitHub repo, I want the site README to describe the Glean marketing site (not Next.js boilerplate), so that I understand what this directory is.
7. As an SEO-conscious developer, I want an OG image rendered on social shares, so that the site looks credible when shared on X, LinkedIn, or Slack.
8. As a team member, I want the production domain to be configurable via environment variable, so that the same code works across preview and production deploys without manual edits.
9. As a developer reviewing the site, I want the logo SVG to be reasonably sized, so that it doesn't bloat page load or the repo.
10. As a maintainer, I want stale planning files and outdated references cleaned up, so that the codebase is honest about what it actually uses.
11. As a maintainer, I want next.config.ts to have sensible defaults, so that the site is optimised for production without manual tuning later.
12. As a developer cloning the repo, I want an `.env.example` file showing available environment variables, so that I know what to configure before building.
13. As a reviewer, I want to run `npm run build` and see zero errors, so that the site can be deployed with confidence.

## Implementation Decisions

### Blog Dynamic Routing

The blog currently has a single hardcoded post and no `generateStaticParams`. The fix:

- Add `generateStaticParams` to `blog/[slug]/page.tsx` that returns all known slugs from a posts data source
- Make metadata dynamic — each post exports its own `generateMetadata` function that reads the post data by slug
- The posts data source will remain as a static array in a shared module (not a CMS or markdown files — defer that to a future iteration)

### Missing Pages

Three new files under `src/app/`:

- `not-found.tsx` — Custom 404 with Glean branding, link back to home
- `error.tsx` — Client component error boundary with reset button, Glean branding
- `loading.tsx` — Simple centered spinner or skeleton for each route segment

Next.js conventions: `not-found.tsx` and `error.tsx` go at the app root level to catch all routes. `loading.tsx` can be added per route segment as needed.

### README Replacement

Replace the boilerplate `glean-site/README.md` with a brief Glean-specific one:
- What glean-site is (Next.js marketing site for Glean)
- Quick start (`npm run dev`)
- Build/deploy instructions
- Link to the parent project README

### OG Image

Create a simple OG image at `public/og-image.png` (1200×630px). Options:
- Use a tool like Vercel OG or a headless browser to generate dynamically
- Or create a static PNG manually using the Glean logo on a dark background with the tagline

Start with a simple approach — a screenshot or a manually crafted PNG. Dynamic OG generation can be deferred.

### Domain Config

Move hardcoded `glean.aawej.in` references:
- Add `NEXT_PUBLIC_SITE_URL` to an `.env.example` file
- Read from `process.env.NEXT_PUBLIC_SITE_URL` in `sitemap.ts` and `robots.txt`
- Default fallback to `http://localhost:3000` for dev

### Logo Optimisation

The current SVG is 2048×2048 with dense path data. Replace with:
- A smaller viewport (e.g., 128×128) if the SVG paths are computational
- Or keep as-is if it renders fine — SVG vector data compresses well via gzip
- At minimum: verify the logo renders cleanly and add `width`/`height` attributes where used

### next.config.ts

Add sensible defaults:
- `output: 'export'` if targeting fully static, or leave as default for Vercel
- `redirects` — preserve any that make sense
- `images.unoptimized` if fully static exporting

### Cleanup

- Remove `page-stub` CSS class from `globals.css` if unused
- Update `glean-site/AGENTS.md` — replace the nextjs-agent-rules warning with a reference to the parent repo's AGENTS.md, or merge relevant context
- Remove Tailwind references from parent planning docs if CSS Modules is the actual choice

## Testing Decisions

The testing approach is the same as the original site — no prior art for web tests in this repo.

- **`next build`** — must complete with zero errors. This catches missing `generateStaticParams`, broken imports, type errors.
- **Manual route check** — visit `/blog/test`, `/nonexistent`, `/docs/linkedin` — all should render without crash.
- **Lighthouse** — run after all changes, target 90+ on all 4 categories.
- **No automated E2E tests** for v1 — manual verification is sufficient for a static site polish pass.

## Out of Scope

- Dynamic blog CMS or markdown-based posts (keep static array)
- Dark/light mode toggle
- Analytics or cookie consent
- PWA manifest or service worker
- Performance budgets or CI checks
- i18n

## Further Notes

- The parent repo's `.scratch/glean-site/issues/05-polish-deploy.md` issue covers some of this territory — these gaps are what was found when that issue was evaluated against the actual build.
- The site is currently at Next.js 16.2.7 (per package.json) — verify compatibility with all changes.
- If `generateStaticParams` is added to the blog, the Next.js build will statically generate all known post pages at build time.
