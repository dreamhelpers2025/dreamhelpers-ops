# Template — Pain Point Map

**Status:** Standard categorization + dependency template. Built once per audit on Day 2–3.
**Purpose:** Convert the workflow map's observations into a structured inventory of what hurts. Categorize each pain into a fixed bucket so the auditor's bias does not shape the analysis. Surface dependencies between pains so we do not over-promise on items that depend on un-fixable upstream blockers.
**Inputs:** workflow map (`02`), discovery questionnaire, Day 0 call debrief, raw client data.
**Output:** categorized inventory + dependency diagram + observation patterns.

## Glossary (read once, then skim)

- **Pain point** — a specific friction in the client's operation. Concrete, not abstract. ("Refund replies take 20 min each" is a pain point; "customer service is hard" is not.)
- **Leverage** — how much downstream value a single fix unlocks. A high-leverage fix solves itself and unblocks other work.
- **Dependency** — what has to be true before a pain point can be addressed.
- **Category** — one of the standard 4 buckets (revenue-blocking, time-leak, content/asset, product feature). Forces consistent classification across audits.
- **Blocker** — a dependency that we cannot resolve in the engagement (missing data, missing decision, missing access).

---

## The four standard categories

Every pain point gets exactly one category. If a pain point seems to belong to two, split it into two pain points.

### Category A — Revenue-blocking psychology / structure

Pains where the issue costs revenue today AND the fix is partially in the client's head (pricing comfort, scope discipline, branding) or partially in templates / structure (rate sheets, proposals, tier benefits).

Examples: "she hates taking money" (resolved to a templates problem), "SOWs are vague so margin leaks," "pricing not published anywhere."

### Category B — Time-leak operations

Pains where a recurring workflow consumes founder time and could be automated, delegated, or eliminated. Concrete hours-per-week reclaimable.

Examples: "responding to where-is-my-order emails," "manual tool rental coordination," "tier-benefit delivery to members."

### Category C — Content / asset backlog

Pains where the client has a latent asset (video archive, written content, expertise, customer list) that is producing zero value because the distribution mechanism is broken.

Examples: "2 TB of unused video," "dormant Patreon," "written FAQs no one can find."

### Category D — Product / feature

Pains tied to specific features the client wants to ship for their customers/members. Not about the founder's time — about the product they sell.

Examples: "members want soil sample portal," "recipe builder needs manual ingredient entry."

---

## How to score within each category

Each pain point gets these annotations (independent of category):

| Field | Range | What it means |
|---|---|---|
| Hours/wk saved if solved | 0 / 1–3 / 3–8 / 8+ / "indirect" | Estimated founder time reclaimed weekly when fix is live |
| Revenue protected or generated/yr | None / $0–5K / $5K–15K / $15K–50K / $50K+ | Annualized dollar impact |
| Case study fit | Low / Medium / High / Very high | How well the fix demonstrates AI ops work to our ICP prospects |
| Dependencies | List specific blockers, OR "Independent" | What must be true before this can be addressed |
| Status | Ready / Blocked / Wave 2 / Drop | Recommendation for immediate handling |

---

## Dependency mapping

For every pain point in the inventory, the auditor draws a directed graph (text-based) showing what blocks what.

Standard format:

```
A1 (pain) ──► A2 (depends on A1)
              ──► B1 (also depends on A1, via shared infrastructure)

C1 (independent, no dependencies)

D1 (blocked by: need data format from client, need member auth integration)
```

Three things this surfaces:
1. **Pain points that block multiple others** — these are highest leverage even if their individual hours-saved is low.
2. **Pain points that are downstream of blockers** — these are real but cannot be scoped until the blocker resolves.
3. **Pain points that are independent** — fastest to ship, lowest coordination cost.

---

## Pattern observations

After the inventory and dependency map are complete, the auditor writes 3–5 sentences identifying patterns that no single pain point captures. Examples of useful patterns:

- "All Category A pains share a common root: the client treats charging as a personal decision rather than a system. Fixing the system fixes 3 pains at once."
- "Categories B and C have a hidden integration: the content engine (C) is the input to the tier-benefit delivery (B). Treat them as one pipeline."
- "Three of the five highest-priority pains depend on a single piece of missing data. Get that data on Day 1 Week 2 or this whole audit was theoretical."

This narrative section is the artifact's value beyond the inventory. The inventory is the matter; the patterns are the meaning.

---

## How to use this template

1. Copy this file into the per-engagement folder.
2. Working from the workflow map, list every distinct pain point. Aim for 6–12.
3. Assign exactly one category per pain point. If you're tempted to dual-categorize, split into two.
4. Annotate each pain with the 5 fields above.
5. Build the dependency map. Be ruthless about identifying blockers.
6. Write the pattern observations.
7. Run §11 Tier A QC: every pain traces back to a quote, observation, or data point.
8. Output feeds the opportunity matrix (`templates/04-opportunity-matrix.md`).

---

## BLANK TEMPLATE STARTS HERE — fill in per audit

# [Client name] — Pain Point Map

**Built from:** workflow map ([link]), discovery questionnaire, Day 0 call debrief.
**Date built:** YYYY-MM-DD
**Owner:** [auditor name]

## Inventory

### Category A — Revenue-blocking psychology / structure

| # | Pain point | Hours/wk saved | Revenue $/yr | Case study fit | Dependencies | Status |
|---|---|---|---|---|---|---|
| A1 | | | | | | |
| A2 | | | | | | |

### Category B — Time-leak operations

| # | Pain point | Hours/wk saved | Revenue $/yr | Case study fit | Dependencies | Status |
|---|---|---|---|---|---|---|
| B1 | | | | | | |
| B2 | | | | | | |

### Category C — Content / asset backlog

| # | Pain point | Hours/wk saved | Revenue $/yr | Case study fit | Dependencies | Status |
|---|---|---|---|---|---|---|
| C1 | | | | | | |

### Category D — Product / feature

| # | Pain point | Hours/wk saved | Revenue $/yr | Case study fit | Dependencies | Status |
|---|---|---|---|---|---|---|
| D1 | | | | | | |

## Dependency map

```
[free-form text dependency diagram]
```

**Independent pain points:** [list]
**Blocked pain points:** [list with blocker reason]
**Pain points that block others:** [list with what they block]

## Pattern observations

[3–5 sentences identifying patterns that no single pain point shows. This is where the auditor adds judgment beyond inventory.]

## Recommended sequence

Based on dependency map + category insight:

1. [highest-priority pain to address first, with reasoning]
2. [next]
3. [next]

[Pain points to defer to Wave 2:]

[Pain points to drop entirely:]

## QC log

- Tier A pass: [auditor name], [date], [issues found]
