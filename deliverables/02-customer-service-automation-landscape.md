# Customer Service Automation Landscape

**Status:** Week 1 Tue · competitive analysis
**Owner:** Both founders
**Purpose:** When a client says "we need help with customer service," we need to know which platform to recommend, when, and why. This doc is our internal cheat sheet. It is **not** a client-facing deliverable.
**Sources:** all pricing/feature data current as of June 2026; sources listed at bottom.

## Glossary (read once, then skim)

- **TL;DR** ("Too Long; Didn't Read") — a quick summary at the top of a doc.
- **Per-seat pricing** — software priced per logged-in user per month. Standard for help-desk platforms.
- **Per-resolution pricing** — software priced per ticket the AI handles successfully. The more your AI works, the more you pay.
- **ARR** (Annual Recurring Revenue) — total revenue per year from subscriptions.
- **ICP** (Ideal Client Profile) — the type of business we are best positioned to sell to.
- **KB** (Knowledge Base) — a searchable collection of articles and policies an AI or human draws on to answer questions.
- **API** (Application Programming Interface) — how software systems talk to each other programmatically.
- **Ticket** — a single customer support request (email, chat, form submission).
- **Deflection** — preventing a ticket from ever reaching a billable AI resolution or a human, usually by sending the customer to a KB article or a self-service workflow first.
- **Macros** — saved canned reply templates inside a help desk.
- **Omnichannel** — supporting multiple channels in one inbox (email + chat + WhatsApp + social).
- **Triage** — the upstream step of categorizing and routing tickets before reply.
- **Gorgias** — Shopify-native help desk; best for ecommerce stores with order-status-heavy support.
- **Richpanel** — newer Gorgias alternative with AI included in the seat price instead of charged per resolution.
- **Intercom + Fin** — premium omnichannel chat tool; Fin is Intercom's AI agent priced per resolved conversation.
- **Zendesk** — legacy enterprise help desk; complex pricing; the dominant platform we usually don't recommend new clients move to.
- **Klaviyo** — ecommerce email-marketing software most Shopify brands use.
- **Shopify** — the most common ecommerce platform for online stores.
- **Sidecar workflow** — a custom system we build that sits beside the client's existing tool, doing work the tool can't do alone.

---

## TL;DR — when to recommend what

| Client profile | Recommend | Why |
|---|---|---|
| Shopify store, $500K–$5M ARR, founder-run support, < 1,000 tickets/mo | **Gorgias Basic + Gorgias AI Agent (modest)** | Built for Shopify, best-in-class storefront actions, predictable cost at this volume |
| Shopify store with heavy AI ambition, wants AI to handle 50%+ tickets | **Richpanel Pro** | AI resolution included in seat price, not pay-per-resolution — economics flip in favor of AI volume |
| Service business with global / multi-channel needs (chat + email + WhatsApp) | **Intercom Essential + Fin** | Best omnichannel UX, but watch the $0.99/resolution math |
| Already on Zendesk, > 5 agents, mature org | **Stay, layer in AI Agents carefully** | Migration cost > savings; AI add-on math is brutal at low volume |
| Brand-new business, < 100 tickets/mo | **Don't sell a platform** — recommend Gmail + a Claude Code triage workflow built by us | Per-resolution pricing makes any platform's AI a loss at this volume |

---

## The four platforms compared

### Pricing model snapshot

| Platform | Per-seat | Per-AI-action | Notable cost gotcha |
|---|---|---|---|
| **Gorgias** | $10 (Starter, 50 tickets) → $900 (Advanced, 5,000 tickets) | $0.90/AI interaction on annual ($1.00 monthly), $1.50 over-cap. Each AI interaction also counts as a ticket. | Tickets and AI interactions double-count. Real spend often 2× the headline plan price. |
| **Richpanel** | Help Desk $20 → Pro $69 → Pro Max $99 per agent/mo | $0.99 per AI resolution as add-on; AI Assist $39/user/mo for drafts/classification | Pro tier *includes* AI automation in seat price — best economics for high-AI-volume clients |
| **Intercom + Fin** | Essential $29 → Advanced $85 → Expert $132 per seat/mo (annual) | Fin: $0.99 per resolution, 50/mo minimum, no volume discounts. Qualifications are $9.99 each. | No volume discounts. Two-product purchase (Intercom seat + Fin) needed unless using Fin standalone. |
| **Zendesk Suite** | Suite Team $55 → Suite Professional $115 per agent/mo | AI Agents at $1.50–$2.00/verified resolution. May 2026: Assisted Escalation and Contained Resolution are now free; only Verified Resolutions draw from allowance. | Suite Professional + AI Agents + integrations easily hits $265+ per agent/mo all-in. Enterprise economics. |

