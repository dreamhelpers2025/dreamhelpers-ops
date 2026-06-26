# Template — Workflow Map

**Status:** Standard methodology + blank template. Built once per audit, on Day 2.
**Purpose:** Capture how the client's business currently operates. We do not redesign anything in this artifact — we describe the present. The artifact gives us a foundation for the pain point map and the opportunity matrix, and prevents the audit from being founded on assumptions instead of observation.
**Inputs:** discovery questionnaire (`01`), Day 0 call debrief, Day 1 client data exports.
**Output:** four diagrams + one narrative, captured in a single doc per client.

## Glossary (read once, then skim)

- **Workflow** — a sequence of steps that produce a specific outcome (e.g., "process a workshop signup," "respond to a customer email").
- **Actor** — anyone or anything that takes action in a workflow. Could be a human (founder, employee, customer) or a system (Shopify, Gmail, Stripe).
- **Swim lane diagram** — a diagram where each horizontal lane represents one actor, and the workflow flows left-to-right showing what each actor does and when.
- **System context diagram** — a diagram showing which systems / tools talk to which other systems, and what data flows between them.
- **Time-block diagram** — a weekly calendar view showing where the founder's hours actually go.
- **Money flow diagram** — a directed graph showing where revenue comes from, where money is spent, and the path of every dollar.
- **Touch point** — a place where the human has to act manually that could potentially be automated or eliminated.

---

## Methodology — how to build the four diagrams

Each audit produces four diagrams. They're produced in this order because each builds on the previous.

### Diagram 1 — Swim lane workflow diagrams (one per major workflow)

**What it captures:** the step-by-step flow of each major recurring operation. Who acts, what they do, in what sequence.

**How to identify major workflows:** start from the discovery questionnaire B2 ("workflow that eats the most time") and D2 ("most common customer reasons to reach out"). Expect 4–8 major workflows per client.

**Standard format (markdown table):**

```
| Actor | Step 1 | Step 2 | Step 3 | Step 4 | Step 5 |
|---|---|---|---|---|---|
| Customer | Submits inquiry | — | Receives response | — | — |
| Founder | — | Reads inquiry | Drafts response | Sends response | — |
| System (Gmail) | Routes inquiry | — | — | Delivers | Archives |
```

**For each workflow document:**
- Workflow name
- Trigger (what starts it)
- Frequency (how often it runs)
- Average duration (time from trigger to completion)
- Manual touch points (steps that require human action)
- Failure modes (what goes wrong)

### Diagram 2 — System context diagram

**What it captures:** which tools the client pays for, what data lives in each one, and how data moves between them (or fails to).

**Standard format (markdown — describe nodes and edges):**

```
NODES (systems):
- Shopify (orders, customers, products)
- Klaviyo (email list, flows, segments)
- Gorgias (support tickets, macros)
- Stripe (payments, subscriptions)
- Google Sheets (manual inventory tracking)
- Gmail (founder's inbox — all customer email)

EDGES (data flows):
- Shopify → Klaviyo (customer signup events, order events)
- Shopify → Gorgias (order lookup on ticket open)
- Gmail → Gorgias (manual forwarding — broken automation)
- Stripe ↔ Shopify (payment processing)
- Google Sheets → (nothing) (manual data island)
```

**Key questions to surface:**
- Which systems exchange data automatically?
- Which systems require manual data movement?
- Where are the data islands (no integration)?
- Where is the same data duplicated across systems?
- What's the source of truth for: customers, orders, content, finances?

### Diagram 3 — Weekly time-block diagram

**What it captures:** how the founder's hours actually distribute across the week. Compares stated allocation (from questionnaire B1) to inferred reality (from calendar export, email volume by day, etc.).

**Standard format (markdown — daily blocks):**

```
| Day | Block 1 | Block 2 | Block 3 | Block 4 |
|---|---|---|---|---|
| Mon | 6–9am: Email triage | 9am–12pm: Service delivery | 12–3pm: Admin | 3–6pm: Operations |
| Tue | ... | ... | ... | ... |
```

