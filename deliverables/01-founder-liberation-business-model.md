# Tack — Business Model v0.4

**Status:** Draft for Mon 6/22 working session
**Owner:** Both founders
**Legal & branding:** "Tack" is the trading name (DBA). The legal entity is **Dreamhelpers LLC** (Washington). Contracts, SOWs, insurance, and bank accounts all sign as "Dreamhelpers LLC dba Tack." All public-facing materials (website, email, social, decks) use "Tack." Renamed from "Dream Helpers" on 2026-06-27 after WHOIS + trademark + reference-brand analysis; see [`deliverables/09-brand-identity-v0.1.md`](09-brand-identity-v0.1.md) for the brand-identity foundation.
**Purpose:** Define what Tack sells, to whom, for how much, and how it actually gets delivered given (a) the split between AI-as-workhorse and human-as-interface and (b) the 2026 reality that bundled incumbent AI (Shopify Sidekick, Claude for Small Business, HubSpot Breeze) is rapidly absorbing the bottom of the market.

## Glossary (read once, then skim)

**Business and money terms**
- **ICP** (Ideal Client Profile) — the specific kind of business we are best positioned to sell to.
- **Beachhead** — the first market segment we attack with full focus, narrow enough to actually win and valuable enough to use as a base for expansion. Originates from amphibious military landings (e.g., D-Day at Normandy, 1944), where a landing force secured a strip of beach, held it under counter-attack, then pushed inland. Geoffrey Moore's *Crossing the Chasm* (1991) popularized the term in startup strategy. In v0.4, independent vet clinics are our beachhead.
- **ARR** (Annual Recurring Revenue) — total revenue a business makes per year from subscriptions or recurring contracts.
- **EBITDA** (Earnings Before Interest, Taxes, Depreciation, and Amortization) — a standard measure of operating profit. PE buyers value a business as a multiple of EBITDA, so every extra $1 of EBITDA is worth ~$5–$10 at sale.
- **PE** (Private Equity) — investment firms that buy whole businesses, improve them, and sell them at a multiple of EBITDA.
- **CAC** (Customer Acquisition Cost) — how much it costs us to win one new client.
- **ROI** (Return on Investment) — what a client gets back in dollar value compared to what they spent with us.
- **GM** (Gross Margin) — revenue minus the direct cost of delivering it, as a percentage. A 50% GM means we keep 50¢ of every dollar before overhead.
- **ACV** (Annual Contract Value) — the full year's revenue from a deal, even if billed monthly.
- **DTC** (Direct-to-Consumer) — brands that sell straight to customers online instead of through retailers.
- **TAM / SAM** — Total Addressable Market / Serviceable Addressable Market. Everyone who could theoretically buy vs. who we can actually reach.

**Contracts and legal**
- **SOW** (Statement of Work) — the contract that defines exactly what we deliver, when, and for how much.
- **MSA** (Master Services Agreement) — the umbrella contract that governs an entire ongoing client relationship.
- **E&O insurance** (Errors & Omissions) — professional liability insurance that covers mistakes in our deliverables.
- **LLC** (Limited Liability Company) — a common small-business legal structure that separates personal and business liability.
- **Sole prop** (Sole Proprietorship) — the simplest business structure; no legal separation between owner and business.
- **BAA** (Business Associate Agreement) — a contract required by HIPAA whenever a vendor touches patient health data.
- **HIPAA** (Health Insurance Portability and Accountability Act) — US law that protects patient health data.
- **SOC 2 Type 2** — a rigorous security and data-handling audit standard required by many enterprise and healthcare clients.
- **ABA Formal Opinion 512** — a 2024 American Bar Association ethics ruling that governs how lawyers can use AI on client work.

**AI and software jargon**
- **LLM** (Large Language Model) — the kind of AI that Claude, ChatGPT, and Gemini are built on.
- **CFSB** (Claude for Small Business) — Anthropic's $20/mo AI product that connects to QuickBooks, HubSpot, and Google/Microsoft Workspace.
- **Anthropic** — the AI company that makes Claude (also funding Claude Corps).
- **Claude Code** — Anthropic's command-line tool for building software with AI; what we use to build for clients.
- **Make AI Agents** — a low-code automation platform with built-in AI nodes. Direct competitor to what we'd otherwise build in Claude Code.
- **Shopify Sidekick** — Shopify's built-in AI assistant that can generate store workflows from plain English.
- **HubSpot Breeze** — HubSpot's AI customer agent priced at $0.50 per resolved conversation.
- **Intuit Assist** — Intuit's AI assistant bundled free inside QuickBooks Online.
- **QC** (Quality Control) — our internal review process before any deliverable goes to a client.
- **UAT** (User Acceptance Testing) — the phase where the client tests a built system and signs off that it works.
- **KB** (Knowledge Base) — a searchable collection of documents the AI or humans use to answer questions.
- **API** (Application Programming Interface) — how software systems talk to each other.
- **VPS** (Virtual Private Server) — a small rented cloud computer ($5–$10/mo) we can use to host workflows.

**Industries we mention**
- **Klaviyo** — email-marketing software used by most Shopify brands.
- **Gorgias / Help Scout / Richpanel / Intercom / Zendesk** — customer-support help-desk platforms.
- **Zapier / Make / n8n** — no-code automation platforms that connect apps together.
- **Stripe / GoCardless** — online payment processors.
- **VA** (Virtual Assistant) — usually overseas part-time admin help (often Filipino or LATAM), $800–$1,500/mo for full-time.

