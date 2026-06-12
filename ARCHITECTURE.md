# Glean — Architecture

## Overview

Glean is an AI-powered CMO agent that builds marketing and sales skills for any AI coding agent. It understands your business, picks the right channels, generates custom outreach skills, and helps you execute campaigns — all stored locally.

No SaaS. No third-party CRM. No API keys. Everything runs locally through the user's browser via BrowserAct.

## Philosophy

- **CMO-first**: The agent acts as your Chief Marketing Officer — strategic, adaptive, results-driven.
- **Local-first**: All data lives in `./glean-data/` relative to the user's project. No cloud sync.
- **Browser-native**: Uses the user's existing Chrome session (chrome-direct) to interact with web platforms.
- **Skill-generation**: Instead of fixed workflows, Glean generates skills tailored to your business.
- **Skill-ecosystem**: Generated skills follow the agentskills.io standard — works across 67+ AI coding agents.

## How It Works

```
User installs Glean → CMO learns about business → CMO builds skills → User runs outreach
```

1. **Install**: `npx skills add Glean-ai/Glean` installs the CMO meta-skill
2. **Setup**: User says "setup glean" → CMO scrapes website / reads code / asks questions → writes profile, audience, strategy
3. **Generate**: CMO builds platform-specific skills based on strategy → installs to agent's skills directory
4. **Execute**: User activates generated skill → runs outreach → results flow back to `./glean-data/`
5. **Adjust**: CMO reviews results → suggests changes → regenerates skills as needed

## Repository Structure

```
Glean-ai/Glean/
├── skills/
│   ├── glean/                     ← CMO meta-skill (the only skill that ships)
│   │   ├── SKILL.md               ← CMO behavior and instructions
│   │   ├── references/
│   │   │   ├── marketing-playbooks.md  ← Strategy frameworks by stage
│   │   │   ├── platform-guides.md      ← LinkedIn/X/Email/Maps workflows
│   │   │   └── skills-format.md        ← agentskills.io standard reference
│   │   └── assets/
│   │       ├── profile-template.md     ← Template for user profile
│   │       ├── audience-template.md    ← Template for target audience
│   │       └── skill-template.md       ← Template for generated skills
│   └── browser-act/               ← Browser automation (kept from v1)
│       └── SKILL.md
├── CONTEXT.md                     ← Domain glossary
├── ARCHITECTURE.md                ← This file
├── AGENTS.md                      ← Agent session context
├── README.md                      ← Install guide
├── LICENSE                        ← MIT
├── .gitignore
└── glean-site/                    ← Next.js marketing site
```

## Skill Architecture

### The CMO Meta-Skill

Glean ships with ONE skill: the CMO. It does not do outreach itself — it builds the skills that do.

```
┌─────────────────────────────────────┐
│          glean (CMO)                │
│  Understands business               │
│  Picks channels                     │
│  Generates skills                   │
│  Reviews results                    │
│  Adjusts strategy                   │
└──────────┬──────────────────────────┘
           │ generates
     ┌─────┼─────┬──────┬──────┐
     ▼     ▼     ▼      ▼      ▼
 ┌──────┐ ┌──┐ ┌─────┐ ┌────┐ ┌──────┐
 │Linked│ │ X│ │Email│ │Maps│ │ custom│
 │ -in  │ │  │ │     │ │    │ │ ...   │
 └──────┘ └──┘ └─────┘ └────┘ └──────┘
           ↑
     Generated skills — user can
     edit, delete, or regenerate
```

### How Skills Get Generated

1. CMO reads `./glean-data/profile.md` (what you sell, who you target)
2. CMO reads `./glean-data/target-audience.md` (refined ICP)
3. CMO reads `./glean-data/strategy.md` (current plan)
4. CMO researches the platform if needed (web search)
5. CMO generates SKILL.md following agentskills.io format
6. CMO installs to user's chosen skills directory (`.agents/skills/` or agent-specific)
7. If agent supports commands, CMO can create commands for frequently-used workflows

### Generated Skill Structure

Every generated skill follows this pattern:

```
glean-<platform>-<purpose>/
├── SKILL.md              ← Main instructions
├── references/           ← Optional: detailed guides
├── scripts/              ← Optional: helper scripts
└── assets/               ← Optional: templates
```