**Annotate each block with:**
- The hours it consumes
- Whether the founder considers it "high-value" or "low-value"
- Whether the block is fixed (must happen) or flexible (could move)

### Diagram 4 — Money flow diagram

**What it captures:** sources of revenue, destinations of spend, and the path of every dollar through the business.

**Standard format (markdown — revenue sources, then spend categories):**

```
REVENUE SOURCES (with approximate % of total):
- 60% — Workshop fees ($X average, ~Y per month)
- 25% — Subscription memberships (Tier breakdown)
- 10% — Product sales (compost, soil kits)
- 5% — Other (consulting, etc.)

SPEND CATEGORIES (with approximate monthly $):
- Software / SaaS: $X total ($Y on which tools)
- Marketing: $X
- VA / contractor: $X
- Founder draw / salary: $X
- Other operational: $X
```

**Surface:**
- Single biggest revenue dependency (and concentration risk)
- Lowest-margin offering (compared to time it takes)
- Highest-leverage spending category (where small increases produce outsized return)
- Where the founder is leaking money she doesn't know about

---

## How to use this template

1. Copy this file into the per-engagement folder (e.g., `deliverables/pilot/05-soil-detective-workflow-map.md` for Soil Detective; `deliverables/clients/<client>/workflow-map.md` for paid clients).
2. Fill in the four sections below using the methodology above.
3. Run §11 Tier A QC: read every step, confirm every actor + system + claim traces back to a quote in the questionnaire or call debrief.
4. Run §11 Tier B QC on the time block and money flow diagrams: any number on those gets independently re-derived from raw source data (calendar export, financial summary, etc.).
5. Use the output as the input to the pain point map (`templates/03-pain-point-map.md`).

---

## BLANK TEMPLATE STARTS HERE — fill in per audit

# [Client name] — Workflow Map

**Built from:** discovery questionnaire (date), Day 0 call (date), Day 1 data uploads (list).
**Date built:** YYYY-MM-DD
**Owner:** [auditor name]

## Section 1 — Major workflows (swim lanes)

For each workflow, list: name, trigger, frequency, average duration, swim lane table, manual touch points, failure modes.

### Workflow 1: [name]

- **Trigger:**
- **Frequency:**
- **Average duration:**

| Actor | Step 1 | Step 2 | Step 3 | Step 4 |
|---|---|---|---|---|
| | | | | |

- **Manual touch points:**
- **Failure modes:**

### Workflow 2: [name]
[repeat]

### [4–8 workflows total]

## Section 2 — System context diagram

**Systems in use:**
- [system name]: [what lives there, monthly cost if known]

**Data flows:**
- [system A] → [system B]: [what flows, automatic or manual]

**Data islands (no integration in or out):**
- [system]: [why this is a problem]

**Source of truth per data type:**
- Customers: [system]
- Orders / appointments: [system]
- Financial: [system]
- Content: [system]

## Section 3 — Weekly time block

| Day | Block 1 | Block 2 | Block 3 | Block 4 |
|---|---|---|---|---|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

**Observations:**
- High-value blocks per week:
- Low-value blocks per week:
- Founder's stated vs. inferred mismatch:

## Section 4 — Money flow

**Revenue sources (% of total + approximate monthly $):**

| Source | % | Approximate monthly $ |
|---|---:|---:|
| | | |

**Spend (monthly $ by category):**

| Category | Monthly $ |
|---|---:|
| Software / SaaS | |
| Marketing | |
| Contractor / VA | |
| Founder draw | |
| Other operational | |

**Observations:**
- Biggest revenue dependency:
- Lowest-margin offering vs. time:
- Highest-leverage spending category:
- Leaks the founder may not know about:

## Section 5 — Cross-cutting observations

A 3–5 sentence narrative summarizing what the four diagrams revealed *together* that no single diagram would show alone. This is the artifact's value — the connections.

## QC log

- Tier A pass: [auditor name], [date], [issues found and resolved]
- Tier B pass: [auditor name], [date], [numbers re-derived, source documents referenced]
