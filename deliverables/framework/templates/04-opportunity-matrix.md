# Template — Opportunity Matrix

**Status:** Standard scoring rubric + template. Built once per audit on Day 3–4.
**Purpose:** Convert the pain point map into a scored, ranked, defensible recommendation. The matrix forces the auditor to assign explicit numbers across fixed dimensions so two different auditors looking at the same client would arrive at substantially the same recommendation. This is the artifact that prevents "audit by vibes."
**Inputs:** pain point map (`03`), workflow map (`02`), discovery questionnaire.
**Output:** scored matrix + recommended Implementation locks + off-camera pilot work list + Wave 2 deferrals.

## Glossary (read once, then skim)

- **Feasibility** — how much work it takes to ship a credible v1 given Dream Helpers' constraints (2 founders, ~30 hrs/week, current Implementation tier scope of $4.5K–$12K). 1–10. Higher = easier to ship.
- **Hours saved per week** — estimated founder time the workflow reclaims once live. Range, not a point estimate. Honesty matters: if uncertain, widen the range.
- **Revenue impact per year** — annualized dollars the workflow saves (lost revenue recovered), generates (new income enabled), or protects (churn avoided). Range.
- **Case study value** — how visibly the workflow demonstrates AI ops work to OUR ICP prospects (vet practice managers, insurance principals, Shopify founders). 1–10.
- **Integration ease** — how cleanly the workflow slots into the client's existing tool stack without requiring us to replace or duplicate existing systems. 1–10. Higher = easier.
- **Priority** — weighted overall score (formula in scoring methodology below).
- **Lock** — an opportunity selected for the public Implementation case study (3 per audit, max).

---

## Scoring methodology

### The 5 dimensions

Each opportunity scored on:

| Dimension | Range | Weight |
|---|---|---|
| Feasibility | 1–10 | 25% |
| Hours saved per week | 0–15+ (use midpoint of range for the score: e.g., a "3–8 hrs" range scores as 5.5, capped at 10) | 20% |
| Revenue impact per year | $0–$50K+ (scaled to a 1–10 score: $0–$2K = 1, $2K–$5K = 3, $5K–$15K = 6, $15K–$30K = 8, $30K+ = 10) | 20% |
| Case study value | 1–10 | 25% |
| Integration ease | 1–10 | 10% |

### The priority formula

```
priority = (feasibility × 2.5) + (hours_saved_score × 2.0) + (revenue_score × 2.0) + (case_study × 2.5) + (integration_ease × 1.0)
```

Max possible score: 100.

### How to use scores

- **85+** → strong Implementation lock candidate
- **70–84** → secondary lock candidate or off-camera pilot work
- **55–69** → off-camera pilot work or Wave 2
- **Below 55** → Wave 2 or drop

These are guides, not rules. The auditor's judgment overrides the formula when the formula is clearly wrong about the client. Document the override in the notes.

### Why fixed weights matter

Auditors are biased toward novelty (high feasibility looks good), founders are biased toward visibility (high case study value looks good), clients are biased toward immediate-pain (high hours saved looks good). The fixed weights average these biases so we do not consistently over-pick one type of opportunity. After 5 paid audits we will revisit whether the weights should shift.

---

## Scoring guidance per dimension

### Feasibility (1–10)

- **9–10:** can ship in 1–2 weeks. Existing template work, minor configuration, or trivial code.
- **6–8:** can ship in 2–4 weeks. Standard build, no new technology required.
- **3–5:** ships in 4–8 weeks. Multiple integrations, novel content corpus, or unclear technical path.
- **1–2:** ships in 8+ weeks or requires capability we don't have. Should be Wave 2 or dropped.

### Hours saved per week

Score the **midpoint** of the estimated range:
- 0–1 hrs: 1
- 1–3 hrs: 3
- 3–8 hrs: 5
- 8–12 hrs: 7
- 12+ hrs: 9 (cap at 10 for outliers)

If uncertain, default to the midpoint and widen the range in the documentation.

### Revenue impact per year

- $0–$2K: 1
- $2K–$5K: 3
- $5K–$15K: 6
- $15K–$30K: 8
- $30K+: 10

For ranges, use the midpoint of the range, e.g., $10K–$45K → midpoint $27.5K → score 8.

