Status: ready-for-agent

## Parent

`.scratch/glean-site-polish/PRD.md`

## What to build

Add three missing Next.js convention pages at the app root level:

- `not-found.tsx` — Custom 404 page with Glean branding, the Glean logo, a message like "Page not found", and a link back to the homepage.
- `error.tsx` — Client component (`"use client"`) that catches runtime errors. Shows Glean branding, a generic error message, and a "Try again" button that calls `reset()`.
- `loading.tsx` — A centered loading indicator (CSS spinner or simple "Loading..." text) that shows during page transitions.

All three should match the site's dark theme (`#050810` background, `#f0f4ff` text, Satoshi font).

## Acceptance criteria

- [ ] Visiting `/nonexistent-route` shows the custom 404 page (not blank white)
- [ ] 404 page has Glean logo and link back to home
- [ ] `error.tsx` is a client component with `reset()` button
- [ ] `loading.tsx` renders during page navigation
- [ ] All three pages match the site's dark theme styling
- [ ] `npm run build` completes with zero errors

## Blocked by

None — can start immediately
