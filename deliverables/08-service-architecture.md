# Service Architecture — The Locked v1.0

**Status:** Single source of truth for what Tack sells, who we sell to, what each engagement actually delivers, and how delivery actually happens. Locks Week 1.
**Owner:** Both founders. Maintain this as the "if you only read one doc, read this one" reference.
**Purpose:** When a prospect asks "what does Tack actually do?" — this is the answer in one doc. When Grant or a future hire needs to understand the business, this is where they start.
**Source docs consolidated:** [business model v0.4](01-founder-liberation-business-model.md), [service packages & pricing v1.0](07-service-packages-and-pricing.md), [audit framework v0.1](framework/00-audit-framework-v0.1.md), [implementation methodology v0.1](framework/01-implementation-methodology-v0.1.md).

## Glossary (read once, then skim)

- **ICP** (Ideal Client Profile) — the specific kind of business we are best positioned to sell to.
- **Beachhead / Parallel test** — the segment we attack with full focus (vet clinics) vs. segments we test alongside without full commitment (Shopify, insurance).
- **Audit / Implementation / Managed Services** — our three product tiers, sold in sequence to the same client.
- **CAC** (Customer Acquisition Cost) — what we spend to win a client. The audit is classified as CAC, not a profit product.
- **§11 QC** — our two-tier quality control protocol. Tier A smell (~20 min); Tier B independent re-derivation (60–90 min) for any numerical claim.
- **Make AI Agents rebuild check** — pre-pricing check: if a workflow can be rebuilt in Make AI Agents in <8 hrs, it's freelancer scope and we drop it from Implementation.

---

## If you only read one section, read this

**What we sell:** AI-powered operations systems for founder-run small businesses. Three products sold in a waterfall: a paid Audit ($750) that diagnoses what to automate → a fixed-fee Implementation ($4.5K–$12K) that builds the recommended workflows → optional Managed Services ($750–$2K/mo) for ongoing tuning.

**Who we sell to:** Independent veterinary clinics first (the beachhead). Independent insurance agencies and Shopify $1M–$3M brands as parallel tests.

**How we deliver:** Claude (the AI) produces every substantive artifact. Humans (the founders) run every external conversation, sanity-check the output, and close. We don't pretend humans do substantive review of AI analysis — that's not the value we add. The value humans add is interface, trust, and judgment.

**What protects us:** §11 QC (a two-tier checklist applied to every external artifact), tech E&O insurance carried before the first paid Implementation, per-engagement liability caps written into every SOW, and hard rules about what we won't sell.

---

## The product map

```
PROSPECT BOOKS DISCOVERY CALL
   │
   ▼ (Calendly → Make.com → our intake portal)
   │
PROSPECT FILLS DISCOVERY QUESTIONNAIRE + UPLOADS DATA
   │
   ▼ 5 business days
   │
AUDIT — $750 (credited toward Implementation)
   │  • 4 analytical artifacts (workflow map, pain point map, opportunity matrix, audit deck)
   │  • Day 5 walkthrough call + Implementation proposal handed over
   │
   ▼ 30 days to decide
   │
IMPLEMENTATION — $4.5K / $8K / $12K (Standard $8K is the anchor)
   │  • 3–7 weeks fixed-fee build
   │  • 1–4 workflows in production on the client's existing tools
   │  • Training video + runbook + 30-day support window
   │  • Audit fee credits in full toward Implementation total
   │
   ▼ Offered at Week 4 of Implementation delivery
   │
MANAGED SERVICES — $750 / $1,200 / $2,000 per month (Standard $1,200 is the anchor)
   │  • Monthly health report + tuning
   │  • Hour caps with $150/hr overflow
   │  • 3-month minimum on Lite/Standard, 6-month on Pro
```

Sale path: Audit → Implementation → Managed. Most revenue comes from the Managed retainer over time, not the up-front Implementation.

---

## Pricing snapshot (the locked numbers)

| Service | Tier | Price | Duration | Anchor? |
|---|---|---|---|---|
| Audit | Founder Hours Audit | **$750** (credited toward Implementation if signed within 30 days) | 5 business days | n/a |
| Implementation | Starter | **$4,500** | 3–4 weeks | — |
| Implementation | Standard | **$8,000** | 4–6 weeks | ★ |
| Implementation | Comprehensive | **$12,000** | 5–7 weeks | — |
| Managed | Lite | **$750/mo** + $150/hr overflow above 1.5 hrs/mo | 3-mo min | — |
| Managed | Standard | **$1,200/mo** + $150/hr overflow above 4 hrs/mo | 3-mo min | ★ |
| Managed | Pro | **$2,000/mo** + $150/hr overflow above 8 hrs/mo | 6-mo min | — |

**Anchor tier** = the one we present first in every proposal. Both Implementation and Managed have a Standard tier as anchor.

**Payment:** Audit 100% upfront. Implementation 50% on SOW signature / 50% on UAT sign-off. Managed monthly auto-debit. No annual prepay discounts. No net-60.

