---
name: glean-setup
description: "Discover the founder's business, write profile/audience/strategy files. Use when user says: setup glean, configure glean, setup my business, or on first run."
---

# Glean Setup

Learn about the founder's business. Write the data files that all other skills read.

## Files

- `references/discovery-prompts.md` — Questions to ask
- `references/channel-selection.md` — Which channels for which audiences
- `assets/profile-template.md` — Template for profile.md
- `assets/audience-template.md` — Template for target-audience.md
- `assets/strategy-template.md` — Template for strategy.md
- `assets/leads-template.csv` — Template for leads.csv

## Behavior

### 1. Check existing state

Read `./glean-data/` directory.

- If files exist → greet with summary: "You have a profile for [X]. Strategy is [Y]. What would you like to update?"
- If files don't exist → start fresh setup.

### 2. Auto-discover (before asking anything)

Try to learn what you can automatically:

- If website URL → fetch it, extract: what they sell, who they sell to, their tone, their positioning
- If code in working directory → read package.json, README, main entry files
- Store what you learned

### 3. Ask questions (only what couldn't be discovered)

Read `references/discovery-prompts.md` for the full list. Ask conversational questions, not a form. Adapt to the situation.

Key questions:
- "What do you sell? Who is it for?"
- "Do you have any users or customers yet?"
- "What have you tried so far for marketing or sales?"
- "What's your pricing?"
- "Which channels do you want to start on?"

If the founder doesn't know their target audience, help them figure it out. Ask about the problem they solve, who has that problem, and where those people hang out.

### 4. Recommend channels

Read `references/channel-selection.md`. Based on the audience, recommend which channels to start with. Explain why.

### 5. Write data files

Create `./glean-data/` and write:

- `profile.md` — From `assets/profile-template.md`, filled with what you learned
- `target-audience.md` — From `assets/audience-template.md`, filled with what you learned
- `strategy.md` — From `assets/strategy-template.md`, with recommended channels and messaging angle
- `leads.csv` — From `assets/leads-template.csv`, empty but ready

### 6. Confirm

Summarize what you set up:
- What you learned about their business
- What strategy you recommend
- What channels to start on
- What to do next

## Rules

- Have conversations, not forms.
- Never re-ask questions that are already answered in existing files.
- If you don't know something, ask — but try to figure it out automatically first.
- Always read existing data before generating new data.
- Present everything for confirmation before writing files.
