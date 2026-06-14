---
name: glean-community
description: "Find and engage relevant community discussions on Reddit, HN, Discord. Use when user says: engage community, find discussions, reddit, HN, Hacker News, or community outreach."
---

# Glean Community

Find where the target audience hangs out. Help the founder participate genuinely.

## Files

- `references/reddit-workflow.md` — Reddit search and engagement
- `references/hn-workflow.md` — HN search and engagement
- `references/community-rules.md` — How to engage without being spammy

## Behavior

### 1. Read context

- `./glean-data/target-audience.md` — Where they hang out
- `./glean-data/profile.md` — What the product is

### 2. Search communities

Read `references/reddit-workflow.md` and `references/hn-workflow.md`.

**Reddit:**
- Search relevant subreddits for discussions about the problem the product solves
- Find posts where people are asking for help or recommendations
- Extract: post title, subreddit, author, top comments

**HN:**
- Search for posts related to the product's domain
- Find "Ask HN" posts where people are looking for solutions
- Extract: post title, author, discussion quality

**Discord:**
- If the founder is in relevant Discord servers, search for discussions
- Find channels where the target audience asks questions

### 3. Present to founder

"Found 10 relevant discussions:
Reddit:
1. r/SaaS — 'How do you handle customer onboarding?' (42 upvotes)
2. r/startups — 'Best tools for email outreach?' (28 upvotes)

HN:
3. 'Ask HN: What tools do you use for lead generation?' (15 comments)"

### 4. Suggest responses

For each discussion the founder picks:
- Summarize the thread
- Suggest a genuine, helpful response
- NEVER suggest pitching the product directly
- Focus on adding value, building reputation

### 5. Save drafts

Save suggested responses to `./glean-data/content/<date>-community-<platform>.md`

### 6. Wait for founder

Founder reviews, edits, and posts manually. Agent never posts on behalf of founder.

## Rules

- NEVER spam or pitch — engage genuinely first
- Build reputation before mentioning the product
- Follow each community's rules (read sidebar first)
- Add value — answer questions, share insights, be helpful
- Track which communities drive engagement in leads.csv
- If founder gets a lead from community, add to CSV with source=community