Full rationale + paste-ready website copy + paste-ready SOW language in [07 — Service Packages & Pricing](07-service-packages-and-pricing.md).

---

## Who we sell to (the locked v0.4 ICPs)

### Primary beachhead: independent veterinary clinics

- Independent, 2–7 staff, owner-operator
- Owner age 45–62, planning sale to PE/VSO in 3–5 years
- Already uses modern cloud PIMS (ezyVet, Shepherd, AVImark Cloud)
- A practice manager exists as a distinct role — **she is the actual buyer**, not the doctor
- Located near active PE consolidator activity

**Why this beachhead won:** non-HIPAA, organized through VMG/IVPA (single distribution layer), PE consolidation creates dollar-translated buying trigger ($10K of EBITDA improvement = $50–70K of enterprise value at sale).

### Ready-to-swap parallel test: independent insurance agencies

- $1M–$10M revenue, owner-operator, 50+ years old
- AMS-resident (Applied Epic, AMS360, EZLynx, HawkSoft, NowCerts, Veruna)
- Operations manager exists as a distinct role
- Aggregator pressure is real (BroadStreet, World, Inszone, Hub)

**Why parallel and not beachhead:** the segment scored 78/100 on our broader market scan vs. vet's 87/100. Structurally similar enough to vet that wins transfer; non-overlapping enough that we can run both.

### Parallel test (Day 90 kill criterion): Shopify $1M–$3M founder-run brands

- Standard Shopify, not Plus
- Founder is the buyer AND the operator
- Has a VA at $800–$1,500/mo full-time (we augment, not replace)
- Recently went through a system change

**Hard kill at Day 90:** if Shopify does not produce ≥2 signed Implementations attributable to the post-Sidekick orchestration thesis, drop the segment and reallocate to insurance agencies.

### What we don't sell to

Pre-revenue / sub-$500K revenue / DSO-VSO-PE-owned / Shopify Plus / pre-Plus enterprise / law firms (until v0.5+) / anything regulated requiring per-output legal or medical sign-off.

---

## What each engagement actually delivers

### Audit (5 business days, $750)

Per the [audit framework v0.1](framework/00-audit-framework-v0.1.md). Six artifacts produced in order: discovery questionnaire (async) → workflow map → pain point map → opportunity matrix → audit report deck → Day 5 walkthrough call. Every paid audit runs the same template at the same cadence. The audit walkthrough deck doubles as the Implementation proposal.

### Implementation (3–7 weeks, $4.5K–$12K)

Per the [implementation methodology v0.1](framework/01-implementation-methodology-v0.1.md). Five-week Standard cadence: Week 1 design + access provisioning → Weeks 2–3 build sprints → Week 4 UAT → Week 5 handoff. Six artifacts produced: kickoff agenda/notes → access checklist → Architecture Decision Records → build commits with daily §11 QC → UAT script + signed sign-off → handoff package (training video + runbook + 30-day check-in).

Five pre-kickoff hard gates before any work starts: signed SOW + 50% deposit + active E&O insurance + access checklist drafted + Make AI Agents rebuild check passed in writing.

### Managed Services (monthly recurring, $750–$2K/mo)

Monthly health report + async tweaks within the hour cap + one new small automation per quarter (Standard and up). Standard tier adds a 30-min monthly review call. Pro tier adds a quarterly 90-min deep retro + Slack support channel (only available after 3 paying Managed clients have been live 90+ days — capacity gate).

Hour caps: Lite 1.5 hrs/mo, Standard 4 hrs/mo, Pro 8 hrs/mo. Overflow billed at $150/hr.

---

## Delivery architecture — who does what

This is the load-bearing split that makes the unit economics work.

### Claude (the AI workhorse) owns

- Designing discovery questions, audit framework, data taxonomy
- Reading all client data and producing structured analyses
- Writing every deliverable (audit decks, proposals, SOWs, reports, training docs)
- Architecting every Implementation (tool selection, workflow design, integration map)
- Building every Implementation (workflows in Make / Zapier / n8n / Claude Code, prompts, code, dashboards)
- Generating speaker notes, objection cards, pre-call briefs

### Humans (the founders) own

- Running every external conversation (discovery, walkthrough, handoff, monthly check-in)
- Trust and relationship — the thing that gets a client to share their real data
- Real-time judgment when a client says something the brief didn't anticipate
- Closing the sale (conviction can't be faked)
- Eyes and ears the AI doesn't have (tone, hesitation, what they didn't say)
- §11 QC on every external artifact before it leaves Tack

### What Claude is genuinely weak at (and we don't sell around)

- Real-time customer interaction without a host platform
- Long-running stateful relationships
- Anything requiring a signature, phone call, or physical presence
- Reliably accurate numerical claims (15–52% hallucination rates on finance-domain benchmarks — exactly why Tier B QC is mandatory)

---

## Quality control (§11) — the protocol that protects us

§11 is the two-tier protocol applied to every external artifact:

