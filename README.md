# Glean — RevOps Skills for AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-6B46C1.svg)](LICENSE)
[![Install with npx skills](https://img.shields.io/badge/install-npx%20skills-6B46C1)](https://github.com/Glean-ai/Glean)
[![Powered by BrowserAct](https://img.shields.io/badge/powered%20by-BrowserAct-FF6B35)](https://www.browseract.com)

7 skills that turn your AI coding agent into a RevOps machine. Find customers, reach out, create content, track pipeline — all from your terminal.

No SaaS. No CRM. No API keys. Your data stays local.

---

## Quick Start

```bash
npx skills add Glean-ai/Glean
```

Then tell your agent:

> *"setup glean"*

The agent learns about your business, picks channels, and you're ready to find leads.

---

## The 7 Skills

| Skill | What it does | Trigger |
|-------|-------------|---------|
| **glean-setup** | Discover your business, write profile/audience/strategy | `setup glean` |
| **glean-find** | Find leads on LinkedIn, X, email, communities | `find leads` |
| **glean-reach** | Send connection requests, DMs, emails | `send outreach` |
| **glean-content** | Write posts, threads, articles | `write content` |
| **glean-community** | Find and engage Reddit, HN, Discord | `engage community` |
| **glean-track** | Show pipeline status, follow-ups, conversion rates | `pipeline` |
| **glean-review** | Analyze what's working, suggest strategy changes | `review results` |

---

## How It Works

```
Setup → Find → Reach → Track → Review → Repeat
```

1. **Setup** — Agent learns about your product, who you sell to, and picks channels
2. **Find** — Agent searches LinkedIn, X, email for people matching your ideal customer
3. **Reach** — Agent composes personalized messages, you approve before sending
4. **Track** — Agent shows your pipeline: who's contacted, who replied, who converted
5. **Review** — Agent analyzes results, suggests what to double down on or stop

Every step requires your approval. The agent proposes, you decide.

---

## What Gets Built

After setup, you have:

```
./glean-data/
├── profile.md              # What you sell, who for, pricing
├── target-audience.md      # Who to find, where they hang out
├── strategy.md             # Channels, messaging, goals
├── leads.csv               # Everyone you've found/contacted
└── content/                # Drafts for posts, articles, threads
```

Your data. Local. Editable. Git-trackable.

---

## Example Session

```
You: setup glean
Agent: I found your website. You sell a dev tool for API testing.
       Who is it for? What's your pricing? What have you tried?

You: It's for backend devs. $20/mo. Haven't tried anything yet.

Agent: Got it. I recommend starting with LinkedIn and X.
       Target backend engineers and CTOs at startups.
       Want me to write your profile?

You: yes

Agent: Done. Your profile, audience, and strategy are saved.
       Want me to find some leads?

You: find 20 leads on LinkedIn

Agent: Found 20 leads. Here's the list:
       1. Sarah Chen (CTO @ Acme)
       2. Mike Johnson (VP Eng @ TechCo)
       ...
       Want me to send connection requests?

You: yes, top 10

Agent: Here are the messages I'll send:
       1. To Sarah: "Saw your post about API monitoring..."
       2. To Mike: "Noticed you're scaling your backend team..."
       Approve?

You: yes

Agent: Sent 10 connection requests. 3 follow-ups scheduled.
       Want me to find more leads?
```

---

## Design Principles

1. **You're always in control** — Every action gets your approval first
2. **Skills are small and composable** — Each does ONE thing well
3. **Stateful through files** — Previous sessions inform current ones
4. **Human-readable data** — Markdown and CSV you can edit manually
5. **No overengineering** — Simple beats complex

---

## Requirements

- An AI coding agent (Claude Code, Cursor, Windsurf, Codex, etc.)
- BrowserAct (for LinkedIn/X/email automation)
- A product with no customers (that's what we fix)

---

## Works With

Any AI coding agent that supports the [agentskills.io](https://agentskills.io) standard:

Claude Code, Cursor, Windsurf, Codex, OpenCode, Roo, Amp, Goose, Copilot, Cline, and 67+ others.

---

## Documentation

- [DESIGN.md](./DESIGN.md) — Full design doc with 63 user stories
- [ARCHITECTURE.md](./ARCHITECTURE.md) — Technical architecture
- [CONTEXT.md](./CONTEXT.md) — Domain glossary

---

## License

MIT
