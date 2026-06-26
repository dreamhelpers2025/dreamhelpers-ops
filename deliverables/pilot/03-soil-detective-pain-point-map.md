# Soil Detective — Pain Point Map

**Status:** Analysis artifact, built from `01-soil-detective-discovery-notes.md`. Revised 2026-06-25 with A1 correction and hosting architecture context.
**Owner:** Both founders
**Purpose:** Categorize the 9 pain points captured in discovery, rank them by leverage and dependency, and surface the structural risks. This drives the Opportunity Matrix in `04-soil-detective-opportunity-matrix.md`.

## Architectural context (locked 2026-06-25)

The hosting decision shapes how every pain point in this doc gets scored for feasibility. **The decision: Option A — Squarespace stays as the production CMS / auth / payments / commerce / membership backbone. We build specialty AI tools as separate microapps that integrate with Squarespace.**

Concrete implications for every item below:

- **Squarespace owns:** site CMS, member auth, Stripe payments via Squarespace Commerce, basic membership tiers, newsletter, blog.
- **We own:** specialty AI workflows (Ask Rosalinda, Tool Barn rentals, Soil Intelligence Portal, video repurposing pipeline, automated proposals).
- **Where our apps live:** `apps.soildetective.org` (or similar subdomain). Squarespace links out / iframes in as appropriate.
- **Brand consistency:** the lavender + Flower Power brand spec we built for the Astro rebuild also gets applied to her live Squarespace site via custom CSS injection. Same visual identity on both surfaces.
- **Payments:** existing Squarespace Stripe connection handles memberships and workshops. Specialty flows Squarespace cannot handle elegantly (Tool Barn date-range rentals) use direct Stripe Checkout against the same Stripe account.

This means feasibility scoring favors items that **slot cleanly alongside Squarespace** and disfavors items that would require us to replace Squarespace functionality.

## Glossary (read once, then skim)

- **Leverage** — how much downstream value a single fix unlocks. A high-leverage fix solves itself AND unblocks other work.
- **Dependency** — what has to be true (or in place) before a pain point can be addressed. Blockers.
- **Revenue-protecting** — pain points that, if left unfixed, are costing or capping money she could be earning today.
- **Founder-time-reclaiming** — pain points that, if fixed, give Rosalinda hours back per week.
- **Brand-defining** — pain points whose solution shapes how the public sees Soil Detective.
- **MVP** (Minimum Viable Product) — the smallest version of a thing that delivers real value.

---

## The four categories

I split the 9 pain points into four groups by what kind of value the fix produces. Within each group I rank them by leverage.

### Category A — Revenue-blocking psychology (highest leverage)

The constraints here cost money today and will keep costing money until solved.

| # | Pain point | Why it ranks highest |
|---|---|---|
| **A1** | Pricing structure across all offerings | **Revised 2026-06-25.** Earlier draft framed this as "she hates taking money." Founder correction: she is comfortable taking money when the structure is clean — she appreciated the structured pricing in the report. The real pain is that her current offerings (workshops, services, memberships) lack consistent structure, which creates hesitation in HER and confusion in customers. Solution: locked rate sheets per offering, tiered memberships with explicit benefits per tier (already drafted, see discovery notes §3), and renewal flows that feel professional rather than transactional. |
| **A2** | SOW murkiness — 4 projects without delineation | Same root issue as A1, narrowed to service-engagement scope. Solution: rate sheet + automated proposal packaging tool that generates scope-locked SOWs in minutes. |

**Pattern:** these are **design problems**, not coaching problems. Build the structure once (rate sheets + proposal generator + tiered membership benefits), and her comfort + customer trust both follow. The output is templates and a small automation, not a behavior change project.

### Category B — Time-leak operations (high leverage)

These cost her hours per week today. Each is a discrete workflow.

