# Broader Market Scan Findings — v0.3 Validation

**Status:** Week 1 — synthesis of broader market scan
**Owner:** Both founders
**Purpose:** Confirm or overturn v0.3's vet+Shopify recommendation by ranking those segments against five new candidate categories. Drives the v0.3 → v0.4 update.

---

## TL;DR

The cross-category scan **confirms vet clinics as the primary beachhead** (the only candidate scoring ≥8 on every dimension) and surfaces one structurally similar new candidate worth slotting into Dream Helpers' parallel-test rotation: **independent insurance agencies**.

v0.4 adds insurance agencies as a "ready-to-swap" parallel test that activates if Shopify produces zero qualified discovery calls by Day 45, and bakes in a hard Day-90 kill criterion for Shopify.

---

## Methodology

A 6-agent workflow:

- **Phase 1 — Category profiles (5 parallel agents):** Each agent profiled 3–5 sub-verticals in their assigned category on standard dimensions (market size, WTP, distribution, buying triggers, blockers, qualifiers, AI-readiness, regulatory burden, acquisition difficulty). Categories: home services / trades, personal care / wellness, hospitality / food, real estate / property, other adjacent professional services.
- **Phase 2 — Synthesis (1 agent):** Ranked all candidates including vet and Shopify on six weighted dimensions, recommended top 3–5 with role assignment (primary beachhead, parallel test, wave 2, defer/watch), flagged open questions.

**Two categories failed mid-stream** with API stream-idle timeouts: home services and personal care. The synthesis extrapolated their top picks from the v0.3 scoring framework rather than re-run. See "Data gaps" below.

**Weighting used by the synthesis:** WTP 20% / Distribution 20% / Pain 15% / Regulatory 15% / Competitive openness 15% / AI readiness 15%.

---

## Unified ranking

| Rank | Segment | Pain | WTP | Distr. | Reg. | Comp.open | AI | Overall | Verdict |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | **Independent vet clinics** (2–7 staff, cloud PIMS) | 9 | 9 | 10 | 10 | 8 | 7 | **87** | Primary beachhead (confirmed) |
| 2 | **Independent insurance agencies** ($1–10M, AMS-resident) | 8 | 8 | 8 | 8 | 8 | 7 | **78** | Ready-to-swap parallel test (new) |
| 3 | Residential HVAC / plumbing / electrical $2–10M | 9 | 8 | 7 | 9 | 5 | 7 | 73 | Wave 2 |
| 4 | Shopify $1–3M founder-run brands | 8 | 6 | 6 | 10 | 3 | 8 | 64 | Parallel test (hard Day 90 kill criterion) |
| 5 | Vacation-rental property managers (20–200 units) | 9 | 6 | 6 | 9 | 6 | 7 | 62 | Wave 2 watch |
| 6 | Multi-location med spas / aesthetic clinics | 8 | 9 | 6 | 4 | 5 | 6 | 58 | Defer (HIPAA chokepoint, like dental) |
| 7 | Boutique hotels (20–80 rooms) | 7 | 5 | 5 | 8 | 6 | 5 | 50 | Defer |
| 8 | RIAs <$500M AUM | 6 | 8 | 6 | 4 | 5 | 5 | 48 | Defer/watch (SEC compliance) |
| 9 | Residential RE teams / boutique brokerages | 7 | 4 | 5 | 6 | 3 | 6 | 44 | Drop |
| 10 | Residential cleaning / lawn-care multi-loc | 7 | 3 | 5 | 9 | 5 | 5 | 42 | Drop |

**Key observation:** vet is the only candidate scoring ≥8 on every dimension. No new segment dislodged it. The next-best candidate (insurance) scores 8 on five dimensions but 7 on AI readiness — close, but not better.

---

## Why insurance agencies emerged as the strongest new candidate

The synthesis flagged insurance as a structurally close analog to vet:

| Dimension | Vet | Insurance | Note |
|---|---|---|---|
| Buying trigger | PE roll-up — $10K EBITDA = $50–70K exit value | Aggregator roll-up — same EBITDA-to-multiple math | Identical pattern |
| Distribution | VMG + IVPA (one association) | Big I + Agency Nation + IIABA local chapters | Same "one association unlock" |
| Buyer | Practice manager (non-clinical operator) | Agency principal or ops manager | Both fear job loss amid churn |
| Regulatory | None (non-HIPAA) | State DOI licensing (workable) | Insurance slightly heavier but not chokepoint |
| Software stack | ezyVet / Shepherd ($100–550/mo) | Applied Epic / AMS360 / EZLynx ($500–2K/mo per app) | Proven WTP for software |
| Incumbent AI threat | None on PIMS | None on AMS yet | Both wedges still open |

**Why we don't promote it to primary beachhead:**
- Vet's distribution clarity (single association unlock through VMG+IVPA) and regulatory tractability (no licensing concern) both score 10. Insurance scores 8 on each. The gap is small but consistent.
- The two segments are non-overlapping in client base, so running both serially (Shopify first, insurance ready-to-swap) loses nothing. Promoting insurance to primary would dilute the vet focus that v0.3 deliberately created.

