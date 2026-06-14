# X/Twitter Search Workflow

How to find leads on X/Twitter using BrowserAct.

## Setup

1. Navigate to `https://twitter.com/search`
2. Ensure founder is logged in

## Search Strategies

### Bio Search
Search for people whose bio contains your target keywords:

```
https://twitter.com/search?q=<keyword>&src=typed_query&f=user
```

Examples:
- `?q=CTO+SAAS&f=user` — Find CTOs in SaaS
- `?q=building+AI&f=user` — Find AI founders
- `?q=indie+hacker&f=user` — Find indie hackers

### Post Search
Search for recent posts about your topic:

```
https://twitter.com/search?q=<keyword>&src=typed_query&f=live
```

### Hashtag Search
Follow hashtags your audience uses:
- #buildinpublic
- #indiehackers
- #saas
- #startuplife
- #founder

## Extract from Each Profile

Click into each profile and extract:

```
name: Display name
handle: @username
bio: Bio text
website: Link in bio
location: Location if listed
```

## Skip Rules

- Skip if already in leads.csv (check by x_handle)
- Skip if bio doesn't mention relevant keywords
- Skip if account has <100 followers (likely inactive)
- Skip if account is a brand/company (not a person)
- Skip if bio is purely promotional

## Engagement Before DM

Before sending a DM, engage with their content:
1. Follow them
2. Like 2-3 of their recent posts
3. Reply to one post with a genuine, helpful comment
4. Wait 1-2 days
5. Then send DM referencing the interaction

## Rate Limits

- Max 50 follows per day
- Max 100 likes per day
- Max 20 DMs per day (to non-followers)
- If rate limited, stop and report

## Batch Size

Search for 50-100 results. Extract top 15-20 that match criteria. Present to founder for approval.
