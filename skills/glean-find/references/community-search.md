# Community Search Workflow

How to find relevant discussions on Reddit and HN using BrowserAct.

## Reddit

### Search

Navigate to Reddit and search for discussions about the problem your product solves:

```
https://www.reddit.com/search/?q=<query>&sort=relevance&t=month
```

Examples:
- `?q=customer+onboarding+tool&sort=relevance&t=month`
- `?q=email+outreach+software&sort=relevance&t=month`
- `?q=lead+generation+saas&sort=relevance&t=month`

### Subreddits to Check

Based on target-audience.md, search relevant subreddits:
- r/SaaS
- r/startups
- r/Entrepreneur
- r/smallbusiness
- r/marketing
- r/Emailmarketing
- r/indiehackers
- Industry-specific subreddits

### Extract

From each relevant post:
```
title: Post title
subreddit: Which subreddit
author: Username
upvotes: Score
comments: Number of comments
url: Post URL
```

### What to Look For

- People asking for tool recommendations
- People complaining about existing solutions
- People describing the problem your product solves
- "Ask Reddit" style posts about your domain

## HN (Hacker News)

### Search

Navigate to HN search:
```
https://hn.algolia.com/?q=<query>&dateRange=pastMonth&type=story
```

### Extract

From each relevant post:
```
title: Post title
author: Username
points: Score
comments: Number of comments
url: Post URL
```

### What to Look For

- "Ask HN" posts about your domain
- Show HN posts from competitors (learn from them)
- Posts discussing the problem you solve

## Output

Present findings to founder:
"Found 10 relevant discussions:
Reddit:
1. r/SaaS — 'How do you handle customer onboarding?' (42 upvotes, 28 comments)
2. r/startups — 'Best tools for email outreach?' (28 upvotes, 15 comments)

HN:
3. 'Ask HN: What tools do you use for lead generation?' (15 comments)"

Save drafts for founder to review and post manually.