| # | Pain point | Why it ranks here | Discrete? |
|---|---|---|---|
| **B1** | Community membership management (deliver tier-promised benefits on a recurring cadence) | Recurring weekly + seasonal load. Each tier (Seed / Sprout / Root / Mycelium / Forest) has a specific bundle of recurring deliverables: newsletter, gatherings, workshops, hands-on demonstrations, priority invitations. Direct hours-per-week reclaim AND direct member-retention impact (members who do not receive their tier benefits churn at renewal). | Yes |
| **B2** | Tool Barn inventory + rental tracking | Currently paper-based. Demonstrable hours-saved metric. Rentals are revenue-generating, so the fix protects revenue too. | Yes |
| **B3** | "Ask Rosalinda" Q&A bot | Reduces inbound question volume across email + Patreon + site comments. Hours saved = roughly proportional to her current Q&A burden, which we have not yet measured. | Yes |

**Pattern:** all three are concrete workflows with clear before/after metrics. These are the strongest candidates for the **public case study** because the impact is measurable and visibly AI-augmented.

### Category C — Content backlog (high latent value, scope risk)

These represent massive latent value but are scope traps if we are not careful.

| # | Pain point | Why it ranks here | Scope risk |
|---|---|---|---|
| **C1** | 2 TB of video content unused — 3 output streams (community / advertising / curriculum) | Each output stream is its own multi-week build. Done well, this single category could justify her entire revenue strategy. Done broadly, it eats all available hours. | HIGH — pick ONE output stream for Implementation, treat the other two as roadmap. |
| **C2** | Patreon dormancy (since 2023) | Direct downstream of C1: once we have content automation, Patreon publishing is a connector, not a project. Independently, Patreon by itself is unsellable without content to push. | LOW alone, HIGH bundled with C1. |

**Pattern:** the entire content category should be treated as **one pipeline with two sinks** (the membership site and Patreon) rather than two separate workflows. Build the video-repurposing pipeline once; route the output to both channels.

### Category D — Product features (member-facing)

These improve the product Rosalinda sells to her community. Each is a distinct feature.

| # | Pain point | Why it ranks here | Public case study fit? |
|---|---|---|---|
| **D1** | Soil Intelligence Portal — per-member private soil sample results + recommendations | Members-only structured content. New product capability. Requires Rosalinda's data-entry workflow design + member auth. Real customer value. | Medium — visible to members, hidden from public. Less photogenic than Tool Barn or Ask Rosalinda. |
| **D2** | Recipe Builder — add manual ingredient entry | Small enhancement to an existing feature she likes. Low-effort, high-customer-satisfaction. Should be done; should NOT be the case study. | No. |

**Pattern:** D2 is a "do anyway because it's quick" item. D1 is a heavier build with real product value but lower case-study visibility.

---

## Dependency map

Some pain points block others. Map of what unlocks what:

```
A1 (payment psychology)
   │
   ├──► A2 (SOW murkiness) — depends on her willingness to formalize what she charges for
   │
   ├──► All paid offerings — memberships (D1 portal), Tool Barn rentals (B2), services
   │
B1 (community membership ops) ──► the list is the membership tier draft itself (resolved 2026-06-25)
   │
   ├──► tightly couples to C1 — the video pipeline is the content engine that feeds the
   │      newsletter, demonstrations, and workshop materials that B1 delivers
   │
   └──► depends on Squarespace Member Areas being configured for the five tiers

C1 (video repurposing pipeline)
   │
   └──► C2 (Patreon publishing) — Patreon becomes trivial once C1 exists

D1 (Soil Intelligence Portal) ──► requires structured soil-sample data format from Rosalinda
                                  AND requires member auth (membership system)
                                  AND requires payment flow (depends on A1)

B3 (Ask Rosalinda) ──► largely independent. Can be built on existing content corpus.

B2 (Tool Barn) ──► largely independent. Inventory is in hand (see discovery doc).

D2 (Recipe Builder ingredients) ──► fully independent. Smallest scope.
```

**Four pain points are independent and ready to build:** B1, B2, B3, D2.
**Two depend on Rosalinda providing data or making decisions:** D1, A1.
**Two are a pipeline with two outputs:** C1 + C2.
**B1 + C1 should integrate** — C1 produces the content, B1 delivers it tier-aware to members. Architect as one pipeline with two named components.

---

## Structural observations (read these before scoping)

### 1. The revenue layer is structurally fine — it just needs templates

Earlier draft of this section assumed A1 was a structural risk requiring coaching. Founder correction (2026-06-25) clarified that Rosalinda is comfortable charging when the structure is clean. The pricing infrastructure (rate sheets, proposal generator, tier benefits) is a build deliverable, not a behavior project.

