# Outcome Measurement Methodology v0.1

**Status:** Draft — first version. Sits alongside [`00-audit-framework-v0.1.md`](00-audit-framework-v0.1.md) and [`01-implementation-methodology-v0.1.md`](01-implementation-methodology-v0.1.md) in the framework folder.
**Owner:** Both founders
**Purpose:** Define how the four external outcome metrics from [`01-founder-liberation-business-model.md`](../01-founder-liberation-business-model.md) §4 are measured, so every audit, monthly report, and case study derives them the same way. This is the doc a client looks at when they ask "how did you calculate that?" — it's meant to be defensible on a call.
**Applies to:** every paid engagement, in every segment (vet, insurance, DTC, other).

## If you only read one section

We sell four outcomes: hours reclaimed, response time, context switches, revenue protected. Every one of them requires:

1. **Baseline pulled from raw client data** (not client self-report)
2. **Post-implementation measurement using the exact same methodology as baseline**
3. **§11 Tier B independent re-derivation** by a second Tack team member before any number reaches a client-facing artifact
4. **Range presentation** — never point estimates. "$16K–$28K annually" not "$18K annually."
5. **Attribution window** documented (what counts as caused-by-us vs would-have-happened-anyway)
6. **Methodology footnote** in every artifact where the number appears

If we can't derive a number from raw data twice, independently, we don't publish it.

## Shared principles (apply to all four metrics)

### Data provenance

Every metric requires **raw system data from the client**, exported by the client and stored in our engagement folder. Acceptable sources:

- **Email:** Gmail Takeout, Outlook export (.pst / .csv), or shared-mailbox raw export
- **Support/helpdesk:** Zendesk / Gorgias / Intercom exports
- **Chat:** Slack Analytics export (workspace-level), Facebook/Instagram DMs via Meta business export
- **Ecommerce:** Shopify orders/customers CSV export, or platform admin CSV
- **PIMS / AMS / CRM:** direct CSV export from the client's system, or read-only API access
- **Calendar:** Google Calendar iCal export, or Outlook .ics
- **Phone / SMS:** carrier call logs (ATT / Verizon business), or CRM-integrated call log export

**Explicitly not acceptable:** founder recall, "we usually respond within X hours," round-number estimates, screenshots without underlying data, dashboard summaries without CSV. Kahneman peak-end bias makes self-report unreliable for volume and time metrics.

**Where the data lives:** `[client-folder]/raw-data/` in shared Drive. Never in a team member's personal drive. Kept for the life of the engagement + 90 days after handoff (per SOW retention clause).

### Baseline window

**Default: 90 days.** Rationale: seasonal effects, week-of-month effects, and one-off spikes flatten out over a quarter.

Shorter acceptable when:
- Client's business is < 90 days old (use full available history)
- A recent system migration means older data is not comparable (document the cutoff)

Never shorter than 30 days without written justification in the audit deck.

### Post-implementation measurement window

**Default: 30 / 60 / 90 days after Implementation go-live.**

- Day 30 = first ping. Some effects visible, most workflows still bedding in.
- Day 60 = mid-check. Effect stabilizing; if we're missing the target, this is when we intervene.
- Day 90 = case-study checkpoint. Numbers considered "settled" and safe to publish externally.

Never publish a case study number from < 30 days post-go-live.

### §11 Tier B re-derivation

Applies to **every number** that ends up in a client-facing artifact. Non-negotiable per business model §11 and the [Audit Framework](00-audit-framework-v0.1.md) §11 QC step.

