import type { AppState, SprintTask, Milestone, WeekTheme, Audit } from './types';

// SCHEDULE RESET 2026-07-17: original plan slipped ~3 weeks while we spent time
// on the intake portal, brand identity, naming/DBA, domain sweep, E&O carrier
// research, and repo-wide rebrand. Week 1 completed as-scheduled and stays on
// its original dates. Weeks 2-4 rescheduled forward. Soil Detective work
// (Week 1 Wed + all of Week 3) marked blocked per user pause until business
// infrastructure is stood up and we can service her account with documented
// processes.
//
// Week 1 = Mon 2026-06-22 (as-completed)
// Week 2 = Mon 2026-07-20 (rescheduled from 2026-06-29) — Business Infrastructure
// Week 3 = Mon 2026-07-27 (rescheduled from 2026-07-06) — Soil Detective (blocked)
// Week 4 = Mon 2026-08-03 (rescheduled from 2026-07-13) — Go To Market

const W1 = ['2026-06-22', '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26'] as const;
const W2 = ['2026-07-20', '2026-07-21', '2026-07-22', '2026-07-23', '2026-07-24'] as const;
const W3 = ['2026-07-27', '2026-07-28', '2026-07-29', '2026-07-30', '2026-07-31'] as const;
const W4 = ['2026-08-03', '2026-08-04', '2026-08-05', '2026-08-06', '2026-08-07'] as const;

const t = (
  id: string,
  weekNumber: 1 | 2 | 3 | 4,
  date: string,
  day: SprintTask['day'],
  startTime: string,
  endTime: string,
  assignee: SprintTask['assignee'],
  deliverable: string,
  notes = ''
): SprintTask => ({
  id,
  weekNumber,
  date,
  day,
  startTime,
  endTime,
  assignee,
  deliverable,
  notes,
  status: 'not-started',
  completedAt: null,
  completedBy: null,
});

const done = (task: SprintTask, completedAt: string): SprintTask => ({
  ...task,
  status: 'done',
  completedAt,
  completedBy: null,
});

const blocked = (task: SprintTask): SprintTask => ({
  ...task,
  status: 'blocked',
});

const m = (
  id: string,
  weekNumber: 1 | 2 | 3 | 4,
  title: string,
  description: string,
  dueDate: string
): Milestone => ({
  id,
  weekNumber,
  title,
  description,
  dueDate,
  status: 'not-started',
  completedAt: null,
});

const mDone = (ms: Milestone, completedAt: string): Milestone => ({
  ...ms,
  status: 'done',
  completedAt,
});

const mBlocked = (ms: Milestone): Milestone => ({
  ...ms,
  status: 'blocked',
});

export const seedWeeks: WeekTheme[] = [
  {
    weekNumber: 1,
    title: 'Foundation & Positioning',
    theme: 'Define exactly what business you are building and who it serves.',
    goal: 'Stand up the business definition, the audit framework, and the service architecture.',
    deliverables: [
      'Market Landscape Report',
      'Pain Point Map',
      'Audit Framework',
      'Service Packages',
      'Implementation Methodology',
    ],
  },
  {
    weekNumber: 2,
    title: 'Business Infrastructure',
    theme: 'Create everything needed to legally and operationally sell.',
    goal: 'Website, contracts, CRM, SOPs, and onboarding ready to transact.',
    deliverables: [
      'Website live',
      'MSA',
      'SOW',
      'Discovery Questionnaire',
      'Audit Report Template',
      'CRM operational',
      'SOPs documented',
      'Client Onboarding Process',
    ],
  },
  {
    weekNumber: 3,
    title: 'Pilot Client Proof of Concept (Soil Detective)',
    theme: 'Produce a measurable case study.',
    goal: 'Working prototype + before/after metrics + first case study draft.',
    deliverables: [
      'Customer Service Analysis',
      'Automation Opportunity Report',
      'Support Taxonomy',
      'Working Prototype',
      'Initial Metrics',
      'Case Study Draft',
    ],
  },
  {
    weekNumber: 4,
    title: 'Go To Market',
    theme: 'Begin customer acquisition.',
    goal: 'Prospect list built, outreach live, first discovery calls booked.',
    deliverables: [
      'Prospect Database (vet primary, insurance + Shopify parallel)',
      'Sales Deck',
      'Demo Environment',
      'Proposal Templates',
      'Outreach Campaign',
      'Sales Process',
    ],
  },
];

