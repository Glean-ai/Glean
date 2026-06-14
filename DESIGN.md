# Glean — Skills Framework Design

## Problem Statement

A technical founder builds a product. They have zero customers, zero revenue, zero marketing experience. They need an AI agent — running on their existing coding tool (Claude Code, Cursor, etc.) — to handle all front-side revenue operations: finding customers, reaching out, creating content, engaging communities, tracking pipeline, and advising on strategy.

The agent must be stateful. It reads and writes data files. Each session builds on the last. The system gets smarter over time.

The founder is always in control. The agent proposes. The founder decides.

## What a Founder Must Do to Get First Paying Customers

### Phase 1: Define What You're Selling

1. **Define your value proposition** — One sentence: what problem you solve, for whom, why you're different.
2. **Define your ideal customer** — Who specifically has this problem? Job title? Industry? Company size? Where do they hang out online?
3. **Pick your pricing** — Even if rough. Free tier? $10/mo? $100/mo? You need something to sell.

### Phase 2: Find People Who Match

4. **Build a lead list** — Find 50-100 people who match your ideal customer profile. Specific people with names, companies, contact info.
5. **Where to look:**
   - LinkedIn search (title + industry + location filters)
   - Twitter/X (keywords in bios, hashtags, communities)
   - Reddit (subreddits where your audience hangs out)
   - Indie Hackers, Product Hunt, HN (for builder audience)
   - Google Maps (for local businesses)
   - Your own network (friends, ex-colleagues)
6. **Enrich your leads** — For each person: email, LinkedIn URL, what they post about, any mutual connections, recent activity.

### Phase 3: Start Conversations (Not Pitches)

7. **Warm up before cold outreach:**
   - Follow them on social
   - Like/comment on their posts (genuine, not spammy)
   - If they write articles, read and reference them
8. **Send the first message:**
   - LinkedIn connection request with a personal note
   - Cold email with a specific hook
   - Twitter DM after engaging with their content
   - NEVER lead with your product. Lead with THEM.
9. **The conversation flow:**
   - "Hey, I saw you're doing X — I've been thinking about that problem too"
   - Ask about their experience with the problem
   - Listen more than you talk
   - If they express pain, THEN mention your solution

### Phase 4: Convert to Paying

10. **Get them to try it:** Free trial, demo call, beta access. Make it stupid easy to start.
11. **Follow up:** Most founders give up after 1 message. Don't. Day 3, Day 7, Day 14.
12. **Handle objections:** Price, timing, competition. Have answers ready.
13. **Close:** Ask for the sale directly. Make payment easy.

### Phase 5: Learn and Repeat

14. **Track everything:** Who contacted, through what channel, what message, who responded, who converted.
15. **Double down on what works:** If LinkedIn got 3 customers, do more LinkedIn.
16. **Kill what doesn't work:** If 50 emails got 0 replies, change approach.

## What an AI Agent Can and Cannot Do

### Can Do

| Capability | How |
|------------|-----|
| Read/write files | Markdown, CSV, text files |
| Run shell commands | Bash, scripts |
| Browse the web | BrowserAct: navigate, extract, fill forms, send messages |
| Have conversations | Ask questions, give advice, brainstorm |
| Search | Web search, find information |
| Analyze data | Read CSVs, find patterns, make recommendations |
| Write content | Blog posts, emails, tweets, messages (saved as files) |

### Cannot Do

| Limitation | Why |
|------------|-----|
| Make phone calls | No voice capability |
| Send SMS | No phone integration |
| Run paid ads | No ad platform access |
| Post to social media automatically | Only through browser, needs confirmation |
| Access private APIs | Unless there's a tool |
| Act without approval | Agent proposes, founder decides |

### Implications

- **Outreach is limited to browser-based channels:** LinkedIn, X, email. No phone, no SMS.
- **Content creation is write-only:** Agent writes drafts, founder publishes manually.
- **Paid channels are out of scope:** Agent can advise on ads but cannot run them.
- **Community engagement is possible but requires care:** Reddit, HN, Discord through browser.

