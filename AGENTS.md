# AGENTS.md — Glean Project Context

## Agent skills

### Issue tracker

Issues and PRDs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical roles using default names. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one CONTEXT.md + docs/adr/ at the repo root. See `docs/agents/domain.md`.

## Current State

Glean v3.0 — 7-skill RevOps framework. Composable skills that handle all front-side revenue operations for technical founders with zero customers.

## Architecture

7 composable skills. Each does ONE thing. Skills chain naturally. Founder is always in control.

```
glean-setup → glean-find → glean-reach → glean-track → glean-review
                    ↓              ↓
            glean-content   glean-community
```

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Architecture | 7 composable skills | Small, focused, chains naturally |
| Skill format | agentskills.io standard | Universal, works across 67+ agents |
| Browser | BrowserAct (chrome-direct) | Uses founder's Chrome, anti-detection |
| Data storage | Local markdown + CSV | Simple, zero infra, git-trackable |
| State management | File-based | Persists between sessions, human-readable |
| Human loop | Confirmation gates | Founder always approves before action |
| Distribution | `npx skills add` | Works across all major agents |

## Conventions

- Skill files: `kebab-case-names/SKILL.md`
- Paths in skills: always `./glean-data/` (relative)
- CSV fields: snake_case
- Git commits: concise, no emoji, describe what changed
- No comments in code files unless essential
- No automation/cron — manual trigger only
- SKILL.md under 50 lines — heavy content goes in references/

## Data Structure

```
./glean-data/
├── profile.md              # What you sell, who for, pricing
├── target-audience.md      # Who to find, where they hang out
├── strategy.md             # Channels, messaging, goals
├── leads.csv               # Every lead, every field
└── content/                # Drafts for posts, articles, threads
    └── <date>-<topic>.md
```

## Skill Structure

```
skills/
├── glean-setup/
│   ├── SKILL.md              # Business discovery
│   ├── references/
│   │   ├── discovery-prompts.md
│   │   └── channel-selection.md
│   └── assets/
│       ├── profile-template.md
│       ├── audience-template.md
│       ├── strategy-template.md
│       └── leads-template.csv
├── glean-find/
│   ├── SKILL.md              # Lead discovery
│   └── references/
│       ├── linkedin-search.md
│       ├── x-search.md
│       ├── email-finder.md
│       └── community-search.md
├── glean-reach/
│   ├── SKILL.md              # Send outreach
│   └── references/
│       ├── linkedin-messaging.md
│       ├── email-composition.md
│       ├── x-dm.md
│       └── follow-up-sequences.md
├── glean-content/
│   ├── SKILL.md              # Write content
│   └── references/
│       ├── content-formats.md
│       └── writing-tone.md
├── glean-community/
│   ├── SKILL.md              # Engage communities
│   └── references/
│       ├── reddit-workflow.md
│       ├── hn-workflow.md
│       └── community-rules.md
├── glean-track/
│   └── SKILL.md              # Pipeline status
└── glean-review/
    ├── SKILL.md              # Analyze results
    └── references/
        └── metrics-framework.md
```

## Daily Flow

```
Founder opens agent
    ↓
Agent reads all files, reports status (glean-track)
    ↓
Founder decides what to do next
    ↓
Agent suggests, founder approves
    ↓
Agent executes with confirmation gates
    ↓
Agent reports results
    ↓
Cycle repeats
```

## Design Principles

1. **Founder is always in control.** Agent proposes, founder approves.
2. **Skills are small and composable.** Each does ONE thing. Chains naturally.
3. **Stateful through files.** Read/write to `./glean-data/`. Persists between sessions.
4. **Progressive disclosure.** SKILL.md is lean. References on demand.
5. **Clear triggers.** Each skill says exactly when to use it.
6. **Human-readable data.** Markdown and CSV. Founder can edit manually.
7. **No overengineering.** Simple beats complex.

## Voice & Tone (for glean-site)

- Minimalist, confident, developer-first
- Short sentences. No fluff.
- "Glean" as proper noun
- "You" as the founder
- Comparisons are factual, not hype-driven

## Constants

| Item | Value |
|------|-------|
| GitHub user | `pathanaawej0-dot` |
| Repo | `Glean-ai/Glean` |
| Install cmd | `npx skills add Glean-ai/Glean` |
| Site dir | `glean-site/` |
| Skill count | 7 (setup, find, reach, content, community, track, review) |
| Site framework | Next.js 15 + Tailwind CSS v4 |

## Deployment

- Live at: https://glean.aawej.in

## Next Tasks (Priority Order)

1. Update README for v3 architecture
2. Update ARCHITECTURE.md for v3
3. Test skills with a real agent
4. Update glean-site docs for v3
