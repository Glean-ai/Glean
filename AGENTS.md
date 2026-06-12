# AGENTS.md — Glean Project Context

## Agent skills

### Issue tracker

Issues and PRDs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles using default names. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one CONTEXT.md + docs/adr/ at the repo root. See `docs/agents/domain.md`.

## Current State

Glean v2.0 — CMO meta-skill architecture. Single skill that generates other skills. No fixed platform skills.

## Session History

### Session 1 — Initial Build (v1.0)
- Created 6 skills: glean, linkedin-outreach, x-outreach, email-outreach, gmaps-outreach, browser-act
- Set up BrowserAct CLI, chrome-direct browser
- Wrote ICP template, CSV template
- Published to GitHub

### Session 2 — Cleanup & Polish
- Switched paths from `~/glean/` to `./glean-data/`
- Rewrote README, created glean-site directory
- Committed and pushed

### Session 3 — Website Planning
- Created ARCHITECTURE.md, AGENTS.md
- Designed multi-page Next.js site

### Session 4 — CMO Refactor (v2.0)
- Killed all fixed platform skills
- Redesigned as single CMO meta-skill
- Agent generates skills at runtime based on user's business
- Skills follow agentskills.io standard
- Created: references (marketing-playbooks, platform-guides, skills-format)
- Created: assets (profile-template, audience-template, skill-template)
- Updated CONTEXT.md with domain glossary

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Architecture | Single CMO meta-skill | Fixed skills break for different businesses. CMO adapts. |
| Skill generation | Runtime, per-user | Each user gets skills tailored to their product and audience |
| Data path | `./glean-data/` | Relative, project-scoped, works across agents |
| Browser | chrome-direct (BrowserAct) | Uses user's running Chrome, no extra setup |
| Distribution | `npx skills add` | Pure skills, no npm plugin, 67+ agent compatible |
| Skills format | agentskills.io standard | Universal, works across all agents |
| Agent detection | Ask the agent | Agent knows what it is from system prompt |
| Plugins/MCP | Out of scope (v2) | Focus on skills first. Plugins later. |

## Conventions

- Skill files: `kebab-case-names/SKILL.md`
- Paths in skills: always `./glean-data/` (relative)
- CSV fields: snake_case
- Git commits: concise, no emoji, describe what changed
- No comments in code files unless essential
- No automation/cron — manual trigger only

## Data Structure

```
./glean-data/
├── profile.md              # User's business identity
├── target-audience.md      # ICP, evolves over time
├── strategy.md             # Current marketing strategy
├── campaigns/
│   └── <platform>/
│       └── leads.csv       # Per-platform lead data
```

## Skill Structure

```
skills/
├── glean/                  # CMO meta-skill
│   ├── SKILL.md            # CMO behavior
│   ├── references/
│   │   ├── marketing-playbooks.md
│   │   ├── platform-guides.md
│   │   └── skills-format.md
│   └── assets/
│       ├── profile-template.md
│       ├── audience-template.md
│       └── skill-template.md
└── browser-act/            # Browser automation (kept from v1)
    └── SKILL.md
```

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
| Site dir | `glean-site/` |
| Skill count | 2 (glean, browser-act) |
| Site framework | Next.js 15 + Tailwind CSS v4 |

## Deployment

- Live at: https://glean.aawej.in

## Next Tasks (Priority Order)

1. Update README for v2 architecture
2. Update ARCHITECTURE.md for v2
3. Test the CMO skill with a real agent
4. Update glean-site docs for v2