export const seedTasks: SprintTask[] = [
  // --- Week 1: Foundation & Positioning (as-completed) ---
  done(t('w1-mon-both', 1, W1[0], 'Mon', '13:00', '16:00', 'both',
    'Business model document (v0.4)',
    'Produce the v0.4-ready model doc. Lock: (1) primary beachhead = independent vet clinics, (2) ready-to-swap parallel test = insurance agencies, (3) parallel test = Shopify $1M to $3M with Day 90 kill criterion (at least 2 signed Implementations attributable to the post-Sidekick orchestration thesis or drop). Service tiers: $750 Audit credited to Implementation / $4.5K to $12K Implementation (Starter/Standard/Comprehensive) / $750/$1.2K/$2K per month Managed. Outcomes we sell: 10 to 20 hrs/mo reclaimed, -50% response time, -40% context switches, 2 to 5x revenue protected. External brand language: "Practice Hours Audit" (vet) / "Founder Hours Audit" (Shopify). See deliverables/01-founder-liberation-business-model.md.'),
    '2026-06-22T22:00:00Z'),

  done(t('w1-tue-a', 1, W1[1], 'Tue', '13:00', '14:30', 'a',
    'Customer service automation landscape research',
    'Internal cheat sheet for when to recommend Gorgias / Richpanel / Intercom + Fin / Zendesk. Capture pricing model (per-seat + per-resolution), best-fit client per platform, and where each gap gives us a sales hook. Focus on what we need to (a) recognize each in client stacks, (b) spot waste in client billing, (c) build sidecar workflows above them. We are NOT trying to become certified admins. See deliverables/02-customer-service-automation-landscape.md.'),
    '2026-06-23T22:00:00Z'),
  done(t('w1-tue-b', 1, W1[1], 'Tue', '13:00', '14:30', 'b',
    'Automation stack landscape research',
    'Build decision tree for "where should this workflow live?" given client volume, complexity, and budget. Cover Shopify Flow (free, native), Zapier ($29.99/mo, per-task), Make ($9 to $16/mo, per-operation), n8n (~$5/mo self-hosted, per-execution), Claude Code (our internal build environment). Capture pricing-model differences and cost crossover points. Used to scope Implementations and write the audit tool-mismatch finding. See deliverables/03-automation-stack-landscape.md.'),
    '2026-06-23T22:00:00Z'),
  done(t('w1-tue-both', 1, W1[1], 'Tue', '14:30', '16:00', 'both',
    'Market Landscape Report (consolidated)',
    'Synthesize CS + automation research into business decisions. Lock the two market truths: (1) per-resolution AI pricing is a tax on success (creates our deflection wedge for high-volume clients only, see v0.4 caveat), (2) most founders do not know what their automation costs (creates the reliable $500 to $2K/yr tool reallocation audit finding). Map findings to our Audit / Implementation / Managed tiers. See deliverables/04-market-landscape-report.md.'),
    '2026-06-23T22:00:00Z'),

  // Soil Detective pilot work — BLOCKED (paused per user direction 2026-06-27 until business
  // infrastructure is stood up and we can service her with documented processes).
  blocked(t('w1-wed-a', 1, W1[2], 'Wed', '13:00', '14:30', 'a',
    'Map Soil Detective workflows (pilot client)',
    'Pilot client is Soil Detective (soildetective.org). Document every workflow they currently have (manual or automated): who does what, what triggers it, what tool it runs in, where the founder time goes weekly. Soil Detective is out of normal ICP (not vet, not Shopify), so this is a process test for our delivery system, not a segment validation. Produce a workflow map detailed enough to drive Wednesday afternoon Opportunity Matrix. Scope context: website + payments + automated marketing + automated email + Q&A + chat + custom tools (see business model FYI note in chat history). PAUSED 2026-06-27 — resume when business infrastructure is stood up.')),
  blocked(t('w1-wed-b', 1, W1[2], 'Wed', '13:00', '14:30', 'b',
    'Soil Detective founder interview + pain-point capture',
    'Run a 45 to 60 min interview with the Soil Detective founder. Capture: what currently eats their week, what they hate doing, what they keep meaning to fix but have not, what they would pay $X/mo to never deal with again, what they tried and abandoned. Use as primary-source evidence for the Opportunity Matrix. Run §11 Tier A QC (smell test) on transcript and notes before sharing. PAUSED 2026-06-27 — questionnaire went out (see deliverables/pilot/05); resume when business infrastructure is stood up.')),
  blocked(t('w1-wed-both', 1, W1[2], 'Wed', '14:30', '16:00', 'both',
    'Pain Point Map and AI Opportunity Matrix (Soil Detective)',
    'Combine workflow map + pain points. Score each opportunity on feasibility x hours saved x revenue protected. Surface the top 5 to 7 candidates for the pilot Implementation. Distinguish (a) workflows we automate, (b) tools we reconfigure or replace, (c) work the founder should hand off elsewhere. Feeds Thursday Audit Framework. Forbid round-number hours-saved claims, use ranges (§11 Tier B). PAUSED 2026-06-27 — partial artifacts in deliverables/pilot/04; resume when SD engagement resumes.')),

  done(t('w1-thu-both', 1, W1[3], 'Thu', '13:00', '16:00', 'both',
    'Audit Framework (repeatable 5-day process)',
    'Build the audit process we run on every paid audit going forward. 5-day cadence: Day 0 discovery call -> Day 1 client uploads exports -> Days 2 to 4 Claude analyzes -> Day 4 §11 Tier A + Tier B QC -> Day 5 walkthrough call. Deliverables in the audit: time-use audit, bottleneck map, AI Opportunity Matrix, incumbent AI gap analysis (what Sidekick / CFSB / Intuit Assist already does for them, new in v0.3), recommended implementation sequence, ROI estimates. The audit walkthrough deck doubles as the Implementation proposal. See deliverables/framework/00-audit-framework-v0.1.md + templates 01-06.'),
    '2026-06-25T22:00:00Z'),

  done(t('w1-fri-a', 1, W1[4], 'Fri', '13:00', '14:30', 'a',
    'Pricing models and service packages (locked)',
    'Lock v0.4 pricing in writing for site copy and SOWs: Audit $750 (credited toward Implementation, classified as CAC not profit), Implementation Starter $4,500 / Standard $8,000 / Comprehensive $12,000, Managed Lite $750 / Standard $1,200 / Pro $2,000 per month. Payment terms: 50% on signature / 50% on UAT (Implementation); monthly auto-debit (Managed). Hour caps: Lite 1.5 hrs (overflow $150/hr), Standard 4 hrs, Pro 8 hrs. Capacity caps: max 1 active Implementation per founder per week; max 6 Lite-equivalents per founder for Managed. See deliverables/07-service-packages-and-pricing.md.'),
    '2026-06-26T22:00:00Z'),
  done(t('w1-fri-b', 1, W1[4], 'Fri', '13:00', '14:30', 'b',
    'Implementation methodology document',
    'Document how we deliver an Implementation. 5-week template: Week 1 design + access provisioning, Weeks 2 to 3 build in Make / Zapier / n8n / Claude Code with §11 QC gates, Week 4 client UAT, Week 5 handoff with training video. Hard rules: every Implementation must include at least one capability Make AI Agents cannot natively deliver (forced rebuild check before pricing, if rebuild takes < 8 hrs, drop scope or drop deal); no new client monthly costs over $50/mo without written approval. See deliverables/framework/01-implementation-methodology-v0.1.md + templates 07-10.'),
    '2026-06-26T22:00:00Z'),
  done(t('w1-fri-both', 1, W1[4], 'Fri', '14:30', '16:00', 'both',
    'Service Architecture Document (single source of truth)',
    'Merge pricing (§3) + methodology + delivery architecture (§7, who does what between Claude and humans). Locks end-of-Week-1 so Week 2 contract drafting has a fixed target. Save in deliverables/. This is what Grant and you reference when a client asks what we actually do. See deliverables/08-service-architecture.md.'),
    '2026-06-26T22:00:00Z'),

  // --- Week 2: Business Infrastructure (rescheduled from 2026-06-29 to 2026-07-20) ---
  t('w2-mon-a', 2, W2[0], 'Mon', '13:00', '14:30', 'a',
    'MSA and SOW templates (v1)',
    'MSA (Master Services Agreement) = umbrella contract governing the whole client relationship. SOW (Statement of Work) = per-engagement scope. SOW must include: fixed price, scope deliverables, payment terms (50% on signature / 50% on UAT), per-engagement liability cap = fees paid (§11), and the v0.4 AI disclosure language: "Deliverables are produced using AI tooling and reviewed by Tack for source-traceability and internal consistency. Clients are responsible for validating numerical claims against their own systems before acting on recommendations." Signature block: "Dreamhelpers LLC dba Tack." E&O quote path is separate — see deliverables/ops/03-eo-insurance-carrier-shortlist.md.'),
  t('w2-mon-b', 2, W2[0], 'Mon', '13:00', '14:30', 'b',
    'Client onboarding process',
    'From signed SOW to kickoff. Checklist of access provisioning (auth to client tools), data transfer protocol (where exports land), kickoff comms (welcome email, scheduling), shared workspace setup (Notion or Drive), kickoff call agenda. Target: under 24 hrs from signed SOW to we-have-what-we-need-to-start. Intake portal already live at dreamhelpers2025.github.io/dreamhelpers-intake — this task focuses on the post-signed-SOW handoff, not the pre-audit intake.'),
  t('w2-mon-both', 2, W2[0], 'Mon', '14:30', '16:00', 'both',
    'Review and finalize business documents',
    'Cross-review MSA, SOW, onboarding checklist. Lock language. Save final templates in deliverables/templates/. These ship as v1, we will re-edit from real-world experience. Also: submit E&O carrier applications to Coalition + Vouch per deliverables/ops/03 recommendation.'),

  t('w2-tue-a', 2, W2[1], 'Tue', '13:00', '14:30', 'a',
    'Discovery questionnaire (segment templates)',
    'Pre-audit intake form. Captures: revenue band, tool stack, hours-by-workflow estimate, existing automation, biggest weekly pain, named-tool budget. Vet version asks about PIMS (ezyVet, Shepherd, AVImark), practice manager role, PE/VSO contact. Insurance version asks about AMS (Applied Epic, AMS360, EZLynx), ops manager, aggregator contact. Shopify version asks about Sidekick adoption, Klaviyo flows, VA setup. One form per segment, shared logic. Intake portal already handles segment-conditional questions — this task documents the segment schemas so the portal config can be updated per segment.'),
  t('w2-tue-b', 2, W2[1], 'Tue', '13:00', '14:30', 'b',
    'Audit report template polish',
    'Output deliverable for the $750 audit. Sections: executive summary, time-use audit, bottleneck map, AI Opportunity Matrix, incumbent AI gap analysis, recommended sequence, ROI estimates, Implementation proposal with anchor price. Forbid round-number ROI claims (§11 Tier B requires ranges). Audit report doubles as the Implementation pitch deck, design accordingly. Base template exists at deliverables/framework/templates/05-audit-report-deck.md; task is to polish + add Tack brand v0.1.1 visual standards (navy + white + teal + orange).'),
  t('w2-tue-both', 2, W2[1], 'Tue', '14:30', '16:00', 'both',
    'Client journey documentation',
    'Map the full client journey: prospect -> discovery -> audit -> implementation proposal -> implementation -> managed. Document each stage entry criteria, exit criteria, comms, deliverables, owner (Claude vs human). Becomes the SOP source-of-truth for Wednesday SOP doc.'),

  t('w2-wed-a', 2, W2[2], 'Wed', '13:00', '14:30', 'a',
    'CRM setup',
    'Airtable, Notion, or HubSpot Free. Fields: name, business, segment (vet / insurance / Shopify / Soil-Detective-style other), stage, owner, last touch, next action, source, value (audit / implementation / managed), notes. Pipeline stages: lead -> contacted -> discovery booked -> discovery done -> audit sold -> audit delivered -> implementation proposed -> implementation signed -> implementation delivered -> managed signed. Wire in webhook from intake portal.'),
  t('w2-wed-b', 2, W2[2], 'Wed', '13:00', '14:30', 'b',
    'Internal operations setup',
    'Shared drive (Google or Dropbox), naming conventions for client folders, document version protocol, comms cadence between founders (Slack channel? daily standup format?), weekly review template. Also: where §11 Tier B QC re-derivation artifacts live (we need an audit trail).'),
  t('w2-wed-both', 2, W2[2], 'Wed', '14:30', '16:00', 'both',
    'Document SOPs (Standard Operating Procedures)',
    'Run-of-show docs for each workflow stood up this week. One per SOP: name, owner, trigger, steps, exit criteria. Cover: outbound, discovery call, audit delivery, implementation kickoff, monthly health report, escalation. Stored in deliverables/sops/.'),

  t('w2-thu-a', 2, W2[3], 'Thu', '13:00', '14:30', 'a',
    'Website content (copy)',
    'Pages: Home (lead with vet positioning, secondary insurance, tertiary Shopify), Services, Audit ($750 details, credit-back mechanic, 5-day cadence), Case Studies (placeholder + Soil Detective once shippable), Contact, Who-we-will-not-help (§8, explicit). Publish pricing on the homepage (§13 differentiator, no competitor we found does this). Lead with §2 positioning statement adapted for Tack voice per deliverables/09-brand-identity-v0.1.md: "say the thing" ("Get your Wednesday afternoons back") over corporate abstraction.'),
  t('w2-thu-b', 2, W2[3], 'Thu', '13:00', '14:30', 'b',
    'Website design and build',
    'Astro + Tailwind shell, per brand identity v0.1.1 (deep navy #0F2540 + crisp white + warm teal #0A9294 + burnt orange #C55A2C, Manrope display + Inter body). Sections: hero with positioning statement + founder photos, three-tier transparent pricing table, what-we-do outcomes, who we serve, who we will not help (§8), sample audit page, Calendly-embed discovery booking, contact form. Mobile-first. Domain: tackpartners.co (tackops.co redirects). Also: wordmark exploration morning of.'),
  t('w2-thu-both', 2, W2[3], 'Thu', '14:30', '16:00', 'both',
    'Review and launch website draft',
    'Both founders walk through site as a prospect would. §11 Tier A smell test on all copy. Test discovery booking flow end-to-end. Capture broken or awkward items for Friday cleanup. Soft-launch on production URL (tackpartners.co).'),

  t('w2-fri-both', 2, W2[4], 'Fri', '13:00', '16:00', 'both',
    'Website forms + scheduling + CRM integration',
    'Wire contact form -> CRM (webhook or native integration). Wire Calendly -> CRM with auto-tag of source. Build Stripe payment link page for the $750 audit. Add Plausible or Fathom analytics. Final QA pass. Push to public, site is live at tackpartners.co.'),

  // --- Week 3: Soil Detective Pilot Proof of Concept (BLOCKED — paused per user 2026-06-27) ---
  // Rescheduled to 2026-07-27 as placeholder; resume when SD engagement resumes.
  blocked(t('w3-mon-a', 3, W3[0], 'Mon', '13:00', '14:30', 'a',
    'Analyze Soil Detective customer service data',
    'Pull 30 to 90 days of email and inquiry data. Categorize by intent (question, complaint, sales, billing, support, partnership outreach, spam). Measure: volume per day, response time, resolution time, top categories, percent auto-deflectable. This is the baseline for the case study before metrics. §11 Tier B applies to any number that ends up in the audit or case study. PAUSED — resume when SD engagement resumes.')),
  blocked(t('w3-mon-b', 3, W3[0], 'Mon', '13:00', '14:30', 'b',
    'Analyze Soil Detective business and systems data',
    'Site analytics, sales / order data, marketing reach, current systems and tool stack. Map where the founder time goes weekly. Identify the 2 to 3 highest-leverage workflows worth featuring in the public case study (per §10 decision 12, do not publish we-built-the-whole-business framing). PAUSED — resume when SD engagement resumes.')),
  blocked(t('w3-mon-both', 3, W3[0], 'Mon', '14:30', '16:00', 'both',
    'Automation Opportunity Report (Soil Detective)',
    'Top 5 to 7 opportunities ranked by hours saved x revenue protected x feasibility. Each item: current process, proposed process, tools required, time-to-build, time-to-payback estimate, ROI range. This is the audit deliverable for the pilot, and the template we will reuse for every paid audit. PAUSED — resume when SD engagement resumes.')),

  blocked(t('w3-tue-a', 3, W3[1], 'Tue', '13:00', '14:30', 'a',
    'Build support category taxonomy (Soil Detective)',
    'Labels the AI classifier will route on. Include: question types (soil testing, product, shipping, account, technical), complaint types, sales inquiry, billing, support, partnership outreach, spam. Each label gets 3 to 5 example messages from real Soil Detective data. Drives Wednesday prototype. PAUSED.')),
  blocked(t('w3-tue-b', 3, W3[1], 'Tue', '13:00', '14:30', 'b',
    'Build response workflow map (Soil Detective)',
    'For each category in the taxonomy: who / what / when. Some categories get AI-drafted-human-reviewed replies; some get templated auto-replies; some escalate immediately. Document the routing logic explicitly, this is the spec the prototype implements. PAUSED.')),
  blocked(t('w3-tue-both', 3, W3[1], 'Tue', '14:30', '16:00', 'both',
    'Design support automation architecture',
    'End-to-end design: inputs (email + contact form + chat) -> classifier -> routing -> response generator -> escalation. Pick host environment (Make AI Agents if feasible per §3.2 rebuild-check; Claude Code if not). Decide where logs live so we can capture Week 3 metrics for the case study. PAUSED.')),

  blocked(t('w3-wed-both', 3, W3[2], 'Wed', '13:00', '16:00', 'both',
    'Build first customer service prototype',
    'Working version against real Soil Detective data. Should auto-classify with category labels from Tuesday, draft replies for around 50%+ of inbound, and route the remainder to human review. Test on backlog first, then a 24-hr supervised live-trial. Apply §11 QC to any number we report from this build. PAUSED.')),

  blocked(t('w3-thu-a', 3, W3[3], 'Thu', '13:00', '14:30', 'a',
    'Test email classification workflows',
    'Accuracy spot-check on 50 to 100 real messages. Target: at least 85% category accuracy. Mark every misclassification, identify pattern, iterate on the prompt or taxonomy. Document accuracy number with the methodology, this number will appear in the case study and the v0.4 §11 Tier B re-derivation requirement applies. PAUSED.')),
  blocked(t('w3-thu-b', 3, W3[3], 'Thu', '13:00', '14:30', 'b',
    'Test response generation workflows',
    'Quality + tone review of AI-drafted replies. Specifically check: did it commit to anything we should not have (refund amounts, delivery dates, technical claims)? Did it cite a number that is wrong? Does the tone match Soil Detective existing voice? Sample 20 to 30 drafts across categories. Flag anything that would have been a problem if sent unsupervised. PAUSED.')),
  blocked(t('w3-thu-both', 3, W3[3], 'Thu', '14:30', '16:00', 'both',
    'Review and refine prototype',
    'Process what testing surfaced. Adjust prompts, taxonomy, routing rules. Update the health report template for Managed Services (this is where the monthly metrics will come from after handoff). PAUSED.')),

  blocked(t('w3-fri-both', 3, W3[4], 'Fri', '13:00', '16:00', 'both',
    'Soil Detective case study + demo environment',
    'Case study: before / after metrics (response time, classification accuracy, hours reclaimed estimate with range), narrative, screenshots, founder quote if obtainable. Public version highlights 2 to 3 highest-leverage workflows ONLY, not the full build (per §10 decision 12). Demo environment: prospect-facing sandbox we can walk through in 5 min on a discovery call. Both go into Week 4 sales assets. PAUSED.')),

  // --- Week 4: Go To Market (rescheduled from 2026-07-13 to 2026-08-03) ---
  t('w4-mon-a', 4, W4[0], 'Mon', '13:00', '14:30', 'a',
    'Build vet prospect list (primary beachhead)',
    'Per v0.4, vet clinics are the primary beachhead. Build a list of 50 to 100 independent companion-animal clinics: 2 to 7 staff, owner aged 45 to 62, US-based, with cloud PIMS adoption (ezyVet, Shepherd, AVImark Cloud). Source: VMG member directory, IVPA member list, Google Maps + LinkedIn, state vet association rosters. Capture per row: clinic name, owner, location, practice manager name if findable, PIMS in use, signs of PE/VSO interest nearby. The practice manager is the actual buyer.'),
  t('w4-mon-b', 4, W4[0], 'Mon', '13:00', '14:30', 'b',
    'Build insurance + Shopify prospect lists (parallel tests)',
    'Insurance (ready-to-swap parallel): 20 to 30 independent P&C agencies, $1 to $10M revenue, 50+yo owner, AMS-resident (Applied Epic, AMS360, EZLynx, HawkSoft, NowCerts, Veruna). Source: Big I local-chapter directories, LinkedIn, Insurance Journal. Shopify (parallel with Day 90 kill criterion): 20 to 30 $1M to $3M founder-run brands. Source: BuiltWith filtering, 2PM Executive directory, eComFuel forum participation (operator-persona, not vendor pitch).'),
  t('w4-mon-both', 4, W4[0], 'Mon', '14:30', '16:00', 'both',
    'Consolidate master prospect database',
    'Combine all three lists into the CRM. Tag by segment (vet / insurance / Shopify). Assign owner per row. Set stage = lead. Validate no duplicates. Capture data-quality issues for cleanup.'),

  t('w4-tue-a', 4, W4[1], 'Tue', '13:00', '14:30', 'a',
    'Sales presentation (three-segment deck)',
    '10-slide vet-version deck (lead with PE/EBITDA-to-exit math, named pains: staff churn, refund backlog, after-hours triage); parallel insurance-version (aggregator / EBITDA math, AMS-specific pains: renewal chase, x-date follow-up); parallel Shopify-version (post-Sidekick orchestration, what cross-system work CFSB and Sidekick cannot touch). Each deck: problem -> outcome -> process -> pricing -> next step. Use brand v0.1.1 palette.'),
  t('w4-tue-b', 4, W4[1], 'Tue', '13:00', '14:30', 'b',
    'Demo environment',
    'Sandboxed, shareable demo. If SD unpauses in time, uses Soil Detective prototype; otherwise builds against a synthetic vet-clinic dataset. Screenshot-ready and walkthrough-able in 5 min during a discovery call.'),
  t('w4-tue-both', 4, W4[1], 'Tue', '14:30', '16:00', 'both',
    'Finalize pitch assets',
    'Deck + demo + one-pager + objection-handling card. Most-important objection scripts: "we already have Sidekick / Claude for Small Business" (vet / Shopify version) and "I would rather hire a VA" (Shopify-specific). Run §11 Tier A QC on all assets.'),

  t('w4-wed-a', 4, W4[2], 'Wed', '13:00', '14:30', 'a',
    'Outreach sequences (per segment)',
    '3-touch email + 2-touch LinkedIn per segment. Vet: lead with EBITDA-to-exit math and named pain (staff churn, refund backlog), offer free 30-min discovery + a sample teardown. Insurance: same EBITDA story, AMS-specific pain (renewal chase, x-date follow-up). Shopify: weekly Loom teardown approach, tag founder publicly, the work IS the case study. Cadence: T+0, T+4, T+10 days.'),
  t('w4-wed-b', 4, W4[2], 'Wed', '13:00', '14:30', 'b',
    'Proposal templates',
    'Three proposals: Audit ($750 with credit-back), Implementation (Starter / Standard / Comprehensive), Managed (Lite / Standard / Pro). Each includes §11 disclosure language, payment terms (50/50 for Impl, monthly auto-debit for Managed), per-engagement liability cap, and an explicit what-we-will-not-do section pulled from v0.4 §8.'),
  t('w4-wed-both', 4, W4[2], 'Wed', '14:30', '16:00', 'both',
    'Sales process review',
    'Walk the whole sales motion end-to-end as a prospect: first-touch -> reply -> discovery booking -> discovery call -> audit close -> audit delivery -> Implementation proposal -> Implementation close -> Managed close. Identify weakest step. Prep counter-scripts for the top 3 objections per segment.'),

  t('w4-thu-both', 4, W4[3], 'Thu', '13:00', '16:00', 'both',
    'First outreach campaign (send)',
    'Send: vet outbound primary (target 40 touches), insurance secondary (20 touches), Shopify tertiary via Loom teardowns (4 teardowns posted publicly with founder tags). Track replies in CRM, set follow-up automation. Goal by end of Friday: 3+ discovery calls booked.'),

  t('w4-fri-both', 4, W4[4], 'Fri', '13:00', '16:00', 'both',
    'Results review + GTM adjustment',
    'What worked, what did not. Compute initial conversion: touch -> reply, reply -> discovery booked, discovery -> audit interest. Compare to v0.4 §5 falsification triggers (15% discovery->audit; 25% audit->Impl). If a trigger fires, run the prescribed kill or pivot. Plan Week 5 priorities. If insurance has not been activated yet but Shopify produced zero discovery calls, activate insurance now (Day 45 swap test moved earlier).'),
];

