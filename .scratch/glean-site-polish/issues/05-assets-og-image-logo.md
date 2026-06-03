Status: ready-for-agent

## Parent

`.scratch/glean-site-polish/PRD.md`

## What to build

Create a social sharing OG image and optimize the logo SVG.

**OG image** (`public/og-image.png`, 1200×630px):
- Dark background matching the site theme (`#050810`)
- Glean logo centered or top-left
- Tagline "Glean — The Lead Skill That Actually Finds People."
- Should look good when shared on X, LinkedIn, Slack
- Can be created via any tool (browser screenshot with headless, Vercel OG, manual design)

**Logo optimization**:
- Verify the current SVG (`public/glean-logo.svg`) renders cleanly
- If the 2048×2048 viewport is excessive, reduce or add explicit `width`/`height` attributes where used
- Ensure the logo displays correctly in the Header and on error/404 pages

## Acceptance criteria

- [ ] `public/og-image.png` exists at 1200×630px
- [ ] OG image has dark background + Glean branding + tagline
- [ ] Root layout references the OG image in `metadata.openGraph.images`
- [ ] Logo renders cleanly in the Header
- [ ] Logo renders cleanly on 404/error pages
- [ ] `npm run build` completes with zero errors

## Blocked by

None — can start immediately