### Skill Chaining

Generated skills can reference other skills. For complex workflows, the CMO creates an orchestrator skill that chains multiple platform skills together. Example: "Find leads on LinkedIn → verify emails → send outreach."

## Data Model

### Data Directory

```
./glean-data/
├── profile.md              ← User's business identity
├── target-audience.md      ← ICP, evolves over time
├── strategy.md             ← Current marketing strategy
├── campaigns/
│   └── <platform>/
│       └── leads.csv       ← Per-platform lead data
```

### Profile

Contains: what you sell, who you sell to, your voice, your tools, your stage.

### Target Audience

Contains: roles, industries, company sizes, where to find them, what they care about, outreach approach.

### Strategy

Contains: active channels, current focus, what's working, what's not, next actions.

### CSV Schema

```
id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | int | Auto-incrementing ID |
| `name` | string | Lead name |
| `title` | string | Job title or business category |
| `company` | string | Company name |
| `industry` | string | Industry |
| `linkedin_url` | string | LinkedIn profile URL |
| `x_handle` | string | X/Twitter handle |
| `email` | string | Email address |
| `stage` | enum | `discovered` → `contacted` → `replied` → `meeting_booked` → `converted` → `dead` |
| `score` | int | Lead score (0-100) |
| `source` | string | How the lead was found |
| `platform` | enum | `linkedin`, `x`, `email`, `gmaps` |
| `tags` | string | Comma-separated tags |
| `notes` | string | Outreach notes |
| `first_contact` | date | Date of first outreach |
| `last_followup` | date | Date of most recent follow-up |
| `next_followup` | date | Scheduled next follow-up date |

### Stages

| Stage | Meaning | Next Action |
|-------|---------|-------------|
| `discovered` | Found but not contacted | Send first outreach |
| `contacted` | First outreach sent | Wait for reply or follow-up |
| `replied` | Lead responded | Engage further, book meeting |
| `meeting_booked` | Meeting scheduled | Prepare for call |
| `converted` | Deal won | Move to customer track |
| `dead` | No longer pursuing | No further action |

## Platform Detection

The CMO detects the agent platform by asking the agent. Every agent knows what it is from its system prompt. The CMO then:

1. Determines where to install generated skills (`.agents/skills/` universal or agent-specific directory)
2. Checks if the agent supports commands (if yes, creates them for frequently-used workflows)
3. Adapts generated skill instructions to the agent's capabilities

## CMO Lifecycle

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Setup   │────▶│ Generate │────▶│ Execute  │────▶│ Adjust   │
│          │     │          │     │          │     │          │
│ Learn    │     │ Build    │     │ Run      │     │ Review   │
│ business │     │ skills   │     │ outreach │     │ results  │
│ strategy │     │ install  │     │ track    │     │ iterate  │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
     ▲                                                     │
     └─────────────────────────────────────────────────────┘
                        Re-run setup anytime
```

## Tech Choices

| Decision | Choice | Why |
|----------|--------|-----|
| Architecture | Single CMO meta-skill | Fixed skills break for different businesses |
| Skill generation | Runtime, per-user | Each user gets tailored skills |
| Distribution | `npx skills add` | Works across 67+ agents |
| Skills format | agentskills.io standard | Universal, portable |
| Browser | BrowserAct (chrome-direct) | Uses user's Chrome, no extra setup |
| Data storage | Local CSV + markdown | Simple, zero infra, git-trackable |
| Agent detection | Ask the agent | Agent knows what it is |
| Commands | Optional, agent-dependent | Only if agent supports them |

## Roadmap

### Phase 1 — Current (v2.0)
- CMO meta-skill with full setup flow
- Generated skills for LinkedIn, X, Email, Google Maps
- Marketing playbooks by business stage
- Platform detection and skill installation

### Phase 2 — Enhancement (v2.1)
- Multi-skill orchestrator workflows
- Command generation for supported agents
- Campaign analytics and reporting
- Strategy adjustment recommendations

### Phase 3 — Scale (v3.0)
- Plugin generation for agents that support it
- MCP integrations (HubSpot, etc.)
- Automated campaign execution
- Community-generated skill templates
