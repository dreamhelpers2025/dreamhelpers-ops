# Soil Detective — Opportunity Matrix

**Status:** Scored analysis of the 9 pain points, drives the Implementation scope decision in `05-soil-detective-implementation-scope.md`. Revised 2026-06-25 to unblock B1 and merge it with C1 into a single Member Engagement Pipeline lock.
**Owner:** Both founders
**Inputs:** Discovery notes (`01`), pain point map (`03`), brand spec (`02`), architectural decision (Option A — Squarespace stays as backbone, our specialty apps slot alongside).
**Date:** 2026-06-25

## Glossary (read once, then skim)

- **Feasibility** — how much work it takes to ship a credible v1 given our constraints (2 founders, ~30 hrs/week, Option A architecture). 1–10. Higher = easier.
- **Hours saved/wk** — estimated hours of Rosalinda's time per week the workflow reclaims once live. Range, not a point estimate.
- **Revenue protected or generated/yr** — annualized dollars the workflow either saves (lost revenue recovered) or generates (new income enabled). Range.
- **Case study value** — how visibly the workflow demonstrates AI ops work to OUR prospects (vet practice managers, insurance agency principals). 1–10.
- **Squarespace integration cost** — how much of the build is fighting Squarespace's surface area. 1–10. Higher = more friction.
- **MVP scope** — the smallest version we'd ship to call it "done" without it being embarrassing.

## Scoring methodology

Each opportunity scored on 5 dimensions. Numbers are honest estimates with explicit ranges where uncertainty matters. Estimates marked **[needs data]** require Rosalinda's data access (open question in discovery notes) to refine.

Overall priority is a weighted blend:
- Feasibility × 25%
- Hours saved × 20%
- Revenue impact × 20%
- Case study value × 25%
- Squarespace integration ease × 10% (inverted from cost)

---

## The matrix

| # | Opportunity | Feasibility | Hours/wk saved | Revenue impact/yr | Case study value | Squarespace integration ease | Priority |
|---|---|---:|---:|---:|---:|---:|---:|
| **B3** | Ask Rosalinda (Q&A bot trained on her content) | 9 | 3–8 [needs data] | $2K–$10K (membership retention) | **10** | 9 (JS widget embed) | **★ 87** |
| **B2** | Tool Barn — inventory + rental booking | 8 | 1–3 | $1K–$5K (rentals booked) | **9** | 6 (direct Stripe + iframe, sidesteps Squarespace Commerce) | **★ 82** |
| **C1+B1+C2** | **Member Engagement Pipeline** — video repurposing → tier-aware delivery to members + Patreon | 7 | 12–15 combined (content prep + recurring tier-benefit delivery) | $10K–$45K (Patreon recovery + membership retention + reduced churn) | **9** | 8 (we run pipeline; Squarespace Member Areas + email handles distribution) | **★ 85** |
| **A1+A2** | Pricing structure toolkit (rate sheets + automated proposal generator + tier benefits) | 9 | 1–2 | $5K–$20K (better margins on existing work) | 4 | 10 (pure templates + a small internal tool) | 72 |
| **D2** | Recipe Builder — manual ingredient entry | 10 | 0 (no founder hours) | <$500 (no direct $ impact) | 2 | 9 (already in our Astro rebuild) | 56 |
| **D1** | Soil Intelligence Portal (per-member soil sample results + recommendations) | 4 | 0 for her, value for members | $3K–$15K (membership justification) | 5 | 4 (member auth integration, structured data format gaps) | **Wave 2** |

★ = recommended for Implementation. Rest = pilot work, off-camera, or deferred.

**Update 2026-06-25:** B1 (community membership ops) is no longer blocked. The "handwritten list" was the membership tier draft itself — each tier benefit is an ongoing operational task. B1 has been merged with C1 into a single **Member Engagement Pipeline** (third recommended lock), because the video pipeline is the content engine that feeds the tier-promised newsletters, workshop materials, and demonstration recordings that B1 delivers. Merging them sharpens the case-study story ("Tack built her entire member engagement engine") instead of producing two separate workflows that look loosely related.