**Why we slot it in as ready-to-swap rather than 3-way parallel test:**
- Two founders at 15 hrs/week each = 30 team hrs. Running 3 prospecting motions in parallel will hit the capacity wall the v0.3 financial review already flagged.
- The Shopify thesis (cross-system orchestration above Sidekick) is cheap to test via Loom teardowns. Worth 6–12 weeks of test data before swapping.
- If Shopify shows zero signal by Day 45, swap is cleaner than running both.

---

## Why HVAC/plumbing didn't make the cut despite scoring 73

The synthesis flagged this as the candidate with the **worst competitive density** of any segment evaluated:

- **ServiceTitan Pro AI** ships native AI dispatch, voice agents, and customer comms inside the dominant FSM platform
- **Avoca / Hatch / Goodcall** + a wall of YC-funded missed-call-to-text and CSR-bot startups already own the obvious automation surface
- Buyer compares everything to ServiceTitan modules priced in the noise

The pain is real (dispatch chaos, CSR turnover, missed-call revenue leak), the buying trigger is real (PE roll-up is the hottest in any vertical right now), and WTP is excellent. But the competitive surface is closed. Wave 2 only — and only if a cross-system orchestration wedge above ServiceTitan emerges.

---

## Why med spas defer despite 9/10 WTP

Highest WTP in the entire ranking — these clinics print cash and PE is rolling them up at high multiples. But the segment hits the dental problem v0.3 already deferred:

- HIPAA applies (medical procedures, PHI)
- State medical-board rules govern delegation and require sign-off on AI-touched workflows
- Vertical SaaS thicket (Boulevard, Aesthetic Record, PatientNow, Symplast) already owns scheduling and EHR

Same BAA-ready vendor stack solves dental + med spa simultaneously. If we build it for one, the other unlocks at minimal incremental cost. Bundle the eventual go-decision with the dental Wave 2 readiness review.

---

## Categories the scan effectively dismissed

- **Residential cleaning / lawn-care multi-location** (42/100): per-operator economics don't support $1.5K/mo retainers — hourly-labor businesses with tiny software budgets. Better candidates exist in the same home-services category.
- **Boutique hotels** (50/100): real pain, weak WTP. 10–15% margins and slow procurement cycles. No urgent buying trigger comparable to vet's PE exit math.
- **Residential RE teams / boutique brokerages** (44/100): NAR-settlement commission compression has crushed broker margins, buyer is rarely the operator (each agent runs their own stack), brutal competitive density.
- **RIAs <$500M AUM** (48/100): WTP excellent but SEC Reg S-P, books-and-records rules, and new SEC AI/predictive-analytics proposals make managed AI services a compliance dance similar to law. Worth watching, not now.

---

## Data gaps

Two of five category agents timed out mid-stream:

- **Home services / trades** — synthesis extrapolated HVAC/plumbing/electrical as the strongest plausible candidate (scored 73). Reasoning was sound but not parallel-verified.
- **Personal care / wellness** — synthesis extrapolated multi-location med spas as the strongest plausible candidate (scored 58). HIPAA-chokepoint logic is sound but not parallel-verified.

**Recommendation: don't re-run.** The strongest plausible candidates in either category (73 and 58 respectively) score below insurance (78) and well below vet (87). Re-running would burn another ~150K tokens to confirm a clear answer.

---

## Open questions flagged by the synthesis

1. **Insurance binding test.** Do agency principals translate ops improvement into EBITDA-to-exit math unprompted, the way vet owners do? Three founder calls test this. Not yet validated.
2. **Shopify Day 90 kill criterion definition.** v0.3 said signal will emerge but didn't name a number. v0.4 fixes this: ≥2 signed Implementations attributable to the post-Sidekick orchestration narrative.
3. **Capacity question.** If insurance replaces Shopify as the parallel test in Week 6, does that displace any vet capacity, or does it run as pure additional prospecting load? Economics only work if it's the latter.
4. **Med spa + dental bundle.** Same BAA-ready vendor stack unlocks both. Should Wave 2 prep work explicitly target both simultaneously?
5. **HVAC competitive density assumption.** Synthesis assumes ServiceTitan Pro AI + Avoca + Hatch + voice-AI startups own the obvious surface. Last 60-day scan recommended before committing Wave 2 bandwidth.
6. **Weighting confirmation.** The 20/20/15/15/15/15 weighting is the synthesis's, not the founders'. Different weighting moves the ranking — particularly if WTP is weighted higher (med spas climb sharply).

---

## What changed in v0.4

See [01-founder-liberation-business-model.md](01-founder-liberation-business-model.md) — changelog at top. Summary:

- §1 ICP: insurance agencies added as ready-to-swap parallel test
- §1: Shopify hard kill criterion at Day 90 (≥2 signed Implementations or drop)
- §6: insurance channels added (Agency Nation, Big I, IIABA, Insurance Journal)
- §9: Day 45 swap test added; Day 90 Shopify kill criterion added as explicit milestone
- §10: insurance binding test added to open decisions
- All other v0.3 content preserved