**Veterinary terms**
- **AVMA** (American Veterinary Medical Association) — the largest US vet professional body.
- **VMG** (Veterinary Management Groups) — peer-group networks where independent vet practice owners share vendors and benchmarks. 1,600+ practices across 50+ groups.
- **IVPA** (Independent Veterinary Practitioners Association) — a separate national association for independent vet owners.
- **VHMA** (Veterinary Hospital Managers Association) — the professional body for vet practice managers (our buyer).
- **PIMS** (Practice Information Management System) — the main software a vet clinic runs daily operations on (records, billing, scheduling).
- **VSO** (Veterinary Service Organization) — a PE-backed corporate consolidator that buys multiple vet clinics.
- **ezyVet / Shepherd / AVImark Cloud** — modern cloud-based vet PIMS products.

**Dental, accounting, law terms**
- **HHS** (US Department of Health and Human Services) — federal agency that enforces HIPAA.
- **OCR** (HHS Office for Civil Rights) — the HIPAA enforcement arm.
- **CDA** (California Dental Association).
- **DSO** (Dental Service Organization) — corporate chain that owns multiple dental practices.
- **PMS** (Practice Management System) — same idea as PIMS but for dentists, lawyers, etc.
- **AGD** (Academy of General Dentistry).
- **AICPA** (American Institute of Certified Public Accountants).
- **CPA** (Certified Public Accountant).
- **ABA** (American Bar Association) — main US lawyer professional body.

**Insurance terms**
- **AMS** (Agency Management System) — the main software an insurance agency runs daily operations on (Applied Epic, AMS360, EZLynx, HawkSoft, NowCerts, Veruna).
- **P&C** (Property & Casualty) — the most common insurance category (auto, home, business).
- **MGA** (Managing General Agent) — an insurance middleman with authority to underwrite on a carrier's behalf.
- **Big I / IIABA** (Independent Insurance Agents & Brokers of America) — the main industry association. Big I is the brand; IIABA is the legal name.
- **Agency Nation** — a Slack community for independent insurance agency owners.
- **DOI** (Department of Insurance) — state-level insurance regulator.
- **ASCEND Insurance Conference** — a major US insurance industry event (May 2026 was in Vegas).

**Marketing and sales terms**
- **SEO** (Search Engine Optimization) — getting content to rank on Google.
- **RFP** (Request for Proposal) — a formal procurement document where buyers ask multiple vendors to bid.
- **CRM** (Customer Relationship Management) — software for tracking leads and customer history (HubSpot, Salesforce, Airtable for our case).

**Things that are basically brand names**
- **Bench Accounting** — a cloud bookkeeping service that shut down in December 2024 and stranded ~11,000 DTC brands.
- **eComFuel** — a $199/mo gated community of 7- and 8-figure Shopify founders.
- **KariOps / Aperture OS / Operational Freedom / THAILS** — direct competitors named in §13.
- **Claude Corps** — Anthropic's $150M fellowship placing 1,000 AI-implementation operators into nonprofits starting Oct 2026.

## Changelog from v0.3

v0.4 is an additive update after a broader 5-category environmental scan. Findings in [06-broader-market-scan-findings.md](06-broader-market-scan-findings.md). The scan confirmed vet clinics as the primary beachhead (only candidate scoring ≥8 on every dimension) and surfaced one structurally similar new candidate worth slotting in as a ready-to-swap parallel test.

- **§1 ICP:** Independent insurance agencies ($1M–$10M revenue, owner-operator, AMS-resident) added as a **ready-to-swap parallel test**. Same PE/aggregator roll-up dynamics as vet, same EBITDA-to-exit buying trigger, similar concentrated association distribution (Big I, Agency Nation, IIABA). Insurance scored 78/100 in the cross-category ranking vs. Shopify's 64/100.
- **§1 / §9 Shopify hard kill criterion:** by **Day 90**, Shopify $1M–$3M must show ≥2 signed Implementations attributable to the post-Sidekick orchestration thesis. If not, drop and reallocate to insurance agencies.
- **§9 Day 45 swap test:** if Shopify hasn't produced a single qualified discovery call by Day 45, accelerate insurance into the parallel-test slot at that point rather than waiting to Day 90.
- **§6 Sales mechanics:** insurance agency channels added (Agency Nation, Big I local chapters, IIABA, Insurance Journal).
- **§10 Open decisions:** insurance test binding-question added — do agency principals translate ops improvement into EBITDA-to-exit math unprompted, the way vet owners do?
- **§13 Competitor reality:** no change.
- **All other v0.3 content preserved** — vet beachhead, pricing structure, QC protocol, legal posture, window-state indicators are unchanged.

## Changelog from v0.2

v0.3 is a substantive rewrite after a 9-agent adversarial validation pass. Every change below is sourced to the findings in [05-validation-workflow-findings.md](05-validation-workflow-findings.md).

