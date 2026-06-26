export type PersonId = 'a' | 'b';
export type Assignee = PersonId | 'both';
export type Status = 'not-started' | 'in-progress' | 'blocked' | 'done';
export type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface TeamMember {
  id: PersonId;
  name: string;
  color: string; // hex
}

export interface WeekTheme {
  weekNumber: 1 | 2 | 3 | 4;
  title: string;
  theme: string;
  goal: string;
  deliverables: string[];
}

export interface SprintTask {
  id: string;
  weekNumber: 1 | 2 | 3 | 4;
  date: string;        // ISO yyyy-mm-dd
  day: DayOfWeek;
  startTime: string;   // HH:mm (24h)
  endTime: string;     // HH:mm
  assignee: Assignee;
  deliverable: string;
  notes: string;
  status: Status;
  completedAt: string | null;
  completedBy: PersonId | null;
}

export interface Milestone {
  id: string;
  weekNumber: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  dueDate: string;     // ISO yyyy-mm-dd
  status: Status;
  completedAt: string | null;
}

export type AuditStatus =
  | 'Discovery booked'
  | 'Questionnaire sent'
  | 'Questionnaire received'
  | 'Day 1 — data received'
  | 'Day 2-4 — analysis'
  | 'Day 5 — walkthrough scheduled'
  | 'Walkthrough complete — decision pending'
  | 'Closed — Implementation signed'
  | 'Closed — follow-up scheduled'
  | 'Closed — declined';

export type AuditStage = 'Day 0' | 'Day 1' | 'Day 2' | 'Day 3' | 'Day 4' | 'Day 5' | 'Closed';

export type AuditSegment = 'vet' | 'insurance' | 'shopify' | 'other';

export interface Audit {
  id: string;
  client: string;
  segment: AuditSegment;
  status: AuditStatus;
  stage: AuditStage;
  createdAt: string;            // ISO timestamp
  driveFolder: string;          // URL or empty
  calendlyEventUrl: string;     // URL or empty
  notes: string;
  lastUpdatedAt: string | null;
  lastUpdatedBy: string;        // 'make.com' or a PersonId
}

export interface AppState {
  schemaVersion: 1;
  team: { a: TeamMember; b: TeamMember };
  weekOneStart: string;        // ISO yyyy-mm-dd
  weeks: WeekTheme[];
  tasks: SprintTask[];
  milestones: Milestone[];
  audits: Audit[];             // populated by Make.com intake automation
  notes: string;               // shared scratch pad
  lastUpdatedAt: string | null;
  lastUpdatedBy: PersonId | null;
}

export interface SyncSettings {
  token: string;        // GitHub PAT with `gist` scope
  gistId: string;       // existing gist id (or empty if creating)
  filename: string;     // file in gist
  whoAmI: PersonId;
}
