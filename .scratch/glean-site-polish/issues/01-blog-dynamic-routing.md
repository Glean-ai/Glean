Status: ready-for-agent

## Parent

`.scratch/glean-site-polish/PRD.md`

## What to build

Fix the blog so it supports multiple posts instead of a single hardcoded one.

Extract the posts data into a shared module (e.g., `src/lib/posts.ts`) that exports an array of post objects, each with `slug`, `title`, `description`, `content`, `date`, `author`.

Add `generateStaticParams` to `blog/[slug]/page.tsx` that returns all known slugs from this data source.

Make metadata dynamic — export a `generateMetadata` function that reads the correct post by slug and returns the post title and description as page metadata.

The posts array stays static (no CMS, no markdown files) — this is the data source until a future blog system is built.

## Acceptance criteria

- [ ] Posts data lives in a shared module (`src/lib/posts.ts`)
- [ ] `generateStaticParams` returns all known slugs
- [ ] `generateMetadata` returns per-post title and description
- [ ] Blog index (`/blog`) lists all posts from the shared module
- [ ] Visiting `/blog/<any-known-slug>` renders the correct post with correct metadata
- [ ] Visiting an unknown slug returns 404 (handled by Next.js default or custom `not-found.tsx`)
- [ ] `npm run build` completes with zero errors

## Blocked by

None — can start immediately
