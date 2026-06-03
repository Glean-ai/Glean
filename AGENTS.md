# AGENTS.md — Glean Project Context

## Agent skills

### Issue tracker

Issues and PRDs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles using default names. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one CONTEXT.md + docs/adr/ at the repo root. See `docs/agents/domain.md`.

## Current State

Glean v1.0 complete. 6 skills written and published. README, LICENSE, ARCHITECTURE.md present. glean-site directory exists but not yet built.

## Session History

### Session 1 — Initial Build
- Created all 6 skills under `skills/`
- Set up BrowserAct CLI, chrome-direct browser `github-chrome`
- Wrote ICP template, CSV template
- Published to GitHub `Glean-ai/Glean`
- Setup: ICP questions, BrowserAct check, directory creation

### Session 2 — Cleanup & Polish
- Switched all paths from `~/glean/` to `./glean-data/` (relative, project-scoped)
- Deleted `.opencode/`, `.opencode-plugin/`, `scripts/`, old data dirs
- Rewrote README with comprehensive install guide + CSV schema
- Created glean-site directory, generated logo
- Committed and pushed (8 commits total)

### Session 3 — Website Planning
- Inspected openclaw.ai design (CDP, not BrowserAct)
- Decided: multi-page site, minimalist dark theme, mirror openclaw style
- Created `ARCHITECTURE.md` (site + project architecture)
- Created `AGENTS.md` (this file)

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Data path | `./glean-data/` | Relative, project-scoped, works across agents |
| Browser | chrome-direct (BrowserAct) | Uses user's running Chrome, no extra setup |
| Distribution | `npx skills add` | Pure skills, no npm plugin, 67+ agent compatible |
| Styling | Dark minimal, openclaw-like | Dev audience, proven aesthetic |
| Website | Multi-page Next.js | Not single-scroll, real site architecture |

## Conventions

- Skill files: `kebab-case-names/SKILL.md`
- Paths in skills: always `./glean-data/` (relative)
- CSV fields: snake_case
- Git commits: concise, no emoji, describe what changed
- No comments in code files unless essential
- No automation/cron — manual trigger only

## Voice & Tone (for glean-site)

- Minimalist, confident, developer-first
- Short sentences. No fluff.
- "Glean" as proper noun
- "You" as the user/developer
- Comparisons are factual, not hype-driven

## Constants

| Item | Value |
|------|-------|
| GitHub user | `pathanaawej0-dot` |
| Repo | `Glean-ai/Glean` |
| Install cmd | `npx skills add Glean-ai/Glean` |
| Logo file | `glean-logo.svg` |
| Site dir | `glean-site/` |
| Skill count | 6 (glean, linkedin-outreach, x-outreach, email-outreach, gmaps-outreach, browser-act) |
| Platforms | linkedin, x, email, gmaps |
| CSV stages | discovered → contacted → replied → meeting_booked → converted → dead |
| Site framework | Next.js 15 + Tailwind CSS v4 |

## References

- openclaw.ai design: BG `#050810`, text `#f0f4ff`, font Satoshi, H1 72px bold, H2 22.4px with `⟩` prefix
- openclaw margin/padding: main section padding `60px 24px 40px`
- openclaw nav: 14.4px semibold
- ARCHITECTURE.md: full project and site architecture reference

## Next Tasks (Priority Order)

1. Build glean-site (Next.js multi-page site)
2. Deploy to Vercel
3. Add showcase page (once community usage exists)

## Social Proof Plan (no real users yet)

- "Works With" platform brand strip (LinkedIn, X, Gmail, Google Maps)
- Sample CSV table with mock leads
- GitHub badges (stars, license, last commit)
- Agent compatibility badges (Claude Code, Codex, Cursor, opencode, Windsurf)
- Use case scenario mini-cards
- "Before vs After" comparison
- ICP template preview