export const seedMilestones: Milestone[] = [
  mDone(m('ms-w1', 1, 'Week 1 Foundation closed',
    'Four of five Week 1 deliverables shipped as planned: Market Landscape Report, Audit Framework (repeatable 5-day process), Service Packages priced + locked, Implementation methodology documented. Service Architecture Document (the merged single-source-of-truth artifact) also shipped. Pain Point Map for Soil Detective deferred as part of the SD pause on 2026-06-27 — partial templates exist in deliverables/pilot/ but full artifact awaits SD engagement resumption.',
    W1[4]),
    '2026-06-26T22:00:00Z'),
  m('ms-w2', 2, 'Week 2 Infrastructure closed',
    'Website live with public pricing (§13 differentiator), MSA + SOW templates signed-ready with §11 AI disclosure language and per-engagement liability cap ("Dreamhelpers LLC dba Tack" signature block), CRM operational with all three segment pipelines, SOPs documented in deliverables/sops/, onboarding checklist ready. E&O insurance quote secured (Coalition + Vouch per deliverables/ops/03). Stripe payment link page for $750 audit live. Website at tackpartners.co with tackops.co redirect.',
    W2[4]),
  mBlocked(m('ms-w2-data', 2, 'Soil Detective data access secured',
    'Original critical gating dependency for Week 3 prototype. BLOCKED as of 2026-06-27 — Soil Detective engagement paused until Tack business infrastructure is stood up and we can service her with documented processes. Questionnaire sent (see deliverables/pilot/05); no data received yet. Resume when SD engagement resumes.',
    W2[4])),
  mBlocked(m('ms-w3', 3, 'Week 3 POC closed',
    'Soil Detective prototype running: > 85% classification accuracy on real data, draft replies on around 50%+ of inbound (supervised), live-trial passed, case study draft written with 2 to 3 highest-leverage workflows highlighted (NOT the whole build), demo environment screenshot-ready for Week 4 sales calls. BLOCKED — depends on SD engagement resuming.',
    W3[4])),
  m('ms-w4', 4, 'Week 4 GTM closed',
    'Prospect database in CRM (vet primary, insurance + Shopify parallel), pitch deck / demo / one-pager finished and QC-passed, 3+ discovery calls booked from cold outbound + Loom teardowns, conversion metrics being tracked against v0.4 §5 falsification triggers. Day-45 and Day-90 indicators (insurance swap test, Shopify kill criterion) on the bi-weekly review schedule. Demo environment falls back to synthetic vet-clinic dataset if SD prototype is not available.',
    W4[4]),
];