- **§1 ICP:** Independent veterinary clinics are now the primary beachhead. Shopify $1M–$3M is a parallel test, not the primary segment. Tier 2 law dropped entirely. Dental and CPA deferred to wave 2.
- **§2 Positioning:** "Founder Liberation" is retired as external category language (SEO is owned by DEI/identity coaches; not a category buyers search for). Stays as internal codename. External: "Practice Hours Audit" / "Founder Hours Audit" — buyer-vernacular and search-aligned.
- **§3 Pricing:** Implementation floor raised to $4,500 (was $2,500 — below credible market floor). Managed Lite raised to $750 with hard 1.5-hr cap (was $400 — unsustainable at typical retainer creep). Audit held at $750 but **explicitly classified as customer acquisition cost** with full credit toward Implementation.
- **§5 Pricing hypotheses:** Conversion assumptions halved or more. 30% discovery→audit reduced to 15% (cold, no proof). 40% audit→implementation reduced to 25%. "$15K booked by Day 90" is internally inconsistent — replaced with **$8K cash collected by Day 90**.
- **§7 Delivery:** Capacity model added. Max concurrent Implementations per founder explicitly capped.
- **§8 What we won't sell:** Added — anything Shopify Sidekick or Claude for Small Business natively delivers; any work for law firms; Implementation work that could be done in <8 hours in Make AI Agents.
- **§9 90-day target:** Cut to $8K cash collected, 3 audits, 1 Implementation, 1 Managed Lite. Was $15K — arithmetically inconsistent with stated unit milestones.
- **§11 QC protocol:** Split into **Tier A (smell, ~20 min)** for narrative and **Tier B (independent re-derivation, 60–90 min, mandatory)** for any numerical claim. Driven by 2025–2026 LLM hallucination benchmarks on finance-domain numbers (15–52% error rates).
- **§11 Legal:** SOW disclosure language rewritten to be defensible. Tech E&O insurance required before first paid Implementation. Per-engagement liability cap (= fees paid) mandatory in every SOW.
- **§12 NEW — Window-state indicators:** Three dashboard signals that tell us when the Shopify wedge is closing fast enough to pivot.
- **§13 NEW — Competitor reality:** Named direct competitors v0.2 wrongly said didn't exist.

---

## 0. Operating principle (read this first)

The model is shaped by two structural facts:

1. **Sharp division of labor.** Claude (AI workhorse) produces. Humans (founders) interface and close. Substantive review of analysis is not the human's job — see §11 for how we close the QC gap that creates.
2. **Subsidized incumbent AI is shipping our pitch.** Shopify Sidekick (free on Basic+, generates 12K custom apps/quarter), Claude for Small Business ($20/mo with QuickBooks/HubSpot/Workspace connectors), HubSpot Breeze ($0.50/resolution), Intuit Assist (free in QBO) are all variants of "install an AI operating system on top of existing tools." We do not pretend they don't exist. We position **on top of them**, doing the cross-system integration and configuration they cannot deliver.

### What Claude owns (substantive)

- Designing the discovery questions, the audit framework, the data taxonomy
- Reading all client data (emails, tickets, exports, transcripts) and producing structured analyses
- Writing every deliverable: audit decks, proposals, SOWs, reports, training docs
- Architecting every implementation: tool selection, workflow design, integration map
- Building every implementation: workflows in Make/Zapier/n8n/Claude Code, dashboards in React, prompts, code
- Generating speaker notes, objection-handling cards, and pre-call briefs for every external conversation
- Drafting outbound sequences personalized per prospect

### What humans own (interface)

- Running every external conversation: discovery, walkthrough, handoff, monthly check-in
- Trust and relationship — the thing that gets the client to share messy real data
- Real-time judgment when a client says something the brief didn't anticipate
- Closing the sale — conviction cannot be faked or outsourced
- Eyes and ears the AI doesn't have: tone, hesitation, what they didn't say
- Sanity-checking deliverables per §11 (split into Tier A smell and Tier B independent re-derivation)

### What Claude is genuinely weak at

- Real-time customer interaction without a host platform
- Relationship-bearing roles
- Multi-day SOW negotiation with partial, asynchronous updates (assigns to humans, not Claude)
- Anything requiring a signature, phone call, or physical presence
- Reliably accurate numerical claims (hallucination rates 15–52% on finance-domain benchmarks — drives §11 Tier B QC)

### Implication for service shape

Every service is one of: a one-shot deliverable (Audit), a system the client runs without us (Implementation), or a recurring fixed-cadence cycle (Managed). We don't sell "always-on AI agents." We sell systems and cycles, presented and closed by humans.

---

## 1. Ideal Client Profile

### Beachhead — Independent veterinary clinics (primary)

**Why this is the beachhead.** Discovery validated four structural advantages:

1. **Not HIPAA-covered.** Veterinary records are not protected health information. Our "install AI on top of your existing tools" pitch works without a BAA dance.
2. **Acute documented pain.** >60% of vets report high burnout (AVMA/Merck 2024). Practice managers fight staff churn weekly.
3. **Urgent buying trigger.** PE consolidation is active — every $10K of EBITDA improvement = $50–70K of enterprise value at exit. Owners now quote these multiples unprompted.
4. **Concentrated distribution.** VMG (1,600+ independent practices in 50+ peer groups) + IVPA give us ONE association layer to reach the entire ICP. The buyer (practice manager via VHMA) is reachable through one warm intro.

**Sweet spot:**
- Independent companion-animal clinic, 2–7 staff, owner-operator
- Owner age 45–62, planning sale to PE/VSO in 3–5 years
- Already uses modern cloud PIMS (ezyVet, Shepherd, AVImark Cloud)
- Practice manager exists as a distinct role
- Located in a market with active PE consolidators nearby

