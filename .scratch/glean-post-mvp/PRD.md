# PRD: Glean Post-MVP Evolution (The AI SDR)

## 1. Market Context & Problem Statement (2024 Research)

The outbound sales landscape has hit a critical tipping point. Traditional automated "cold outreach" is failing for two primary technical reasons:

1.  **Behavioral Fingerprinting (LinkedIn/X):** Social platforms now detect "non-human" activity signatures—such as instant page loads, lack of feed interaction, and identical message hashes. Data center IP addresses (AWS/GCP) used by cloud SaaS tools are now pre-flagged.
2.  **The 0.3% Spam Ceiling:** Google and Yahoo's 2024 updates enforce a hard 0.3% spam complaint threshold. Mass-templated outreach ("Spray and Pray") now results in permanent domain "burning."

**The Solution:** Glean must evolve from a "discovery tool" into an **Autonomous SDR**. By leveraging **BrowserAct**, Glean can perform authentic, relationship-driven engagement that is 100% indistinguishable from a human user.

---

## 2. Phase 1: Social Selling & Smart Engagement

The goal is to build rapport *before* sending a DM, adding "human noise" to the account to bypass bot detection.

### Core Features:
- **`smart-commenting` (LinkedIn/X):**
  - **Function:** Agent searches for posts matching pain-point keywords defined in the ICP.
  - **Behavior:** The agent reads the post context and drafts a helpful, 2-sentence comment. 
  - **Safety:** Comments must never be salesy; they should ask a question or provide value.
- **Pipeline Stage Update:** 
  - Add `engaged` stage to `leads.csv`. 
  - Workflow: `discovered` → `engaged` (commented) → `contacted` (DM sent).
- **Feed Simulation (Anti-Bot Noise):**
  - Background task that scrolls the user's home feed and randomly "Likes" relevant posts to build account trust score.

---

## 3. Phase 2: Community Outreach (Reddit & Hacker News)

Reddit and HN are the highest-quality sources for SaaS validation but have the most aggressive anti-bot cultures.

### Core Features:
- **`reddit-outreach` Skill:**
  - Monitors specific subreddits (e.g., r/SaaS, r/Entrepreneur).
  - Identifies posts asking for specific tool recommendations or describing problems.
- **The "Value-First" Guardrail:**
  - Agent is strictly forbidden from "pitching" in the first 2 paragraphs.
  - Must provide a standalone solution. Mention the product only as a "relevant tool I built" at the end.
- **`hackernews-outreach` Skill:**
  - Scans "Ask HN" and "Show HN" threads for relevant matches.

---

## 4. Phase 3: Autonomous Inbox Manager (AI SDR)

Currently, the outreach loop is "open" (agent sends, user checks). We must close it.

### Core Features:
- **Inbox Scanning:** 
  - Agent periodically checks LinkedIn/X messaging and Gmail.
- **Intent Classification:** 
  - LLM categorizes incoming replies: `positive`, `negative`, `question`, `out_of_office`, `meeting_booked`.
- **Auto-Pipeline Synchronization:**
  - The `leads.csv` is updated automatically based on reply detection.
- **Drafting Next Steps:**
  - If a lead asks a question, the agent drafts a response based on the **ICP Custom Instructions** and asks the user for permission to send.

---

## 5. Technical Requirements & Schema Changes

### Schema Updates (`leads.csv`):
- New `stage` options: `engaged`, `positive_reply`, `negative_reply`, `meeting_booked`.
- New field: `last_interaction_context` (stores a snippet of the comment or reply).

### ICP Updates (`ideal-customer-profile.md`):
- New Section: **Tone & Engagement Guidelines**.
  - Example: "On Reddit, be self-deprecating. On LinkedIn, be professional and concise."

### BrowserAct Requirements:
- Expansion of `browser-act` logic to handle Reddit's nested comment DOM and LinkedIn's complex notification tab.
