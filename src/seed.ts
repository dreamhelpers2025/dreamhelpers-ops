import type { AppState, SprintTask, Milestone, WeekTheme } from './types';

// Week 1 = Mon 2026-06-22
// Week 2 = Mon 2026-06-29
// Week 3 = Mon 2026-07-06
// Week 4 = Mon 2026-07-13

const W1 = ['2026-06-22', '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26'] as const;
const W2 = ['2026-06-29', '2026-06-30', '2026-07-01', '2026-07-02', '2026-07-03'] as const;
const W3 = ['2026-07-06', '2026-07-07', '2026-07-08', '2026-07-09', '2026-07-10'] as const;
const W4 = ['2026-07-13', '2026-07-14', '2026-07-15', '2026-07-16', '2026-07-17'] as const;

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

export const seedWeeks: WeekTheme[] = [
  {
    weekNumber: 1,
    title: 'Foundation & Positioning',
    theme: 'Define exactly what business you are building and who it serves.',
    goal: 'Stand up the business definition, the audit framework, and the service architecture.',
    deliverables: [
      'Market Landscape Report',
      'Founder Pain Point Map',
      'Founder Liberation Audit',
      'Service Packages',
      'Implementation Framework',
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
    title: 'Pilot Client Proof of Concept',
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
      'Prospect Database',
      'Sales Deck',
      'Demo Environment',
      'Proposal Templates',
      'Outreach Campaign',
      'Sales Process',
    ],
  },
];

