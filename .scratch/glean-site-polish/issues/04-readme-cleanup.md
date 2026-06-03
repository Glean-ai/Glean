Status: ready-for-agent

## Parent

`.scratch/glean-site-polish/PRD.md`

## What to build

Replace the default Next.js boilerplate README in `glean-site/` with a Glean-specific one describing the marketing site.

Clean up stale planning files and references:
- Remove unused `page-stub` CSS class from `globals.css` if present
- Replace content of `glean-site/AGENTS.md` — currently has a nextjs-agent-rules warning. Either reference the parent repo's `AGENTS.md` or merge in relevant context about the site's stack (Next.js, CSS Modules, Satoshi font, dark theme)
- Remove Tailwind CSS references from parent planning docs (ARCHITECTURE.md, AGENTS.md) since the site uses pure CSS Modules

README should cover: what glean-site is, quick start (`npm run dev`), build for production, link to parent project.

## Acceptance criteria

- [ ] `glean-site/README.md` describes Glean site (not Next.js boilerplate)
- [ ] `glean-site/AGENTS.md` has useful content (reference to parent or merged context)
- [ ] `page-stub` class removed from `globals.css` if unused
- [ ] Parent `ARCHITECTURE.md` no longer references Tailwind for the site
- [ ] Parent `AGENTS.md` no longer references Tailwind for the site
- [ ] `npm run build` completes with zero errors

## Blocked by

None — can start immediately
