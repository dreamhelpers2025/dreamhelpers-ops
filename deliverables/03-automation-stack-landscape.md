# Automation Stack Landscape

**Status:** Week 1 Tue · tool comparison
**Owner:** Both founders
**Purpose:** The workflows we build for clients have to live somewhere. This doc maps where to build what, what each tool costs, and where each one breaks. This is our internal build-decision cheat sheet.
**Sources:** all pricing/feature data current as of June 2026; sources listed at bottom.

## Glossary (read once, then skim)

- **TL;DR** ("Too Long; Didn't Read") — quick summary.
- **Workflow** — an automated process: "when X happens, do Y, Z, then if condition, do W."
- **Task / Operation / Execution** — different platforms count workflow runs differently. Zapier counts every action (a 5-step Zap = 5 tasks). Make counts each module run as an operation. n8n counts an entire workflow run as one execution. Same work, very different bills.
- **No-code** — building software through drag-and-drop visual tools instead of writing code.
- **Self-hosted** — installing software yourself on a server you rent (e.g., a $5/mo VPS) rather than paying a SaaS subscription.
- **VPS** (Virtual Private Server) — a small rented cloud computer ($3–$10/mo) you can use to host workflows or apps.
- **Shopify Flow** — Shopify's built-in automation tool, free on every plan. Handles in-Shopify rules.
- **Sidekick** — Shopify's built-in AI assistant that can write Flow workflows from plain English.
- **Zapier** — the most popular no-code automation tool. Largest app catalog. Most expensive per action.
- **Make.com** — Zapier's visual competitor; cheaper per action, better for branching logic.
- **n8n** — open-source automation tool you can self-host for ~$5/mo. Cheapest per workflow run.
- **Claude Code** — Anthropic's CLI tool for building software with AI. Our internal workhorse for anything custom.
- **CLI** (Command Line Interface) — a text-based way to control software, as opposed to a graphical interface.
- **SaaS** (Software as a Service) — software you pay for monthly instead of buying outright.
- **CRM** (Customer Relationship Management) — software for tracking sales leads and customer history (HubSpot, Salesforce, etc.).
- **SSO / SCIM** — enterprise sign-on and user-provisioning standards. Mostly only matter at large companies.
- **SaaS bill** — the recurring monthly cost a business pays across all its software subscriptions.

---

## TL;DR — where to build what

| Workflow type | Build it on | Why |
|---|---|---|
| In-Shopify rules (tag this order, flag this customer, route this fulfillment) | **Shopify Flow** | Free on all plans now, native event access, zero new monthly cost for client |
| Cross-tool simple connectors (Shopify → email, form → CRM) | **Zapier Pro $29.99** | Largest app ecosystem, fastest to wire, predictable per-task billing |
| Complex multi-step or branching workflows | **Make Core $9 or Pro $16** | Operations are cheaper than Zapier tasks, visual branching is better |
| High-volume, AI-heavy, or "we don't want a SaaS bill" | **n8n self-hosted ($5–7/mo VPS)** | Unlimited executions, no per-task fees, full control |
| Custom logic, batch processing, deep integrations | **Claude Code (internal build tool)** | Our workhorse — see §5 |
| One-off transactional automations | **Shopify Flow** if possible, **Zapier** if not | Use the cheapest tool that does the job |

---

## The five build environments

### 1. Shopify Flow — free, native, first thing we check

**Pricing:** Free on every Shopify plan including Basic (as of 2026).

**What changed in 2026:** Flow v4 added native multi-branch logic and 30-day time delays. Flow now handles 70–80% of in-store automation tasks that previously required Zapier or Mesa.

**Strengths:**
- Direct access to Shopify's internal event system (no third-party can match this)
- Zero monthly cost added to client
- Survives any tool migration we make later

**Limits:**
- Shopify-internal only. Can't talk to the client's Gmail, Slack, or HubSpot without external middleware.
- No multi-step debugging UX worth the name.

**When to use it:** Always check first. If the workflow is "when X happens in Shopify, do Y in Shopify," it goes here.

---

### 2. Zapier — broadest reach, highest cost per action

**Pricing 2026:**
- Free: 100 tasks/mo (2-step Zaps only)
- Professional: $29.99/mo for 750 tasks (slider goes up to 2M)
- Team: $103.50/mo for 2,000 tasks, up to 25 users
- Annual billing saves 33%
- Over-limit: billed at ~1.25× the base task rate (Zaps keep running)

**One task = one action.** A 5-step Zap that runs once uses 5 tasks. This is the expensive end of the market.

**Strengths:**
- 7,000+ app integrations — broadest ecosystem
- Fastest to prototype something simple
- Errors and retries are well-handled out of the box
- Most clients have heard of it; low education cost

**Weaknesses:**
- Per-task pricing punishes high-volume or multi-step workflows
- Visual builder gets unwieldy on complex branches
- No native "wait until X" beyond simple delays

**When to use it:** First-touch connectors. Email-form-to-CRM, Slack notifications, Calendly-to-X. Anything where the workflow is < 5 steps and runs < 1,000 times/month per Zap.

---

### 3. Make.com — Zapier's better-economics cousin

**Pricing 2026:**
- Free: 1,000 credits/mo, 2 active scenarios, 15-min min schedule
- Core: $9/mo (10,000 credits, unlimited scenarios, 1-min min)
- Pro: $16/mo (priority execution, AI agents, scenario inputs, custom variables)
- Teams: $29/mo (team roles, shared templates)
- Annual billing saves ~15%
- **Aug 2025:** switched terminology from "operations" to "credits" — AI-related modules can consume credits differently

