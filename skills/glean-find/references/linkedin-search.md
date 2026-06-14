# LinkedIn Search Workflow

How to find leads on LinkedIn using BrowserAct.

## Setup

1. Navigate to `https://www.linkedin.com/search/results/people/`
2. Ensure founder is logged in (BrowserAct chrome-direct)

## Search Query

Build search URL from target-audience.md:

```
https://www.linkedin.com/search/results/people/?keywords=<title>+<industry>&origin=GLOBAL_SEARCH_HEADER
```

Examples:
- CTO + SaaS: `?keywords=CTO+SAAS`
- VP Engineering + Fintech: `?keywords=VP+Engineering+Fintech`
- Founder + AI: `?keywords=Founder+AI`

## Filters

Use LinkedIn's built-in filters:
- **Title**: Match job titles from target-audience.md
- **Industry**: Match industries from target-audience.md
- **Location**: If specified in target-audience.md
- **Connection level**: 2nd degree (more likely to accept)

## Extract from Each Profile

For each search result, click into the profile and extract:

```
name: Full name from profile header
title: Current job title
company: Current company
industry: Industry from about section
linkedin_url: Profile URL
```

## Skip Rules

- Skip if already in leads.csv (check by linkedin_url)
- Skip if title doesn't match target-audience.md
- Skip if industry doesn't match target-audience.md
- Skip if no profile picture (likely bot/spam)
- Skip if headline is generic ("Entrepreneur", "Consultant")

## Rate Limits

- Max 20-30 profile views per day
- Max 100 search results per day
- If blocked, stop and report to founder
- Space out views: 1 profile every 30-60 seconds

## Batch Size

Search for 50-100 results. Extract top 20-30 that match criteria. Present to founder for approval before writing to CSV.