**Real buyer:** the practice manager / office manager. Not the doctor. All copy, decks, and pricing target this person.

**Acquisition difficulty:** medium. Reachable through VMG/IVPA + Veterinary Practice Owners Advice Line (open FB group).

### Parallel test — Shopify $1M–$3M founder-run brands (secondary)

**Why narrowed from v0.2's $500K–$5M:** below $1M founders are in DIY mode and won't buy; above $3M they compare to fractional COOs at $5K/mo. The middle is the actual ICP.

**Why "test" not "beachhead":** Shopify Sidekick + Sidekick custom apps shipped Winter '26 and now natively absorb ~90% of in-store automation. Our wedge here is shrinking quarterly. We run this segment to learn whether cross-system orchestration ABOVE Sidekick is a defensible sale.

**Sweet spot:**
- Shopify (standard, not Plus), $1M–$3M ARR, 1–5 employees
- Founder is the buyer AND the operator
- Already pays for Klaviyo + Gorgias/Help Scout + a review app + an inventory tool
- Has a VA at $800–$1,500/mo full-time (we augment, not replace)
- Recently went through a system change (replatform, ESP switch, 3PL change)

**Acquisition difficulty:** hard. Test channel is eComFuel forum + Live event ($199/mo + ticket). First-touch: weekly public Loom teardowns of $1–3M stores, tag the founder.

**Hard kill criterion (new in v0.4):** by **Day 90**, this segment must produce ≥2 signed Implementations attributable to the post-Sidekick orchestration thesis. If not, drop and reallocate the slot to insurance agencies (see below).

### Ready-to-swap parallel test — Independent insurance agencies (new in v0.4)

**Why we added this.** The broader market scan ranked this segment second overall (78/100) on the same scoring dimensions used to validate vet. It mirrors vet's structural advantages closely enough that learnings transfer rather than overlap, but the segments are non-overlapping in client base.

1. **Same PE/aggregator roll-up dynamics.** Active insurance-agency roll-ups (BroadStreet, World, Inszone, Hub, etc.) create the same dollar-translated EBITDA-to-exit buying trigger as vet. Owners 50+ planning a sale think in multiples.
2. **Concentrated association distribution.** Big I (Independent Insurance Agents & Brokers of America) + Agency Nation Slack + IIABA local chapters give us one association layer to reach the entire ICP — the same VMG/IVPA pattern.
3. **Workable regulation.** State DOI rules govern licensing, not data handling. Not HIPAA-grade. The surrounding ops layer (renewals, x-dates, CSR follow-up, certificate requests) is wide open.
4. **Proven WTP for software.** Agencies already pay $500–$2K/mo per app (Applied Epic, AMS360, EZLynx). $750 audit + $1.2K/mo Managed Standard sits in their existing budget envelope.
5. **No incumbent AI Sidekick-equivalent inside the AMS yet.** Different from Shopify, where Sidekick is eating the wedge.

**Sweet spot:**
- Independent P&C or commercial insurance agency, $1M–$10M revenue
- Owner-operator, 50+ years old, planning sale in 3–5 years
- AMS-resident (Applied Epic, AMS360, EZLynx, HawkSoft, NowCerts, Veruna)
- Operations manager exists as a distinct role
- Carriers represented: 3+ standard market carriers + at least one MGA

**Real buyer:** the agency principal — or the operations manager if one exists. Same "non-clinical operator who fears for their job amid staffing churn" pattern as vet.

**Acquisition difficulty:** medium. Test channels: Agency Nation Slack, Big I local-chapter warm intros, ASCEND Insurance Conference (May 2026 Vegas was the recent flagship), Insurance Journal.

**Test status (v0.4):** Active validation. If Shopify doesn't produce a single qualified discovery call by **Day 45**, accelerate insurance into Shopify's parallel-test slot at that point. Binding test for insurance: do agency principals translate ops improvement into EBITDA-to-exit math unprompted, the way vet owners do? If yes → real candidate. If no → structurally pretty mirage.

### Wave 2 (deferred — re-evaluate Day 90)

- **Dental practices** (1–7 staff). Real opportunity, but HIPAA BAA chokepoint requires pre-vetted vendor stack. Dental we ship after we have a BAA-ready vendor list and at least one healthcare-grade compliance review.
- **CPA / accounting firms** (1–10 staff). Real opportunity, but two buying windows per year (May, November). $750 audit reads as low-status; need a $1,500 SKU for this segment. Wait for the next buying window after we have 3 case studies.

### Drop entirely

- **Law firms.** ABA Formal Opinion 512 + state-bar consensus that "sending privileged work product to managed AI vendors is incompatible with Rule 1.6" makes managed services structurally unsellable without SOC 2 Type 2 + zero-data-retention contracts. 6–12 month compliance lift. Revisit no earlier than v0.5.

### Disqualifiers (apply to every segment)

- Pre-revenue
- Sub-$500K revenue (vet or Shopify)
- Pre-Plus Shopify enterprise (procurement kills us)
- DSO / VSO / PE-platform owned (buying power is at HQ, not the practice)
- Founder cannot make a buying decision in 1–2 calls
- Wants headless / Hydrogen / checkout extensibility (out of scope; requires Plus partner credentials)
- Already paying Claude for Small Business / Sidekick power user / Make AI Agents heavy user with no specific complaint we can name

