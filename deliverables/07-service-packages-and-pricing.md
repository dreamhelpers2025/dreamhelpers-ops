# Service Packages & Pricing v1.0

**Status:** Locked. Drives website copy, SOW templates, sales conversations, and proposal generation.
**Owner:** Both founders
**Source of truth for:** prices, scope, payment terms, hour caps, capacity caps, audit credits, what we will NOT sell.
**Companion docs:** [business model v0.4](01-founder-liberation-business-model.md) §3 (rationale), [audit framework v0.1](framework/00-audit-framework-v0.1.md), [opportunity matrix template](framework/templates/04-opportunity-matrix.md).
**Versioning:** v1.0 = first locked version. Re-evaluate after 5 paid audits with real conversion + delivery data.

## Glossary (read once, then skim)

- **Audit** — our 5-day paid discovery engagement. $750 flat. Credited toward Implementation if the client buys within 30 days.
- **Implementation** — fixed-scope build of 1–4 workflows. Three tiers: Starter ($4,500), Standard ($8,000), Comprehensive ($12,000).
- **Managed Services** — recurring monthly retainer for ongoing optimization and monitoring. Three tiers: Lite ($750/mo), Standard ($1,200/mo), Pro ($2,000/mo).
- **CAC** (Customer Acquisition Cost) — what we spend to win a client. The audit is classified as CAC, not a profit product.
- **UAT** (User Acceptance Testing) — the phase where the client tests the built system and signs off it works.
- **SOW** (Statement of Work) — the contract that defines exactly what we deliver for a specific engagement.
- **Anchor price / Anchor tier** — the price we present FIRST in a proposal. Drives negotiation away from the cheapest option.
- **Hour cap** — the maximum hours of human time we commit to per month under a Managed tier. Overflow is billed at $150/hr.
- **Capacity cap** — the operational ceiling on how many concurrent engagements one founder can carry. Hard rule, not a guideline.
- **Pilot / beta pricing** — bespoke pricing for the first 1–3 clients we use to validate our process before opening at retail.

---

## 1. Locked pricing snapshot

| Service | Tier | Price | Duration | Anchor? |
|---|---|---|---|---|
| **Audit** | Founder Hours Audit (vet, Shopify, other) / Practice Hours Audit (vet variant naming) | **$750 flat** (credited toward Implementation if signed within 30 days) | 5 business days | n/a |
| **Implementation** | Starter | **$4,500** | 3–4 weeks | — |
| **Implementation** | Standard | **$8,000** | 4–6 weeks | ★ anchor tier |
| **Implementation** | Comprehensive | **$12,000** | 5–7 weeks | — |
| **Managed Services** | Lite | **$750/mo** + $150/hr overflow above 1.5 hrs/mo | Monthly recurring (min 3-month commitment) | — |
| **Managed Services** | Standard | **$1,200/mo** + $150/hr overflow above 4 hrs/mo | Monthly recurring (min 3-month commitment) | ★ anchor tier |
| **Managed Services** | Pro | **$2,000/mo** + $150/hr overflow above 8 hrs/mo | Monthly recurring (min 6-month commitment) | — |

**All prices in USD. All Implementation prices are fixed-fee for the scope locked in the SOW.**

---

## 2. The Audit

### Price + framing

- **$750 flat**, paid via Stripe link upon SOW signature
- **$750 credit** toward Implementation if the client signs an Implementation SOW within 30 days of the Day 5 walkthrough
- **Internal classification:** Customer Acquisition Cost, not a profit product. Gross margin at ~10–15% all-in. We charge to filter for serious buyers, not to profit on the engagement.

### What's in the deliverable

Per the [audit framework v0.1](framework/00-audit-framework-v0.1.md). Every audit produces:

1. **Discovery questionnaire** — captured async before the call
2. **Workflow map** — 4 diagrams: actor swim lanes, system context, weekly time block, money flow
3. **Pain point map** — 4-category categorized inventory + dependency map
4. **AI Opportunity Matrix** — 5-dimension scored ranking with priority formula
5. **Audit report deck** — 10-slide standard structure, doubles as Implementation proposal
6. **Day 5 walkthrough call** — 45 min, presented from the deck using the standard script

### Cadence

| Day | Owner | Activity |
|---|---|---|
| −3 to 0 | Both | Discovery questionnaire returned async by prospect |
| Day 0 | Human | 30-min discovery call |
| Day 1 | Client | Uploads 30 days of data |
| Day 2–4 | Claude + Human (§11 QC) | Build the 4 analytical artifacts |
| Day 5 | Human | 45-min walkthrough call + Implementation proposal handover |

