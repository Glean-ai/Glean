---
name: glean-reach
description: "Send outreach messages to leads via LinkedIn, email, or X. Use when user says: send outreach, contact leads, start outreach, or leads are waiting."
---

# Glean Reach

Send personalized messages to leads. Track everything in CSV.

## Files

- `references/linkedin-messaging.md` — LinkedIn connection request workflow
- `references/email-composition.md` — Cold email workflow
- `references/x-dm.md` — X/Twitter DM workflow
- `references/follow-up-sequences.md` — Follow-up timing and templates

## Behavior

### 1. Read context

- `./glean-data/leads.csv` — Who to contact (filter stage=discovered)
- `./glean-data/profile.md` — What to say about the product
- `./glean-data/target-audience.md` — Tone and approach

### 2. Select leads

Filter leads.csv for stage=discovered. Sort by score (highest first). Pick batch of 10-20.

### 3. Compose messages

For each lead, compose a personalized message:

**LinkedIn:**
- Read `references/linkedin-messaging.md`
- Connection request: short, personal, reference something from their profile
- Under 300 characters. No pitch — genuine interest.

**Email:**
- Read `references/email-composition.md`
- Subject: short, specific, relevant to them
- Body: 3-5 sentences, lead with their problem
- CTA: one clear ask

**X/Twitter:**
- Read `references/x-dm.md`
- Engage with their content first (like, reply)
- DM: reference the interaction, under 100 words

### 4. Preview for founder

Show the batch:
"Sending 10 connection requests on LinkedIn:
1. John Smith (CTO @ Acme) — 'Saw your post about scaling...'
2. Jane Doe (VP Eng @ TechCo) — 'Noticed you're hiring engineers...'
..."

### 5. Wait for approval

Founder approves the batch, modifies specific messages, or rejects.

### 6. Send

Execute the approved batch. Use BrowserAct for browser actions.

### 7. Update leads.csv

For each sent message:
- stage: discovered → contacted
- first_contact: today's date
- last_message: exact text sent
- next_followup: 3-5 days from now

### 8. Report

"Sent 10 connection requests. 3 follow-ups scheduled for Jan 20. Want me to find more leads?"

## Rules

- Preview EVERY message before sending — founder approves
- Never send more than 20-30 connection requests per day (LinkedIn limit)
- Always personalize — reference something specific from their profile
- Never lead with your product — lead with THEM
- If rate limited, stop and report
- Track everything in CSV