---

## 2. Positioning

### What we call ourselves externally

**Company:** Tack.

**Services (vet):** Practice Hours Audit, Practice Hours Implementation, Practice Hours Managed.

**Services (Shopify):** Founder Hours Audit, Founder Hours Implementation, Founder Hours Managed.

**Internal codename for the whole product line:** Founder Liberation OS. Stays internal — does not appear in client-facing material.

### Why the rename

"Founder Liberation" Google searches return DEI / executive coaching firms (Liberation Labs, Liberation Leadership Coaching). It is not a category buyers in our ICP search for. They search for "veterinary practice automation," "Shopify automation," "fractional ops," "AI automation agency." We must speak their search language.

### Positioning statement (vet)

> Tack gives independent veterinary practice managers back 10–20 hours per month by installing AI-powered operating systems on top of their existing PIMS and tools — without making them switch software or learn anything new.

### Positioning statement (Shopify)

> Tack helps founder-run Shopify brands cut 10–20 hours per month from their personal calendar by connecting the cross-system work Sidekick and Claude for Small Business can't reach — your VA, your inbox, your Klaviyo, your 3PL.

Note the Shopify version **explicitly names the incumbent AI products**. This is the only honest play. Founders already know about Sidekick; pretending we compete with it is a lost objection. We position next to it.

---

## 3. Service offerings

### 3.1 Practice Hours Audit / Founder Hours Audit — **$750 flat (credited toward Implementation)**

**Honest framing:** this is customer acquisition cost, not a profit product. We charge $750 so that buyers self-qualify (free audits attract tire-kickers), but we credit 100% of the audit fee toward Implementation if they buy within 30 days. Internal gross margin is ~7–15%, not 80%.

**Promise:** in 5 business days, deliver a documented map of where the founder's / practice manager's time is going, what can be automated, and what the ROI would be on each opportunity — ranked.

**Deliverables (one PDF + one shared sheet):**
- Time-use audit
- Bottleneck map
- AI Opportunity Matrix (each opportunity scored on feasibility × hours saved × revenue protected)
- **Incumbent AI gap analysis** — what Sidekick / Claude for Small Business / Intuit Assist already does for them today, and what they're paying for that they don't need to. New requirement in v0.3.
- Recommended implementation sequence
- ROI estimate per recommendation

**Delivery cadence:**

| Day | Owner | Action |
|---|---|---|
| 0 | Human | 30-min discovery call (free) |
| 1 | Client | Uploads 30 days of email, ticket, calendar, tool exports to shared folder |
| 2–4 | Claude | Processes data, generates draft sections |
| 4 | Human | Tier A + Tier B QC per §11 |
| 5 | Human | 45-min walkthrough call + Implementation proposal handed over |

**The full repeatable process — including discovery questionnaire, workflow mapping methodology, pain point map template, opportunity matrix scoring rubric, audit report deck structure, and Day 5 walkthrough script — lives at [deliverables/framework/00-audit-framework-v0.1.md](framework/00-audit-framework-v0.1.md). Use it on every paid audit. Soil Detective is the worked example.**

### 3.2 Practice Hours / Founder Hours Implementation — **$4,500 / $8,000 / $12,000 fixed-scope**

**Why three tiers, not a range:** the v0.2 $2,500–$6,000 range is below the credible SMB market floor of $5K and reads as inexperienced. The three tiers map onto the three depth-levels we'll actually deliver.

| Tier | Price | Scope | Typical duration |
|---|---|---|---|
| **Starter** | $4,500 | One workflow (e.g. customer service triage, appointment reminders, inventory routing) + dashboard + training video | 3–4 weeks |
| **Standard** | $8,000 | 2–3 workflows + KB + cross-system dashboard + handoff training | 4–6 weeks |
| **Comprehensive** | $12,000 | 4 workflows + integrations across 3+ tools + full ops dashboard + 30-day post-launch tuning | 5–7 weeks |

**Hard constraints:**

- Every Implementation must run on tools the client already pays for, or on free tiers of Make / n8n. No new monthly costs above $50/mo without explicit written approval.
- Every Implementation must include at least one capability that Sidekick / Claude for Small Business / Make AI Agents cannot natively deliver. Forced check before pricing — if rebuilding the recommendation in Make AI Agents takes <8 hours, drop scope or drop the deal.
- We will not bid above $12K in a single SOW until we have 3 finished case studies.
- Payment terms: **50% on signature, 50% on UAT completion.** Non-negotiable.

**Concurrent capacity cap:** maximum 1 active Implementation per founder per calendar week. Sales calendar takes priority — no new Implementation starts in a week the closing founder has >3 sales calls scheduled.

### 3.3 Practice Hours / Founder Hours Managed — **$750 / $1,200 / $2,000 per month**

| Tier | Price | What's in it | Hour cap |
|---|---|---|---|
| **Lite** | $750/mo | Monthly health report + tweaks | 1.5 hrs/mo (overflow billed at $150/hr) |
| **Standard** | $1,200/mo | Lite + 1 small new automation per quarter + monthly 30-min call | 4 hrs/mo |
| **Pro** | $2,000/mo | Standard + quarterly deep retro + Slack support (only once N>3 Managed clients have run for 90 days) | 8 hrs/mo |

