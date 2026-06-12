# Skills Format Reference

The agentskills.io standard for creating skills. The CMO reads this when generating new skills.

## Directory Structure

```
skill-name/
├── SKILL.md          # Required — metadata + instructions
├── scripts/          # Optional — executable code
├── references/       # Optional — docs agents read on demand
├── assets/           # Optional — templates, resources
└── ...               # Any additional files
```

## SKILL.md Format

```markdown
---
name: skill-name
description: What this skill does and when to use it
---

# Skill Title

Instructions here...
```

### Frontmatter Fields

| Field | Required | Constraints |
|-------|----------|-------------|
| name | Yes | Max 64 chars. Lowercase letters, numbers, hyphens only. Must match directory name. |
| description | Yes | Max 1024 chars. Describes what + when to use. |
| license | No | License name or reference. |
| compatibility | No | Max 500 chars. Environment requirements. |
| metadata | No | Arbitrary key-value pairs. |
| allowed-tools | No | Space-separated pre-approved tools. |

### Progressive Disclosure

1. **Discovery** (~100 tokens): name + description loaded at startup
2. **Activation** (<5000 tokens): Full SKILL.md body loaded when triggered
3. **Execution** (as needed): scripts/, references/, assets/ loaded on demand

### Rules

- SKILL.md under 500 lines. Move details to references/.
- File references: one level deep from SKILL.md. No deep chains.
- Each skill does one thing well.
- name must match parent directory name.

## Generated Skill Pattern

When the CMO generates a skill, follow this structure:

```markdown
---
name: glean-<platform>-<purpose>
description: <What it does for the user's specific business>. Use when <trigger>.
---

# <Platform> Outreach — <User's Product>

<One-line summary>

## Context
- Reads: ./glean-data/profile.md
- Reads: ./glean-data/target-audience.md
- Writes: ./glean-data/campaigns/<platform>/leads.csv
- Platform: <platform>

## Workflow
1. <Step-by-step workflow>

## Rules
- <Tone, style, exclusions from profile/audience>

## Reporting
Update CSV and summarize results.
```

## Commands (Optional)

If the agent supports commands, the CMO can create command files. Commands are named triggers that activate skills.

Check if the agent supports commands by asking the agent or checking its documentation. If commands are supported, create them for frequently-used workflows (e.g., `/find-leads`, `/run-outreach`).
