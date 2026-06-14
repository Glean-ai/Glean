---
name: glean-track
description: "Show pipeline status, lead counts, conversion rates, and follow-up schedule. Use when user says: pipeline, show leads, status, what's my status, check replies, or follow-ups."
---

# Glean Track

Show the founder what's happening in their pipeline. Read-only.

## Behavior

### 1. Read leads.csv

Load `./glean-data/leads.csv`.

### 2. Count by stage

```
discovered:    33
contacted:     12
replied:        3
meeting_booked: 1
converted:      0
dead:           1
─────────────────
total:         50
```

### 3. Calculate conversion rates

```
discovered → contacted:  36% (12/33)
contacted → replied:     25% (3/12)
replied → meeting_booked: 33% (1/3)
overall conversion:       0% (0/50)
```

### 4. Show follow-ups due

Filter leads where next_followup <= today:
"3 follow-ups due today:
- John Smith (LinkedIn) — last contacted Jan 10
- Jane Doe (Email) — last contacted Jan 8
- Bob Wilson (X) — last contacted Jan 12"

### 5. Show channel breakdown

```
LinkedIn: 20 leads, 8 contacted, 2 replied
X:        15 leads, 3 contacted, 1 replied
Email:    15 leads, 1 contacted, 0 replied
```

### 6. Show recent activity

"Last 7 days:
- 10 new leads found
- 5 messages sent
- 2 replies received
- 0 conversions"

### 7. Suggest next action

Based on the data, suggest what to do next:
- "You have 33 leads waiting for outreach. Want me to send some?"
- "3 people replied. Want me to show their messages?"
- "Follow-ups are due for John, Jane, and Bob."

## Rules

- Read-only — never modify files
- Always show summary first, details on request
- Suggest next action based on pipeline state
- Never re-ask questions — just report what the data shows