### Case study value (1–10)

- **9–10:** visibly AI, immediately recognized by ICP prospects (e.g., chatbot, AI agent, generative content). Headline-worthy.
- **6–8:** measurable hours/dollars, clear before/after, photogenic. Strong case-study material.
- **3–5:** measurable but less visible. Useful as supporting evidence, not headline.
- **1–2:** internal tools, member-only features, anything hidden from public view.

### Integration ease (1–10)

Inverse of how much we fight the client's existing tools.

- **9–10:** standalone microapp, embeds via JS widget, no platform integration needed.
- **6–8:** integrates via stable API or webhook, well-documented platform.
- **3–5:** requires platform configuration (Squarespace Member Areas, Shopify Sidekick custom apps, etc.), some platform limitations.
- **1–2:** requires us to replace platform functionality OR build a workaround for platform limitations.

---

## Categorization output

After scoring, every opportunity gets assigned one of these statuses:

- **Implementation lock** (max 3 per audit) — included in the case study, measured, and proposed to the client as paid Implementation work.
- **Off-camera pilot work** — ships during the engagement but is not measured for the case study. Usually small enhancements, internal tools, or design adjustments.
- **Wave 2** — deferred opportunity, surfaced for the client's awareness, revisited at Day 60 retro.
- **Drop** — does not justify the work given the client's constraints.

Default sizing:
- 3 Implementation locks per audit, total 10–14 build weeks for the locks combined.
- 3–5 off-camera items.
- 2–4 Wave 2 items.
- 0–2 drops.

If the auditor finds fewer than 3 lock-quality opportunities, the audit's recommendation is honest: "we could not find 3 high-leverage Implementation candidates in this engagement." Better than padding.

---

## How to use this template

1. Copy this file into the per-engagement folder.
2. Working from the pain point map, list every distinct opportunity (one-to-one mapping with pain points; if you decide to merge two pains into one opportunity, justify in the notes).
3. Score each on all 5 dimensions using the guidance above.
4. Calculate priority using the formula.
5. Assign status (lock / off-camera / Wave 2 / drop).
6. Write per-opportunity detail sections for the locks and any item where the score doesn't tell the full story.
7. Write the "Recommended Implementation locks" summary.
8. §11 Tier A QC + Tier B QC on all numerical claims. Forbid round numbers — ranges only.
9. Output feeds the audit report deck (`templates/05-audit-report-deck.md`).

---

## BLANK TEMPLATE STARTS HERE — fill in per audit

# [Client name] — Opportunity Matrix

**Built from:** pain point map ([link]), workflow map ([link]).
**Date built:** YYYY-MM-DD
**Owner:** [auditor name]

## Matrix

| # | Opportunity | Feasibility | Hours/wk saved (range / score) | Revenue $/yr (range / score) | Case study value | Integration ease | Priority | Status |
|---|---|---:|---:|---:|---:|---:|---:|---|
| | | | / | / | | | | |

## Per-opportunity detail (locks only, and any item that needs context)

### Lock 1 — [name] (priority [score])

**What it is:** [1–2 sentence description]

**Why it scores [score]:** [explanation of why this opportunity ranks where it does]

**MVP scope ([N weeks]):**
- [bullet 1]
- [bullet 2]

**Risk:** [what could go wrong]

### Lock 2, Lock 3 — [repeat]

### Notable not-locks

[Any opportunity whose score is high but is not a lock — explain why. Or low but matters anyway — explain why.]

## Recommended Implementation locks

1. [Lock 1 name] — [N weeks] — [why first]
2. [Lock 2 name] — [N weeks] — [why second]
3. [Lock 3 name] — [N weeks] — [why third]

**Total build calendar:** [N–M weeks if done in parallel by 2 founders at 15 hrs/week each]

## Off-camera pilot work

- [item] — [N days/weeks] — [why it ships but isn't measured]
- [item] — ...

## Wave 2 (revisit at Day 60)

- [item] — [reason deferred]

## Drop

- [item] — [reason dropped]

## QC log

- Tier A pass: [auditor name], [date], [issues found]
- Tier B pass: [auditor name], [date], [numbers re-derived, source documents referenced]
