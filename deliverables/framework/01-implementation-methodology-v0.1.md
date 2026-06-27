# Dream Helpers — Implementation Methodology v0.1

**Status:** v0.1 — first formalization. Iterates after the Soil Detective beta + 3 paid Implementations.
**Owner:** Both founders
**Purpose:** Define the repeatable process every Implementation runs on. This doc + the templates in `templates/` are the SOP that prevents every Implementation from being re-invented from scratch.
**Companion docs:** [audit framework v0.1](00-audit-framework-v0.1.md), [service packages & pricing v1.0](../07-service-packages-and-pricing.md), [business model v0.4](../01-founder-liberation-business-model.md) §3.2.

## Glossary (read once, then skim)

- **SOP** (Standard Operating Procedure) — the documented way we do a recurring thing.
- **SOW** (Statement of Work) — the contract that defines exactly what we deliver.
- **Implementation** — our paid build engagement. Three tiers: Starter ($4.5K, 3–4 weeks, 1 workflow), Standard ($8K, 4–6 weeks, 2–3 workflows + KB + dashboard), Comprehensive ($12K, 5–7 weeks, 4 workflows + cross-system integrations + 30-day post-launch tuning).
- **Workflow** — one self-contained automated process we build and hand over (e.g., customer-service email triage; appointment-reminder text flow; renewal-checklist generator).
- **Sprint** — a 1-week build cycle. Implementations are organized in sprints, not waterfall.
- **Architecture Decision Record (ADR)** — a one-page doc capturing why we chose a particular tool, integration pattern, or scope cut. Lives in the engagement folder.
- **UAT** (User Acceptance Testing) — the phase where the client tests the built system and signs off it works. Payment milestone.
- **Handoff** — the final delivery: working systems + training video + runbook + 30-day support window.
- **§11 QC** — the two-tier quality control protocol: Tier A smell test (~20 min) for narrative; Tier B independent re-derivation (60–90 min) for any numerical claim or behavioral promise.
- **Make AI Agents rebuild check** — mandatory pre-pricing check: if we can rebuild the recommended workflow in Make AI Agents in less than 8 hours, we drop the scope or drop the deal. Freelancer work at $100/hr is not Implementation work.

---

## The 5-week Standard cadence (the default)

This is the Standard tier ($8,000) timeline. Starter compresses Weeks 2–3 into a single sprint; Comprehensive adds Week 5 post-launch tuning.

| Week | Owner | Phase | Artifacts in / Artifacts out |
|---|---|---|---|
| **W1** | Both | Design + access provisioning | In: signed SOW + audit report deck. Out: kickoff notes, access checklist signed off, [ADR(s)](templates/08-architecture-decision-record.md), build plan locked |
| **W2** | Claude (build) + Human (§11 QC daily) | Build sprint 1 | Out: workflow 1 working in dev environment, daily commits, §11 QC pass on every output |
| **W3** | Claude (build) + Human (§11 QC daily) | Build sprint 2 | Out: workflows 2–3 + dashboard wired, end-to-end test against real client data |
| **W4** | Client + Human | UAT | In: complete system in production. Out: [UAT script](templates/09-uat-script.md) executed, fixes shipped, sign-off captured |
| **W5** | Human + Client | Handoff | Out: [handoff package](templates/10-handoff-checklist.md), training video, runbook, scheduled 30-day check-in |

Day 1 of W1 is the day Client pays the 50% signature deposit. Day 5 of W5 is the day they pay the 50% UAT/handoff balance.

### Tier variations

| Tier | Total weeks | Build sprints | Post-launch |
|---|---|---|---|
| **Starter** ($4.5K) | 3–4 | 1 sprint (single workflow) | No |
| **Standard** ($8K) | 4–6 | 2 sprints | No |
| **Comprehensive** ($12K) | 5–7 | 3 sprints + dashboard sprint | **Yes — 30-day post-launch tuning** |

For Starter, W2 and W3 collapse into a single build sprint with W4 UAT immediately after. For Comprehensive, add a 4th build sprint and extend W5 into a 30-day support window.

### Pre-kickoff hard gates (do NOT start without these)

Before any Implementation kicks off, we confirm:

