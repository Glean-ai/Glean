# Glean — Architecture

## Overview

Glean is a 7-skill RevOps framework for technical founders with zero customers. It handles all front-side revenue operations: finding customers, reaching out, creating content, engaging communities, tracking pipeline, and adjusting strategy.

No SaaS. No third-party CRM. No API keys. Everything runs locally through the founder's browser via BrowserAct.

## Philosophy

- **Founder-first**: The founder is always in control. Agent proposes, founder approves.
- **Local-first**: All data lives in `./glean-data/` relative to the founder's project. No cloud sync.
- **Browser-native**: Uses the founder's existing Chrome session (chrome-direct) to interact with web platforms.
- **Composable skills**: Each skill does ONE thing. Skills chain naturally.
- **Stateful**: Skills read and write data files. Previous runs inform current runs.

## How It Works

```
Founder installs Glean → Setup → Find leads → Reach out → Track → Review → Repeat
```

1. **Install**: `npx skills add Glean-ai/Glean` installs all 7 skills
2. **Setup**: Founder says "setup glean" → agent learns about business → writes profile, audience, strategy
3. **Find**: Founder says "find leads" → agent searches LinkedIn, X, email → writes to CSV
4. **Reach**: Founder says "send outreach" → agent composes messages → founder approves → sends
5. **Track**: Founder says "pipeline" → agent shows status, follow-ups, conversion rates
6. **Review**: Founder says "review results" → agent analyzes what works → suggests changes
7. **Repeat**: Cycle continues, system gets smarter over time

## Repository Structure

```
Glean-ai/Glean/
├── skills/
│   ├── glean-setup/                ← Business discovery
│   │   ├── SKILL.md
│   │   ├── references/
│   │   │   ├── discovery-prompts.md
│   │   │   └── channel-selection.md
│   │   └── assets/
│   │       ├── profile-template.md
│   │       ├── audience-template.md
│   │       ├── strategy-template.md
│   │       └── leads-template.csv
│   ├── glean-find/                 ← Lead discovery
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── linkedin-search.md
│   │       ├── x-search.md
│   │       ├── email-finder.md
│   │       └── community-search.md
│   ├── glean-reach/                ← Send outreach
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── linkedin-messaging.md
│   │       ├── email-composition.md
│   │       ├── x-dm.md
│   │       └── follow-up-sequences.md
│   ├── glean-content/              ← Write content
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── content-formats.md
│   │       └── writing-tone.md
│   ├── glean-community/            ← Engage communities
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── reddit-workflow.md
│   │       ├── hn-workflow.md
│   │       └── community-rules.md
│   ├── glean-track/                ← Pipeline status
│   │   └── SKILL.md
│   └── glean-review/               ← Analyze results
│       ├── SKILL.md
│       └── references/
│           └── metrics-framework.md
├── DESIGN.md                       ← Full design doc
├── CONTEXT.md                      ← Domain glossary
├── ARCHITECTURE.md                 ← This file
├── AGENTS.md                       ← Agent session context
├── README.md                       ← Install guide
├── LICENSE                         ← MIT
├── .gitignore
└── glean-site/                     ← Next.js marketing site
```

## Skill Architecture

### The 7 Skills

```
┌──────────────┐
│ glean-setup  │ ← Learn about business
└──────┬───────┘
       │ writes profile, audience, strategy
       ▼
┌──────────────┐     ┌────────────────┐
│  glean-find  │────▶│  glean-reach   │
│ Find leads   │     │ Send outreach  │
└──────┬───────┘     └───────┬────────┘
       │                     │
       ▼                     ▼
┌──────────────┐     ┌────────────────┐
│glean-content │     │glean-community │
│ Write posts  │     │ Engage Reddit  │
└──────────────┘     └────────────────┘
       │                     │
       ▼                     ▼
┌──────────────┐     ┌────────────────┐
│ glean-track  │────▶│  glean-review  │
│ Show status  │     │ Analyze results│
└──────────────┘     └───────┬────────┘
                             │
                             ▼
                      Updates strategy
                      Cycle repeats
```

### Skill Design

Each skill follows the same pattern:

```
skill-name/
├── SKILL.md              ← Main instructions (~50 lines)
├── references/           ← Detailed workflows (loaded on demand)
└── assets/               ← Templates (if needed)
```

**SKILL.md contains:**
- Trigger: when to activate
- Behavior: what to do step by step
- Files read: what data it needs
- Files written: what data it produces
- Confirmation gate: what needs approval

**References contain:**
- Platform-specific workflows
- BrowserAct commands
- Templates and examples

### Human in the Loop

Every skill that does browser work has a confirmation gate:

```
1. Agent reads data
2. Agent proposes action: "Found 20 leads. Want me to send outreach?"
3. Agent shows preview: "Here are the messages I'll send:"
4. Founder approves or modifies
5. Agent executes
6. Agent reports results
```

**Rule: Agent NEVER acts without founder approval.**

## Data Model

### Data Directory

```
./glean-data/
├── profile.md              ← What you sell, who for, pricing
├── target-audience.md      ← Who to find, where they hang out
├── strategy.md             ← Channels, messaging, goals
├── leads.csv               ← Every lead, every field
└── content/                ← Drafts for posts, articles, threads
    └── <date>-<topic>.md
```

### Profile

Contains: what you sell, who you sell to, your tone, your website, what you've tried.

### Target Audience

Contains: titles, industries, company size, where they hang out, their pain, outreach approach.

### Strategy

Contains: channels, priority order, messaging angle, goals, status.

### CSV Schema

```
id,name,title,company,industry,linkedin_url,x_handle,email,source,platform,stage,score,tags,notes,first_contact,last_followup,next_followup,last_message
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | int | Auto-incrementing ID |
| `name` | string | Lead name |
| `title` | string | Job title |
| `company` | string | Company name |
| `industry` | string | Industry |
| `linkedin_url` | string | LinkedIn profile URL |
| `x_handle` | string | X/Twitter handle |
| `email` | string | Email address |
| `source` | string | How the lead was found |
| `platform` | string | Which channel |
| `stage` | enum | Pipeline stage |
| `score` | int | Fit score (0-100) |
| `tags` | string | Comma-separated tags |
| `notes` | string | Context notes |
| `first_contact` | date | Date of first outreach |
| `last_followup` | date | Date of most recent follow-up |
| `next_followup` | date | Scheduled next follow-up |
| `last_message` | string | Exact message sent |

### Stages

| Stage | Meaning | Next Action |
|-------|---------|-------------|
| `discovered` | Found but not contacted | Send first outreach |
| `contacted` | First outreach sent | Wait for reply or follow-up |
| `replied` | Lead responded | Engage further, book meeting |
| `meeting_booked` | Meeting scheduled | Prepare for call |
| `converted` | Deal won | Move to customer track |
| `dead` | No longer pursuing | No further action |

## Tech Choices

| Decision | Choice | Why |
|----------|--------|-----|
| Architecture | 7 composable skills | Small, focused, chains naturally |
| Skill format | agentskills.io standard | Universal, works across 67+ agents |
| Browser | BrowserAct (chrome-direct) | Uses founder's Chrome, anti-detection |
| Data storage | Local markdown + CSV | Simple, zero infra, git-trackable |
| State management | File-based | Persists between sessions, human-readable |
| Human loop | Confirmation gates | Founder always approves before action |
| Distribution | `npx skills add` | Works across all major agents |
