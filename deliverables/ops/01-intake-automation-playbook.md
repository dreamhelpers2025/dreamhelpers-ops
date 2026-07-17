# Intake Automation Playbook (Phase 1 MVP)

**Status:** Setup spec for our internal audit intake stack. Updated 2026-06-26 — Tally replaced by our own [dreamhelpers-intake](https://github.com/dreamhelpers2025/dreamhelpers-intake) portal + Supabase, Make Scenario 2 replaced by a Supabase Postgres trigger. Soil Detective is the first audit through the automated flow.
**Owner:** Both founders. Claude produces specs; humans click through SaaS UIs.
**Purpose:** Eliminate manual email shuffling on every audit. Triggers fire from a prospect booking a discovery call all the way to Day 5 walkthrough reminders.
**Architecture posture:** Phase 1 is a hybrid — Calendly + Make.com for orchestration of the booking side, our own portal + Supabase for the form and storage side. We built the portal v0.1 because Tally's free tier could not handle conditional logic and Tally Pro cost $29/mo. We re-evaluate at audit #3–5 whether to extend the portal further or wait.

> **⚠ Architecture changed mid-build.** The original Phase 1 design used Tally for the form layer (steps and diagrams below still reference it). On 2026-06-26 we replaced Tally with our own portal because of free-tier limits. The **walkthrough doc (`02-intake-automation-setup-walkthrough.md`) is the up-to-date source of truth for actual setup.** This playbook below preserves the original architecture as conceptual reference; treat any Tally mention as "our custom portal does this now."
>
> **What changed concretely:**
> - Tally → [dreamhelpers-intake portal](https://dreamhelpers2025.github.io/dreamhelpers-intake/) (Astro + React, deployed to GH Pages)
> - Tally webhook → Supabase REST API write from the portal frontend (anon key)
> - Tally form responses → Supabase Postgres `responses` table
> - Tally file uploads → Supabase Storage `uploads` bucket
> - Make.com Scenario 2 → Supabase Postgres trigger calling Resend via pg_net (no Make module needed)
> - All other scenarios (Calendly trigger, welcome email, Drive folder copy, file-watch) unchanged

## Glossary (read once, then skim)

- **MVP** (Minimum Viable Product) — smallest version that delivers real value. We do not over-build until we have audit reps.
- **Webhook** — a URL one service calls to notify another that something happened. The plumbing of all SaaS integration.
- **Make.com** — visual no-code automation platform. The connective tissue of our intake stack.
- **Trigger** — the event that starts an automated workflow (e.g., "a Typeform was submitted").
- **Action** — the step a workflow does in response to a trigger (e.g., "create a Drive folder").
- **Scenario** — Make.com's term for a single workflow. We will build five scenarios.
- **Gist API** — GitHub's API for reading and writing private snippets. Our OS dashboard already uses it; Make.com can write to it directly.

---

## The flow we are automating

```
┌──────────────────────────────────────────────────────────────────────┐
│ PROSPECT                                                             │
│   └─► Books discovery call on Calendly                               │
│                                                                       │
│        ▼ (Calendly webhook fires)                                    │
│                                                                       │
│ MAKE.COM Scenario 1: New Prospect Onboarding                         │
│   ├─► Create per-client Google Drive folder                          │
│   ├─► Send Typeform questionnaire via email                          │
│   ├─► PATCH our OS dashboard Gist: new audit in "Discovery booked"   │
│   └─► Send Slack/email notification to us                            │
│                                                                       │
│ PROSPECT                                                             │
│   ├─► Has the discovery call (humans run it)                         │
│   ├─► Fills out Typeform questionnaire                                │
│                                                                       │
│        ▼ (Typeform webhook fires)                                    │
│                                                                       │
│ MAKE.COM Scenario 2: Questionnaire Received                          │
│   ├─► Save responses as PDF into the client's Drive folder           │
│   ├─► PATCH OS dashboard: status → "Questionnaire received"          │
│   ├─► Send 2nd email with data-upload checklist + folder link        │
│   └─► Notify us                                                       │
│                                                                       │
│ PROSPECT                                                             │
│   └─► Uploads 30 days of data into Drive folder                      │
│                                                                       │
│        ▼ (Drive webhook fires when new file lands)                   │
│                                                                       │
│ MAKE.COM Scenario 3: Data Received                                   │
│   ├─► PATCH OS dashboard: status → "Day 1 complete, ready for analysis" │
│   └─► Notify us with summary of what was uploaded                    │
│                                                                       │
│ HUMANS + CLAUDE                                                       │
│   └─► Build workflow map, pain point map, opportunity matrix, deck   │
│                                                                       │
│ MAKE.COM Scenario 4: Day 4 Walkthrough Reminder                      │
│   └─► (Manual trigger from us) Send "your walkthrough is tomorrow"    │
│                                                                       │
│ MAKE.COM Scenario 5: Post-Walkthrough Follow-Up                      │
│   ├─► (Manual trigger from us) Send deck + Implementation proposal   │
│   ├─► PATCH OS dashboard: status → "Walkthrough complete, decision pending" │
│   └─► Schedule 7-day follow-up reminder                              │
└──────────────────────────────────────────────────────────────────────┘
```

The first 3 scenarios run on autopilot. Scenarios 4 and 5 are manually triggered by us — we want a human-in-the-loop on outbound for the first 5 audits per v0.4 §11 (every external artifact passes through Tier A QC).

---

## Tools + costs

| Tool | Plan | Monthly cost | Why this one |
|---|---|---|---|
| **Calendly** | Free (1 event type) → Standard $10 | $0–$10 | Already-known UX, has webhook for free, integrates with everything |
| **Typeform** | Basic $25 OR **Tally (free)** | $0–$25 | Branded, structured intake, file uploads. Tally is free + slightly less polished. Start with Tally. |
| **Make.com** | Core $9 (10K credits) | $9 | Visual scenarios, 5 scenarios fits easily in Core plan |
| **Google Drive** | Existing Google Workspace | $0 (existing) | Universal client comfort, native sharing |
| **Notifications: Slack** | Free tier OR email | $0 | Where we get pinged when stuff happens |
| **GitHub (Gist API)** | Existing | $0 | Our OS dashboard storage; Make.com PATCHes it directly |

**Total Phase 1 monthly cost: $9–$44/mo, recommend starting at $9 (Tally + Make Core) and upgrading Tally if we hit volume.**

**One-time setup time:** ~4 hours to click through everything below.

---

## Setup walkthrough — do these in order

### Step 1 — Tally questionnaire (45 min)

1. Sign up for Tally at https://tally.so using the `dreamhelpers2025` Google account.
2. Create a new form titled "Soil Detective — Discovery Questionnaire" (we generalize the title pattern later: "[Client] — Discovery Questionnaire").
3. Build the form using the structure from [`05-soil-detective-discovery-questionnaire.md`](../pilot/05-soil-detective-discovery-questionnaire.md) View 1. Direct mapping:
   - Each markdown section (A–H) becomes a Tally "page" with a transition between
   - Pre-filled answers go into the field's "default value"
   - Text inputs for short answers, long-text for paragraph answers, multiple choice for the revenue band / regulation questions, file upload for any photo or doc attachments
4. Enable "Webhook" integration → set webhook URL to a placeholder (we'll fill it in after Make.com scenario 2 is built).
5. Get the public form URL — it'll look like `https://tally.so/r/<formId>`. We send this URL to Rosalinda.

**Template tip:** save this form as a Tally "Template" so cloning for client #2 is one click. The questionnaire structure is constant across audits; only the pre-filled answers differ.

### Step 2 — Calendly event (30 min)

1. Sign up for Calendly Free at https://calendly.com using the `dreamhelpers2025` Google account.
2. Connect your Google Calendar.
3. Create an event type: "Founder Hours Audit — Discovery Call" (30 min, free).
4. Add a custom intake question: "What's your business name?" (required). This is the field Scenario 1 reads to name the per-client Drive folder.
5. Set the location to "Google Meet" (auto-creates the meeting link).
6. Get the booking link — looks like `https://calendly.com/dreamhelpers/audit-discovery`. This is where we send prospects.

### Step 3 — Google Drive folder template (15 min)

1. In Drive, create a parent folder: `Tack — Audits` (set sharing: dreamhelpers2025 only).
2. Inside, create a template subfolder: `_TEMPLATE — Client Audit Folder`. Inside it create empty subfolders:
   - `01 — Questionnaire Response`
   - `02 — Client Data Uploads`
   - `03 — Workflow Map + Analysis`
   - `04 — Audit Deck (final)`
   - `05 — Post-walkthrough`
3. Make.com will copy this template per client. (Make has a "Copy a Folder" action.)

### Step 4 — Make.com scenarios (2.5 hours)

Sign up for Make.com Core at https://make.com using the `dreamhelpers2025` Google account.

#### Scenario 1: New Prospect Onboarding

**Trigger:** Calendly → "New Event" (the booking webhook)

**Actions:**
1. **Google Drive → Copy Folder**: copy `_TEMPLATE — Client Audit Folder` → rename to `[Client Business Name] — Audit YYYY-MM-DD`
2. **Gmail → Send Email**: to prospect, from `audits@dreamhelpers.org` (or `dreamhelpers2025@gmail.com` until we set up custom domain email)
   - Subject: `Welcome to the Tack audit — next steps inside`
   - Body: see "Email Template 1" below
3. **HTTP → PATCH Gist**: update our OS dashboard Gist with a new audit record. See "OS Dashboard Webhook Spec" below.
4. **Slack → Post Message** (or Gmail if no Slack): "New audit prospect: [name] booked for [date/time]. Drive folder: [link]"

#### Scenario 2: Questionnaire Received

**Trigger:** Tally → "New Submission" webhook

**Actions:**
1. **Google Docs → Create Document from Template** (or Drive → Upload File): save the Tally responses as a PDF in `[Client folder]/01 — Questionnaire Response/`
2. **Gmail → Send Email**: data-upload checklist email. See "Email Template 2" below.
3. **HTTP → PATCH Gist**: update audit status to "Questionnaire received, awaiting data uploads"
4. **Slack/Gmail → Notify us**

#### Scenario 3: Data Received

**Trigger:** Google Drive → "Watch Files" on the client folder, specifically the `02 — Client Data Uploads/` subfolder

**Actions:**
1. **HTTP → PATCH Gist**: update audit status to "Day 1 complete, ready for analysis"
2. **Gmail → Notify us**: "Soil Detective uploaded [N] new files to data folder. Ready for Day 2."

#### Scenario 4: Day 4 Walkthrough Reminder (manual trigger)

**Trigger:** Webhook URL we hit manually (or a Calendly event)

**Actions:**
1. **Gmail → Send Email**: walkthrough reminder. See "Email Template 3" below.

#### Scenario 5: Post-Walkthrough Follow-Up (manual trigger)

**Trigger:** Webhook URL we hit manually after the walkthrough call

**Actions:**
1. **Gmail → Send Email**: deck + Implementation proposal email. See "Email Template 4" below.
2. **HTTP → PATCH Gist**: status to "Walkthrough complete, decision pending"
3. **Make Scheduler → Wait 7 days → Notify us**: "Time to follow up with [client]"

### Step 5 — Wire Tally webhook to Make Scenario 2 (5 min)

Take the Make.com webhook URL from Scenario 2 → paste into the Tally form's webhook setting from Step 1.

### Step 6 — Test the full flow with a fake prospect (30 min)

1. Use a personal Gmail to book the Calendly event with business name "Test Pilot LLC."
2. Verify Scenario 1 fires: Drive folder created, welcome email arrives, OS dashboard updates, Slack notification.
3. Click the Tally link in the welcome email, fill in dummy answers.
4. Verify Scenario 2 fires: PDF appears in Drive, data-upload email arrives, dashboard updates.
5. Drop a dummy file into the `02 — Client Data Uploads/` folder.
6. Verify Scenario 3 fires: dashboard updates, we get notified.
7. Manually trigger Scenarios 4 and 5 via their webhook URLs.
8. Confirm all emails are well-formatted, all dashboard updates landed, all Drive moves happened.

**Only after the test passes do we send Calendly link to Rosalinda.**

---

## OS Dashboard Webhook Spec

Make.com PATCHes the Gist that backs our Founder Liberation OS dashboard. The dashboard already loads from Gist on page open and renders task cards, so any update Make makes shows up automatically when we refresh.

**Gist contents (JSON):** existing structure has tasks, milestones, weeks. We add a top-level `audits` array.

```json
{
  "schemaVersion": 1,
  ...existing fields...,
  "audits": [
    {
      "id": "audit-soil-detective-2026-06-25",
      "client": "Soil Detective",
      "status": "Discovery booked",
      "stage": "Day 0",
      "createdAt": "2026-06-25T18:30:00Z",
      "driveFolder": "https://drive.google.com/drive/folders/...",
      "calendlyEventUrl": "...",
      "lastUpdatedBy": "make.com"
    }
  ]
}
```

**Status values (these match the audit lifecycle):**
- `Discovery booked`
- `Questionnaire sent`
- `Questionnaire received`
- `Day 1 complete — data received`
- `Day 2-4 — analysis in progress`
- `Day 5 — walkthrough scheduled`
- `Walkthrough complete — decision pending`
- `Closed — Implementation signed`
- `Closed — follow-up scheduled`
- `Closed — declined`

**To PATCH the Gist from Make.com:** use Make's HTTP module with method PATCH, URL `https://api.github.com/gists/{GIST_ID}`, headers `Authorization: Bearer {GH_PAT}` + `Accept: application/vnd.github+json`. Body: the full updated gist content with the audits array updated. (Gist PATCH replaces the entire file content, so Make's logic is: GET current → modify → PATCH.)

**Action for Claude (me):** I'll add an "Audits" view to the OS dashboard in a follow-up commit so the audits array renders as a table alongside the existing task views. Roughly 1 hour of work. Out of scope for this playbook setup but next on the list.

---

## Email templates

### Template 1 — Welcome (sent after Calendly booking)

```
Subject: Welcome to your Tack audit — next steps inside

Hi [first name],

Thanks for booking your discovery call. We'll see you at [date / time] on Google Meet — calendar invite already sent.

Before the call, please take 30–45 minutes to fill out our discovery questionnaire:
https://tally.so/r/[form-id]

It captures the baseline facts about your business so our call together is about interpretation, not information gathering. Most prospects find it useful even before the call — fill in what you know, mark what you don't.

We've also set up a private Google Drive folder for your audit materials:
[Drive folder link]

You don't need to upload anything yet — that comes after our call. Just confirm you can access the folder when it's time.

Looking forward to talking.

Tack
```

### Template 2 — Data upload checklist (sent after questionnaire submission)

```
Subject: Audit Day 1 — data upload checklist

Hi [first name],

Thanks for filling out the questionnaire. Here's what we need uploaded to your Drive folder by end of day tomorrow to keep the 5-day audit cadence on track:

Required:
□ 30 days of customer / member email (export, screenshot, or PDF — your call)
□ 30 days of calendar (Google Calendar export, screenshot of your week, or a written description)
□ Current rate sheet / pricing doc if you have one
□ Most recent month's revenue summary (any format)

Optional but useful:
□ Member or customer list (CSV, Notion export, even a screenshot)
□ Any current automation diagrams or SOPs
□ Photos of paper-based workflows (we'll digitize them for you)

Drop everything into: [Drive folder link] in the "02 — Client Data Uploads" subfolder.

If anything on this list isn't applicable to your business, just tell us — we adapt.

Tack
```

### Template 3 — Walkthrough reminder (manual trigger, Day 4)

```
Subject: Walkthrough tomorrow — what to expect

Hi [first name],

We're 24 hours from your audit walkthrough call ([date / time], Google Meet).

What we'll cover (45 minutes):
- How your business actually runs today (the workflow map)
- Where your time is going (the time-use audit)
- What we recommend automating or fixing, ranked (the opportunity matrix)
- An Implementation proposal you can accept, defer, or decline

What to bring: just yourself and any questions. The deck will be on screen.

We'll send the full deck as a PDF after the call so you can review or share with anyone else who needs to weigh in.

See you tomorrow.

Tack
```

### Template 4 — Post-walkthrough deck delivery (manual trigger)

```
Subject: [Client name] — Audit Deck + Implementation Proposal

Hi [first name],

Great talking with you today. Attached / linked is the full audit deck we walked through.

Google Slides (editable): [link]
PDF (for sharing): [link]
Audit folder (all materials): [Drive folder link]

The Implementation proposal on slides 9–10 is good for 30 days, with all $750 of your audit credit applied if you sign within that window.

Three things on your end:
1. If you want to move forward, reply with which tier (Starter / Standard / Comprehensive) and we'll send the SOW within 24 hours.
2. If you want to think about it, our calendar is open at [Calendly link] for a follow-up whenever you're ready.
3. If now isn't the right time, that's fine too — the deck and findings are yours regardless. We'll check in at 90 days.

Thanks for trusting us with the audit.

Tack
```

---

## What stays human-in-the-loop (per v0.4 §11)

Even after Phase 1 is live, these stay manual:

- **Day 0 discovery call** — human runs the call. The automation gets them booked; we still talk to them.
- **Day 2–4 build of workflow map / pain point map / opportunity matrix / audit deck** — Claude analyzes, humans run §11 Tier A + Tier B QC before anything ships.
- **Day 5 walkthrough call** — human runs the call from the [walkthrough script](../framework/templates/06-walkthrough-script.md).
- **Manual trigger of Scenarios 4 and 5** — we explicitly initiate the reminder and the deck delivery. We don't auto-send the deck the moment the call ends.

The rule: the system handles **logistics**. Humans handle **judgment**.

---

## Phase 2 roadmap (Month 2–3)

After 3–5 audits through Phase 1, we evaluate:

| Pain in Phase 1 | Phase 2 fix |
|---|---|
| Tally is unbranded — prospects see "Tally" footer | Custom intake portal at `audits.dreamhelpers.org` |
| Drive folder UX is fine but generic | Custom client portal with deliverable downloads + status tracker |
| Make.com scenarios are visual but require us to maintain Make subscription | Migrate scenarios to scheduled tasks in Claude Code on a $5/mo VPS |
| No client login — prospects have to bookmark Drive link | Magic-link auth via Supabase free tier |
| §11 Tier B QC is manual — we re-derive numbers in a separate doc | Automated QC pre-flight (does upload contain what we need?) |
| Audit fee not collected automatically | Stripe Checkout integrated at the moment of SOW signature |

**Build effort:** ~2 weeks of one founder's full attention. Decide at the Day 60 retro whether to start.

---

## Test plan summary

Before Rosalinda gets the Calendly link, we run the test from Step 6:

- [ ] Calendly booking → Drive folder created
- [ ] Welcome email arrives with correct Tally link and Drive link
- [ ] OS dashboard updates with new audit record
- [ ] Tally submission → PDF saved to client folder
- [ ] Data-upload email arrives
- [ ] File drop → notification arrives
- [ ] Manual triggers for Scenarios 4 and 5 work
- [ ] All Slack/email notifications land
- [ ] Brand-consistent on every touch (lavender / cream / Flower Power references in email templates if rendered HTML)

Once this passes, we send Rosalinda the Calendly booking link as her first official touch through the formal flow. She is audit #1 through the automated pipeline.

---

## Next concrete actions

| # | Action | Owner | Effort |
|---|---|---|---|
| 1 | Sign up for Tally + Calendly + Make.com using `dreamhelpers2025` Google account | Human | 15 min |
| 2 | Build Tally form from Soil Detective questionnaire spec | Human (Claude can guide live) | 45 min |
| 3 | Build Calendly event type | Human | 15 min |
| 4 | Build Google Drive template folder | Human | 15 min |
| 5 | Build Make.com Scenarios 1–5 | Human, guided by this playbook | 2.5 hrs |
| 6 | Wire Tally webhook → Make.com Scenario 2 | Human | 5 min |
| 7 | Test full flow with fake prospect | Both | 30 min |
| 8 | Add "Audits" view to OS dashboard (renders the audits array) | Claude (separate commit) | 1 hr |
| 9 | Send Calendly link to Rosalinda for her formal discovery booking | Human | 5 min |

**Total: ~4 hours of human time + 1 hour of Claude work in the OS dashboard. Done in one focused afternoon by one founder.**