### What's NOT in scope (Audit only)

- Implementation of any recommended workflow (that's a separate engagement)
- Hands-on work inside client systems (we read data, we don't change anything during the audit)
- Vendor recommendations beyond what we've already vetted (we name tools we know; no exhaustive market scan per client)
- Multiple stakeholder interviews (audit = one buyer-conversation; if multiple stakeholders need to weigh in, that's an Implementation-level engagement)

### Website copy block — Audit

> **Founder Hours Audit — $750**
>
> A 5-business-day documented analysis of where your founder time is going, what we'd automate, and what each fix is worth. Includes a 30-minute discovery call, structured analysis of your last 30 days of operational data, and a 45-minute walkthrough call presenting the findings. Every $1 of audit fee credits toward an Implementation if you sign within 30 days.

### SOW scope language — Audit

> **Scope:** Tack will deliver a Founder Hours Audit consisting of:
> (a) one (1) 30-minute discovery call;
> (b) review and analysis of up to 30 days of operational data provided by the Client;
> (c) a documented audit report including: time-use audit, bottleneck map, AI Opportunity Matrix, ROI-ranked recommendations, and incumbent-AI gap analysis;
> (d) one (1) 45-minute walkthrough call presenting the audit report; and
> (e) an Implementation Proposal embedded in the audit report.
>
> **Term:** Five (5) business days from receipt of Client data, subject to Client providing timely access to the data described in §(b).
>
> **Fee:** Seven hundred fifty US dollars ($750), credited in full toward any Implementation SOW signed by Client within thirty (30) days of the walkthrough call.

---

## 3. Implementation Tiers

Three fixed-fee tiers. The Standard tier is the anchor — present first in every proposal.

### Tier comparison

| Dimension | Starter | **Standard ★** | Comprehensive |
|---|---|---|---|
| Price | $4,500 | $8,000 | $12,000 |
| Duration | 3–4 weeks | 4–6 weeks | 5–7 weeks |
| Workflows delivered | 1 | 2–3 | 4 |
| Knowledge base built | — | ✓ | ✓ |
| Cross-system dashboard | — | ✓ | ✓ |
| Custom integrations across 3+ tools | — | — | ✓ |
| Training video produced | ✓ | ✓ | ✓ |
| 30-day post-launch tuning | — | — | ✓ |
| §11 QC (Tier A + Tier B) | ✓ | ✓ | ✓ |
| Liability cap | = fees paid | = fees paid | = fees paid |
| Payment terms | 50% signature / 50% UAT | 50% signature / 50% UAT | 50% signature / 50% UAT |

### Starter — $4,500

**Best for:** clients with one acute, well-defined workflow problem (e.g., "our customer service email triage eats 10 hours a week").

**Delivered:**
- One end-to-end workflow built and live on the client's existing tools
- A dashboard tile showing the workflow's health and outputs
- A 5–10 minute training video walking the client through how it runs
- §11 QC on every numerical claim we make about outcomes

**Out of scope:**
- A second workflow (that's an upgrade to Standard mid-engagement, or a separate Starter later)
- KB / SOP authorship beyond the workflow itself
- Integration into non-existent tools (we use what the client already pays for)

### Standard — $8,000 (anchor tier)

**Best for:** clients with 2–3 related workflows or one workflow that crosses systems and needs a knowledge base behind it.

**Delivered:**
- 2–3 workflows in production
- A knowledge base configured for the team (typically Notion or the platform's native KB)
- A cross-system dashboard pulling from each workflow
- Training video + handoff documentation
- §11 QC + 1-week post-launch monitoring

**This is the anchor tier.** When presenting Implementation options to a client, present Standard first, then mention Starter and Comprehensive as alternatives.

### Comprehensive — $12,000

**Best for:** clients with 4 distinct workflows worth automating, OR clients who want a heavier post-launch tuning commitment.

**Delivered:**
- 4 workflows in production
- Integrations across at least 3 of the client's existing tools
- Full operations dashboard (multi-page)
- Training video + handoff documentation + SOPs
- **30-day post-launch tuning** — we revisit, fine-tune prompts, adjust thresholds, retrain classifiers based on real production data
- §11 QC + 30-day monitoring

**Hard ceiling.** We do not bid above $12,000 in a single SOW until we have 3 finished case studies. Anything above this scope gets phased into Implementation #2.

### Implementation guardrails (apply to all 3 tiers)

- **No new monthly SaaS over $50/mo for the client without explicit written approval.** We build on what they already pay for.
- **Forced Make AI Agents rebuild check before pricing.** If the recommended workflow can be rebuilt in Make AI Agents in <8 hours, we drop the scope or drop the deal (that's freelancer work, not Implementation work).
- **Concurrent capacity cap:** maximum 1 active Implementation per founder per calendar week. If both founders have a sales call week, no new Implementation kickoff happens that week.
- **§11 disclosure language in every SOW.**

### Website copy block — Implementation

> **Implementation — $4,500 / $8,000 / $12,000**
>
> Fixed-scope, fixed-fee builds. We architect, build, and hand over 1–4 automated workflows running on your existing tools — no new software you have to learn. Every Implementation includes a knowledge base, dashboard, training video, and the documented quality control protocol behind every number we report. Pick the scope that matches your operation. 50% on signature, 50% on signoff.

### SOW scope language — Implementation (template, fill per tier)

> **Scope:** Tack will design, build, and hand over to Client the following systems in production: [list the workflows, with named tools and integration points].
>
> Each workflow includes: (a) configuration of the workflow on the Client's existing tools (no new monthly software exceeding $50/mo introduced without Client's prior written approval); (b) Knowledge Base content where applicable; (c) inclusion in a cross-system operations dashboard; (d) a written runbook and one (1) training video.
>
> **Term:** [3–7 weeks per tier], commencing on signature of this SOW and receipt of payment of fifty percent (50%) of total fees, and ending on Client's User Acceptance Test (UAT) sign-off.
>
> **Fee:** [tier price] US dollars, payable 50% on SOW signature and 50% on UAT sign-off.
>
> **Liability cap:** Tack' aggregate liability under this SOW is capped at the total fees actually paid by Client under this SOW. Client is responsible for validating numerical claims and recommendations against their own systems before acting on them. Deliverables are produced using AI tooling and reviewed by Tack for source traceability and internal consistency.

---

## 4. Managed Services Tiers

Recurring monthly engagement. Auto-debited via Stripe on the 1st of each month. Minimum commitments (3 months Lite/Standard, 6 months Pro) — no annual contracts.

### Tier comparison

| Dimension | Lite | **Standard ★** | Pro |
|---|---|---|---|
| Price | $750/mo | $1,200/mo | $2,000/mo |
| Hour cap | 1.5 hrs/mo | 4 hrs/mo | 8 hrs/mo |
| Overflow rate | $150/hr | $150/hr | $150/hr |
| Monthly health report | ✓ | ✓ | ✓ |
| Async tweaks + monitoring | ✓ | ✓ | ✓ |
| 30-min monthly review call | — | ✓ | ✓ |
| 1 new small automation per quarter | — | ✓ | ✓ |
| Quarterly deep retro (90 min) | — | — | ✓ |
| Slack support channel | — | — | ✓ (only after 3 paying Managed clients for 90+ days) |
| Minimum term | 3 months | 3 months | 6 months |
| Cancellation | 30 days' written notice | 30 days' written notice | 60 days' written notice |

### Lite — $750/mo

**Best for:** clients who completed Implementation and want monitoring + occasional tweaks without high-touch service.

**Delivered each month:**
- Monthly health report (KPI snapshot: hours saved, response time, system uptime, anomalies)
- Up to 1.5 hours of async tweaks (prompt adjustments, classifier retraining, dashboard refinement)
- Email-based support (24-hour response)

**Why the floor moved to $750 from a v0.2 $400:** at $400/mo and typical retainer creep (~1.8–2.4× hours within 6 months per industry benchmarks), the margin collapses to negative. $750 with an enforceable 1.5-hour cap holds 50%+ GM under creep.

### Standard — $1,200/mo (anchor tier)

**Best for:** clients who want ongoing optimization + a regular touchpoint, plus one new automation per quarter.

**Delivered each month:**
- Everything in Lite
- 30-minute monthly review call
- Up to 4 hours of work
- One new small automation per quarter (defined by us based on monthly observations)

### Pro — $2,000/mo

**Best for:** larger or higher-complexity clients who want a Slack channel into us + deeper quarterly retros.

**Delivered each month:**
- Everything in Standard
- Up to 8 hours of work
- Quarterly 90-minute deep retro (review of the last quarter's outcomes, planning the next quarter)
- Slack support channel (only available once we have 3 paying Managed clients who've been live for 90+ days — capacity gate)

### Managed Services guardrails

- **Capacity cap:** maximum 6 Lite-equivalents per founder. Standard counts as 1.5×, Pro counts as 3×. When a founder's capacity hits, we close Managed Services to new Implementation clients until either headcount changes or template maturity reduces per-client hours.
- **Hour caps are written into the SOW.** If a client exceeds the cap, we either bill overflow at $150/hr OR trigger an upgrade conversation to the next tier (we choose, based on what's healthier for the relationship).
- **No fire-drill SLA.** If a client wants 24/7 response, that's a custom engagement above Pro and out of scope for v1.0.

### Website copy block — Managed Services

> **Managed Services — $750 / $1,200 / $2,000 per month**
>
> Monthly health reporting, async tweaks, and one new automation per quarter (Standard and up). Hour caps written into the contract — we'd rather charge you overflow than burn out delivering free work. 30-day notice to cancel (60-day on Pro).

### SOW scope language — Managed Services (template)

> **Scope:** Tack will provide ongoing optimization, monitoring, and support of the systems previously delivered under [reference to Implementation SOW] for the duration of this engagement. Service includes:
> - Monthly written health report including KPI summary and anomaly detection
> - Up to [1.5 / 4 / 8] hours per calendar month of human time on tweaks, configuration changes, and small enhancements
> - [Tier-specific deliverables: monthly review call, quarterly automation, quarterly retro, Slack channel access]
>
> **Hour overflow:** any work beyond the monthly hour cap is billed at $150/hr, invoiced separately, payable net-15.
>
> **Term:** Month-to-month after an initial [three (3) / three (3) / six (6)] month commitment. Cancellation requires [thirty (30) / thirty (30) / sixty (60)] days' written notice.
>
> **Fee:** [tier price] US dollars per month, auto-debited on the first business day of each month.
>
> **Liability cap:** Tack' aggregate liability under this SOW is capped at fees paid in the trailing twelve (12) months.

---

## 5. Payment terms, capacity model, and operational rules

### Payment terms

| Engagement | Payment schedule | Mechanism |
|---|---|---|
| Audit | 100% on SOW signature | Stripe payment link |
| Implementation | 50% on SOW signature, 50% on UAT sign-off | Stripe invoice (signature) + Stripe invoice (UAT) |
| Managed | Monthly in advance, 1st of the month | Stripe subscription with auto-charge |
| Overflow on Managed | Billed monthly in arrears, net-15 | Stripe invoice |

**No annual prepay discounts.** We don't want to be holding 12 months of cash we haven't earned. If a client offers, politely decline.

**No procurement / RFP / net-60.** If a prospect requires net-60 or longer payment terms, we decline the engagement — that's a corporate buyer who is out of our ICP.

### Capacity model

| Resource | Cap |
|---|---|
| Concurrent active Implementations | 1 per founder per calendar week |
| Sales calendar interaction | If a founder has >3 sales calls in a calendar week, no new Implementation kickoff for that founder that week |
| Managed Services per founder | 6 Lite-equivalents (Standard counts 1.5×, Pro counts 3×) |
| Audits per week | No hard cap — but 5-day delivery cadence means concurrent audits stack on the same calendar |

When caps are hit, we close intake on the affected service tier rather than overcommit.

### Refunds

- **Audit:** non-refundable. If we cannot deliver in 5 business days due to Client unresponsiveness, we hold the engagement open for up to 30 days, then mark as complete.
- **Implementation:** if we cancel before UAT, full refund of the 50% paid on signature. If Client cancels after kickoff but before UAT, the signature payment is non-refundable (we did the work).
- **Managed:** prorated refund of any unused days in the cancellation month.

---

## 6. Anchoring and pricing logic (why these prices)

For internal reference and SOW negotiation:

### Audit at $750

- **Below the $1,000 credit card friction line** — prospect can put it on a personal card without an approval gate.
- **Above the "automated scan" floor** ($500 and below reads as a free SEO report). $750 signals human work and professional output.
- **In-range with comparables:** SEO/website audits cluster $500–$2,500; the human-led audit band starts around $750. Source: [04 market landscape report](04-market-landscape-report.md), [05 validation workflow findings](05-validation-workflow-findings.md).
- **Below the "premium consultant" anchor** ($1,500+) deliberately — at $1,500 prospects expect a senior consultant to deliver, and we lose to fractional COOs.

### Implementation at $4.5K / $8K / $12K

- **$2,500 was a v0.2 mistake.** Below the credible SMB market floor of $5K. Reads as inexperienced or scope-mismatched.
- **$4,500 Starter** matches the typical single-workflow boutique-agency floor.
- **$8,000 Standard** sits at the typical mid-tier where the buyer expects a knowledge base and dashboard included.
- **$12,000 Comprehensive ceiling** is held until we have 3 completed case studies — above this number we get compared to mid-size agencies with deeper bench, and we lose on comparison.

### Managed at $750 / $1,200 / $2,000

- **$750 Lite floor** is the smallest tier that survives retainer creep at our 1.5-hour cap and 50% GM target.
- **$1,200 Standard anchor** lines up with the documented SMB sweet spot ($350–$700 for basic monitoring, $400–$800 for fully managed with light support — we're slightly above the upper bound because we include a monthly call and quarterly new automation).
- **$2,000 Pro** sits well below fractional-COO territory ($5,000–$12,000/mo) and above generic ops consulting ($500–$2,000), with a hard hour cap making the unit economics defensible.

---

## 7. Discounts, credits, and edge cases

### The audit credit (Implementation only)

- **What:** the full $750 audit fee credits toward the next Implementation SOW the client signs.
- **Window:** 30 days from the Day 5 walkthrough call.
- **Mechanism:** Implementation SOW lists "$X – $750 audit credit = $Y total" with the credit applied automatically.
- **No partial credit.** It's the full $750 or nothing.

### Pilot / beta pricing (first 1–3 clients)

- **Soil Detective** (audit #0): free audit, Implementation at our actual cost, custom revenue-share managed pricing. Documented as a beta to test our process. The case study is the revenue.
- **For 1–2 more pilots in our actual ICPs (vet beachhead or insurance parallel test):** consider a 50% discount on the first paid Implementation in exchange for case-study rights, named-client testimonial, and an introduction to one peer. Cap at 2 pilots per ICP segment, never more.

### Multi-engagement discounts

- **None for now.** No "buy Audit + Implementation + Managed bundled and save 10%" packages. Simpler pricing reads as more credible and lets us iterate without re-papering bundles.

### Currency

- USD only. International clients pay in USD via Stripe.

---

## 8. What we will NOT sell

Hard guardrails. The sales scripts and SOW templates enforce these.

- **Custom-built SaaS or ongoing software products.** That's a Month-6+ question, not Month-1.
- **Always-on AI chatbots facing customers without a moderation layer.**
- **Engagements requiring per-output human sign-off on regulated content** (financial advice, medical advice, legal advice) unless the SOW explicitly bakes in the sign-off process.
- **Hourly billing.** Kills the margin model. If a prospect insists on hourly, we decline.
- **"AI strategy" decoupled from implementation.** No shelfware decks. If a prospect wants a strategy doc and no build, decline.
- **Engagements > $12,000 in a single SOW** until we have 3 completed case studies.
- **Clients with no existing digital workflow.** If the prospect runs everything on paper, we cannot install AI on top of nothing.
- **Anything Shopify Sidekick / Claude for Small Business / Intuit Assist deliver natively in their base plan.** We are not a paid layer on top of free incumbent features.
- **Anything that could be rebuilt in Make AI Agents in < 8 hours.** Freelancer work at $100/hr — not our pricing model.
- **Law firm work.** Until v0.5+ when our compliance posture justifies it (ABA Opinion 512 + state bar consensus makes Managed Services unsellable to law firms without SOC 2 + zero-data-retention contracts).
- **Pre-revenue or sub-$500K-revenue clients.** Cannot afford Implementation, will tire-kick the audit, won't sustain Managed.

---

## 9. Open decisions (for v1.1 after 5 paid audits)

These don't block v1.0 but we revisit at the Day-90 retro:

1. **Segment-specific audit pricing.** Should the vet audit stay at $750 but the insurance audit move to $1,200 (per broader market scan, insurance has higher WTP)? Test after 3 insurance audits.
2. **Annual prepay discount on Managed Services.** Currently no. Worth testing 2 months free on annual prepay for Pro tier — better cash flow, locked client.
3. **Setup fee separate from monthly on Managed Services.** Some industries expect "$X setup + $Y/mo." Currently we bundle. Revisit if onboarding hours run over consistently.
4. **Pilot pricing renewal terms.** Soil Detective is on custom revenue-share. After 90 days, we either convert to standard Managed pricing or document why we're keeping the custom deal. No silent extensions.
5. **Refund language tightening.** v1.0 refund terms are conservative (more generous than we need). After 10 engagements, revisit.

---

## 10. Where this gets used

- **Website:** copy blocks in sections 2, 3, 4 are paste-ready for pricing pages
- **SOW templates:** scope language blocks in sections 2, 3, 4 are paste-ready for legal review and client signing
- **Sales calls:** sections 5–6 give the anchor logic; sections 7–8 give the "no, we don't do that" answers
- **Internal:** capacity caps in section 5 are operational rules for how we plan our week

This doc is the source of truth. If a sales conversation or proposal diverges from this doc, this doc wins — unless we make a written exception and update the doc accordingly.
