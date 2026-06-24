# Founder Liberation — Business Model v0.2

**Status:** Draft for Mon 6/22 working session
**Owner:** Both founders
**Purpose:** First-pass alignment on what we sell, to whom, for how much, and how it actually gets delivered given the split between AI-as-workhorse and human-as-interface

**Changes from v0.1:** Sharpened the division of labor in §0 and §7. Humans do not perform substantive review of Claude's analysis (they would have to be domain experts to do so usefully). Humans run the client interface, sanity-check the output, and close. Added §11 — Quality control protocol — to cover the gap that creates.

---

## 0. Operating principle (read this first)

The model is shaped by a sharp division of labor between the AI workhorse and the human founders. Pretending humans review Claude's analysis substantively leads to overpromising; pretending Claude can run the client relationship leads to under-delivering. We do neither.

### What Claude owns (substantive)

- Designing the discovery questions, the audit framework, and the data taxonomy
- Reading all client data (emails, tickets, exports, transcripts) and producing structured analyses
- Writing every deliverable: audit decks, proposals, SOWs, reports, training docs
- Architecting every implementation: tool selection, workflow design, integration map
- Building every implementation: workflows in Make/Zapier/n8n/Claude Code, dashboards in React, prompts, code
- Generating speaker notes, objection-handling cards, and pre-call briefs for every external conversation
- Drafting outbound sequences personalized per prospect

### What humans own (interface)

- Running every external conversation: discovery calls, walkthroughs, handoff calls, monthly check-ins
- Trust and relationship — the thing that gets a client to share their messy real data instead of a sanitized version
- Real-time judgment when a client says something the brief didn't anticipate
- Closing the sale — conviction cannot be faked or outsourced
- Eyes and ears the AI doesn't have: tone, hesitation, what they didn't say
- Sanity-checking deliverables before they ship (see §11) — not substantive review, but trace + match + smell-test

### What Claude is genuinely weak at (and we don't sell around)

- Real-time customer interaction without a host platform around it
- Relationship-bearing roles
- Anything requiring a human signature, phone call, or physical presence
- Owning a long-running stateful client relationship without human orchestration

### Implication for service shape

Every service we sell is one of:

1. A **one-shot deliverable** (Audit)
2. A **system the client runs without us in the loop** (Implementation)
3. A **recurring cycle on a fixed cadence** (Managed)

We do **not** sell "always-on AI agents." We sell systems and cycles, presented and closed by humans.

---

## 1. Ideal Client Profile

### Tier 1 (highest fit, fastest close)

- Shopify store, $500K–$5M annual revenue
- 1–5 employees
- Founder is personally handling customer service, order issues, or weekly reporting
- Stack already includes Shopify + Gmail/Outlook + (optionally) one help desk
- US-based, founder values their time over per-hour cost

### Tier 2 (good fit, slower close)

- Solo or 2-person professional service businesses with recurring clients
  - Veterinary clinics
  - Dental practices
  - Boutique law firms
  - Accounting practices
  - Boutique consultancies
- Founder is doing scheduling, intake, follow-up, billing reminders, or reporting personally
- Stack: Google Workspace + practice management software + (optionally) phone system

### Disqualifiers (we say no to these)

- Pre-revenue
- Enterprise (procurement cycles kill our economics)
- No existing digital workflow — we automate what exists, we don't digitize from paper
- Founder cannot make a buying decision in one or two calls
- Regulated workflows requiring per-output legal/medical sign-off (HIPAA touch, securities advice, etc.)

---

## 2. Positioning statement

> **Dream Helpers helps founders of small ecommerce and service businesses reclaim 10–20 hours per month by installing AI-powered operating systems on top of their existing tools — without making them switch software or learn anything new.**

Earnings phrases the founder actually feels:
- *reclaim hours* (the outcome)
- *on top of your existing tools* (zero switching cost)
- *no learning required* (they're not signing up for an AI project, they're getting hours back)

---

## 3. Service offerings

### 3.1 Founder Liberation Audit — **$750 flat**

**Promise:** in 5 business days, deliver a documented map of where the founder's time is going, what can be automated, and what the ROI would be on each opportunity, ranked.

