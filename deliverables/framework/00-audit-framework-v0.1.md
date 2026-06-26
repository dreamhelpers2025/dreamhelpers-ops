# Dream Helpers — Audit Framework v0.1

**Status:** v0.1 — first formalization. Will iterate after Soil Detective beta and the first 3 paid audits.
**Owner:** Both founders
**Purpose:** Define the repeatable process every Founder Liberation Audit runs on. This doc + the templates in `templates/` are the SOP that prevents every audit from being re-invented from scratch. Treat as the master process artifact.

## Glossary (read once, then skim)

- **SOP** (Standard Operating Procedure) — the documented way we do a recurring thing.
- **SOW** (Statement of Work) — the contract that defines exactly what we deliver for a specific engagement.
- **Audit** — our 5-day paid discovery engagement, priced at $750 and credited toward Implementation if the client buys within 30 days. See main business model §3.1.
- **Discovery questionnaire** — the standardized intake form we send every prospect before the Day 0 call.
- **Workflow map** — a visual capture of how the client's business currently operates: who does what, what tool runs what, where time and money flow.
- **Pain point map** — categorized inventory of what hurts in the client's operation, scored for leverage and dependency.
- **Opportunity matrix** — scored ranking of what we could fix, with feasibility × hours × revenue × case-study-value rubric.
- **Audit report deck** — the client-facing deliverable produced at the end of the 5 days. Doubles as the Implementation proposal.
- **§11 QC** — the two-tier quality control protocol from the v0.4 business model: Tier A smell test (~20 min) for narrative, Tier B independent re-derivation (60–90 min) for any numerical claim.
- **Swim lane diagram** — a workflow diagram where each row represents an actor (founder, customer, system) and shows what each does in sequence.
- **System context diagram** — a diagram showing what tool/system talks to what other tool/system, with the data that flows between them.

## The 5-day cadence

Every audit runs on the same 5-day calendar. Days are business days, not calendar days. Do not stretch — clients buy speed.

| Day | Owner | Activity | Artifact in / Artifact out |
|---|---|---|---|
| **−3 to 0** | Both | Discovery questionnaire sent to prospect, returned async. Reduces Day 0 call time and gives us a starting workflow map. | Out: completed [discovery questionnaire](templates/01-discovery-questionnaire.md) |
| **Day 0** | Human | 30-min discovery call. Confirm + clarify questionnaire answers. Set expectations for the 5-day cadence. Confirm payment and access. | Out: discovery call debrief (template TBD) |
| **Day 1** | Client | Client uploads 30 days of email, ticket, calendar, system exports to a shared folder. | In: raw data |
| **Day 2–4** | Claude (build) + Human (§11 QC) | Build the four analytical artifacts: workflow map → pain point map → opportunity matrix → audit report deck. Each artifact runs through §11 QC before moving to the next. | Out: [workflow map](templates/02-workflow-map.md), [pain point map](templates/03-pain-point-map.md), [opportunity matrix](templates/04-opportunity-matrix.md), [audit report deck](templates/05-audit-report-deck.md) |
| **Day 5** | Human | 45-min walkthrough call. Present findings, hand over Implementation proposal. Use the [walkthrough script](templates/06-walkthrough-script.md). | Out: signed Implementation SOW (target) OR documented follow-up (acceptable) |

## The six artifacts (in build order)

Each audit produces these six artifacts in this sequence. The order matters — each downstream artifact depends on the previous.

1. **[Discovery questionnaire](templates/01-discovery-questionnaire.md)** — completed by prospect before Day 0. Gives us baseline facts so the Day 0 call is about *interpretation*, not *information gathering*.
2. **[Workflow map](templates/02-workflow-map.md)** — produced Day 2 from questionnaire + Day 0 call. Captures the client's current operations as four diagrams: actor swim lanes, system context, weekly time-block, money flow.
3. **[Pain point map](templates/03-pain-point-map.md)** — produced Day 2–3. Categorizes pain points into four standard buckets, maps dependencies, identifies blockers.
4. **[Opportunity matrix](templates/04-opportunity-matrix.md)** — produced Day 3–4. Scores each opportunity on 5 dimensions with a fixed rubric. Recommends top 3 for Implementation.
5. **[Audit report deck](templates/05-audit-report-deck.md)** — produced Day 4. Client-facing presentation. Doubles as the Implementation proposal.
6. **[Walkthrough script](templates/06-walkthrough-script.md)** — used Day 5. Standard talking points + objection cards.