1. **Signed SOW** with scope locked, tier locked, payment terms locked, liability cap written in
2. **50% signature payment received** (Stripe confirms — we do not start on "invoice paid pending")
3. **Tech E&O insurance is active** (see business model §11 — non-negotiable before any paid Implementation)
4. **Access provisioning checklist** drafted and sent to Client (we don't start before they grant access; see Week 1 below)
5. **Make AI Agents rebuild check passed** — we have written confirmation in the engagement folder that this Implementation includes at least one capability that cannot be rebuilt in Make AI Agents in <8 hours

If any of these is missing, the kickoff call gets postponed until they're resolved.

---

## The six artifacts (in build order)

Each Implementation produces these six artifacts in order. The order matters — each downstream artifact depends on the previous.

1. **[Kickoff agenda + notes](templates/07-implementation-kickoff.md)** — Day 1 of Week 1. Confirms scope, names the buyer-on-buyer-side decision-maker, walks through the build plan.
2. **Access provisioning checklist** — Days 1–3 of Week 1. List of every credential / OAuth grant / IP allowlist / shared folder we need. Client signs off when all are granted.
3. **[Architecture Decision Records](templates/08-architecture-decision-record.md)** — Days 3–5 of Week 1. One ADR per non-trivial decision (which tool, which integration pattern, where the data lives, what we explicitly de-scoped). Lives in the engagement folder.
4. **Build commits + §11 daily QC** — Weeks 2–3 (or Week 2 for Starter). Every meaningful build step gets §11 Tier A smell + Tier B re-derivation on any number.
5. **[UAT script + signed sign-off](templates/09-uat-script.md)** — Week 4. Standard test cases run by the client; we capture pass/fail per case and any deficiencies fixed before sign-off.
6. **[Handoff package](templates/10-handoff-checklist.md)** — Week 5. Training video + runbook + monitoring instructions + scheduled 30-day check-in date.

---

## Quality control gates (§11 from v0.4)

Every artifact passes through §11 QC before it leaves Dream Helpers. Non-negotiable.

| Artifact | Tier A (smell, ~20 min) | Tier B (re-derivation, 60–90 min) |
|---|---|---|
| Kickoff notes | Confirm every commitment matches the SOW | Not applicable |
| Access checklist | Confirm every system named was discussed in kickoff | Not applicable |
| Architecture Decision Records | Confirm each ADR is one-page, has a date, names the decision-maker | Not applicable |
| Build outputs (workflows, prompts, code) | Read as a presenter would; flag anywhere we wouldn't defend to the client | **Re-derive every behavioral claim against the actual production data.** Example: if we say "this triage routes correctly 92% of the time," we re-run the test set independently and confirm 92%. Forbid round numbers — ranges with sample size. |
| UAT script | Confirm every test case maps to a clause in the SOW | Re-run each test case with fresh prompts to confirm reproducibility |
| Handoff package | Confirm training video covers every workflow shipped + every recovery procedure | Spot-check that the runbook accurately describes the system as built (not as designed) |

Tier B re-derivation is mandatory for any number that ends up in a client-facing deliverable. This is the protection against confidently-wrong AI outputs.

---

## Hard rules

These are non-negotiable across every Implementation, every tier, every client:

1. **No new monthly SaaS costs over $50/mo for the client without explicit written approval.** We build on what they already pay for. If a workflow truly requires a new $200/mo tool, we get the approval in writing before scoping that workflow.
2. **Make AI Agents rebuild check passes before pricing.** If a workflow can be rebuilt in Make AI Agents in <8 hours, we drop it from the scope or drop the deal. That's freelancer work.
3. **One active Implementation per founder per calendar week.** Concurrent capacity cap. Sales calendar takes priority — no new Implementation kickoff in a week the closing founder has >3 sales calls.
4. **§11 QC on every artifact, every time.** No exceptions for "small" outputs.
5. **The Audit's Opportunity Matrix is the source of truth for scope.** If a client asks for something not on the matrix, it's a scope-change conversation, not a "sure we'll add it" answer. Scope changes require a written change order signed by both parties.
6. **No promises of "we'll handle that during UAT."** Anything not in the SOW scope at kickoff stays out of scope. Period.
7. **Payment milestone hits BEFORE we start the next phase.** 50% on signature before Week 1. 50% on UAT sign-off before handoff Week 5. We don't ship before the money clears.

---

## Capacity model

Per Implementation, end-to-end, per founder pair:

- Week 1 design + access: 8–12 hrs combined human time
- Weeks 2–3 build sprints with daily §11 QC: 20–35 hrs combined (Claude does the build; humans do the QC and client comms)
- Week 4 UAT: 6–10 hrs combined human time (we're testing alongside the client and fixing issues)
- Week 5 handoff: 4–6 hrs combined (training video record + runbook polish + handoff call)
- **Total: 38–63 hrs human time per Standard Implementation at maturity.** First Implementation runs higher (we don't have templates hardened); subsequent runs trend down as we reuse architecture patterns.

At $8,000 Standard tier and ~50 hrs of blended team time, gross margin is around 70% after Stripe fees and Claude API costs. That's the unit economics number we protect.

---

## How to use this framework (for the implementer)

When an audit converts to a paid Implementation:

1. Confirm all 5 pre-kickoff hard gates listed above. Do NOT start before all are green.
2. Schedule the Day 1 kickoff call within 5 business days of SOW signature.
3. Send the client the access-provisioning checklist 24 hours before the kickoff so they come prepared.
4. Run the kickoff using [`07-implementation-kickoff.md`](templates/07-implementation-kickoff.md). Capture notes in the engagement folder.
5. During Week 1, write one ADR per non-trivial decision per the [ADR template](templates/08-architecture-decision-record.md).
6. Build in 1-week sprints. Commit daily. §11 QC every artifact before the next sprint starts.
7. Week 4: run UAT per the [UAT script template](templates/09-uat-script.md). Capture sign-off in writing (email or DocuSign).
8. Week 5: deliver the handoff package per the [checklist](templates/10-handoff-checklist.md). Schedule the 30-day check-in on the kickoff call calendar.
9. After: log the Implementation in CRM with outcome, hours actually spent, and any template improvements suggested by reality. Update this methodology after every 3rd Implementation.

---

## Templates index

- [07 — Implementation Kickoff](templates/07-implementation-kickoff.md) — Day 1 agenda + notes template + access checklist
- [08 — Architecture Decision Record](templates/08-architecture-decision-record.md) — one-page ADR template
- [09 — UAT Script](templates/09-uat-script.md) — Week 4 standard test case structure + sign-off block
- [10 — Handoff Checklist](templates/10-handoff-checklist.md) — Week 5 delivery package + training video script outline

---

## Versioning

- **v0.1 (this version, 2026-06-26):** first formalization. Built before the Soil Detective Implementation and the first paid Implementation.
- **v0.2 (planned, after Soil Detective + 3 paid Implementations):** template hardening from real-world experience.
- **v0.3 (planned, Day 90):** tier-specific variations if Comprehensive engagement patterns emerge.