**Strengths:**
- An operation is one module execution; a 5-step scenario uses 5 ops, but ops are cheaper than Zapier tasks at every tier
- Visual canvas with native branching, error handling, and iterators is genuinely better than Zapier for complex flows
- 3,000+ integrations — catches most things

**Weaknesses:**
- Steeper learning curve than Zapier
- Smaller ecosystem; some niche integrations missing
- Free tier minimum 15-min scheduling is too slow for real-time use
- AI module credit consumption is unpredictable

**When to use it:** Workflows with branching, iteration over arrays, error handling that matters, or > 5 steps. Default to Make over Zapier when the client is comfortable learning a visual tool.

---

### 4. n8n — the floor on per-task pricing

**Pricing 2026:**
- **Self-hosted:** Free software, ~$3–7/mo for a VPS or managed host
- **Cloud Starter:** €24/mo for 2,500 executions
- **Cloud Pro:** €60/mo for 10,000 executions
- **Cloud Business:** €800/mo (SSO, 40K executions)
- Annual billing saves ~17%

**Pricing model that matters:** an execution is one full workflow run regardless of how many steps or how much data. A 50-step workflow run once = 1 execution. This is the cheapest unit cost in the market.

**Strengths:**
- Self-hosted = unlimited executions for the cost of a $5/mo VPS
- Execution-based pricing vs. Zapier's task-based pricing favors complex workflows
- Open source, so we own the workflows; client owns the infrastructure
- Strong for AI orchestration

**Weaknesses:**
- Self-hosting adds operational overhead — client needs *someone* who can keep a VPS alive
- Cloud version hard-stops when you hit the execution cap (no grace period, no overage) — brutal failure mode
- Smaller integration library than Zapier or Make

**When to use it:**
- When the workflow runs many times per day (cost crossover vs. Zapier happens around 1,000 monthly tasks)
- When the client is comfortable with a managed VPS or already has technical staff
- When we're building something we want to own the IP of — n8n workflows can be exported and re-installed at another client's deployment

---

### 5. Claude Code — our build environment, not a client tool

**What it is:** Anthropic's CLI/SDK for building AI agents that read files, run commands, write code, and orchestrate other tools. The Founder Liberation OS app you're reading from was built with Claude Code in roughly 90 minutes. This is our differential capability.

**Pricing:** Subscription via Claude.ai Max plan (~$100–200/mo per founder) or API-metered. Not billed to clients — this is our internal force multiplier.

**Strengths:**
- Builds custom Python/JS connectors, scrapers, classifiers, dashboards
- Can directly call any API the client uses (Shopify, Gmail, Klaviyo, Stripe, anything with REST)
- No per-action pricing once the workflow is built — it runs on a $5/mo VPS or as a scheduled task on the client's existing infrastructure
- Lets us build things that don't fit in Zapier/Make/n8n's mental model (e.g., "read the last 30 days of email and produce a clustered taxonomy")

**Weaknesses:**
- Code, not a no-code tool — client cannot self-edit unless we hand off cleanly
- Operationally heavier: needs hosting, monitoring, basic devops
- Less observable than a visual scenario in Make or Zapier — debugging requires logs

**When to use it:**
- Bespoke data analysis (audit phase: read all the client's email, classify, summarize)
- Custom classifiers that need to run cheaply at scale
- Anything that needs to talk to multiple APIs in a single transaction with custom business logic
- Building the audit and dashboard deliverables

**Rule:** Claude Code is our build environment. The deliverable we hand to the client should run on tools they understand or that have a clear "this just runs on a server we set up for you" story.

---

## Decision tree (for use in the audit phase)

```
Does the workflow stay entirely inside Shopify?
├─ YES → Shopify Flow
└─ NO → Does it run < 1,000 times/month with < 5 steps?
        ├─ YES → Zapier
        └─ NO → Does it have branching or > 5 steps?
                ├─ YES → Does it run < 10,000 times/month?
                │       ├─ YES → Make
                │       └─ NO → n8n (self-hosted preferred)
                └─ NO → Does it require custom business logic, AI orchestration,
                        or batch data processing?
                        ├─ YES → Claude Code → handoff as scheduled task
                        └─ NO → reconsider; one of the above will fit
```

---

## Cost crossover points (rules of thumb)

| Volume | Cheapest |
|---|---|
| < 100 actions/mo | Free tiers of Zapier or Make |
| 100–1,000 actions/mo | Make Core ($9) |
| 1,000–10,000 actions/mo | Make Pro ($16) or n8n Cloud Starter |
| 10,000+ actions/mo | n8n self-hosted |
| Anything custom-logic-heavy | Claude Code |

These crossovers are where we earn money — clients on Zapier doing 5,000 tasks/mo are paying $103/mo; moving them to Make Pro cuts that to $16. That's a $1,000+/year win we point at in the audit.

---

## Sources

- [Shopify Flow 2026 review — EcomVerdict](https://ecomverdict.com/reviews/shopify-flow-review/)
- [Shopify Flow Alternatives — Automation Atlas](https://automationatlas.io/answers/best-shopify-flow-alternatives-2026/)
- [Zapier Pricing — Zapier official](https://zapier.com/pricing)
- [Zapier Pricing 2026 — Automation Atlas](https://automationatlas.io/answers/zapier-pricing-explained-2026/)
- [Make.com Pricing — Make official](https://www.make.com/en/pricing)
- [Make.com Pricing 2026 — Lindy](https://www.lindy.ai/blog/make-com-pricing)
- [n8n Plans and Pricing — n8n official](https://n8n.io/pricing/)
- [n8n Pricing 2026 — InstaPods](https://instapods.com/blog/n8n-pricing/)
- [Real Cost of Self-Hosting n8n 2026 — ExpressTech](https://expresstech.io/the-real-cost-of-self-hosting-n8n-in-2026/)