---

## Per-opportunity detail

### ★ B3 — Ask Rosalinda Q&A Bot

**What it is:** A chatbot trained on her existing content (videos, written posts, FAQs) that answers visitors' soil questions in her voice. Embedded on the Squarespace site and surfaced through Patreon and email auto-replies.

**Why it scores highest:** strongest case-study magnet of the entire pilot. Vet practice managers and insurance agency principals — our two real ICPs — both immediately recognize "AI assistant that answers customer questions in our voice" because they've seen the ChatGPT analog. It is the deliverable that says "Tack does AI ops" without anyone needing to read fine print.

**Feasibility 9/10:**
- Built on Claude or OpenAI API with retrieval over her content corpus
- Hosted as a microapp on `apps.soildetective.org`
- Embedded into Squarespace as a JS widget or floating chat bubble
- No Squarespace auth integration needed (anonymous Q&A)
- Hardest part: collecting and ingesting her content (PDFs, videos transcribed, posts, FAQs)

**Hours saved estimate 3–8/wk [needs data]:**
Depends on her current inbound question volume across email, Patreon comments, site contact form, and DMs. We do not yet have a count. The range is what we'd see if 30–70% of inbound questions are deflectable.

**Revenue impact $2K–$10K/yr:**
- Better Q&A response time → higher membership conversion
- Deflected questions free her to create content (which retains members)
- Not a direct revenue producer; an indirect lift

**MVP scope (3–4 weeks of build):**
- Ingest 30–60 of her most-viewed YouTube videos via transcription
- Ingest text content from existing site + any FAQ docs she provides
- Build retrieval + Claude API call
- Embed widget on Squarespace
- Track question volume + deflection rate for the case study

**Risk:** voice fidelity. If the bot sounds generic instead of like Rosalinda, the value collapses. Mitigate by training on enough first-person content to capture her style; have her review the first 50 generated responses before going live.

---

### ★ B2 — Tool Barn Inventory + Rental Booking

**What it is:** a digital system replacing the paper inventory. Shows community members what's available, lets them book a rental for specific dates, takes payment via Stripe, generates a return-by reminder.

**Why it scores high:** the most concretely measurable deliverable in the pilot. Before: paper, hours of phone calls and texts to coordinate. After: self-serve booking flow with payment captured automatically. Hours saved and revenue captured are both easy to measure and easy to publish in the case study.

**Feasibility 8/10:**
- Inventory data already exists (from the photo: ~25 items, prices, rental rates)
- Microapp at `apps.soildetective.org/toolbarn` (or `tools.soildetective.org`)
- Uses direct Stripe Checkout (bypasses Squarespace Commerce because date-range rentals are awkward there)
- No member-auth required for v1 (rentals to anyone with payment)
- Squarespace links out to it from the Community page

**Hours saved estimate 1–3/wk:**
- Eliminates coordination calls/texts on rental availability
- Eliminates paper inventory updates after each rental
- Conservative estimate; could be higher in rental season

**Revenue impact $1K–$5K/yr:**
- Captures rentals that currently fall through coordination gaps
- The discovery photo shows rental rates ($5/day, $25/week, $50/month for various items)
- Even at modest utilization, an additional 2–3 booked rentals per month closes the bottom of the range

**MVP scope (2–3 weeks of build):**
- Inventory data → JSON (one-time data entry from the photo)
- Listings page with availability per item
- Date-picker booking flow → Stripe Checkout
- Confirmation email + return reminder
- Admin view for Rosalinda to mark items returned

**Risk:** physical handoff still requires Rosalinda to be available. The app doesn't solve "she's not home when the renter shows up." Frame this in the case study honestly — software fixes coordination, not physics.

---

### ★ C1 + B1 + C2 — Member Engagement Pipeline (the merged third lock)