**Deliverables (one PDF + one shared sheet):**
- Time-use audit — categorized hours/month per workflow
- Bottleneck map — which 3–5 workflows leak the most time
- AI Opportunity Matrix — each opportunity scored on feasibility × hours saved × revenue protected
- Recommended implementation sequence
- ROI estimate per recommendation

**Delivery cadence:**

| Day | Owner | Action |
|---|---|---|
| 0 | Human | 30-min discovery call |
| 1 | Client | Uploads 30 days of email, ticket, calendar, tool exports to a shared folder |
| 2–4 | Claude | Processes data, generates draft sections |
| 4 | Human | Reviews, revises, signs |
| 5 | Human | 45-min walkthrough call + implementation proposal handed over |

**Why $750:** below the $1K credit-card friction line, above hobby pricing. Frames us as professional but not enterprise. Easy yes for a founder feeling the pain.

**Margin:** at 4–6 hours of human time per audit, gross margin > 80% even at premium founder hourly rates.

---

### 3.2 Founder Liberation Implementation — **$2,500–$6,000 fixed-scope**

**Promise:** in 3–5 weeks, deploy 2–4 automations from the audit's top opportunities, running on the client's existing tools without us in the loop.

**Typical scopes:**

| Scope | Anchored at | What it includes |
|---|---|---|
| Single workflow (e.g. email triage) | $2,500 | One classifier + one routing flow + one dashboard tile |
| Customer service triage + draft replies | $4,000 | Classifier + KB + draft generator wired into Gorgias/Help Scout/Gmail |
| Reporting + monitoring stack | $4,500 | Weekly Shopify performance, customer cohort, support metrics dashboards |
| Multi-workflow build | $6,000 | 3–4 small automations + one dashboard + one knowledge base |

**Delivery cadence:**

| Week | Owner | Action |
|---|---|---|
| 1 | Both | Design + access setup |
| 2–3 | Claude (build) + human (review) | Workflows built in Make / Zapier / n8n / Claude Code; dashboards in Vite + React |
| 4 | Both | Client UAT, fixes, training video recorded |
| 5 | Human | Handoff call + 30-day check-in scheduled |

**Hard constraint:** every implementation must run on tools the client already pays for, or on free tiers of Zapier/Make/n8n. We do not introduce new monthly costs above $50/mo without explicit written approval. This is the difference between "we help you" and "we lock you in."

**Pricing ceiling:** we will not bid above $6K in a single SOW until we have 3 finished case studies. Bigger work gets phased.

---

### 3.3 Founder Liberation Managed — **$400 / $800 / $1,500 per month**

**Promise:** monthly cycle of monitoring, tuning, and one new automation per quarter.

| Tier | Price | What's in it |
|---|---|---|
| **Lite** | $400/mo | Monthly health report + 1 hr of tweaks. Almost-pure margin. Retention play. |
| **Standard** | $800/mo | Lite + 1 small new automation per quarter + Slack support |
| **Pro** | $1,500/mo | Standard + monthly strategy call + quarterly deep retro |

**Delivery cadence:**
- Claude generates the monthly health report (automation success rates, time saved, anomalies, new bottlenecks)
- Human sanity-checks per §11, presents to client
- Tweaks batched into one monthly maintenance window per client

**Why tiered:** Lite is the retention default. Standard pulls willingness-to-pay. Pro qualifies the rare client who actually wants ongoing strategy work.

---

## 4. Outcomes we sell (and measure)

For every engagement, we instrument and report these four:

1. **Founder hours reclaimed per month** — target 10–20
2. **Customer-facing response time** — target −50% on first response
3. **Founder context switches per day** — proxy via notification volume; target −40%
4. **Revenue protected** — orders saved from cancellation, leads not lost; target 2–5× project cost annually

These metrics appear in every audit, every monthly report, and every case study. They are the only outcome language we use externally.

---

## 5. Pricing hypotheses (what we're betting on)