## The 7 Skills

### Overview

| Skill | Purpose | BrowserAct | Human Loop |
|-------|---------|------------|------------|
| `glean-setup` | Discover business, write profile/audience/strategy | Light | Heavy |
| `glean-find` | Find leads on LinkedIn, X, email, communities | Heavy | Medium |
| `glean-reach` | Send connection requests, DMs, emails | Heavy | Heavy |
| `glean-content` | Write posts, threads, articles | None | Heavy |
| `glean-community` | Find and engage Reddit, HN, Discord | Medium | Medium |
| `glean-track` | Show pipeline status, track leads | None | None |
| `glean-review` | Analyze results, suggest strategy changes | None | Medium |

### Skill: glean-setup

**Trigger:** "setup glean" or first run

**Purpose:** Learn about the founder's business. Write the data files that all other skills read.

**Behavior:**
1. Check if `./glean-data/` exists
   - If exists → greet with summary, ask what to update
   - If not → start fresh
2. Auto-discover (before asking anything)
   - Fetch website URL → extract product, audience, tone
   - Read code in working directory → understand product
3. Ask questions (only what couldn't be discovered)
   - "What's your pricing?"
   - "What have you tried for marketing?"
   - "Who is your ideal customer?"
   - "Which channels do you want to start on?"
4. Write files: profile.md, target-audience.md, strategy.md
5. Confirm with user

**Reads:** existing files in `./glean-data/` (if any)
**Writes:** `./glean-data/profile.md`, `./glean-data/target-audience.md`, `./glean-data/strategy.md`
**BrowserAct:** Fetch website only
**Confirmation:** Before writing any file

---

### Skill: glean-find

**Trigger:** "find leads" or pipeline is empty

**Purpose:** Search platforms for people matching the ideal customer profile. Write to leads.csv.

**Behavior:**
1. Read target-audience.md → who to find
2. Read profile.md → product context
3. Read existing leads.csv → avoid duplicates
4. For each channel in strategy.md:
   - LinkedIn: search by title + industry, visit profiles, extract info
   - X: search bios, hashtags, recent posts
   - Email: find emails via website, company pages, patterns
   - Communities: search Reddit, HN for relevant discussions
5. Show found leads to founder → "Found 20 leads. Here's the list."
6. Wait for approval before writing to CSV

**Reads:** `target-audience.md`, `profile.md`, `leads.csv`
**Writes:** `leads.csv` (new rows)
**BrowserAct:** LinkedIn search, X search, website scraping
**Confirmation:** Before writing leads, before continuing if batch is large

---

### Skill: glean-reach

**Trigger:** "send outreach" or leads with stage=discovered

**Purpose:** Send personalized messages to leads. Track in CSV.

**Behavior:**
1. Read leads.csv → filter stage=discovered
2. Read profile.md → what to say about product
3. Read target-audience.md → tone and approach
4. For each lead (batch of 10-20):
   - LinkedIn: compose connection request, preview for founder, send
   - Email: compose email, preview for founder, send
   - X: engage with content first, then DM, preview for founder
5. Update leads.csv: stage=contacted, first_contact, last_message
6. Report results

**Reads:** `leads.csv`, `profile.md`, `target-audience.md`
**Writes:** `leads.csv` (updated rows)
**BrowserAct:** LinkedIn messaging, email composition, X engagement
**Confirmation:** Preview EVERY message before sending. Batch confirmation or per-message.

---

### Skill: glean-content

**Trigger:** "write content" or "create post" or "draft tweet"

**Purpose:** Write content that attracts the target audience. Saved as files for founder to publish.

**Behavior:**
1. Read profile.md → what the product is
2. Read target-audience.md → who they're writing for
3. Read strategy.md → messaging angle
4. Ask founder: what topic? what platform? what format?
5. Write draft → save to `./glean-data/content/<date>-<topic>.md`
6. Present to founder → "Here's a draft. Edit and publish when ready."
7. Founder edits, publishes manually

**Reads:** `profile.md`, `target-audience.md`, `strategy.md`
**Writes:** `./glean-data/content/<date>-<topic>.md`
**BrowserAct:** None
**Confirmation:** Always — founder reviews before publishing

---

### Skill: glean-community

**Trigger:** "engage community" or "find discussions" or "reddit" or "HN"

**Purpose:** Find relevant community discussions. Help founder participate genuinely.

**Behavior:**
1. Read target-audience.md → where they hang out
2. Read profile.md → what the product is
3. Search Reddit, HN, Discord for relevant discussions
4. Show found discussions to founder → "Here are 10 relevant threads."
5. For each discussion the founder picks:
   - Summarize the thread
   - Suggest a genuine, helpful response (not salesy)
   - Save draft to `./glean-data/content/<date>-community-<platform>.md`
6. Founder reviews, edits, posts manually

**Reads:** `target-audience.md`, `profile.md`
**Writes:** `./glean-data/content/` (drafts)
**BrowserAct:** Reddit search, HN search
**Confirmation:** Before suggesting any response

---

### Skill: glean-track

**Trigger:** "pipeline" or "show leads" or "what's my status" or "check replies"

**Purpose:** Show the founder what's happening in their pipeline. Read-only.

**Behavior:**
1. Read leads.csv
2. Count by stage: discovered, contacted, replied, meeting_booked, converted, dead
3. Calculate conversion rates between stages
4. Show summary: "45 leads total. 12 contacted, 3 replied, 1 interested."
5. Show details if asked: "Here are the 3 who replied..."

**Reads:** `leads.csv`, `strategy.md`
**Writes:** Nothing (read-only)
**BrowserAct:** None
**Confirmation:** None (just reports)

---

### Skill: glean-review

**Trigger:** "review results" or "what's working" or "analyze" (weekly or after 20+ leads)

**Purpose:** Analyze what's working. Suggest strategy changes.

**Behavior:**
1. Read leads.csv → full history
2. Read strategy.md → current plan
3. Analyze: which channel has best response rate? which messaging works? which persona converts?
4. Update strategy.md → add channels that work, remove ones that don't, refine messaging
5. Update target-audience.md → refine based on who converted
6. Report to founder: "LinkedIn got 40% response rate. X got 5%. Recommend focusing on LinkedIn."

**Reads:** `leads.csv`, `strategy.md`, `target-audience.md`
**Writes:** `strategy.md`, `target-audience.md`
**BrowserAct:** None
**Confirmation:** Present analysis, founder approves changes

## Data Model

### Directory Structure

```
./glean-data/
├── profile.md              # Who you are, what you sell
├── target-audience.md      # Who to find, where they are
├── strategy.md             # Channels, messaging, goals
├── leads.csv               # Every lead, every field
└── content/                # Drafts for posts, articles, threads
    └── <date>-<topic>.md
```

### profile.md

```markdown
# Business Profile

## What You Sell
One sentence value proposition.

## Who You Sell To
One sentence target customer.

## Pricing
Tiers and amounts.

## Tone
Formal / casual / technical.

## Website
URL

## What You've Tried
Previous marketing attempts.
```

### target-audience.md

```markdown
# Target Audience

## Titles
Job titles to target.

## Industries
Which industries.

## Company Size
Employee count range.

## Where They Hang Out
Platforms, communities, groups.

## Their Pain
What problem they have.

## Outreach Approach
How to talk to them.
```

### strategy.md

```markdown
# Strategy

## Channels
linkedin, email, x — which to use.

## Priority Order
Which channel first, second, third.

## Messaging Angle
The hook. Why should they care.

## Goals
What success looks like. "10 paying customers in 30 days."

## Status
not_started / in_progress / reviewing
```

### leads.csv

```
id,name,title,company,industry,linkedin_url,x_handle,email,source,platform,stage,score,tags,notes,first_contact,last_followup,next_followup,last_message
```

| Field | Type | Purpose |
|-------|------|---------|
| id | int | Unique identifier |
| name | string | Full name |
| title | string | Job title |
| company | string | Company name |
| industry | string | Industry |
| linkedin_url | string | LinkedIn profile |
| x_handle | string | Twitter handle |
| email | string | Email address |
| source | string | How found |
| platform | string | Which channel |
| stage | enum | Pipeline stage |
| score | int | Fit score 0-100 |
| tags | string | Comma-separated tags |
| notes | string | Context notes |
| first_contact | date | When first reached out |
| last_followup | date | Last follow-up date |
| next_followup | date | When to follow up next |
| last_message | string | Exact message sent |

### Pipeline Stages

```
discovered → contacted → replied → meeting_booked → converted → dead
```

| Stage | Meaning | Next Action |
|-------|---------|-------------|
| discovered | Found but not contacted | Send first outreach |
| contacted | First outreach sent | Wait for reply or follow-up |
| replied | Lead responded | Engage further, book meeting |
| meeting_booked | Meeting scheduled | Prepare for call |
| converted | Deal won | Move to customer track |
| dead | No longer pursuing | No further action |

## User Stories

### Setup

1. As a founder, I want to tell the agent about my product once, so that it remembers across sessions.
2. As a founder, I want the agent to fetch my website and understand my product automatically, so I don't have to explain everything.
3. As a founder, I want to define my ideal customer, so the agent knows who to find.
4. As a founder, I want to pick which channels to start on, so the agent focuses on what I want.
5. As a founder, I want the agent to recommend channels based on my audience, so I don't have to guess.
6. As a founder, I want to re-run setup anytime, so I can update my profile as my product evolves.
7. As a founder, I want the agent to remember what I've tried before, so it doesn't suggest things that failed.

### Finding Leads

8. As a founder, I want to say "find 20 leads on LinkedIn" and get a list, so I have people to contact.
9. As a founder, I want the agent to search LinkedIn by job title and industry, so I find the right people.
10. As a founder, I want the agent to search Twitter by keywords and hashtags, so I find people talking about my problem.
11. As a founder, I want the agent to find email addresses for leads, so I can do email outreach.
12. As a founder, I want the agent to check if a lead already exists in my CSV, so I don't contact the same person twice.
13. As a founder, I want to see the list of found leads before they're saved, so I can approve or remove people.
14. As a founder, I want the agent to score leads by fit, so I know who to contact first.
15. As a founder, I want to find people in Reddit and HN discussions, so I can engage communities.

### Outreach

16. As a founder, I want to say "send outreach" and have the agent send connection requests, so I don't have to do it manually.
17. As a founder, I want the agent to personalize every message based on the lead's profile, so it doesn't feel spammy.
18. As a founder, I want to preview every message before it's sent, so I stay in control.
19. As a founder, I want the agent to send LinkedIn connection requests with a short personal note, so I start conversations.
20. As a founder, I want the agent to compose cold emails with a specific hook, so replies are more likely.
21. As a founder, I want the agent to engage with someone's content before DMing them, so the DM isn't cold.
22. As a founder, I want the agent to batch outreach (10-20 at a time), so I don't get rate-limited.
23. As a founder, I want the agent to track who I've contacted and when, so I know when to follow up.
24. As a founder, I want follow-up reminders, so I don't forget to re-engage people.
25. As a founder, I want the agent to stop if it hits a rate limit, so I don't get banned.

### Content Creation

26. As a founder, I want to say "write a tweet thread about X" and get a draft, so I have content to publish.
27. As a founder, I want the agent to write in my tone, so the content sounds like me.
28. As a founder, I want the agent to write for my target audience, so the content attracts the right people.
29. As a founder, I want the draft saved as a file, so I can edit it and publish when ready.
30. As a founder, I want the agent to suggest content topics based on what's working, so I don't run out of ideas.
31. As a founder, I want the agent to write blog post drafts, so I have long-form content.
32. As a founder, I want the agent to write LinkedIn posts, so I can build my professional presence.

### Community Engagement

33. As a founder, I want the agent to find Reddit threads where my audience hangs out, so I know where to participate.
34. As a founder, I want the agent to find HN posts relevant to my product, so I can engage early.
35. As a founder, I want the agent to suggest helpful responses to community discussions, so I don't come across as spammy.
36. As a founder, I want the agent to never post on my behalf without approval, so I stay in control.
37. As a founder, I want the agent to track which communities I've engaged in, so I build relationships over time.

### Pipeline Tracking

38. As a founder, I want to say "show my pipeline" and see a summary of all leads, so I know where I stand.
39. As a founder, I want to see how many leads are in each stage, so I know my conversion funnel.
40. As a founder, I want to see who replied recently, so I can respond quickly.
41. As a founder, I want to see which follow-ups are due today, so I don't miss opportunities.
42. As a founder, I want to see which channel is performing best, so I can focus my efforts.
43. As a founder, I want to filter leads by stage, platform, or tags, so I can focus on specific groups.

### Strategy & Review

44. As a founder, I want the agent to tell me what's working, so I can double down on it.
45. As a founder, I want the agent to tell me what's not working, so I can stop wasting time.
46. As a founder, I want the agent to suggest new channels based on results, so I can expand.
47. As a founder, I want the agent to refine my target audience based on who converted, so I target better.
48. As a founder, I want the agent to analyze my messaging and tell me what got replies, so I can improve.
49. As a founder, I want the agent to set and track goals, so I know if I'm on pace.
50. As a founder, I want weekly reviews, so I stay accountable.

### Daily Workflow

51. As a founder, I want the agent to greet me with a pipeline summary when I open it, so I know what happened overnight.
52. As a founder, I want the agent to suggest what to do next, so I don't have to think about it.
53. As a founder, I want to approve or reject the agent's suggestions, so I stay in control.
54. As a founder, I want the agent to wait for my instruction before taking action, so nothing happens without my say.
55. As a founder, I want the agent to report what it did after each action, so I know what happened.
56. As a founder, I want the agent to remember where we left off, so I don't have to repeat context.
57. As a founder, I want to switch between tasks (find leads, write content, check replies) without losing state, so my workflow is flexible.

### Data & State

58. As a founder, I want all my data stored locally, so I own it and it's private.
59. As a founder, I want the data to persist between sessions, so the agent remembers everything.
60. As a founder, I want the data in simple files (markdown, CSV), so I can read and edit them manually.
61. As a founder, I want the agent to never re-ask questions it already has answers to, so conversations aren't repetitive.
62. As a founder, I want to see exactly what data the agent has about me, so I can correct mistakes.
63. As a founder, I want the agent to learn from campaign results, so it gets smarter over time.

## Daily Flow

```
FOUNDER OPENS AGENT
        ↓
AGENT READS ALL FILES
        ↓
AGENT REPORTS:
"Your pipeline: 45 leads total.
 12 contacted, 3 replied, 1 interested.
 33 leads waiting for outreach.
 5 follow-ups due today."
        ↓
AGENT SUGGESTS:
"You have 33 leads with no outreach.
 Want me to send connection requests on LinkedIn?"
        ↓
FOUNDER DECIDES:
"Yes, top 10"  →  Agent runs outreach
"No, check replies first"  →  Agent runs track
"Show me the leads"  →  Agent shows CSV
"Not now"  →  Agent waits
        ↓
AGENT EXECUTES (with confirmation gates)
        ↓
AGENT REPORTS RESULTS
        ↓
CYCLE REPEATS
```

## Design Principles

1. **Founder is always in control.** Agent proposes, founder approves. Every browser action gets a confirmation gate.
2. **Skills are small and composable.** Each skill does ONE thing. Skills chain naturally.
3. **Stateful through files.** Skills read and write to `./glean-data/`. Data persists between sessions.
4. **Progressive disclosure.** SKILL.md is lean (~50 lines). Detailed workflows go in reference files.
5. **Clear triggers.** Each skill says exactly when to use it. Agent knows which skill to activate.
6. **Human-readable data.** Markdown and CSV. Founder can read and edit files manually.
7. **No overengineering.** Simple beats complex. If a file isn't needed, don't create it.

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