**What it is:** the end-to-end content + delivery loop that:
1. Ingests her 2 TB of raw video (C1)
2. Produces short-form clips + transcripts + descriptions via Claude
3. Routes the output to the right channel and tier (B1):
   - Public-ish content → Squarespace blog + Patreon (recovers the 2023-dormant channel)
   - Tier-gated content → Squarespace Member Areas, tier-aware (Seed gets newsletter snippets; Sprout gets workshop recordings; Root gets advanced material like Soil Biology 101 + Microscope Experience recordings)
   - Workshop materials → tier-aware email + member-area access
4. AI-personalizes member touch-points (renewal reminders, workshop priority registration, upcoming gathering invitations)

Locked to ONE primary output stream (community content). Advertising and curriculum streams of C1 are still explicitly out of scope and remain Wave 2.

**Why it scores second highest (★ 85):** the merged pipeline tells one coherent case-study story — "we built her entire member engagement engine" — instead of two loosely-related workflows. The video pipeline alone is content-without-distribution; B1 alone is distribution-without-content. Together they are her actual membership product running on autopilot.

**Feasibility 7/10:**
- Video ingestion + clip generation: well-trodden tech (transcription via Whisper, generation via Claude). Lower feasibility number reflects volume + manual review burden, not technical difficulty.
- Tier-aware distribution: Squarespace Member Areas already supports tier gates; we configure them per the five-tier draft Rosalinda provided.
- AI-personalized member comms: drafted by Claude, reviewed by her, sent via Squarespace newsletter (or an integrated tool like Mailchimp/ConvertKit if she has one).
- Patreon publishing: API or copy-paste workflow.

**Hours saved estimate 12–15/wk combined:**
- ~10 hrs/wk of content production she was never going to do
- ~2–5 hrs/wk of recurring tier-benefit delivery (newsletters, workshop reminders, event invitations) she does today manually or skips
- Some of this is reclaim, some is unlock — frame both honestly in the case study

