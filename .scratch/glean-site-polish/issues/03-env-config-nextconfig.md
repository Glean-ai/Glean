Status: ready-for-agent

## Parent

`.scratch/glean-site-polish/PRD.md`

## What to build

Move hardcoded domain references to environment variables and add sensible defaults to `next.config.ts`.

Create `.env.example` with:
```
NEXT_PUBLIC_SITE_URL=https://glean.aawej.in
```

Update `sitemap.ts` and `robots.txt` to read `process.env.NEXT_PUBLIC_SITE_URL` instead of hardcoding `glean.aawej.in`. Fallback to `http://localhost:3000` in development.

Add sensible defaults to `next.config.ts` — at minimum ensure the config has proper TypeScript typing and any redirects or image settings that make sense for a fully static Vercel deployment.

## Acceptance criteria

- [ ] `.env.example` exists with `NEXT_PUBLIC_SITE_URL`
- [ ] `sitemap.ts` reads domain from env var with dev fallback
- [ ] `robots.txt` reads domain from env var with dev fallback
- [ ] `next.config.ts` has sensible non-empty defaults
- [ ] `npm run build` completes with zero errors
- [ ] Site works correctly with no `.env` file (uses localhost fallback)

## Blocked by

None — can start immediately