## Quality control gates (§11 from v0.4)

Every artifact passes through §11 QC before it leaves Dream Helpers. Non-negotiable.

| Artifact | Tier A (smell, ~20 min) | Tier B (re-derivation, 60–90 min) |
|---|---|---|
| Discovery questionnaire (intake) | Not applicable — client-produced | Not applicable |
| Workflow map | Confirm every actor / system mentioned was actually named by the client | Spot-check 3 random data flows against source data |
| Pain point map | Confirm every pain point is traceable to a quote from the questionnaire or call debrief | Spot-check categorization against the standard 4 buckets |
| Opportunity matrix | Read as a presenter; any line you wouldn't defend gets flagged | **Independently re-derive 100% of numerical claims** (hours, dollars, percentages). Forbid round numbers — ranges only. |
| Audit report deck | Tier A on prose + slide copy | Tier B on every number from the matrix that appears in the deck |
| Walkthrough script | Confirm tone matches the segment | Not applicable |

## Variants per segment

The framework is universal. The discovery questionnaire is segment-specific (vet asks about PIMS, insurance asks about AMS, Shopify asks about Sidekick, etc.). The audit report deck has segment-specific positioning. The opportunity matrix scoring weights stay constant across segments — feasibility means the same thing whether we're auditing a vet clinic or an insurance agency.

**Current segment variants:**
- **Vet (primary beachhead)** — discovery questionnaire focuses on PIMS, practice manager role, PE/VSO contact, AVMA-style time use.
- **Insurance (ready-to-swap parallel test)** — focuses on AMS, ops manager, aggregator pressure, x-date workflow, certificate request volume.
- **Shopify $1M–$3M (parallel test)** — focuses on Sidekick adoption, Klaviyo flows, VA setup, 3PL stack.
- **Other (e.g., Soil Detective beta)** — generic discovery questionnaire. Used for pilots that fall outside the standard ICP. Not the audit we sell at retail.

## Capacity model

Per audit, end-to-end, per founder team of two:

- Discovery questionnaire processing + Day 0 call: 2 hrs total
- Day 1 access provisioning: 1 hr human, async client work
- Days 2–4 build with §11 QC: 8–12 hrs combined Claude + human (with first audit closer to 14, subsequent down to 6 as templates harden)
- Day 5 walkthrough call + Implementation proposal handover: 2 hrs human prep + 1 hr call
- **Total: 13–18 hrs human time per audit at maturity (after 3–5 paid audits worth of template hardening).**

At $750/audit and ~14 hrs of blended team time, the audit is intentionally near break-even economically — it is paid customer acquisition for Implementation, not a profit product. See v0.4 §3.1.

## How to use this framework (for the auditor)

When a new prospect comes in:

1. Identify segment (vet / insurance / Shopify / other). Pick the matching discovery questionnaire variant.
2. Send questionnaire async with target completion before Day 0 call.
3. Schedule Day 0 call within 5 business days of questionnaire return.
4. Send the client the upload-folder link with the 30-day-data request list. (Standard list: email/inquiry corpus, calendar export, tool stack inventory, customer/member list, financial summary, anything segment-specific.)
5. Run the 5-day cadence above. Use each template literally — do not invent.
6. §11 QC each artifact before the next downstream artifact uses it.
7. Walk through Day 5. Use the script. Hand over Implementation proposal at the end.
8. After: log the audit in CRM with conversion outcome, time spent, and any template improvements suggested by reality. Update templates after every 3rd audit.

## Versioning

- **v0.1 (this version, 2026-06-25):** first formalization. Built using Soil Detective beta as the worked example.
- **v0.2 (planned, after 3 paid audits):** template hardening from real-world reality.
- **v0.3 (planned, Day 90):** segment variant maturation if multiple verticals have shipped.

## Templates index

- [01 — Discovery Questionnaire](templates/01-discovery-questionnaire.md) — the standard intake, with segment variants
- [02 — Workflow Map](templates/02-workflow-map.md) — methodology + blank template (4 diagram types)
- [03 — Pain Point Map](templates/03-pain-point-map.md) — categorization template + dependency map
- [04 — Opportunity Matrix](templates/04-opportunity-matrix.md) — scoring rubric + template
- [05 — Audit Report Deck](templates/05-audit-report-deck.md) — 10-slide outline
- [06 — Walkthrough Script](templates/06-walkthrough-script.md) — Day 5 call script with objection cards