**Revenue impact $10K–$45K/yr:**
- Reactivated Patreon at modest tier mix
- Membership retention from consistent tier-benefit delivery (members who don't receive promised benefits churn at renewal)
- Membership growth from a steady visible content cadence
- Wide range because we cannot project growth without data

**MVP scope (5–7 weeks of build):**
- Week 1: storage decision + tier audit + Squarespace Member Areas configuration for five tiers
- Weeks 2–3: transcription pipeline for first 50 videos; clip + caption generator with Rosalinda's voice in the prompt
- Week 4: tier-aware distribution wiring (which clip goes to which tier via what channel); newsletter automation per tier
- Week 5: AI-personalized member touch-point templates (renewal, workshop priority, gathering invitation)
- Weeks 6–7: 4-week supervised run with weekly review before declaring success

**Risk:** scope creep into ad/curriculum streams of C1, OR expanding B1 into a full custom CRM. Hold the line: ONE video output stream (community), use Squarespace Member Areas as the member system (do not build our own).

---

### A1 + A2 — Pricing Structure Toolkit (off-camera Implementation work)

**What it is:** rate sheet templates (workshops, services, memberships), tiered membership benefit pages (already drafted by Rosalinda in the photos), and a small automated proposal-generator tool that produces scope-locked SOWs in minutes.

**Why it scores below the top 3 despite high feasibility:** it scores low on case-study value (it's internal). Should absolutely ship as part of the broader pilot because it directly unlocks revenue, but doesn't headline the case study.

**Feasibility 9/10, ~1 week of build.**

**Why it's not "Implementation tier" measured work:** the deliverable is templates + a small internal tool, not a measurable hours-saved-per-week workflow. Ship as standard pilot work alongside the three measured workflows above.

---

### D2 — Recipe Builder Manual Ingredients

**What it is:** small enhancement to the existing recipe builder on the Astro rebuild that lets users add their own ingredients to the catalog.

**Why it scores low priority despite max feasibility:** zero hours saved, zero revenue impact, low case-study value. Ship as a "do anyway because she likes the rebuild" enhancement during the pilot. Not a measured workflow.

**Build effort:** 1–2 days inside the existing Astro repo.

---

### B1 — Community Membership Ops — **MERGED into the Member Engagement Pipeline above**

Originally scored as a standalone workflow. Resolved 2026-06-25: the "handwritten community ops list" is the membership tier draft itself, with each tier benefit (newsletter, gatherings, workshops, hands-on demonstrations, priority registration) being an ongoing operational task. Because the content engine (C1) feeds the same channels B1 distributes through, separating them produced two workflows that shared infrastructure but were named differently. **Merging them as the Member Engagement Pipeline sharpens the case study and reduces duplicated build work.**

---

### D1 — Soil Intelligence Portal — **Wave 2**

Per-member private area where she posts soil sample results and recommendations.

**Why deferred:**
1. Requires structured soil-sample data format (Rosalinda has not defined one)
2. Requires member-auth integration with Squarespace Member Areas (medium complexity)
3. Requires her workflow on the data-entry side (recurring time investment from her, not from us)
4. Lower case-study photogenic value (members-only, hidden from public)

**Not dead, just sequenced.** Revisit at Day 60 retro after the three top workflows ship.

---

## Recommended Implementation locks

Based on the revised matrix, the 3 workflows for measured Implementation case-study coverage:

1. **Ask Rosalinda Q&A bot** (B3) — case-study magnet, AI-visible, 3–4 weeks
2. **Tool Barn rental booking** (B2) — concrete measurable outcomes, 2–3 weeks
3. **Member Engagement Pipeline** (C1 + B1) — content engine + tier-aware delivery, 5–7 weeks. Biggest latent revenue unlock + strongest member-retention story.

**Total: 10–14 weeks of build calendar if done in parallel by 2 founders working 15 hrs/week each.** Aggressive but doable given Rosalinda is paying actual cost (not retail) and the project is positioned as a beta.

**Off-camera pilot work** (ships alongside, not measured for the case study):
- Pricing toolkit (A1 + A2) — 1 week, ships early because it unlocks her revenue immediately
- Recipe Builder ingredients (D2) — 1–2 days
- Brand spec applied to live Squarespace site via CSS injection — 2–3 days

**Wave 2 (revisit at Day 60):**
- Soil Intelligence Portal (D1)
- Video pipeline output streams 2 and 3 (advertising, curriculum)
- Mycelium / Forest tier benefit design (once Rosalinda defines them)
- Anything new that surfaces during the pilot

---

## Open questions before Implementation kicks off

These need answers from Rosalinda before we start building. Get them in the next call:

1. **Stripe account access** — does her Squarespace already have Stripe Connect set up? Can we use the same Stripe account for our specialty apps' direct Checkout flows?
2. **Subdomain setup** — does she want `apps.soildetective.org`, `tools.soildetective.org`, separate subdomains per app, or something else? Needs DNS access.
3. **The B1 list** — the handwritten community-membership management list (open question from discovery).
4. **Video storage** — where do the 2 TB of raw video live today? Drive, local, YouTube unlisted? What's the format?
5. **Content corpus for Ask Rosalinda** — confirm she's comfortable with us ingesting her YouTube + past Patreon posts + site content. Any content that should NOT be in the bot's knowledge?
6. **Tool Barn handoff** — how does she want physical handoff coordinated when she's not home? (This is the part the software cannot solve.)

---

## What this drives next

`05-soil-detective-implementation-scope.md` — the formal scope-lock document for Implementation. Both founders sign off on the three workflows above (or substitute). Captures payment milestones (even at "actual cost" pilot pricing, structure matters), kickoff timeline, and the public-case-study deliverables.

That doc needs both of you in a room. I produce the draft based on this matrix; you and Grant make the cut.
