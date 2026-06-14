# Follow-Up Sequences

Timing and templates for follow-up messages.

## Timing

| Follow-Up | Wait | Purpose |
|-----------|------|---------|
| 1st | 3-5 days | Check in, add value |
| 2nd | 7-10 days | Share resource, re-engage |
| 3rd | 14 days | Final attempt, close the loop |

## Rules

- Max 3 follow-ups per lead
- Each follow-up adds new value (don't just "bump")
- If no response after 3 follow-ups, mark as dead
- If they respond at any point, reset the sequence
- Space out follow-ups across different channels if possible

## Templates

### LinkedIn Follow-Up 1 (Day 3-5)
"Thanks for connecting, [Name]. I've been thinking about [topic] — curious how you're handling [problem] at [Company]."

### LinkedIn Follow-Up 2 (Day 7-10)
"Hey [Name], I came across this [resource] about [topic]. Thought you might find it relevant: [link]"

### LinkedIn Follow-Up 3 (Day 14)
"Hey [Name], I know you're busy. Just wanted to reach out one more time about [problem]. If you're open to chatting, I'd love to hear your perspective."

### Email Follow-Up 1 (Day 3-5)
"Hi [Name], just bumping this up. I noticed [new observation]. Would love to hear your thoughts."

### Email Follow-Up 2 (Day 7-10)
"Hi [Name], I came across this [resource] about [topic]. Thought you might find it relevant: [link]. Still happy to chat if you're interested."

### Email Follow-Up 3 (Day 14)
"Hi [Name], I know you're busy. Last note from me — if you ever want to chat about [problem], I'm here."

### X Follow-Up 1 (Day 3-5)
"Hey [Name], enjoyed our conversation about [topic]. Would love to continue chatting."

### X Follow-Up 2 (Day 7-10)
"Hey [Name], came across this about [topic] — thought you'd find it interesting: [link]"

## Tracking

After each follow-up, update leads.csv:
- last_followup: today's date
- next_followup: based on sequence timing
- last_message: exact text sent
- notes: what happened