- **Tier A — Smell test (~20 min):** read every external artifact as a presenter would. Anywhere you wouldn't defend a line in front of the client gets flagged. Applies to narrative, prose, slide copy.
- **Tier B — Independent re-derivation (60–90 min, mandatory):** every numerical claim that appears in a client-facing deliverable gets independently re-derived from raw source data with a fresh prompt. Forbid round numbers. This is the protection against confidently-wrong AI outputs.

**Legal protections layered on top:**
- Tech E&O insurance active before first paid Implementation
- Per-engagement liability cap written into every SOW (cap = fees paid)
- AI disclosure language in every SOW: "Deliverables are produced using AI tooling and reviewed by Tack for source-traceability and internal consistency. Clients are responsible for validating numerical claims against their own systems before acting on recommendations."

---

## What we will NOT sell (hard guardrails)

The sales scripts and SOW templates enforce these. Pulled from [pricing doc §8](07-service-packages-and-pricing.md#8-what-we-will-not-sell):

- **Hourly billing** — kills the margin model
- **Engagements > $12K in a single SOW** — until 3 case studies exist
- **Anything Shopify Sidekick / Claude for Small Business / Intuit Assist deliver natively** — we are not a paid layer on top of free incumbent features
- **Anything that could be rebuilt in Make AI Agents in <8 hours** — that's freelancer scope
- **Law firm work** — until v0.5+ when compliance posture justifies
- **Pre-revenue or sub-$500K-revenue clients**
- **Always-on AI chatbots facing customers without a moderation layer**
- **"AI strategy" decoupled from implementation** — no shelfware decks
- **Custom-built SaaS** — Month-6+ question
- **Per-output regulated content** without explicit human sign-off baked into SOW
- **Clients with no existing digital workflow** — we automate what exists; we don't digitize from paper

---

## Operational rules (capacity and cadence)

- **One active Implementation per founder per calendar week.** If both founders have sales-heavy weeks, no new Implementation kickoff that week.
- **Sales calendar takes priority.** >3 sales calls in a week = no Implementation kickoff for the closing founder that week.
- **Managed capacity cap:** 6 Lite-equivalents per founder (Standard counts 1.5×, Pro counts 3×).
- **Payment milestone hits before next phase.** No work starts until Stripe confirms.
- **30-day audit credit window.** Expires automatically. No partial credit.

---

## Pre-engagement checklist (for the founder running the call)

Before the kickoff call on any Implementation:

- [ ] SOW signed by both parties
- [ ] 50% deposit cleared in Stripe (not "pending")
- [ ] Tech E&O insurance is active (policy number documented)
- [ ] Access provisioning checklist sent to client 24 hrs before kickoff
- [ ] Make AI Agents rebuild check passed in writing
- [ ] Engagement folder structured with: SOW PDF, audit report PDF, ADR folder
- [ ] Weekly check-in calendar invite drafted

If any item is red, postpone the kickoff. Don't start without all green.

---

## Where to dig deeper

This doc is the summary. The source documents have the depth:

- **Strategic context (why these ICPs, why this positioning):** [01 — Business Model v0.4](01-founder-liberation-business-model.md)
- **Audit landscape research:** [02 — CS Landscape](02-customer-service-automation-landscape.md), [03 — Automation Stack](03-automation-stack-landscape.md), [04 — Market Landscape Report](04-market-landscape-report.md)
- **Adversarial validation of the model:** [05 — Validation Findings](05-validation-workflow-findings.md), [06 — Broader Market Scan](06-broader-market-scan-findings.md)
- **Pricing rationale + paste-ready copy + SOW language:** [07 — Service Packages & Pricing](07-service-packages-and-pricing.md)
- **Audit process detail + templates:** [framework/00 — Audit Framework v0.1](framework/00-audit-framework-v0.1.md)
- **Implementation process detail + templates:** [framework/01 — Implementation Methodology v0.1](framework/01-implementation-methodology-v0.1.md)
- **Soil Detective pilot artifacts (the worked example):** [pilot/](pilot/)
- **Internal ops automation:** [ops/](ops/)

---

## How this doc is used

- **Both founders:** read it once, then come back when a client asks "what do you actually do?" — answer is here.
- **Onboarding a new contributor (Grant on Day 1 / future hires):** this is the day-one read.
- **Pre-sales call:** scan §"Who we sell to" and §"What each engagement actually delivers" before the call.
- **Pre-Implementation kickoff:** scan §"Pre-engagement checklist."
- **Sanitized external version:** the product map + pricing snapshot + "what each engagement delivers" can be excerpted as a one-pager for cold outbound or a website "About our services" page.

If a sales conversation or proposal diverges from this doc, this doc wins — unless we make a written exception in the changelog below and update accordingly.

---

## Changelog

| Date | Change | Rationale |
|---|---|---|
| 2026-06-26 | v1.0 published | Consolidates v0.4 model + pricing v1.0 + audit framework + implementation methodology into single source of truth. Week 1 lock. |
