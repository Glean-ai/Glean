# Glean — AI CMO Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-6B46C1.svg)](LICENSE)
[![Install with npx skills](https://img.shields.io/badge/install-npx%20skills-6B46C1)](https://github.com/Glean-ai/Glean)
[![Powered by BrowserAct](https://img.shields.io/badge/powered%20by-BrowserAct-FF6B35)](https://www.browseract.com)

Glean is an AI-powered CMO agent that builds marketing and sales skills for any AI coding agent. It understands your business, picks the right channels, generates custom outreach skills, and helps you execute campaigns.

No SaaS. No fixed workflows. The CMO adapts to you.

**[View Documentation →](https://glean.aawej.in)**

---

## Quick Start

```bash
npx skills add Glean-ai/Glean
```

Then tell your agent:
> *"setup glean"*

The CMO will learn about your business, pick a strategy, and build your first outreach skill.

---

## How It Works

1. **Setup** — CMO scrapes your website or reads your code to understand your business. Asks what it can't figure out automatically.
2. **Strategy** — CMO recommends channels based on your stage (pre-revenue, early traction, scaling).
3. **Generate** — CMO builds platform-specific skills (LinkedIn, X, Email, Google Maps) tailored to your audience.
4. **Execute** — Activate a generated skill. It runs the full workflow: search, extract, outreach, track.
5. **Adjust** — CMO reviews results, suggests changes, regenerates skills as needed.

---

## What Gets Generated

The CMO creates real skills that your agent can load like any other:

```
glean-linkedin-outreach/     ← Generated skill
├── SKILL.md                 ← Your custom LinkedIn workflow
└── references/              ← Platform-specific guides
```

Skills follow the [agentskills.io](https://agentskills.io) standard. You can edit them, delete them, or ask the CMO to regenerate.

---

## Data Stays Local

```
./glean-data/
├── profile.md              ← Your business identity
├── target-audience.md      ← Who you're targeting
├── strategy.md             ← Current marketing plan
└── campaigns/
    └── linkedin/
        └── leads.csv       ← Your pipeline
```

No cloud. No CRM fees. Your data lives in your project.

---

## Works With

Glean works with any AI coding agent that supports skills:

Claude Code, Cursor, Windsurf, Codex, OpenCode, Roo, Amp, Goose, Copilot, Cline, and 67+ others.

---

## Documentation

Visit [glean.aawej.in](https://glean.aawej.in) for full documentation.

## License

MIT