**Implication for Implementation scope:** A1 + A2 collapse into a single "pricing structure" deliverable — a small toolkit (locked rate sheet templates, an automated proposal packaging tool, the tiered membership benefits she already drafted) — that gets shipped as part of the broader pilot but does not need to be one of the 2–3 measured Implementation workflows.

### 2. The 2 TB of video is the highest single asset she owns and is sitting idle

If we do nothing else, building C1 (a video repurposing pipeline) with even one output stream would unlock months of content for her community. This is a strong candidate for **Implementation Comprehensive ($12K-equivalent scope)** but not for Implementation Starter — it is too big.

**Implication:** if we pick C1 for Implementation, we lock it to ONE output stream (Community content, since that directly drives membership retention). Advertising and curriculum become roadmap.

### 3. "Ask Rosalinda" is the case-study magnet

The Q&A bot is the single most visible AI deliverable in this whole pilot. It is the thing prospects in our actual ICPs (vet clinics, insurance agencies) will recognize as "AI ops work" because they have seen ChatGPT-style assistants and immediately understand the analogy. **Even if it produces less measurable hours-saved than the Tool Barn, it produces more public-marketing leverage.**

### 4. Membership ops (B1) is partially blocked

We cannot scope this until Rosalinda gives us the handwritten list. Open question #9 in the discovery notes — must be resolved before this can move past planning.

### 5. The Soil Intelligence Portal (D1) is downstream of two unknowns

D1 needs: a structured soil-sample data format, member auth, and a payment gate. Until those are decided, D1 is roadmap, not Implementation.

---

## What to deprioritize (controversial but important)

These are real items Rosalinda mentioned that should not be in Implementation:

- **D2 — Recipe Builder manual ingredients.** Real ask, but low strategic value. Ship as a small enhancement during the pilot, not as a measured deliverable.
- **C2 — Patreon publishing.** Do not scope as a standalone. It is a connector that lights up automatically once C1 is built.
- **Advertising stream from C1.** Picking the wrong stream eats scope. Community content is the right primary use of the video pipeline; advertising and curriculum wait for Phase 2.

---

## Categorization summary (one table)

| Pain | Category | Hours/week saved if solved | Revenue protected if solved | Public case study fit | Independent? |
|---|---|---|---|---|---|
| A1 — Pricing structure needed | Business design (build templates) | Indirect (unblocks $) | High | Low — internal toolkit | Yes (build once, ship as toolkit) |
| A2 — SOW murkiness | Business design (proposal generator) | 1–2 (proposal time) | Medium (better scope = better margin) | Medium | Bundled with A1 |
| B1 — Community ops (tier-aware delivery) | Time-leak ops | 2–5 (seasonal cadence) | Medium-high (member retention) | Medium-high | Yes — pairs naturally with C1 |
| B2 — Tool Barn | Time-leak ops | 1–3 | Medium (more rentals booked) | **High** — concrete metrics | Yes |
| B3 — Ask Rosalinda | Time-leak ops | 3–8 (estimate, unmeasured) | Low | **Very high** — visibly AI | Yes |
| C1 — Video repurposing | Content backlog | Saves weeks of content prep | High (membership retention) | High — visible output | Yes (if scoped tight) |
| C2 — Patreon dormancy | Content backlog | Trivial once C1 exists | Recovers stalled revenue channel | Low | Bundled with C1 |
| D1 — Soil Intelligence Portal | Product feature | 0 for her, value for members | Medium (membership justification) | Medium | Blocked (multiple deps) |
| D2 — Recipe Builder ingredients | Product feature | 0 | None | Low | Yes |

---

## What this drives next

The Opportunity Matrix (`04-soil-detective-opportunity-matrix.md`) takes these 9 pain points and scores each on three numerical dimensions:
- Feasibility (1–10)
- Hours saved per week (estimate with range)
- Revenue protected per year (estimate with range)

And produces the **2–3 workflows we lock for Implementation** plus the **broader pilot scope** done off-camera.

Then the Implementation Scope decision (`05-soil-detective-implementation-scope.md`) needs both founders to make the cut — that one is not for me to decide alone.