**Why the floor moved from $400 to $750:** at $400/mo and any realistic retainer creep (1.8–2.4× within 6 months per Parakeeto agency benchmarks), the margin collapses to negative. $750 with an enforceable 1.5-hr cap holds 50%+ GM under creep.

**Capacity model:** maximum 6 Lite-equivalents per founder. Standard counts as 1.5×, Pro as 3×. When capacity hits, close Managed Services to new Implementation clients until headcount or templates change the math.

---

## 4. Outcomes we sell (and measure)

For every engagement we instrument and report these four:

1. **Founder / practice manager hours reclaimed per month** — target 10–20
2. **Customer-facing response time** — target −50% on first response
3. **Founder / manager context switches per day** — proxy via notification volume; target −40%
4. **Revenue protected** — orders saved from cancellation, appointments not missed, leads not lost; target 2–5× project cost annually

These metrics appear in every audit, monthly report, and case study. They are the only outcome language we use externally.

---

## 5. Pricing hypotheses (corrected)

| Hypothesis | Why it matters | Falsification trigger |
|---|---|---|
| $750 audit converts at ≥ **15%** from discovery call (was 30%) | Cold-outbound benchmarks 1–3% reply, 10–20% close on unbranded sellers | < 10% after 10 calls |
| ≥ **25%** of audit clients buy an Implementation within 30 days (was 40%) | Industry benchmark for unbranded firms is 10–35% | < 15% after 5 audits delivered |
| Average Implementation lands at **$7,000** (was $3,500) | Tier mix anchored at $8K Standard | < $5,500 average after 5 sales |
| ≥ **40%** of Implementation clients take Managed (was 50%) | Recurring revenue is the moat | < 25% after 5 implementations |
| Full-cycle client (audit → impl → managed) takes < **35 hrs human time** over 90 days (was 25) | First implementations have no templates yet | > 50 hours after first case study |
| **$8K cash collected by Day 90** (was $15K booked) | Honest accounting — booked includes Managed ACV, cash is what funds runway | < $5K cash by Day 90 |

We revisit this table every two weeks. Falsification triggers are kill / pivot signals, not "we'll try harder."

---

## 6. Sales mechanics

- **Funnel top (vet):** warm intro to a VMG peer group + sponsored IVPA quarterly free CE webinar + targeted outreach into Veterinary Practice Owners Advice Line FB group. Target: 2 booked discovery calls per founder per week from these channels by Week 4.
- **Funnel top (Shopify):** eComFuel forum participation (as operator-persona) + eComFuel Live ticket buy + weekly Loom teardown of public $1–3M stores tagging the founder. Target: 1 booked discovery call per founder per week from these channels by Week 4.
- **Funnel top (insurance, ready-to-swap):** Agency Nation Slack participation + Big I local-chapter warm intros + targeted LinkedIn outreach to agency principals 50+ on AMS-resident agencies. Activate this channel if Shopify produces zero qualified discovery calls by Day 45. Target: 1 booked discovery call per founder per week within 2 weeks of activation.
- **Discovery call (30 min, free):** human runs. Output is yes/no on Audit.
- **Audit close:** signed SOW + Stripe invoice within 48 hours of the call.
- **Audit → Implementation:** proposal baked into walkthrough deck. No separate proposal cycle.
- **Implementation close:** scope agreed by end of walkthrough. SOW within 24 hours.
- **Managed close:** offered at week 4 of Implementation delivery as the natural next step.

**Things we don't do:** multi-stage proposal cycles, RFPs, procurement, "send me your pricing tier sheet" emails, paid Google Ads (CAC won't pencil), generic LinkedIn cold messaging without a teardown attached.

---

## 7. Delivery architecture — who does what

Read "Humans" as **interface, sanity-check, and close** — not substantive review. Substantive QC is covered in §11.

| Phase | Claude | Humans |
|---|---|---|
| Outbound prospecting | Drafts sequences, personalizes per prospect from public sources | Sends, replies, books — relationship layer |
| Discovery call prep | Generates question list + pre-call brief | 10-min walkthrough together; absorb context |
| Discovery call | — | Runs the call. Asks the questions. Reads the room. |
| Discovery debrief | — | Fills short debrief template (§11) |
| Audit delivery | Reads all client data, classifies, drafts every section | §11 Tier A + Tier B QC; never substantively rewrites |
| Audit walkthrough prep | Generates deck + speaker notes + objection cards | **60-min re-derivation of 3–5 key numbers** the day before (§11). 10-min walkthrough together. |
| Audit walkthrough | — | Runs the call. Closes Implementation when fit is right. |
| Implementation design | Drafts architecture doc, picks tools, scopes effort | §11 sanity-check; force-rebuild check in Make AI Agents before pricing |
| Implementation build | Writes workflows, configures Make/Zapier/n8n/Claude Code, builds dashboards, writes tests | §11 spot-check; runs UAT with client |
| Live client check-ins | Generates one-pager pre-call: status, what to commit to, what to defer | Runs the call. "Let me confirm and circle back" is always available. |
| SOW negotiation, scope change, tool re-selection | Drafts | **HUMAN OWNS the decision** (Claude is documented weaker at multi-day plan adjustment) |
| Training material | Generates walkthrough scripts + written docs | Records video; runs handoff call |
| Managed monthly | Pulls metrics, drafts health report, surfaces anomalies | §11 sanity-check; presents to client; runs strategy calls |