export const seedAudits: Audit[] = [
  {
    id: 'audit-soil-detective-beta',
    client: 'Soil Detective (Rosalinda)',
    segment: 'other',
    status: 'Questionnaire sent',
    stage: 'Day 0',
    createdAt: '2026-06-24T00:00:00Z',
    driveFolder: '',
    calendlyEventUrl: '',
    notes: 'Beta pilot — free audit, custom revenue-share managed pricing. Discovery questionnaire generated from framework template 01 (see deliverables/pilot/05). PAUSED 2026-06-27 — resume once Tack business infrastructure is stood up and we can service her with documented processes.',
    lastUpdatedAt: '2026-06-27T00:00:00Z',
    lastUpdatedBy: 'a',
  },
];

export const seedState: AppState = {
  schemaVersion: 1,
  team: {
    a: { id: 'a', name: 'Person A', color: '#34d399' }, // emerald
    b: { id: 'b', name: 'Person B', color: '#60a5fa' }, // sky
  },
  weekOneStart: W1[0],
  weeks: seedWeeks,
  tasks: seedTasks,
  milestones: seedMilestones,
  audits: seedAudits,
  notes: 'SCHEDULE RESET 2026-07-17: original plan slipped ~3 weeks while we spent time on the intake portal, brand identity v0.1.1, naming exercise + DBA (Tack under Dreamhelpers LLC), domain sweep (tackpartners.co primary, tackops.co defensive), E&O carrier shortlist (Coalition + Vouch), and repo-wide rebrand. Week 1 core deliverables shipped as planned; Soil Detective work paused. Week 2 restarts Mon 2026-07-20 with business-infrastructure sprint. See deliverables/09-brand-identity-v0.1.md and deliverables/ops/03-eo-insurance-carrier-shortlist.md for the "gap week" outputs.',
  lastUpdatedAt: null,
  lastUpdatedBy: null,
};