| Hypothesis | Why it matters | Falsification trigger |
|---|---|---|
| $750 audit converts at ≥ 30% from discovery call | Volume play funds everything else | < 20% conversion after 10 calls |
| ≥ 40% of audit clients buy an Implementation within 30 days | Audit is the wedge, not the product | < 25% after 5 audits delivered |
| Average Implementation lands at $3,500 | Anchors unit economics | < $2,500 average after 5 sales |
| ≥ 50% of Implementation clients take Managed Lite | Recurring revenue is the moat | < 30% after 5 implementations |
| Full-cycle client (audit → impl → managed) takes < 25 human-hours over 90 days | Determines team capacity | > 40 hours after first case study |

We revisit this table every two weeks. The 4-week sprint won't generate enough data; the 90-day plan will.

---

## 6. Sales mechanics

- **Funnel top:** outbound LinkedIn + email to ICP. Target: 20 first-touches/week per founder = 40/week team. Conversion target: 5% to discovery call.
- **Discovery call (30 min, free):** human runs. Output is yes/no on Audit.
- **Audit close:** signed SOW + invoice within 48 hours of the call. Stripe link, not a payment terms negotiation.
- **Audit → Implementation transition:** the implementation proposal is baked into the audit walkthrough deck. No separate proposal cycle.
- **Implementation close:** scope agreed by end of walkthrough call. SOW within 24 hours.
- **Managed close:** offered at week 4 of implementation delivery as the natural next step.

**Things we don't do:** multi-stage proposal cycles, RFPs, procurement, "send me your pricing tier sheet" emails.

---

## 7. Delivery architecture — who does what

Read "Humans" in this table as **interface, sanity-check, and close** — not substantive review of analysis or code. Substantive QC is covered in §11.

| Phase | Claude (AI workhorse) | Humans (Grant + partner) |
|---|---|---|
| Outbound prospecting | Drafts sequences, personalizes per prospect from public sources | Sends, replies, books — relationship layer |
| Discovery call prep | Generates question list + pre-call brief from public sources | Walk through brief together; absorb context |
| Discovery call | — | Runs the call. Asks the questions. Reads the room. |
| Discovery debrief | — | Fills short debrief template (see §11) |
| Audit delivery | Reads all client data, classifies, drafts every section | Sanity-checks per §11; never substantively rewrites |
| Audit walkthrough prep | Generates deck + speaker notes + objection cards | 10-min walkthrough together so human can talk *through* it, not *from* it |
| Audit walkthrough | — | Runs the call. Closes the implementation when fit is right. |
| Implementation design | Drafts architecture doc, picks tools, scopes effort | Sanity-checks tool picks against §11 (especially: did the client say they hate this tool?) |
| Implementation build | Writes workflows, configures Make/Zapier/n8n/Claude Code, builds dashboards, writes tests | Spot-checks per §11; runs UAT with client |
| Client check-ins during build | Generates one-pager pre-call: status, what to commit to, what to defer | Runs the call. "Let me confirm and circle back" is always a valid answer. |
| Training material | Generates walkthrough scripts + written docs | Records the video; runs handoff call |
| Managed monthly | Pulls metrics, drafts health report, surfaces anomalies | Sanity-checks per §11; presents to client; runs strategy calls |

**Hard rule:** Claude never sends anything directly to a client. A human runs the §11 sanity check on every external artifact before it leaves. Sanity check is *not* substantive review — humans aren't pretending to redline analysis they aren't expert in. They're checking traceability, consistency with what the client said, and smell.

---

## 8. What we will NOT sell (guardrails)

- Custom-built SaaS (Month-6+ question, not Month-1 product)
- Always-on AI chatbots facing customers without a moderation layer
- Anything touching financial transactions, medical advice, or legal advice without explicit human sign-off per output
- Hourly billing — kills the margin model
- "AI strategy" consulting decoupled from implementation (no shelfware reports)
- Engagements > $6K in a single SOW until we have 3 case studies
- Clients with no existing digital workflow

---

## 9. 90-day success criteria

| Milestone | By | Status check |
|---|---|---|
| Site live, pricing public, 1 case study draft, outbound running, 3+ discovery calls booked | End Week 4 (current sprint) | — |
| 3 audits delivered, 1 implementation in flight, $5K booked revenue | Day 60 | — |
| 5 audits delivered, 2 implementations delivered, 2 Managed Lite clients, $15K booked revenue, 2 finished case studies | Day 90 | — |