**Hard rule:** Claude never sends anything directly to a client. Every external artifact runs through §11. No exceptions.

---

## 8. What we will NOT sell (guardrails)

- Custom-built SaaS — Month-6+ question, not Month-1
- Always-on AI chatbots facing customers without a moderation layer
- Anything touching financial transactions, medical advice, or legal advice without explicit human sign-off per output
- Hourly billing — kills the margin model
- "AI strategy" decoupled from implementation (no shelfware reports)
- Engagements > $12K single SOW until 3 case studies
- Clients with no existing digital workflow
- **Anything Shopify Sidekick / Claude for Small Business / Intuit Assist natively deliver in their basic plan** — we are not a paid layer on top of free incumbent features
- **Anything that could be rebuilt in Make AI Agents in < 8 hours** — that's freelancer work at $100/hr, not our scope
- **Law firm work entirely** — until v0.5+ when compliance posture justifies
- **Pre-revenue or sub-$500K clients** — can't afford Implementation, will tire-kick audit, won't buy Managed

---

## 9. 90-day success criteria (recalibrated)

| Milestone | By | Notes |
|---|---|---|
| Site live with new positioning, pricing public, 1 vet case study draft, outbound running into VMG/IVPA + eComFuel, 3+ discovery calls booked | End Week 4 (current sprint) | — |
| 2 audits delivered, 1 Implementation in flight, $3K cash collected | Day 60 | Lower than v0.2's Day 60 |
| **Shopify swap test** — if 0 qualified discovery calls from Shopify by Day 45, activate insurance-agency channels and accelerate insurance into the parallel-test slot | Day 45 | New in v0.4 |
| 3 audits delivered, 1 Implementation completed, 1 Managed Lite signed, **$8K cash collected**, 1 finished vet case study | Day 90 | Was $15K — that number was arithmetically inconsistent and conflated booked with cash |
| **Shopify kill criterion** — if <2 signed Implementations attributable to the post-Sidekick orchestration thesis, drop Shopify and reallocate the slot to insurance agencies | Day 90 | New in v0.4. Forces a real decision instead of monitor-and-adjust |
| Tier 2 (dental, CPA) re-evaluation with Day-90 evidence | Day 90 | Re-decision, not a launch |

---

## 10. Open decisions for Mon 6/22 working session

These need a human call, not an AI draft:

1. **Lead vertical decision.** Doc recommends vet as beachhead, Shopify as parallel test. Founders confirm or pick a single segment.
2. **External brand language.** Adopt "Practice Hours Audit" / "Founder Hours Audit" or pick alternatives. Lock at end of Week 1.
3. **Legal entity.** LLC vs sole prop. The liability question matters more in v0.3 than v0.2 because §11 now requires E&O insurance.
4. **E&O insurance.** Required before first paid Implementation per §11. ~$400–$800/yr small-business tech E&O. Decide which carrier.
5. **Visual identity.** Use existing dreamhelpers.org system or evolve for the service line?
6. **Founder time split.** Primary-sales / primary-delivery, or both do both? Implementation capacity cap of 1 per founder per week makes this load-bearing.
7. **Disclosure language in SOW.** §11 proposes: "Deliverables are produced using AI tooling and reviewed by Tack for source-traceability and internal consistency. Clients are responsible for validating numerical claims against their own systems before acting on recommendations." Adopt as written, or modify?
8. **Pilot client posture.** Free reference / discounted $375 / full-price $750 with case study rights?
9. **Vet beachhead acquisition strategy.** Pay for VMG sponsor slot ($), buy IVPA quarterly CE webinar sponsorship ($), or approach grass-roots through Veterinary Practice Owners Advice Line FB group (free + slow)?
10. **Insurance agency parallel-test activation date.** New in v0.4. Default is Day 45 contingent on Shopify producing zero qualified discovery calls. Confirm or move earlier (Week 2 for a true 3-way parallel test).
11. **Insurance binding test.** The scan's load-bearing assumption is that agency principals translate ops improvement into EBITDA-to-exit math unprompted, the way vet owners do. Three founder calls test this. Who runs them and when?

---

## 11. Quality control protocol

Because humans do not perform substantive review of Claude's analysis, the gap is closed by a structured, mandatory checklist applied to every external artifact. The checklist is not domain review. It is structural, behavioral, and **split into two tiers** based on what's being reviewed.

### Tier A — Smell test (~20 min)

Applies to: **narrative, summaries, slide copy, written prose, recommendation explanations.**

1. **Traceable.** Every "you currently…" claim cites a source row, ticket, message, or export field. No source → cut.
2. **Consistent with what they told us.** Cross-check against discovery debrief notes. If client said "we will not switch off Gmail" and the recommendation involves moving off Gmail, the recommendation changes or gets explicit framing.
3. **Smell test.** Read as a presenter would. Anywhere you would not defend a line in front of the client — flag it.

### Tier B — Independent re-derivation (60–90 min, **mandatory**)

Applies to: **every numerical claim that appears in a client-facing recommendation.** Hours saved. Dollars saved. ROI percentages. Time-to-payback. Automation percentages.

Driven by 2025–2026 LLM hallucination benchmarks on finance-domain numerical claims (FAITH, FINTRUST, PHANTOM benchmarks; 15–52% error rates across SOTA models on grounded financial tasks). A 20-minute smell test does not catch confidently-wrong numbers. Independent re-derivation does.

