---
name: glean-find
description: "Find leads matching the ideal customer profile on LinkedIn, X, email, and communities. Use when user says: find leads, search for people, build lead list, or pipeline is empty."
---

# Glean Find

Search platforms for people matching the founder's ideal customer. Write to leads.csv.

## Files

- `references/linkedin-search.md` — LinkedIn search workflow
- `references/x-search.md` — X/Twitter search workflow
- `references/email-finder.md` — Email discovery workflow
- `references/community-search.md` — Reddit/HN/Discord search workflow

## Behavior

### 1. Read context

- `./glean-data/target-audience.md` — Who to find
- `./glean-data/profile.md` — Product context
- `./glean-data/leads.csv` — Existing leads (avoid duplicates)

### 2. Determine channels

Read `./glean-data/strategy.md`. For each channel in the strategy, run the corresponding search workflow.

### 3. Search and extract

For each channel:

**LinkedIn:**
- Read `references/linkedin-search.md`
- Search by title + industry + location
- Visit profiles, extract: name, title, company, industry, linkedin_url
- Skip if already in CSV

**X/Twitter:**
- Read `references/x-search.md`
- Search bios by keywords, hashtags, recent posts
- Extract: name, handle, bio, website

**Email:**
- Read `references/email-finder.md`
- Check company websites, team pages, LinkedIn profiles
- Find email patterns (first@domain, first.last@domain)

**Communities:**
- Read `references/community-search.md`
- Search Reddit, HN for relevant discussions
- Extract usernames and profiles of active participants

### 4. Present to founder

Show the found leads:
"Found 20 leads:
- 10 on LinkedIn: [names, titles, companies]
- 5 on X: [names, handles]
- 5 from email: [names, emails]"

### 5. Wait for approval

Founder approves, modifies, or rejects. Only write to CSV after approval.

### 6. Write to CSV

Add approved leads to `./glean-data/leads.csv` with stage=discovered.

### 7. Report

"Added 20 leads to your pipeline. 33 total leads now. Want me to start outreach?"

## Rules

- Never contact the same person twice (check CSV before adding)
- Show leads before writing — founder approves first
- Respect rate limits — stop if platform blocks you
- Personalize search queries based on target-audience.md
- Batch size: 10-20 leads per search session
