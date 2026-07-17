# Template — Architecture Decision Record (ADR)

**Status:** Standard one-page template for recording non-trivial architecture decisions during an Implementation.
**Purpose:** Lock decisions in writing so future-us (or a future client question) doesn't have to re-derive the reasoning. ADRs are the institutional memory of an engagement.
**When to write one:** any time you choose between two viable options on a non-trivial dimension. Examples: which automation platform (Make vs n8n vs Claude Code), which authentication approach, where data lives, which workflows we chose NOT to integrate.
**When NOT to write one:** trivial implementation details (variable naming, function structure, prompt phrasing).

## Glossary (read once, then skim)

- **ADR** (Architecture Decision Record) — a one-page doc capturing a decision: context, options considered, decision made, consequences.
- **Non-trivial decision** — a choice where the right answer isn't obvious and where another reasonable engineer might pick differently.
- **Engagement folder** — the per-client folder where all artifacts for this Implementation live. ADRs go in a `decisions/` subfolder.
- **Reversibility** — how hard it is to undo this decision if it turns out wrong. One-way doors deserve more deliberation than two-way doors.

---

## How to use this template

1. Copy this file into the engagement folder under `decisions/`.
2. Rename: `ADR-NNN-short-decision-title.md` (e.g., `ADR-001-classifier-platform.md`).
3. Fill in every section. If a section doesn't apply, write "N/A — [reason]" rather than skip.
4. Date and sign at the bottom.
5. Reference the ADR by number in code comments, runbooks, and the handoff package.

ADRs are immutable once filed. If the decision changes, write a NEW ADR that supersedes the old one and link from old to new.

---

## BLANK TEMPLATE STARTS HERE — fill in per decision

# ADR-NNN: [short title of the decision]

**Status:** [Proposed / Accepted / Superseded by ADR-XXX]
**Date:** YYYY-MM-DD
**Decision-makers:** [name(s) — typically one Tack founder + buyer-side decision-maker]
**Engagement:** [client name]
**Reversibility:** [one-way door / two-way door]

## Context

What problem are we solving? What constraints exist (technical, budget, regulatory, timeline)?

2–4 sentences.

## Options considered

For each viable option, list:

### Option A — [name]

- **What it is:** [one sentence]
- **Pros:** [bullet list]
- **Cons:** [bullet list]
- **Cost:** [time to implement, monthly cost, complexity]
- **Risk:** [what could go wrong]

### Option B — [name]

(same structure)

### Option C — [name]

(same structure)

## Decision

We chose: **[Option X]**

**Why:** [2–3 sentences explaining the reasoning. Tie back to the constraints from Context.]

## Consequences

- **Positive:** [what becomes easier or cheaper]
- **Negative:** [what becomes harder or more expensive]
- **Mitigation:** [if the negatives matter, how we mitigate]

## What we are NOT doing

Explicit list of what is OUT of scope as a result of this decision. Example: "We are NOT building a custom dashboard; we use Make's native logging. Custom dashboards are a Phase 2 conversation."

## Reversal cost

If we discover this was the wrong decision in 30 days, what does it take to undo?

- [ ] One-way door — no practical reversal without rebuilding
- [ ] Two-way door — reversible with [N hours of work / $X cost]

If one-way, briefly explain the test we'd run to validate the decision before committing.

## References

- SOW section: [§ reference]
- Opportunity Matrix item: [item number from audit]
- External docs: [links]

## Sign-off

- Tack: [name], [date]
- Client decision-maker: [name], [date] (only for decisions affecting client scope or cost)