**Process:**
1. Take each numerical claim in the deliverable.
2. Re-run the calculation **from the raw source data with a fresh prompt** (not the original analysis prompt).
3. Compare. If the numbers don't match within tolerance — flag and rebuild.
4. **Forbid round-number claims.** "Saves 10 hours" → either reword as "saves 8–12 hours" or rebuild the math.

### The brief / debrief loop

Every external conversation is wrapped:

- **Before:** Claude generates a one-page pre-call brief + speaker notes. **For walkthroughs and high-stakes calls, human spends 60 min the day before re-deriving the 3–5 key numerical claims** so they can defend them under client questioning without "let me check."
- **After:** Human fills short debrief template. Captures what was said, what surprised, what got pushed back on, what client agreed to.

### Live-call fallback

Build a private "live Claude" channel during calls — on-call human can paste a client question and get an answer in <60 seconds. Decide whether visible use is acceptable per brand (probably yes for technical questions, no for pricing/scope).

### Escalation pattern

- **Human is uncertain about a deliverable claim:** flag in working session. Claude reproduces the trace from source. If trace breaks, claim is dropped.
- **Client pushes back live on something not in the brief:** "Good question, let me confirm and come back tomorrow." Never improvise commitment. Never argue.
- **Client outcome misses targeted metric:** retro. Was the estimate wrong (Claude failure), the client didn't adopt (interface failure), or the system broke (build failure)? Fix accordingly.

### Legal / insurance protocol (new in v0.3)

The "humans don't substantively review" stance creates a negligent-misrepresentation exposure unless we frame it correctly in the SOW and carry insurance.

**Three requirements before the first paid Implementation:**

1. **Tech E&O / professional indemnity policy.** Confirm AI exclusion language ("silent AI") is absent. ~$400–$800/yr for small-business tech E&O.
2. **SOW disclosure language:**
   > "Deliverables are produced using AI tooling and reviewed by Tack for source-traceability and internal consistency. Clients are responsible for validating numerical claims against their own systems before acting on recommendations."
3. **Per-engagement liability cap** equal to fees paid, written into every SOW.

---

## 12. Window-state indicators (new in v0.3)

The market window is real but narrowing. Three dashboard signals tell us when to pivot. Tracked bi-weekly.

| Indicator | Threshold | What it means |
|---|---|---|
| % of discovery calls where prospect mentions Sidekick / Claude for Small Business unprompted | >30% by Day 60 | The Shopify wedge is closing fast. Time to repositioning or segment pivot. |
| Average Implementation price achieved (rolling 3 deals) | <$2,500 | The Implementation wedge is gone. Either rebuild scope upmarket or shut down the Implementation tier. |
| % of audit recommendations that could be entirely executed in Make AI Agents or Sidekick | >60% (measured each audit) | We are doing work the buyer can self-serve. Mandatory repositioning. |

Each indicator has a falsification consequence. We do not "monitor and adjust." We trigger a specific action.

---

## 13. Competitor reality (new in v0.3)

v0.2 §04 said there were no direct AI-ops competitors. That was wrong. Direct competitors as of June 2026:

| Competitor | Their offering | Our differentiation |
|---|---|---|
| [KariOps](https://kariops.com) | Claude-centric scoping engagement → priced projects → build sprints. Family/private business focus. | We are vet-clinic specialized + Shopify-specialized with transparent pricing. They don't publish prices. |
| [Aperture OS](https://aperture-os.com) | Fractional Chief AI Officer, $3K–$10K/mo retainer, $500K–$20M client size. | We are 2–7× cheaper. We serve businesses too small for Aperture. |
| [Operational Freedom](https://operational-freedom.com) | "Your business should run without you running it" — almost identical thesis with voice-agent emphasis. | We're claiming the vet + Shopify lane explicitly. They lean local services + voice. |
| [THAILS](https://thails.com) | Shopify Plus AI & Automation Audit. | We serve sub-Plus Shopify ($1–3M ARR). They go upmarket. |
| n8n agencies (multiple) | $5K productized "Automation Accelerator" — audit + workshop + 4 workflows. $1K–$2.5K/mo retainer. | We must include capability Make/n8n cannot deliver in every Implementation, or undercut to $1.5K. Likely undercut for vet (less n8n competition in that vertical). |
| **Anthropic Claude Corps** | $150M, 1,000 fellows placed in nonprofits starting Oct 2026. | Adjacent. They are nonprofit-only. We are for-profit, available now, vet-specialized. Late 2027 their alumni become competition — or a hiring pipeline. |
| **Claude for Small Business** ($20/mo) | Anthropic-shipped product with QuickBooks/HubSpot/Workspace connectors. | We position as the consultant ON TOP of CFSB. Audit measures what CFSB is failing to automate in the client's specific stack. |
| **Shopify Sidekick** (free on Basic+) | Natural-language Flow generation; 12K custom Sidekick apps in Q1 2026. | We position on cross-system orchestration Sidekick cannot touch — vendor comms, accounting, scheduling, CRM beyond Shopify. |

**Adjacent threats:** Gorgias / Richpanel direct-to-merchant AI; Build Grow Scale (CRO-focused, could expand downmarket); Upwork productized AI freelancers ($30–$150/hr fixed-price work).

---

*Document ends. Update as evidence accumulates; preserve historical versions in `deliverables/archive/`.*
