# Glean

AI-powered RevOps skills framework for technical founders with zero customers.

## Language

**RevOps**:
Revenue operations — the full front-side of a business: finding customers, reaching out, creating content, engaging communities, tracking pipeline, and adjusting strategy. Not just marketing, not just sales. Everything that brings paying users.
_Avoid_: Marketing automation, sales tool, CRM

**Founder**:
The user. A technical person who built a product but doesn't know how to get customers. Glean handles the front-side so they can focus on the product.
_AAvoid_: User, customer, operator

**Lead**:
A specific person who matches the founder's ideal customer profile. Has a name, company, contact info, and a pipeline stage.
_Avoid_: Prospect, contact, target

**Pipeline**:
The stages a lead moves through: discovered → contacted → replied → meeting_booked → converted → dead. Tracked in leads.csv.
_Avoid_: Funnel, workflow, process

**Stage**:
Where a lead is in the pipeline: discovered → contacted → replied → meeting_booked → converted → dead.
_Avoid_: Status, phase, step

**Channel**:
A platform used for outreach or content: LinkedIn, X/Twitter, email, Reddit, HN. Strategy defines which channels to use.
_Avoid_: Platform, medium, route

**Confirmation gate**:
Every browser action requires founder approval before execution. Agent previews what it's about to do, founder approves or modifies.
_AAvoid_: Safety check, approval flow, gate

**Stateful skill**:
A skill that reads and writes data files. Previous runs inform current runs. The system gets smarter over time.
_AAvoid_: Persistent, memory-enabled

**Content draft**:
A piece of content (post, thread, article, email) written by the agent and saved as a file. Founder edits and publishes manually. Agent never publishes.
_Avoid_: Post, output, artifact

**Community engagement**:
Participating in Reddit, HN, Discord discussions. Agent finds relevant threads, suggests helpful responses. Founder posts manually.
_Avoid_: Social selling, community outreach

## Relationships

- A **founder** has a **product** and needs **leads**
- A **lead** moves through **pipeline stages**
- A **strategy** defines which **channels** to use
- Each **channel** has specific outreach and content patterns
- Every browser action goes through a **confirmation gate**
- All data lives in `./glean-data/` and persists between sessions

## Core Principles

1. **Founder is always in control.** Agent proposes, founder approves.
2. **Skills are small and composable.** Each does ONE thing.
3. **Stateful through files.** Data persists between sessions.
4. **Progressive disclosure.** Load what's needed when needed.
5. **Human-readable data.** Markdown and CSV.