---

## 10. Open decisions for Mon 6/22 working session

These need a human call, not an AI draft:

1. **Brand voice** — earnest operator vs cheeky disruptor? Drives website copy, sequence tone, deck language. Locked at end of Week 1.
2. **Legal entity** — LLC vs sole proprietorship? Liability question matters most for the recommendations we put in audits.
3. **E&O insurance** — worth $400/yr now or wait until first paid contract?
4. **Visual identity** — adopt the existing dreamhelpers.org design system as-is, or evolve it for the Founder Liberation product line?
5. **Founder time split** — is one of you primary on sales (and the other primary on delivery), or do you both touch both? This decides who runs discovery calls and who runs handoff.
6. **Pilot client posture** — is the pilot a paying $0 reference client, a discounted $375 client, or a full-price $750 client whose case study we get rights to? This shapes the audit pitch language for client #2 onward.
7. **Disclosure language** — do we tell clients in the SOW that deliverables are AI-generated and human-presented, or do we treat it as "we use AI tools" boilerplate? Real liability question. See §11.

---

## 11. Quality control protocol

Because humans are not performing substantive review of Claude's analysis, the gap that opens — "Claude is confidently wrong and nobody catches it before the client sees it" — has to be closed with a fixed pre-flight checklist applied to every external artifact. The checklist is not domain review. It is structural and behavioral.

### The pre-flight checklist (every external artifact)

Run before any deliverable, deck, proposal, report, or email goes to the client.

1. **Traceable.** Every number, every claim about the client's operation, every "you currently…" statement cites the source row, ticket, message, or export field. If Claude can't show you the source, the line gets cut. *Time: ~5 min for a typical audit.*

2. **Consistent with what they told us.** Cross-check every recommendation against the discovery debrief notes. If the client said "we will not switch off Gmail" and the recommendation involves moving off Gmail, the recommendation either changes or gets explicit "we know you said X — here's why we still raise this" framing. *Time: ~5 min.*

3. **Smell test.** The human reads the deliverable as a presenter would. Anywhere they would not be willing to defend a line in front of the client — flag it. Common smells: numbers that feel too round, recommendations that name a tool the client never mentioned, ROI estimates that seem implausibly high. *Time: ~10 min.*

Total: ~20 minutes per deliverable. Codified, not vibes.

### The brief / debrief loop

Every external conversation is wrapped by Claude on both sides:

- **Before:** Claude generates a one-page pre-call brief. Human and Claude do a 10-min walkthrough so the human can speak *through* the brief, not *from* it.
- **After:** Human fills a short debrief template — what was said, what surprised, what got pushed back on, what the client agreed to. This is how Claude sees what actually happened in the room.

The debrief template is itself a deliverable Claude maintains and refines as we run more calls.

### Escalation pattern

When something exceeds the checklist:

- **Human is uncertain about a deliverable claim:** flag in the working session. Claude reproduces the trace from source. If trace breaks, claim is dropped.
- **Client pushes back live in a call on something not in the brief:** human says "good question, let me confirm and come back to you tomorrow." Never improvise a commitment. Never argue with the client live for the sake of defending a Claude output.
- **Client outcome misses the targeted metric** (e.g. promised 10–20 hrs/month, delivered 4): trigger a retro. Was the original estimate wrong (Claude's fault, fix the estimating method)? Did the client not adopt the system (interface failure, fix the handoff)? Did the system not work as designed (build failure, fix the system)?

### Disclosure — what we tell clients

This is decision #7 in §10 and needs the founders to settle it. Recommendation: standard SOW boilerplate says "Dream Helpers uses AI tooling extensively in analysis, design, and build. All deliverables are reviewed and presented by Dream Helpers staff." That's truthful, doesn't oversell human involvement, doesn't undersell our actual model, and matches the disclosure language increasingly normal in the consulting industry.

---

*Document ends. Update as the model evolves; preserve historical versions in `deliverables/archive/`.*
