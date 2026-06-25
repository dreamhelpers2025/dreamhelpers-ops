# Market Landscape Report

**Status:** Week 1 Tue · consolidated synthesis
**Owner:** Both founders
**Purpose:** Translate the customer-service and automation-stack research into business decisions — how we position, when we recommend what, and where we make money. This is the doc to re-read before any client conversation.

## Glossary (read once, then skim)

- **Per-seat platform** — software priced per logged-in user per month.
- **Per-resolution AI** — AI features priced per ticket the AI handles, regardless of seats. The more the AI does, the more you pay. Range as of 2026: $0.50 (HubSpot Breeze) to $2.00 (Zendesk).
- **Per-task tool** — automation platforms (Zapier, Make) priced per action carried out.
- **Per-execution tool** — automation platforms (n8n, Shopify Flow) priced per whole workflow run regardless of step count.
- **The wedge** — the specific gap in the market we sell into.
- **Deflection** — preventing a ticket from reaching a billable AI resolution or a human, usually by routing the customer through self-service first.
- **The audit** — our $750 paid discovery engagement (see business model §3.1).
- **ICP** (Ideal Client Profile) — the type of business we are best positioned to sell to.
- **Partner program** — vendor referral programs (Gorgias, Richpanel, etc.) that pay us 10–20% recurring on clients we send their way.
- **Tailwind** — a trend that helps us. The opposite of a headwind.
- **Sidecar workflow** — a custom system we build that sits beside the client's existing tool, doing work the tool can't do alone.
- **Founder Liberation** — our internal product-line codename. Retired as external branding in v0.3 (see business model §2).
- **Acronyms used here** are explained in the main business-model doc's glossary: ICP, ROI, CAC, SaaS, KB, API, GMV (Gross Merchandise Value, total dollar value of goods sold).

---

## The market in one paragraph

Customer service software has bifurcated into **per-seat platforms** (Gorgias, Richpanel, Intercom, Zendesk) and **AI-as-add-on** that the platforms charge per resolution ($0.90–$2.00 each). Automation software has bifurcated into **per-task** tools (Zapier, Make) and **per-execution** tools (n8n, Shopify Flow). Most founder-run businesses are over-buying on the platform side because per-resolution AI economics get worse as volume grows, and under-buying on the automation side because they default to Zapier when Make or n8n would cost 1/5 as much. We make money in the gap.

---

## Two market truths that shape our offer

### Truth 1: Per-resolution AI pricing is a tax on success

If a client's AI handles 10% of tickets, $0.99/resolution is a rounding error. If it handles 60%, it's the second-largest line item after payroll. Every platform — Gorgias, Intercom, Zendesk — has converged on this model because it's how *they* win. It is structurally bad for the customer.

**What this means for our pitch:** "Most platforms charge you more as the AI gets better. We design systems that get cheaper as they scale." This is true and concrete. We design upstream deflection (KB search, pre-routing, classification) that reduces the number of tickets that ever hit a billable AI resolution. The math compounds.

### Truth 2: Most founders don't know what their automation costs

Zapier customers on the $103/mo Team plan are often doing work that fits in Make's $16/mo Pro plan, or n8n's $7/mo self-hosted. We've seen this in every audit anyone has written about. The founder doesn't have the time or specialist knowledge to compare. They picked Zapier because they knew the name.

**What this means for our pitch:** the time audit reliably surfaces ~$500–$2,000/year in tool spend that can be reallocated by switching automation platforms. That savings often funds the implementation.

---

## How this maps to our service offerings

### For the Audit (§3.1 of business model)

Every audit will include three predictable findings:

1. **Customer service platform inefficiency.** Either the client is on the wrong tier, missing free AI features, or paying for per-resolution AI that could be deflected upstream. Average finding: 10–30% of their support tooling spend can be reclaimed without changing platforms.
2. **Automation platform mismatch.** Client is on Zapier doing work that fits Make or n8n. Average finding: $500–$2,000/year savings.
3. **Internal workflows that should be in Shopify Flow.** Free, native, almost always overlooked because nobody told them Flow v4 launched in 2026 and is now genuinely capable.

These three findings alone justify the $750 audit. Everything we surface beyond that is bonus.

