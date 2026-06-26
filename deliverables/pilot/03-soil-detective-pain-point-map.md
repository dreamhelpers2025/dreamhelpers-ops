# Soil Detective — Pain Point Map

**Status:** Analysis artifact, built from `01-soil-detective-discovery-notes.md`
**Owner:** Both founders
**Purpose:** Categorize the 9 pain points captured in discovery, rank them by leverage and dependency, and surface the structural risks. This drives the Opportunity Matrix in `04-soil-detective-opportunity-matrix.md`.

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
| **A1** | "She HATES taking money" | Single biggest business risk. Memberships, services, managed plans — every revenue source depends on her getting comfortable charging. Solving this is partially design (payment UX that feels like community contribution, not transaction) and partially narrative (framing her work as a value exchange). Cannot be solved with code alone. |
| **A2** | SOW murkiness — 4 projects without delineation | She is taking money from current clients but losing scope visibility. Direct downstream of A1: if she were comfortable charging, she would have structured scopes. Solution: rate sheet + automated proposal packaging. |

**Pattern:** these are not really "automate this workflow" problems. They are **business-design problems** disguised as ops complaints. We must address them or everything else we build will sit on top of a broken revenue layer.

### Category B — Time-leak operations (high leverage)

These cost her hours per week today. Each is a discrete workflow.

| # | Pain point | Why it ranks here | Discrete? |
|---|---|---|---|
| **B1** | Community membership management (handwritten list of operational tasks) | Recurring weekly load. Direct hours-per-week reclaim. We do not yet have the actual list — gate dependency. | Yes |
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
B1 (community membership ops) ──► requires the actual list from Rosalinda (open question #9 in discovery)
   │
   └──► partially depends on A1 — many membership ops tasks involve money flow

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

**Three pain points are independent and ready to build:** B2, B3, D2.
**Three depend on Rosalinda providing data or making decisions:** B1, D1, A1.
**Two are a pipeline with two outputs:** C1 + C2.

---

## Structural observations (read these before scoping)

### 1. The revenue layer is the load-bearing constraint

Everything we build sits on top of Rosalinda's willingness to receive money. If we build the Tool Barn rental system and she gives away every rental, we built nothing. If we build the membership site and she refuses to enforce the payment gate, we built nothing.

**Implication for Implementation scope:** at least one of our 2–3 Implementation workflows must directly address A1. A "payment psychology" deliverable cannot stand alone (it is half product design, half coaching), so it has to be embedded in a workflow that requires payment to function — like the membership system or the Tool Barn rental booking.

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
| A1 — Can't take money | Business design | Indirect (unblocks $) | Very high | Hard — narrative, not visible | No (everything depends on it) |
| A2 — SOW murkiness | Business design | 1–2 (proposal time) | Medium (better scope = better margin) | Medium | Depends on A1 |
| B1 — Community ops | Time-leak ops | TBD (need list) | Low | Medium | Blocked (need list) |
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
