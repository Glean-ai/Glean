---
name: glean-review
description: "Analyze campaign results, identify what's working, suggest strategy changes. Use when user says: review results, what's working, analyze, what should I do next, or strategy review."
---

# Glean Review

Analyze what's working. Suggest strategy changes.

## Files

- `references/metrics-framework.md` — How to calculate and interpret metrics

## Behavior

### 1. Read all data

- `./glean-data/leads.csv` — Full history
- `./glean-data/strategy.md` — Current plan
- `./glean-data/target-audience.md` — Current audience definition

### 2. Calculate metrics

Read `references/metrics-framework.md` for calculation methods.

**Channel performance:**
```
LinkedIn: 20 leads, 8 contacted, 2 replied (25% response rate)
X:        15 leads, 3 contacted, 1 replied (33% response rate)
Email:    15 leads, 1 contacted, 0 replied (0% response rate)
```

**Messaging analysis:**
- Which messages got replies?
- What patterns do they share?
- What didn't work?

**Audience analysis:**
- Which titles converted?
- Which industries converted?
- Which company sizes converted?

**Timeline analysis:**
- How long from contact to reply?
- How many follow-ups before reply?
- What's the optimal follow-up timing?

### 3. Identify patterns

"What's working:
- LinkedIn connection requests with personal note → 25% response rate
- Technical founders (CTO, VP Eng) → 2x higher response rate
- Messaging about 'saving time' → more replies than 'saving money'

What's not working:
- Cold email with no prior touch → 0% response rate
- X DMs without engagement first → 0% response rate
- Marketing managers → 0% response rate"

### 4. Suggest changes

Based on analysis, recommend:

**Strategy updates:**
- "Focus on LinkedIn — it's working. Pause email for now."
- "Target CTOs and VPs of Engineering. Stop targeting marketing managers."
- "Lead with time savings, not cost savings."

**Audience refinements:**
- "Refine target audience: add 'technical founder' as a key persona."
- "Exclude marketing managers from targeting."

**Next actions:**
- "Double LinkedIn outreach. Send 20 more connection requests this week."
- "Test a new messaging angle: 'How much time does your team spend on X?'"
- "Follow up with the 2 people who replied — they showed interest."

### 5. Present to founder

Show the analysis and recommendations. Founder approves or modifies changes.

### 6. Update files

If founder approves:
- Update `strategy.md` with new channels, messaging, goals
- Update `target-audience.md` with refined audience

### 7. Report

"Updated your strategy. Focus on LinkedIn, target technical founders, lead with time savings. Want me to find more leads?"

## Rules

- Base recommendations on data, not assumptions
- Present analysis, let founder decide what to change
- Never change files without approval
- Track what was changed and why (for future reviews)
- Review after 20+ leads processed, or weekly
