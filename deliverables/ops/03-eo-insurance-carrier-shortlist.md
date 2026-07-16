# Tech E&O + Cyber Insurance Carrier Shortlist

**Status:** v1 — briefing for the Monday 6/29 working session with Grant. Goal: pick 2 carriers to apply with by end of session.
**Owner:** Both founders
**Purpose:** Carry active tech E&O + cyber insurance before the first paid Implementation. Per business model v0.4 §11 and implementation methodology §"pre-kickoff hard gates," we cannot kick off any paid Implementation without this active.
**Time-to-quote:** 1–10 business days per carrier depending on complexity. Apply to 2 in parallel to preserve optionality.
**Source research date:** 2026-06-27.

## Glossary (read once, then skim)

- **E&O** (Errors & Omissions) — professional liability insurance covering mistakes in what we deliver. Also called professional indemnity.
- **Tech E&O** — E&O sub-product for technology / consulting businesses. Covers negligence in AI recommendations, code, workflow builds.
- **Cyber liability** — separate coverage for data-breach and privacy incidents. Different from E&O but usually bundled with tech E&O at our tier.
- **"Silent AI"** — an existing E&O or cyber policy that doesn't mention AI. Historically covered AI risks implicitly; carriers are aggressively removing this coverage in 2026.
- **Affirmative AI coverage** — a policy that explicitly grants coverage for AI-related claims. This is what we actually need.
- **AI exclusion** — a policy clause that explicitly excludes AI-related claims from coverage. Chubb, Travelers, Berkshire have added these to standard forms in 2026.
- **CGL** (Commercial General Liability) — separate product covering slip-and-fall type claims. Usually cheap and bundled.
- **D&O** (Directors & Officers) — protects founders personally from claims tied to management decisions. Overkill at pre-revenue.
- **Broker vs direct** — brokers (Vouch, Embroker, Founder Shield) place policies across multiple carriers. Direct carriers (Hiscox online, Coalition) write policies themselves.
- **MGA** (Managing General Agent) — an intermediary with underwriting authority on behalf of larger carriers. Coalition, Corvus, At-Bay all started as MGAs.

---

## The 2026 landscape — the load-bearing thing to understand first

**Silent AI is dying.** As of January 2026, ISO published three generative-AI exclusion endorsements (CG 40 47, CG 40 48, CG 35 08). Chubb, Travelers, and Berkshire Hathaway received state approval to add explicit AI exclusions to their standard E&O and CGL forms. Regulators approved 80%+ of these requests.

**Practical implication for us:** we cannot just buy the cheapest tech E&O policy. Standard-form tech E&O from a legacy carrier will now typically have an AI exclusion, which makes the policy useless to us — an AI-hallucination claim would be uncovered. We must specifically look for **affirmative AI coverage** OR a policy where AI is not excluded in writing.

**The three states of AI in a policy:**

1. **Affirmative AI coverage** (what we want) — policy explicitly names AI-related claims as covered. Coalition's Active Cyber Policy has this endorsement built in. Munich Re/Mosaic, Armilla at Lloyd's, Counterpart, and Testudo offer standalone AI liability products.
2. **Silent AI** (defensible but risky) — policy doesn't mention AI at all. Under legacy language, courts would likely rule AI claims covered. As renewals happen, this coverage disappears.
3. **AI-excluded** (unusable for us) — policy explicitly excludes AI-related claims. This is where the market is moving fast. Any Chubb/Travelers/Berkshire quote in 2026 must be scrutinized for this exclusion.

**Practical filter for every quote we receive:** ask the underwriter in writing "does this policy include or exclude generative AI–related claims?" Written answer only. If they hedge, kill the quote.

---

## Our specific coverage need

| Dimension | Requirement | Rationale |
|---|---|---|
| Product | Tech E&O + Cyber, bundled | We build AI workflows AND handle client data. Both risk vectors. |
| AI treatment | Affirmative AI coverage OR silent-AI without exclusion (in writing) | Per §11 of business model — hallucination risk is real, exclusion makes policy useless |
| Coverage limit | $1M per claim / $1M aggregate minimum | Vet clinics and insurance agencies rarely need higher; can increase later |
| Deductible | $2,500 acceptable, $5,000 preferred if it lowers premium | Cash-flow protection at pre-revenue |
| Retro date | Full retroactive (or at least 12 months) | Covers claims arising from earlier engagements including Soil Detective pilot |
| Territory | US + Canada | Our ICPs are US-only; Canada included for future flexibility |
| Revenue tier | <$500K (pre-revenue effectively) | Should qualify us for smallest premium tier |
| Business classification | Tech consulting / IT services / management consulting | Not "AI product company" — we sell services, not software |