### Best-fit client per platform

**Gorgias** — Shopify-native. Designed around order lookups, refunds, returns, subscription changes. If the client's stack is Shopify + Klaviyo, Gorgias slots in with near-zero friction. AI Agent is decent but cost can run away. Sweet spot: Shopify stores doing 200–2,000 tickets/mo where 30–60% of tickets are "where's my order" type questions.

**Richpanel** — Closest to Gorgias on Shopify fit but with a meaningfully different AI pricing model. Pro plan ($69/seat) includes AI automation, not a per-resolution add-on. This means as AI ticket-share grows, the math gets *better* (not worse) relative to Gorgias. Newer, smaller market share. Risk: smaller ecosystem, fewer third-party integrations.

**Intercom + Fin AI Agent** — Premium omnichannel. Best when the client cares about live chat / messenger experience across web + mobile + WhatsApp. Fin is the strongest "general" AI agent and runs against an external KB even without paying for Intercom seats. Sweet spot: service businesses doing chat-heavy support across multiple channels. Avoid for low-volume — the 50/mo Fin minimum is dead weight.

**Zendesk** — Legacy incumbent. We don't sell migrations *to* Zendesk for our ICP. We do help clients already on Zendesk layer AI Agents without blowing up their budget. The 2026 restructure (Assisted Escalation + Contained Resolution moving to free) reduces some of the historical pain, but Verified Resolution charges and the Advanced AI add-on still make this expensive at sub-enterprise scale.

---

## Weaknesses we exploit

Every platform has a gap that we, as a services firm with Claude as the workhorse, can fill at lower cost than the platform's native AI tier. These are pitch hooks:

- **Gorgias:** Setup of macros, tags, AI policies is brittle and labor-intensive. We sell "Gorgias setup + tuning" implementations. The platform's own AI is expensive; we can build cheaper bespoke triage workflows that hand off to Gorgias only for high-confidence sends.
- **Richpanel:** Newer; many clients have not heard of it. We bring it to clients as a Gorgias alternative when AI volume is high. Also: Self-Service Portal ($100/mo) is easily replaced by a custom dashboard we build once.
- **Intercom:** Per-resolution price means every percentage point of automation has a cost ceiling. We build deflection layers (KB search, pre-qualification workflows) that route only the gnarliest tickets to Fin, cutting resolution count.
- **Zendesk:** Everyone hates Zendesk's pricing. Most clients are stuck on it for compliance or legacy reasons. We sell "Zendesk + sidecar Claude workflow" — keep Zendesk for ticketing, run our own AI triage in front of it for free.

---

## What we DON'T need to learn deeply

We are not selling a "we will implement Zendesk for you" service. We are selling Founder Liberation. So we need *operational* understanding of these tools — enough to:

- Recognize them in a client's stack
- Understand their billing dynamics so we can spot waste
- Connect to them via API for our own automations
- Build sidecar workflows that wrap their data without ripping them out

We do NOT need to be certified admins, run multi-day setup engagements, or compete with the platforms' own pro services. That's a different business.

---

## Sources

- [Gorgias Pricing 2026 — Chatarmin](https://chatarmin.com/en/blog/gorgias-pricing)
- [Gorgias Pricing — Gorgias official](https://www.gorgias.com/pricing)
- [Gorgias AI Pricing Guide 2026 — Stormy AI](https://stormy.ai/blog/gorgias-ai-pricing-guide-2026)
- [Richpanel Pro pricing — Richpanel official](https://www.richpanel.com/)
- [Richpanel Review 2026 — The AI Agent Index](https://theaiagentindex.com/agents/richpanel)
- [Richpanel Pricing 2026 — Chatarmin](https://chatarmin.com/en/blog/richpanel-pricing)
- [Intercom Pricing — Intercom official](https://www.intercom.com/pricing)
- [Fin AI Agent Pricing — fin.ai](https://fin.ai/pricing)
- [Intercom Fin AI Agent Pricing 2026 — Minami](https://minami.ai/blog/intercom-fin-ai-agent-pricing)
- [Zendesk Pricing Plans — Zendesk official](https://www.zendesk.com/pricing/)
- [Zendesk AI agents 2026 — eesel AI](https://www.eesel.ai/blog/a-complete-guide-to-zendesk-ai-agents-setup-costs-and-best-practices)
- [Zendesk AI Pricing 2026 — getmacha](https://www.getmacha.com/blog/zendesk-ai-pricing-complete-breakdown-by-plan-2025)