Method:
1. Team member A computes the metric from raw data and drafts the audit / report language
2. Team member B independently re-derives the same metric from the same raw data (no peeking at A's work)
3. Compare. If diverges > 5% for volume metrics or > 10% for dollar metrics, sit down and reconcile.
4. Whoever wins the reconciliation writes a short methodology note capturing the disagreement and resolution. Note goes in `[client-folder]/qc-notes/`.
5. Only reconciled numbers appear in client-facing output.

### Range presentation

Every published number is a **range**, not a point:

- ✅ "Recovered 14–18 hours per month across three workflows"
- ❌ "Recovered 16 hours per month"

- ✅ "Protected an estimated $22K–$34K in annualized revenue"
- ❌ "Protected $28K in annualized revenue"

Range width should reflect real uncertainty. If we can only get within ±30%, say so. If we can get within ±5%, the range is narrower. Never fake precision.

### Methodology footnote

Every client-facing artifact that cites a number includes a methodology footnote in the same section. Template:

> *Baseline computed from [source, date range, n]. Post-implementation from [source, date range, n]. Independent re-derivation completed [date] per Tack QC methodology (see [Outcome Measurement Methodology](../framework/02-outcome-measurement-methodology-v0.1.md)). Range reflects observed variance across [factor].*

## Metric 1 — Founder / practice manager hours reclaimed per month

**Target: 10–20 hours per month.**

### What it measures

Hours per month the founder or practice manager was previously spending on the specific workflows we automated, which they now don't have to spend.

### What it does NOT measure

- Hours the founder now spends on higher-value work (that's a bonus, not our claim)
- Hours the automation ran (a bot running 24/7 does not equal 24 founder hours reclaimed)
- Hours saved by other people on the team (unless explicitly scoped)
- General "efficiency gains" without a specific workflow attached

### Baseline measurement

**During audit, Days 1–2.** Method:

1. Founder / manager completes a **week-long time diary** — Toggl, or a shared spreadsheet with 30-minute increments during work hours
2. Every entry tagged with a workflow name from the audit's workflow map
3. Cross-check three sources:
   - The time diary
   - Calendar review of the same week
   - Inbox metadata (message send/reply timestamps) for workflows that involve email
4. Categorize each workflow as: (a) automatable, (b) delegable, (c) must-stay-human
5. For workflows we plan to automate: sum hours per week × 4.3 = **monthly baseline for that workflow**
6. Total monthly baseline = sum across all workflows we plan to automate

### Tier B re-derivation

- Second team member reconstructs the same monthly baseline from the same three sources without seeing team member A's numbers
- If the diary, calendar, and inbox diverge from each other > 20%, redo the baseline with a second week of tracking (not average — replace)
- Final baseline is the reconciled figure

### Post-implementation measurement

**Day 30 / 60 / 90 after go-live.** Same time-diary methodology on the same workflows.

**Reclaimed = baseline monthly hours minus actual monthly hours the founder still spends on those workflows.**

### Where the 10–20 range comes from

- 10–20 hrs/mo ≈ 2.5–5 hrs/week reclaimed ≈ one afternoon per week
- **Below 10:** the reduction is real but the founder won't feel it — probably under-scoped Implementation. Trigger review.
- **Above 20:** either an over-claim on our part, or the founder was drowning at baseline (12+ hours/week on a single workflow). Verify with the diary before publishing.

**Empirical anchor:** small-business automation ROI benchmarks from McKinsey SMB AI reports (2023–2025) and internal case data from mid-market ops consulting firms. Not a Tack-specific study yet.

### Presentation language

> "Between Day 30 and Day 90 post-go-live, [Founder Name] reclaimed an estimated [12–16] hours per month across [three] workflows: [inquiry triage], [order-status responses], and [refund routing]. Baseline established via a one-week time diary during the audit, cross-checked against calendar and inbox timestamps. Post-implementation measurement used the same methodology on Days 30, 60, and 90; range reflects observed variance across those three checkpoints."

## Metric 2 — Customer-facing response time

**Target: −50% on first response.**

### What it measures

Median time from customer's first inbound message (email, form, chat, DM) to a **substantive** first human or human-reviewed reply. Autoreplies don't count.

### What it does NOT measure

- Mean response time (destroyed by outliers — one weekend inquiry can move the average by hours)
- Time-to-resolution (that's a different metric, measured separately)
- Response time to internal messages (this is customer-facing only)
- Autoreply latency (autoreplies are not responses; they're placeholders)

### Baseline measurement

1. Pull 30–90 days of inbound message data from the client's actual systems (Gmail Takeout, Zendesk export, form-tool logs, chat platform export)
2. For each inbound message, identify the first substantive reply (excluding autoreplies)
3. Compute:
   - **Median first-response time** per inquiry category
   - **p90 first-response time** per inquiry category (the "worst realistic case")
4. Categorize by inquiry type: question, complaint, sales inquiry, billing, support, partnership, spam
5. Establish separate baselines per category — we typically automate specific categories, not the whole inbox

### Tier B re-derivation

- Second team member pulls the same raw export and computes the same medians/p90s independently
- Category assignments must match between team members within 5% agreement rate on a random 30-message sample
- If category disagreement > 5%, sit down and align on category definitions before proceeding

### Post-implementation measurement

Same raw pull, same categorization, same medians and p90s, at Days 30/60/90.

**The −50% target applies to categories we automated, not the whole inbox.** If we automated inquiry-triage and order-status but not billing, we report the response-time change on the automated categories only. Non-automated categories are reported as "not in scope for this Implementation" — not lumped into an averaged claim.

### Where the −50% target comes from

- Moving from "human-only, when they get to it" to "AI-drafted, human-reviewed in-hours" reliably produces 40–70% reduction in first-response time
- Vendor benchmarks: Gorgias reports 30–70%, Intercom / Fin reports 40–60%, Zendesk case studies 35–55%
- **Below −30%:** implementation didn't do much — wrong workflow chosen or QC gate too heavy
- **Above −70%:** probably means autoreply-without-review, which violates our AI disclosure discipline (§11 requires human review before send)

### Presentation language

> "First-response time for [inquiry-triage] and [order-status] categories dropped from a median of [4.5 hours] baseline (30 days pre-implementation) to a median of [45 minutes] post-implementation, a reduction of [65–72%] measured across Days 30, 60, and 90. p90 response time dropped from [22 hours] to [3.5 hours] over the same period. Autoreplies excluded from both baseline and post-implementation figures."

## Metric 3 — Founder / manager context switches per day

**Target: −40% via notification volume proxy.**

### What it measures

**A proxy.** How many times per day the founder is pulled out of focused work by pings that require their action.

### Why it's a proxy

We can't directly count context switches — that would require eye tracking or attention monitoring. Notification volume is a defensible correlate but has known limitations we must document.

### What it does NOT measure

- True attention residue ([Gloria Mark's 2008 CHI paper](https://ics.uci.edu/~gmark/chi08-mark.pdf) shows real switch costs from interruption; Sophie Leroy's 2009 work formalized the "attention residue" term — we don't capture either directly)
- Ambient/informational notifications (batch-read newsletters, calendar day-ahead summaries)
- Notifications outside work hours
- Notifications the founder chose to check (vs was interrupted by)

### Baseline measurement

1. Enumerate the founder's actionable channels — the ones where a message expects their input:
   - Slack DMs and @mentions (Slack Analytics export or workspace admin data)
   - Email requiring response (Gmail metadata, filtered to exclude newsletters, calendar invites, receipts)
   - Phone calls + SMS (carrier logs or CRM-logged calls)
   - Tool-specific alerts: Shopify order alerts, Klaviyo flow triggers requiring approval, PIMS appointment escalations, CRM task assignments
2. Sum notifications per day during work hours for a **representative week** (avoid holiday weeks, launch weeks, or vacation weeks)
3. Distinguish two counts:
   - **Actionable** count (requires founder input) — this is the metric
   - **Ambient** count (informational only) — reported separately for context, not used in the target

### Tier B re-derivation

- Second team member pulls the same raw system exports and counts the same channels
- Category assignment (actionable vs ambient) must match on a random 20-notification sample within 90% agreement
- If disagreement > 10%, define the boundary sharper before publishing

### Post-implementation measurement

Same channels, same categorization, same representative week, at Days 30/60/90.

**Automation should route "AI first, escalate only if needed"** rather than "founder first, filter yourself." The reduction comes from routing pings to the AI layer or another team member before the founder ever sees them.

### Where the −40% target comes from

- −40% represents a reduction a founder can **feel** — the difference between 30 pings/day and 18/day is a different workday
- **Below −20%:** we didn't route enough away from founder. Review workflow scope.
- **Above −60%:** probably over-suppressing — founder loses signal on things they actually need to see. Check that no important escalations are being missed.
- **Empirical anchors:**
  - [Gloria Mark et al., "The Cost of Interrupted Work: More Speed and Stress" (CHI 2008)](https://ics.uci.edu/~gmark/chi08-mark.pdf) — the canonical ~23-minute average time to return to a task after an interruption
  - [Cal Newport, *Deep Work* (2016)](https://calnewport.com/) — argues for batching cognitively-demanding work into long, uninterrupted stretches, and treats interruption reduction as a first-order productivity intervention. Newport's *Digital Minimalism* (2019) extends the argument specifically to notification channels — which is exactly what this metric proxies.

### Mandatory methodology footnote

Every artifact citing this metric must include:

> *Notification volume is a proxy for context switches, not a direct measurement. Some notifications are ambient or batched; others are true interruptions. This figure captures actionable notifications routed to the founder during work hours only, measured via [Slack Analytics + Gmail metadata + tool-specific alert logs] for a representative week.*

Without the footnote, don't publish the number.

### Presentation language

> "[Founder Name]'s actionable notification volume during work hours dropped from a baseline average of [32] notifications/day to [17–19] notifications/day across Days 30–90 post-implementation, a reduction of [42–47%]. Baseline measured for the week of [date range] using [Slack Analytics + Gmail metadata + tool-specific alert logs]. Notification volume is a proxy for context switches, not a direct measurement — see methodology note."

## Metric 4 — Revenue protected

**Target: 2–5× project cost annually.**

### What it measures

Dollar value of business the client would have LOST at their pre-Tack leak rate, but retained because our systems caught it.

**"Protected," not "generated."** We do not claim credit for revenue that would have happened anyway.

### Sub-categories

- Orders saved from cancellation (customer would have abandoned without timely response)
- Appointments not missed (vet clinic: reminder + confirmation automations reducing no-show rate)
- Leads not lost (inquiry replied to within minutes vs days, measurable conversion delta)
- Refund requests intercepted with retention offers before churn
- Renewals / re-orders landing on schedule

Each sub-category is measured and reported **separately** — never lumped into a single "revenue protected" number without the breakdown.

### Baseline measurement (heaviest §11 Tier B lift)

1. Pull actual client data: Shopify orders + refunds, PIMS appointments + no-shows, CRM lead events, refund history
2. Compute the **leak rate** for each sub-category on pre-Tack data (90-day baseline):
   - % of inbound leads that never converted, filtered by response-time delay
   - No-show rate on appointments
   - Cancellation rate on orders within 24 hours of purchase
   - Refund-to-churn conversion rate (refunded customers who never re-purchased)
3. Compute average dollar value per event:
   - AOV for orders (from Shopify)
   - Average appointment revenue (from PIMS)
   - LTV for a lead (from CRM + Shopify / PIMS join)
4. **Attribution window** documented per sub-category — how long after a Tack-automated interaction does an event count as caused-by-us? Defaults:
   - Order recovery: 24 hours after automated first-touch
   - Appointment reminder: reminder sent + confirmed within 48 hours of the appointment
   - Lead recovery: response within N minutes of inquiry (N = the automation's target)
5. Attribution window is stated in the artifact and in the SOW — clients see it before we quote a number

### Tier B re-derivation

**Heaviest re-derivation requirement in the entire framework.** Every dollar figure:

1. Team member A pulls raw data and computes the sub-category dollar figure
2. Team member B pulls the same raw data and re-derives independently
3. Compare. Disagreement > 10% triggers a full reconciliation
4. Whoever writes the client-facing language documents the attribution window and the calculation in a QC note (`[client-folder]/qc-notes/revenue-protected-[sub-category].md`)
5. If we can't defend the derivation to a third team member on demand, drop the claim

### Post-implementation measurement

Same rates from same systems, at Days 30/60/90.

**Annualized revenue protected** = (baseline leak rate − post leak rate) × event volume × average event value × 12

Presented per sub-category, then summed only in the aggregate summary line.

### How the 2–5× target maps to Implementation tiers

| Implementation | Target revenue protected (annualized) |
|---|---|
| Starter ($4,500) | $9K–$22.5K/year |
| Standard ($8,000) — anchor | $16K–$40K/year |
| Comprehensive ($12,000) | $24K–$60K/year |

If we can't derive a target range from the audit data that lands in these brackets, the Implementation is probably mis-priced or mis-scoped. Trigger review before we send an Implementation proposal.

### Where the 2–5× range comes from

- **Below 2×:** hard to sell Managed on this — client sees no ongoing value. Might indicate we automated the wrong workflow, or we're not measuring all the leak paths.
- **Above 5×:** usually attribution error or over-claim. Treat as suspicious and re-derive. Real 5×+ engagements exist but are the exception, and the audit should have flagged the specific leak volume in the baseline.
- **Empirical anchor:** HubSpot's 2022 report on response-time-to-conversion (5-min response → up to ~100× higher qualification rate vs 24-hr — but qualification, not close rate, and the study population was inside sales, not our exact ICPs), Shopify cart-abandonment recovery data (10–30% recovery via automated flows).

**Explicit disclaimer we must make in every artifact:** these empirical anchors are from adjacent research populations, not from Tack-specific case studies. As Tack's own client history accumulates, we replace external benchmarks with our own numbers, cited to case studies with client permission.

### Presentation language

> "Between Day 30 and Day 90 post-implementation, Tack's systems protected an estimated **[$18K–$26K annually across three sub-categories]:** [order-cancellation recovery, $8K–$12K/year] + [appointment no-show reduction, $6K–$9K/year] + [lead-conversion delta from response-time reduction, $4K–$5K/year]. Baseline computed from [Shopify + PIMS + CRM raw exports, 90 days pre-implementation]. Attribution windows: 24 hours for order recovery, 48 hours for appointments, response-time-delta calculation for leads. Independent re-derivation completed [date] per Tack QC methodology."

## Where these metrics appear

Every published artifact that includes any of the four numbers must:

- Cite methodology (this doc) as the source
- Include the methodology footnote for the specific metric
- Present the number as a range
- Document the attribution window (for revenue protected)
- Reference the raw data source in a note

Artifacts that will always include these metrics:

- **Audit report deck** ([template 05](templates/05-audit-report-deck.md)) — as projections in the "Recommended sequence + ROI" section
- **Monthly Managed Services health report** — as actuals from the trailing 30 days
- **Case studies** (public + private) — as verified 90-day post-implementation figures, with client sign-off on numbers before publish
- **Discovery-call one-pagers** — as ranges from prior clients (once we have them; until then, only "target" language, no specific numbers)
- **SOW appendix** — as the specific targets we're contracted to instrument and measure

## What is NOT in this doc yet (v0.1 gaps)

- **Confidence intervals** — currently we report ranges but not formal CIs. Consider adding p95 CIs to dollar figures once we have enough client data to compute them (~5 completed engagements).
- **Cross-client benchmark data** — none available yet. Once we have 3+ completed Implementations in the same segment, cite Tack-internal benchmark ranges in addition to external ones.
- **Attrition adjustment** — a client who churns at Day 45 shouldn't count in the Day 90 benchmark. Methodology for adjusting cohort figures needs to be specified in v0.2.
- **Seasonal adjustment** — a vet clinic's baseline over Thanksgiving/Christmas is not comparable to a February baseline. Currently we handle by extending baseline windows; a formal adjustment methodology should land in v0.2.

## Version log

- **v0.1** — 2026-07-17 — First version. Establishes shared principles + per-metric methodology for the four v0.4 outcomes. Written to close the measurement-methodology gap in [`01-founder-liberation-business-model.md`](../01-founder-liberation-business-model.md) §4.
- **v0.2** planned after first paid Implementation — add cohort adjustment, seasonal adjustment, and cross-client benchmark methodology once we have enough data to compute them.
- **v1.0** after 3+ Implementations in the same segment — replace external empirical anchors with Tack-internal benchmark ranges, add formal confidence-interval methodology.
