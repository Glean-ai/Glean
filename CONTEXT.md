# Glean

AI-powered CMO agent that builds marketing and sales skills for any AI coding agent.

## Language

**CMO**:
The meta-skill's role. Acts as a Chief Marketing Officer — evaluates your business, picks channels, builds workflows, executes campaigns, and adjusts strategy based on results.
_Avoid_: Mentor, assistant, bot, helper

**Meta-skill**:
The single Glean skill that generates other skills. It is not used for outreach itself — it only builds the skills that do.
_Avoid_: Master skill, core skill, main skill

**Generated skill**:
A real, standard-format skill (agentskills.io) created by the CMO for a specific platform and workflow. Installed into the agent's skills directory and loadable like any other skill.
_Avoid_: Output, artifact, template

**Orchestrator skill**:
A generated skill that runs a full workflow end-to-end — from search to outreach to reporting. One skill, one activation, complete execution.
_Avoid_: Workflow skill, automation skill

**Command**:
An optional shortcut the CMO can create if the agent supports commands. A command is a named trigger (e.g., `/find-leads`, `/run-outreach`) that activates a skill or workflow. Only created when the agent confirms it supports commands.
_Avoid_: Alias, shortcut, macro

**Profile**:
User's business identity stored in `./glean-data/profile.md`. Contains what they sell, who they target, their voice, and their tools. Created during setup, re-runnable.
_Avoid_: Config, settings, preferences

**Target audience**:
Refined ICP stored in `./glean-data/target-audience.md`. Evolves over time as the CMO learns from campaign results.
_Avoid_: ICP, ideal customer, persona

**Campaign**:
A specific outreach effort on a specific platform. Data lives in `./glean-data/campaigns/<platform>/leads.csv`.
_Avoid_: Run, batch, push

**Strategy**:
The current marketing plan stored in `./glean-data/strategy.md`. Tracks active channels, target focus, outreach tone, and what's working. Created by the CMO during setup, updated as campaigns run.
_Avoid_: Plan, approach, roadmap

**Stage**:
Where a lead is in the pipeline: discovered → contacted → replied → meeting_booked → converted → dead.
_Avoid_: Status, phase, step

**Agent Platform**:
The AI coding agent the user is running (Claude Code, OpenCode, Cursor, Windsurf, etc.). The agent already knows what it is from its system prompt. Determines where skills are installed. If the agent supports commands, the CMO can create them.
_Avoid_: Client, runtime, host

**Skills format**:
The agentskills.io standard for creating skills. SKILL.md with YAML frontmatter (name, description) + markdown body. Optional directories: scripts/, references/, assets/. The universal format the CMO uses to generate all skills.
_Avoid_: Skill spec, skill standard

**Progressive disclosure**:
How skills load: metadata (~100 tokens) at startup, full instructions when activated, resources on demand. Keeps context footprint small.
_Avoid_: Lazy loading, on-demand loading