### For the Implementation (§3.2 of business model)

The implementation menu maps almost directly to the build environments in landscape doc #3:

| Implementation type | Built on | Anchor price |
|---|---|---|
| Shopify-native workflows (tagging, routing, flagging) | Shopify Flow | Bundled into a $2,500 scope |
| Cross-tool simple workflows | Make Core or Zapier Pro | $2,500 |
| Customer service AI triage + draft replies | Claude Code → routed into Gorgias/Help Scout/Gmail | $4,000 |
| Reporting + dashboards | Claude Code → static dashboard on a $5/mo VPS or Vercel | $4,500 |
| Complex multi-flow build (3–4 automations + dashboard) | Mix of Make + n8n + Claude Code | $6,000 |

### For Managed Services (§3.3 of business model)

The monthly health report is where landscape knowledge converts into retention:

- We watch the client's automation platform usage and flag when they're approaching task limits (and overage 1.25× pricing)
- We watch their customer service AI resolution count and flag when it justifies switching to a different platform
- We watch for tool consolidation opportunities as Shopify Flow keeps absorbing third-party use cases (Flow v5 will absorb more — this is a tailwind)

---

## Positioning language we can use externally

Drawn from the truths above. These are copy-tested-by-instinct, not by data — use as starting points.

- **"We build customer service systems that get cheaper as they scale."**
- **"Most founders are paying $1,000/month in automation fees for $200/month of work. We fix that on the audit."**
- **"Shopify Flow does more than you think. Most of what your business runs on Zapier doesn't need to."**
- **"We don't sell software. We install the AI operating layer between your existing tools."**

---

## Decisions this research closes

| Decision | Answer | Confidence |
|---|---|---|
| Will we sell Zendesk migrations? | No. Not our ICP. | High |
| Will we sell Gorgias setup as a standalone offering? | No — bundled into Implementation only | High |
| Default automation platform we recommend to new clients? | Make Core or Pro for cross-tool; Shopify Flow for in-store; n8n when self-hosting is acceptable | High |
| Will we sell Intercom for ecommerce clients? | Only when client is already on it; new ecommerce clients should pick Gorgias or Richpanel | High |
| Is Richpanel a real alternative to Gorgias, or a footnote? | Real alternative. We recommend it when client expects > 50% AI ticket share. | Medium |
| When is Claude Code the right build environment vs Make? | When the workflow needs custom business logic, batch data processing, or AI orchestration beyond what Make's AI modules can do. Otherwise, Make. | High |

---

## Decisions still open (Mon 6/22 working session)

| Question | Why it matters |
|---|---|
| Do we get formal partner status with any of these platforms? | Gorgias and Richpanel both have partner programs that pay 10–20% recurring on referred clients. Worth $2K–$5K/yr per active client. Sign-up overhead is real. |
| Do we develop a Make.com template library we sell separately, or bundle into Implementation? | Templates as a one-time $99 product could fund outbound. Adds productization complexity. |
| Do we build a "Founder Liberation deflection layer" as a productized add-on? | Per-resolution-cost story is so consistent across platforms that a generic upstream deflection product might be the case-study driver. Worth piloting once. |

---

## Risk: the market is moving under us

- Shopify Flow keeps getting better. The "we'll replace your Zapier" pitch will weaken over time as Flow absorbs more use cases. Counter: we move up-stack toward AI orchestration and audits as Flow eats the simpler work.
- Intercom Fin and Zendesk AI Agents are converging on the same per-resolution price (~$0.99–$2). If the price floor drops to $0.20 or lower, our "deflection layer" story weakens. Counter: at $0.20/resolution the *implementation* business gets more attractive because building one becomes economically defensible for smaller clients.
- Make and n8n keep adding AI features. Eventually one of them ships a hosted classifier good enough to replace 80% of what we'd build in Claude Code. We'd then be using *their* tool to deliver the same outcome — fine, but our differentiator narrows.

We re-read this section in the Day-60 retro and adjust positioning.

---

## Sources

See [02-customer-service-automation-landscape.md](02-customer-service-automation-landscape.md#sources) and [03-automation-stack-landscape.md](03-automation-stack-landscape.md#sources) for primary research links.
