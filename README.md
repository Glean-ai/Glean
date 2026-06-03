# Glean — Undetectable AI Agent Lead Management

[![License: MIT](https://img.shields.io/badge/License-MIT-6B46C1.svg)](LICENSE)
[![Install with npx skills](https://img.shields.io/badge/install-npx%20skills-6B46C1)](https://github.com/Glean-ai/Glean)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGlean-ai%2FGlean)
[![Powered by BrowserAct](https://img.shields.io/badge/powered%20by-BrowserAct-FF6B35)](https://www.browseract.com)

Glean is an open-source AI agent skill pack that turns your local coding agent into a high-performance lead generation engine. It finds prospects on **LinkedIn**, **X (Twitter)**, and **Google Maps**, tracks them in a local CSV, and handles personalized outreach—all through natural terminal conversation.

**[View Documentation & Blog →](https://glean-outreach.vercel.app)**

---

## 🚀 Quick Start

Add the Glean skill pack to your AI agent (Claude Code, Cursor, Windsurf, etc.) with one command:

```bash
npx skills add Glean-ai/Glean
```

Once installed, simply ask your agent:
> *"setup glean"*

This will guide you through defining your **Ideal Customer Profile (ICP)** and scaffold your local lead pipeline.

---

## ✨ Core Capabilities

### 🛡️ 100% Undetectable Outreach
Glean uses **BrowserAct** under the hood. Instead of risky cloud-based automation or identifiable headless browsers, Glean interacts with platforms using your **real local Chrome browser**.
- **Real Fingerprints:** Uses your actual cookies, history, and browser profile.
- **Human-like Behavior:** Randomized mouse movements, scrolling, and typing jitter.
- **Safe IPs:** All actions originate from your local machine, not a flagged data center.

### 🌐 Multi-Platform Discovery
- **LinkedIn:** Search by role, industry, and location with high-fidelity profile extraction.
- **X (Twitter):** Find leads based on bio keywords and real-time post activity.
- **Google Maps:** Target local businesses with NAP (Name, Address, Phone) extraction.
- **Email:** Discover and verify professional work emails for your leads.

### 📊 Local Pipeline Management
No third-party CRM or SaaS fees. Everything is stored in a `leads.csv` in your project root.
- **Automatic Tracking:** Leads move through stages: `discovered` → `contacted` → `replied`.
- **Privacy First:** Your lead data never touches our servers or any cloud database.
- **Easy Export:** Open your pipeline in Excel, Google Sheets, or any CRM.

---

## 🛠️ Included Skills

| Skill | Description |
| :--- | :--- |
| `glean` | Master skill for pipeline view, status updates, and setup. |
| `linkedin-outreach` | Discovery and connection requests on LinkedIn. |
| `x-outreach` | Bio search, replies, and DMs on X/Twitter. |
| `email-outreach` | Email discovery, verification, and personalized sending. |
| `gmaps-outreach` | Local business discovery via Google Maps. |
| `browser-act` | The core automation engine for undetectable browsing. |

---

## 📖 Documentation

For detailed guides on each platform, pipeline management, and ICP optimization, visit our [official documentation](https://glean-outreach.vercel.app/docs).

## 🤝 Contributing

We welcome contributions! Please check out our [Architecture Guide](ARCHITECTURE.md) to understand how the skills are structured.

## 📄 License

Glean is open-source software licensed under the [MIT License](LICENSE).
