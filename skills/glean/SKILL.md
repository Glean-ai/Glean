---
name: glean
description: "Glean — AI-powered lead management CRM. Use when the user says: glean, setup glean, lead management, my pipeline, show leads, prospect, find leads, outreach, send follow-ups, CRM."
---

# Glean

BrowserAct-powered lead management. Finds prospects on LinkedIn, X/Twitter, and Email — all stored in a local CSV. No automation, no cron — everything is triggered by you.

## Bundled Templates

This skill directory includes template files. They get installed alongside SKILL.md:
- `leads.csv` — CSV header row
- `icp-template.md` — ICP template with placeholder fields
- `pipeline.html` — Rich HTML dashboard for visual pipeline tracking

During setup, the agent reads these files and copies their content into `./glean-data/`.

## First-Run Setup

If `./glean-data/` does not exist, run first-run setup:

### Step 1: Check BrowserAct
```bash
which browser-act || uv tool install browser-act-cli --python 3.12
browser-act get-skills core --skill-version 2.0.2
```
If no browser named `glean` exists, ask user to:
1. Launch Chrome with remote debugging enabled
2. Log into LinkedIn, X/Twitter, and Gmail/Outlook
3. Create the browser:
   ```bash
   browser-act browser create --name glean --type chrome-direct --desc "Glean outreach browser"
   ```

### Step 2: Create Directory Structure
```bash
mkdir -p ./glean-data/data ./glean-data/icp
```

### Step 3: Copy Bundled Templates

Try to read `leads.csv`, `icp-template.md`, and `pipeline.html` from this skill's install directory. Check these locations (in order):
- `.agents/skills/glean/`
- `.opencode/skills/glean/`
- `~/.config/opencode/skills/glean/`

Use the `read` tool on the first match. If none found, create inline:

**leads.csv:**
```
id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup
```

**pipeline.html:**
Read the content of `pipeline.html` from the skill directory and write it to `./glean-data/pipeline.html`.

**icp-template.md** — use the template below and fill in answers after asking the user.

### Step 4: Ask ICP Questions (one at a time)

Greet user, then ask each question and wait for answer before next:

1. **Target Role**: "What role/title should I target? (e.g., CTO, VP Engineering, Head of Product)"
2. **Industry**: "What industry? (e.g., SaaS, Fintech, HealthTech)"
3. **Company Size**: "Company size? (e.g., 1-10, 10-50, 50-200, 200-1000, 1000+)"
4. **Company Stage**: "Company stage? (e.g., Bootstrapped, Seed, Series A, B, C+, Enterprise)"
5. **Location**: "Target location? (e.g., US, EU, Remote, India)"
6. **Keywords**: "Keywords to search for? (e.g., AI agent, browser automation, web scraping)"
7. **Outreach Angle**: "What's your outreach angle? What value do you offer?"
8. **Exclusions**: "Anything to exclude? (e.g., agencies, freelancers, students)"
9. **Custom Instructions**: "Any specific instructions for how I should handle outreach? Tone, style, do's/don'ts, follow-up rules?"

### Step 5: Write ICP File

Read the `icp-template.md` content (from bundled file or inline below), replace placeholders with user's answers, and write to `./glean-data/icp/ideal-customer-profile.md`:

```
# Ideal Customer Profile

## Target Role
- Title(s): <answer1>
- Seniority: <answer1>

## Industry
- <answer2>

## Company
- Size: <answer3>
- Stage: <answer4>
- Location: <answer5>

## Keywords for Search
- <answer6>

## Outreach Angle
- <answer7>

## Exclusions
- <answer8>

## Custom Instructions for Agent

These rules override everything else. The agent MUST follow them strictly.

- <answer9>
```

### Step 6: Write CSV
Write to `./glean-data/data/leads.csv`:
```
id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup
```

### Step 7: Confirm
"Glean is ready. I can find leads on LinkedIn, X/Twitter, or via Email — all tracked in your CSV. 

**Visual Dashboard:** You can view your pipeline at any time by opening `./glean-data/pipeline.html` in your browser.

What would you like to do?"

## Manual Workflows

### Find Leads
Load platform-specific skill:
- `linkedin-outreach` — search people, connect, message
- `x-outreach` — search profiles/posts, reply, DM
- `email-outreach` — find/verify emails, send campaigns
- `gmaps-outreach` — search local businesses by keyword + location, extract contacts

### Show Pipeline
```bash
echo "Discovered: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',discovered,')"
echo "Contacted: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',contacted,')"
echo "Replied: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',replied,')"
echo "Booked: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',meeting_booked,')"
echo "Converted: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',converted,')"
echo "--- By Platform ---"
echo "LinkedIn: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',linkedin,')"
echo "X/Twitter: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',x,')"
echo "Email: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',email,')"
echo "Google Maps: $(tail -n +2 ./glean-data/data/leads.csv | grep -c ',gmaps,')"
```

### Preview Pipeline (Visual)
To view a rich dashboard of your leads:
1. Open `./glean-data/pipeline.html` in your browser.
2. If the browser blocks the local CSV (CORS error), either:
   - Click "Select leads.csv" and pick `./glean-data/data/leads.csv`.
   - OR run a local server: `cd glean-data && python3 -m http.server 8000` then visit `http://localhost:8000/pipeline.html`.

### Send Follow-Ups
Read CSV for stage=contacted where last_followup > 3 days. Group by platform. For each lead, open platform and send follow-up. Respect Custom Instructions for max follow-ups.

### Update Lead Stage
```bash
sed -i 's/^<id>,/<id>,/<new_stage>,/' ./glean-data/data/leads.csv
```

## File Paths
- ICP: `./glean-data/icp/ideal-customer-profile.md`
- Leads: `./glean-data/data/leads.csv`
- Skill templates: `leads.csv`, `icp-template.md` (bundled with this skill)