export const seedTasks: SprintTask[] = [
  // --- Week 1: Foundation & Positioning ---
  t('w1-mon-both', 1, W1[0], 'Mon', '13:00', '16:00', 'both',
    'Founder Liberation business model document',
    'Define ICP, service offerings, outcomes, pricing hypotheses, positioning statement.'),

  t('w1-tue-a', 1, W1[1], 'Tue', '13:00', '14:30', 'a',
    'Research customer service automation landscape',
    'Gorgias, Richpanel, Intercom, Zendesk. Produce competitive analysis document.'),
  t('w1-tue-b', 1, W1[1], 'Tue', '13:00', '14:30', 'b',
    'Research automation stack landscape',
    'Zapier, Make, n8n, Claude Code, Shopify ecosystem. Produce tool comparison document.'),
  t('w1-tue-both', 1, W1[1], 'Tue', '14:30', '16:00', 'both',
    'Consolidate Market Landscape Report',
    'Merge competitor + tool research into a single deliverable.'),

  t('w1-wed-a', 1, W1[2], 'Wed', '13:00', '14:30', 'a',
    'Map Pilot Client workflows',
    'Document every founder touch in the operation.'),
  t('w1-wed-b', 1, W1[2], 'Wed', '13:00', '14:30', 'b',
    'Interview founder; gather pain points',
    'Workflow notes from primary source.'),
  t('w1-wed-both', 1, W1[2], 'Wed', '14:30', '16:00', 'both',
    'Founder Pain Point Map & Opportunity Matrix',
    'Combine workflow map + pain points into actionable opportunity matrix.'),

  t('w1-thu-both', 1, W1[3], 'Thu', '13:00', '16:00', 'both',
    'Founder Liberation Audit Framework',
    'Repeatable audit process — questionnaire, scoring, output template.'),

  t('w1-fri-a', 1, W1[4], 'Fri', '13:00', '14:30', 'a',
    'Draft pricing models and service packages',
    'Audit, Implementation, Managed Services tiers.'),
  t('w1-fri-b', 1, W1[4], 'Fri', '13:00', '14:30', 'b',
    'Draft implementation methodology',
    'How we actually deliver Implementation. Steps, artifacts, hand-offs.'),
  t('w1-fri-both', 1, W1[4], 'Fri', '14:30', '16:00', 'both',
    'Finalize Service Architecture Document',
    'Single source of truth for what we sell and how.'),

  // --- Week 2: Business Infrastructure ---
  t('w2-mon-a', 2, W2[0], 'Mon', '13:00', '14:30', 'a',
    'Draft MSA and SOW templates',
    'Master Services Agreement + Statement of Work boilerplate.'),
  t('w2-mon-b', 2, W2[0], 'Mon', '13:00', '14:30', 'b',
    'Build client onboarding process',
    'From signed SOW to kickoff. Checklist + comms templates.'),
  t('w2-mon-both', 2, W2[0], 'Mon', '14:30', '16:00', 'both',
    'Review and finalize business documents',
    'Cross-review MSA/SOW/onboarding.'),

  t('w2-tue-a', 2, W2[1], 'Tue', '13:00', '14:30', 'a',
    'Create discovery questionnaire',
    'Pre-audit intake form. Targets time leaks and tooling gaps.'),
  t('w2-tue-b', 2, W2[1], 'Tue', '13:00', '14:30', 'b',
    'Create audit report template',
    'Output deliverable for the $500-$1,500 audit.'),
  t('w2-tue-both', 2, W2[1], 'Tue', '14:30', '16:00', 'both',
    'Client journey documentation',
    'Prospect → audit → implementation → managed. End-to-end map.'),

  t('w2-wed-a', 2, W2[2], 'Wed', '13:00', '14:30', 'a',
    'CRM setup',
    'Airtable / Notion / HubSpot Free. Leads, opportunities, proposals.'),
  t('w2-wed-b', 2, W2[2], 'Wed', '13:00', '14:30', 'b',
    'Internal operations setup',
    'Shared drive, naming conventions, comms cadence.'),
  t('w2-wed-both', 2, W2[2], 'Wed', '14:30', '16:00', 'both',
    'Document SOPs',
    'Run-of-show for each workflow we just stood up.'),

  t('w2-thu-a', 2, W2[3], 'Thu', '13:00', '14:30', 'a',
    'Website content',
    'Home, Services, Audit, Case Studies, Contact copy.'),
  t('w2-thu-b', 2, W2[3], 'Thu', '13:00', '14:30', 'b',
    'Website design and build',
    'Astro + Tailwind shell using dreamhelpers.org pattern.'),
  t('w2-thu-both', 2, W2[3], 'Thu', '14:30', '16:00', 'both',
    'Review and launch website draft',
    'Soft launch — review on production URL.'),

  t('w2-fri-both', 2, W2[4], 'Fri', '13:00', '16:00', 'both',
    'Complete website, forms, scheduling, CRM integration',
    'Contact form → CRM. Calendly or equivalent for discovery booking.'),

  // --- Week 3: Pilot Client Proof of Concept ---
  t('w3-mon-a', 3, W3[0], 'Mon', '13:00', '14:30', 'a',
    'Analyze customer service data',
    'Email corpus, support tickets. Categorize.'),
  t('w3-mon-b', 3, W3[0], 'Mon', '13:00', '14:30', 'b',
    'Analyze Shopify exports',
    'Orders, refunds, fulfillment patterns.'),
  t('w3-mon-both', 3, W3[0], 'Mon', '14:30', '16:00', 'both',
    'Automation Opportunity Report',
    'What can be automated, expected hours saved, ROI estimate.'),

  t('w3-tue-a', 3, W3[1], 'Tue', '13:00', '14:30', 'a',
    'Build support category taxonomy',
    'The classification labels the AI will route on.'),
  t('w3-tue-b', 3, W3[1], 'Tue', '13:00', '14:30', 'b',
    'Build response workflow map',
    'For each category: who/what/when.'),
  t('w3-tue-both', 3, W3[1], 'Tue', '14:30', '16:00', 'both',
    'Design support automation architecture',
    'End-to-end. Inputs, classifier, routing, response gen, escalation.'),

  t('w3-wed-both', 3, W3[2], 'Wed', '13:00', '16:00', 'both',
    'Build first customer service prototype',
    'Working version against real Pilot Client data.'),

  t('w3-thu-a', 3, W3[3], 'Thu', '13:00', '14:30', 'a',
    'Test email classification workflows',
    'Accuracy spot-check on real corpus.'),
  t('w3-thu-b', 3, W3[3], 'Thu', '13:00', '14:30', 'b',
    'Test response generation workflows',
    'Quality + tone review on generated drafts.'),
  t('w3-thu-both', 3, W3[3], 'Thu', '14:30', '16:00', 'both',
    'Review and refine prototype',
    'Iterate on what testing surfaced.'),

  t('w3-fri-both', 3, W3[4], 'Fri', '13:00', '16:00', 'both',
    'Case study and demo environment',
    'Before/after metrics + a demo a prospect can see in 5 minutes.'),

  // --- Week 4: Go To Market ---
  t('w4-mon-a', 4, W4[0], 'Mon', '13:00', '14:30', 'a',
    'Build Shopify prospect list',
    'Target stores by category, size, signals.'),
  t('w4-mon-b', 4, W4[0], 'Mon', '13:00', '14:30', 'b',
    'Build local service business prospect list',
    'Vet clinics and adjacent. Contact + qualifier.'),
  t('w4-mon-both', 4, W4[0], 'Mon', '14:30', '16:00', 'both',
    'Consolidate master prospect database',
    'Single source. Owner per row. Stage per row.'),

  t('w4-tue-a', 4, W4[1], 'Tue', '13:00', '14:30', 'a',
    'Create sales presentation',
    '10-slide Founder Liberation deck.'),
  t('w4-tue-b', 4, W4[1], 'Tue', '13:00', '14:30', 'b',
    'Create demo environment',
    'Sandboxed, shareable, screenshot-ready.'),
  t('w4-tue-both', 4, W4[1], 'Tue', '14:30', '16:00', 'both',
    'Finalize pitch assets',
    'Deck + demo + one-pager.'),

  t('w4-wed-a', 4, W4[2], 'Wed', '13:00', '14:30', 'a',
    'Create outreach sequences',
    'Email + LinkedIn. 3-touch minimum per prospect.'),
  t('w4-wed-b', 4, W4[2], 'Wed', '13:00', '14:30', 'b',
    'Create proposal templates',
    'Audit and Implementation proposal variants.'),
  t('w4-wed-both', 4, W4[2], 'Wed', '14:30', '16:00', 'both',
    'Sales process review',
    'Walk the whole sales motion end-to-end.'),

  t('w4-thu-both', 4, W4[3], 'Thu', '13:00', '16:00', 'both',
    'First outreach campaign',
    'Send. Track replies. Book discovery calls.'),

  t('w4-fri-both', 4, W4[4], 'Fri', '13:00', '16:00', 'both',
    'Review results and adjust GTM strategy',
    'What worked, what did not. Updated plan for week 5.'),
];

export const seedMilestones: Milestone[] = [
  m('ms-w1', 1, 'Week 1 Foundation closed',
    'Market Landscape + Pain Point Map + Audit Framework + Service Packages + Implementation Framework all done.',
    W1[4]),
  m('ms-w2', 2, 'Week 2 Infrastructure closed',
    'Website live, MSA + SOW signed-ready, CRM operational, SOPs documented, onboarding ready.',
    W2[4]),
  m('ms-w2-data', 2, 'Pilot Client data access secured',
    'Critical dependency: email corpus + Shopify exports in hand before Week 3 starts. If not, Week 3 stalls.',
    W2[4]),
  m('ms-w3', 3, 'Week 3 POC closed',
    'Working prototype + before/after metrics + case study draft.',
    W3[4]),
  m('ms-w4', 4, 'Week 4 GTM closed',
    'Prospect database + sales deck + outreach live + first discovery call booked.',
    W4[4]),
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
  notes: '',
  lastUpdatedAt: null,
  lastUpdatedBy: null,
};