**Estimated premium range:** $1,200–$3,500/year at our tier for bundled Tech E&O + Cyber at $1M/$1M. Standalone Tech E&O runs $780–$2,000/year. See [Insureon 2026 cost data](https://www.insureon.com/technology-business-insurance/cost) and [Insura.ai's Tech E&O guide](https://insura.ai/articles/tech-eo-insurance-guide).

---

## Tier 1 carriers — apply to two of these

### Coalition ⭐ recommended primary

**What they offer:** Active Cyber Policy with **explicit Affirmative AI Endorsement**. Bundled tech E&O + cyber + AI-related coverage on the same policy. Only carrier we found with the AI endorsement built in as of the search.

- **AI coverage:** Affirmative. Explicit in the policy language. Covers deepfake-enabled fraud, AI-caused security failures, and negligent AI use.
- **Coverage bundle:** Cyber + Tech E&O + executive risks + miscellaneous professional liability all in one policy.
- **Backing:** A-rated capacity on a large carrier panel — not balance-sheet-constrained like a pure-play MGA.
- **Underwriting posture:** Technology-forward. They actively monitor policyholder security posture and give discounts.
- **Application:** Direct via https://www.coalitioninc.com — likely quote in 2–5 business days.
- **Expected premium:** $1,500–$3,000/year at our tier for the bundle.
- **Best fit for us because:** the AI endorsement is the thing every other carrier is REMOVING. Coalition specifically added it. Given our entire pitch is "we deliver AI-augmented consulting," they're built for us.
- **Reference:** [Coalition Affirmative AI announcement](https://www.coalitioninc.com/announcements/coalition-adds-new-affirmative-ai-endorsement-to-cyber-policies)

**Apply here first.**

### Vouch — recommended alt-primary

**What they offer:** Startup-native tech E&O + cyber platform. Acquired by Hiscox in August 2025 (which strengthens their carrier backing). YC-portfolio go-to carrier.

- **AI coverage:** Silent AI on their standard tech E&O forms as of our research — must confirm in application whether Hiscox integration has added explicit AI exclusions or affirmative endorsements. **Ask in writing.**
- **Coverage bundle:** Tech E&O + Cyber + D&O + CGL — can pick just Tech E&O + Cyber for our tier.
- **Underwriting posture:** Startup-friendly, will write pre-revenue companies. Instant online quote for small businesses.
- **Application:** Direct via https://www.vouch.us — likely quote in 1–3 business days.
- **Expected premium:** $1,200–$2,500/year for Tech E&O + Cyber bundle at our tier.
- **Best fit because:** fastest quote, startup-friendly underwriting, Hiscox backing gives real claims capacity.
- **Watchpoint:** Post-Hiscox-acquisition, forms may be transitioning. If the underwriter cannot confirm affirmative AI coverage in writing, this becomes Tier 2.
- **Reference:** [Vouch product page](https://www.vouch.us), [Embroker-vs-Vouch comparison 2026](https://blakeinsurancegroup.com/embroker-vs-vouch/)

**Apply here second (or first if speed matters most).**

### Embroker — solid Tier 1 alternative

**What they offer:** Startup-focused broker + platform. Places policies across a panel of carriers. Y Combinator go-to alongside Vouch.

- **AI coverage:** As a broker, depends on the underlying carrier they place with. In practice they'll shop the market and can find a policy with affirmative AI coverage or silent AI.
- **Coverage bundle:** Full startup stack available; can start with just Tech E&O + Cyber.
- **Underwriting posture:** Startup-friendly. Online + human hybrid.
- **Application:** https://www.embroker.com — online quote 1–5 business days.
- **Expected premium:** $1,500–$3,500/year for bundled at our tier.
- **Best fit because:** they'll actively hunt for AI-affirmative policies, which is exactly what we need in the current market.
- **Reference:** [Vouch vs Embroker 2026](https://withbridges.com/blog/vouch-vs-embroker-vs-corgi-vertical-saas-2026)

**Solid third option if Coalition or Vouch decline.**

---

## Tier 2 carriers — backups if Tier 1 declines or the AI-coverage question hits a wall

### Hiscox direct (small business platform)

**What they offer:** Direct-to-small-business online quote portal. Fast to bind. Long-standing carrier with claims track record.

- **AI coverage:** Standard tech E&O forms increasingly exclude AI as of 2026. Likely we'd get a silent-AI policy unless we specifically request affirmative endorsement.
- **Application:** https://www.hiscox.com — instant online quote for small tech E&O.
- **Expected premium:** $780–$1,500/year for standalone tech E&O.
- **When to use:** if Coalition/Vouch/Embroker all decline, Hiscox direct is the fallback for quick coverage while we shop for a better AI-affirmative policy.

### Founder Shield (broker)

**What they offer:** High-touch broker for startups in high-risk sectors (fintech, healthtech, AI). They'll manually shop the market including specialist AI-liability carriers (Munich Re/Mosaic, Armilla, Counterpart, Testudo).

- **AI coverage:** They'll actively find affirmative-AI markets.
- **Application:** Human intake — https://foundershield.com — likely quote in 5–10 business days.
- **Expected premium:** Broker fee adds ~10–15% but they may find better underlying carrier terms.
- **When to use:** if we get declined by Tier 1 carriers or if the automated markets can't accommodate our AI-adjacent business classification.
- **Reference:** [Vouch vs Founder Shield 2026](https://blakeinsurancegroup.com/vouch-vs-founder-shield/)

### Corvus (Travelers-backed)

**What they offer:** Post-Travelers-acquisition (2024), Corvus writes tech E&O with technology-forward underwriting AND has the Travelers balance sheet behind it.

- **AI coverage:** Historically silent, but Travelers as a whole is moving to AI exclusions on standard forms in 2026 — must confirm at quote time.
- **When to use:** if we need higher coverage limits ($5M+) than Coalition or Vouch will write us at pre-revenue.

---

## Carriers to avoid (as of 2026)

- **Chubb, Travelers, Berkshire Hathaway direct** — active AI exclusions on standard tech E&O forms as of 2026. Only viable if we can specifically negotiate an affirmative-AI endorsement, which is unlikely at our tier.
- **Any generic small-business insurance aggregator** (Next Insurance, biBERK, etc.) — they'll write cheap policies but the fine print will exclude AI in 2026.
- **Any carrier that hedges when asked "does this policy include or exclude generative AI–related claims?"** — if they can't answer in writing, they don't know what they're selling.

---

## Application prep — what we need to have ready before applying

Have this info in one document before we submit to Coalition or Vouch:

**Business basics:**
- Legal entity: Dreamhelpers LLC (Washington)
- DBA: [Tack, pending Monday confirmation]
- Primary NAICS: 541611 (Administrative Management and General Management Consulting Services) or 541512 (Computer Systems Design Services). We are 541611.
- Founded: [date Dreamhelpers LLC was originally formed]
- Prior insurance: [none, or previous carrier + policy #]

**Revenue and headcount:**
- Projected revenue year 1: <$500K
- Employees: 2 founders, 0 W-2 employees, 0 contractors currently
- Client count expected in policy year: 5–15
- Average engagement size: $750–$12,000

**Business description (write once, use in every application):**
> Dreamhelpers LLC dba Tack provides AI-powered operations consulting to founder-run small businesses (veterinary clinics, insurance agencies, ecommerce brands). Services include: (1) a paid discovery audit that analyzes client operations and recommends automation opportunities, (2) fixed-fee Implementation of 1–4 automated workflows using tools the client already owns (Make, Zapier, n8n, Claude Code) plus dashboards and training materials, and (3) monthly managed services for ongoing optimization. All deliverables include human review before delivery; every client engagement includes a written liability cap equal to fees paid.

**Coverage requested:**
- Tech E&O: $1M per claim / $1M aggregate
- Cyber: $1M per claim / $1M aggregate
- Deductible: $2,500
- Retroactive date: full retroactive
- Territory: US + Canada

**Explicit questions to ask every underwriter in writing:**
1. Does this policy include coverage for claims arising from the use, output, or recommendation of generative AI or large language models (LLMs)? Yes / No / please quote the exact policy language.
2. Are there any exclusions, endorsements (e.g., ISO CG 40 47, CG 40 48, CG 35 08), or limiting provisions related to artificial intelligence?
3. What is the policy's position on "silent AI" — if the policy is silent on AI, would the carrier deny an AI-related claim on other grounds?

Save their written answers in the engagement folder. These are the load-bearing legal artifacts.

---

## Timeline and process

**This weekend (optional, self-serve):**
- Read this doc. Both founders.
- No action required.

**Monday 6/29 working session:**
- Confirm carrier priority order (recommend: Coalition first, Vouch second)
- Assign one founder to submit each application
- Confirm DBA name (Tack) so the applications use the right business name
- Confirm the "explicit questions" above will be part of every application

**Monday afternoon / Tuesday:**
- Submit Coalition application via https://www.coalitioninc.com
- Submit Vouch application via https://www.vouch.us

**Tuesday–Friday Week 2:**
- Both carriers respond with quotes (Vouch usually faster than Coalition)
- Ask the explicit AI-coverage questions in writing to whichever underwriter reaches out
- If one declines: submit Embroker as backup

**End of Week 2 (7/3):**
- Both quotes in hand
- Pick one, bind coverage
- Policy effective date should be no later than end of Week 3 so it's active for first paid Implementation

**Cost budget:**
- $1,500–$3,500/year most likely
- Payable annually, or monthly if the carrier allows (Vouch typically does; Coalition typically annual)
- Coverage lasts until we outgrow it — increase limits at Year 1 renewal based on revenue growth

---

## Non-negotiables (from business model v0.4 §11)

Whatever we bind, the policy must:

- Include affirmative AI coverage OR document in writing that AI-related claims will not be denied.
- Cover our two-founder team with no exclusions for our specific delivery model (Claude does substantive analysis, humans do interface and QC).
- Have retroactive coverage back to at least the Soil Detective pilot start date (mid-June 2026) — the pilot IS active work regardless of "beta" framing.
- Have a claims process the underwriter can walk us through before we bind.

If a quote fails any of the above, kill it and go to the next carrier.

---

## Sources

- [TechInsurance E&O cost 2026](https://www.techinsurance.com/errors-omissions-insurance/cost)
- [MoneyGeek Average E&O cost 2026](https://www.moneygeek.com/insurance/business/professional-liability/errors-and-omissions/cost/)
- [Insureon Tech Business Insurance costs](https://www.insureon.com/technology-business-insurance/cost)
- [Insura.ai Tech E&O Guide](https://insura.ai/articles/tech-eo-insurance-guide)
- [Fenwick — End of Silent AI](https://www.fenwick.com/insights/publications/end-silent-ai-emerging-ai-exclusions-coverage-fragmentation-and-practical-implications)
- [Silent AI Insurance Crisis: SME Coverage Gaps](https://www.techlifefuture.com/ai-insurance-exclusions-sme/)
- [Coalition Affirmative AI Endorsement announcement](https://www.coalitioninc.com/announcements/coalition-adds-new-affirmative-ai-endorsement-to-cyber-policies)
- [Coalition AI Coverage product page](https://www.coalitioninc.com/ai-coverage)
- [Vouch vs Embroker vs Corgi comparison](https://withbridges.com/blog/vouch-vs-embroker-vs-corgi-vertical-saas-2026)
- [Vouch vs Founder Shield 2026](https://blakeinsurancegroup.com/vouch-vs-founder-shield/)
- [Best Insurance Platforms for FinTech & SaaS 2026](https://withbridges.com/blog/best-insurance-platforms-fintech-healthtech-vertical-saas-2026)
- [Silent AI Is Dead: Six Carriers on 2026 Renewals](https://www.epcgroup.net/blog/silent-ai-is-dead-what-the-carriers-told-me)
- [Coalition vs At-Bay comparison](https://www.quotesweep.com/blog/coalition-vs-at-bay)
- [Berkshire, Chubb, Travelers Removing AI Coverage](https://insuranceintel.substack.com/p/berkshire-chubb-and-travelers-are)
