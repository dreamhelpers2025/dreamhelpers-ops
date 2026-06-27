# Template — Handoff Package Checklist

**Status:** Standard handoff delivery package + training video script outline. Used in Week 5 (Standard tier) or final week of build (Starter / Comprehensive).
**Purpose:** Hand the working system to the client cleanly. Includes a training video, runbook, monitoring plan, and a scheduled 30-day check-in. Handoff is the moment Dream Helpers steps out — the client must be able to operate the system without us.
**Inputs:** UAT-signed-off system, [methodology v0.1](../01-implementation-methodology-v0.1.md), Architecture Decision Records from Week 1.
**Output:** delivered handoff package + signed handoff acknowledgment + scheduled 30-day check-in.

## Glossary (read once, then skim)

- **Handoff package** — the complete delivery: training video + runbook + monitoring instructions + recovery procedures.
- **Runbook** — a plain-English document the client refers to when something doesn't work as expected.
- **Recovery procedure** — step-by-step instructions for restoring a workflow after a failure.
- **30-day check-in** — scheduled call ~30 days post-handoff where we confirm the system is still working as designed.
- **Managed Services upsell window** — the 30-day check-in is also the natural moment to discuss whether the client wants to convert to a Managed Services engagement.

---

## What's in the handoff package

A complete handoff includes ALL of these:

1. **Training video** — 10–20 minutes, screen-recorded, walks through every workflow shipped + every recovery procedure
2. **Runbook** — written document, lives in the client's shared folder (e.g., Notion, Drive)
3. **Monitoring instructions** — how the client tells if the system is healthy
4. **Recovery procedures** — what the client does if something breaks
5. **Architecture summary** — one-page overview of how the system fits together, with link to the ADRs from Week 1
6. **Credentials handover** — where every login lives, who has access
7. **30-day check-in calendar invite** — sent to both client and Dream Helpers

---

## Handoff checklist (Week 5)

### Monday — Prep

- [ ] §11 Tier A QC pass on all built workflows (read each system as a user; nothing feels broken)
- [ ] §11 Tier B QC pass on every behavioral claim that will appear in the training video or runbook
- [ ] Confirm production environment is stable (no errors in the last 7 days)
- [ ] Engagement folder is organized: SOW, audit deck, ADRs, UAT script signed, build commits, prompts/code

### Tuesday — Training video

- [ ] Script the training video using the [outline below](#training-video-script-outline)
- [ ] Record the training video (single take preferred; max 20 min)
- [ ] Edit lightly (chapter markers, no fluff)
- [ ] Upload to client's preferred location (Drive, Loom, Vimeo, whichever they use)
- [ ] §11 Tier A pass on the recorded video

### Wednesday — Runbook + monitoring + recovery

- [ ] Draft the runbook (use [outline below](#runbook-outline))
- [ ] Add monitoring instructions per workflow
- [ ] Add recovery procedures per workflow
- [ ] §11 Tier A pass on the runbook
- [ ] Send runbook draft to buyer-side decision-maker for review (24-hr async)

### Thursday — Architecture summary + credentials + check-in

- [ ] Write the one-page architecture summary (use [outline below](#architecture-summary-outline))
- [ ] List all credentials and access points handed back to the client (we revoke our access at handoff for systems where applicable)
- [ ] Send 30-day check-in calendar invite to client decision-maker
- [ ] Confirm Dream Helpers has revoked any temporary access not needed for the 30-day support window

### Friday — Handoff call

- [ ] 45-minute handoff call with the client decision-maker
- [ ] Walk through each handoff package item live
- [ ] Confirm client can find every artifact in their shared folder
- [ ] Capture acknowledgment in writing (email reply suffices)
- [ ] Schedule the 30-day check-in (if not already on calendar)
- [ ] Final invoice for any overflow / change order items (if applicable)

### After the handoff call

- [ ] Update CRM: Implementation status → "Delivered, awaiting 30-day check-in"
- [ ] Update OS dashboard Audits view: stage → "Closed — Implementation signed", status → "Closed — Implementation signed"
- [ ] If Managed Services is part of the plan: send Managed SOW within 48 hours
- [ ] If not: schedule a soft-touch follow-up 14 days out

---

## Training video script outline

Structure each video the same way every time:

```
0:00 – 0:30   Welcome and what we're going to cover (list the workflows)
0:30 – 1:00   Where to find this video and the runbook (shared folder location)
1:00 – ...    Workflow 1
              - What it does
              - How you tell it's working (the "green light" indicators)
              - What it looks like in action (live demo with sample data)
              - What you do if it stops working (point at the recovery procedure)
              - Where the logs live
... – ...     Workflow 2 (same structure)
... – ...     Workflow 3 (same structure)
... – ...     The dashboard
              - Where it lives
              - What each section means
              - How to interpret the numbers
... – end     The 30-day window: what to expect, how to reach us, what's in scope vs out
              - In scope: bug fixes on what we built
              - Out of scope: new workflows, scope expansion (those are change orders or Managed)
```

Keep total under 20 minutes. If it's longer, split into per-workflow videos.

---

## Runbook outline

```
# [Client] — Operations Runbook

## What this is
One sentence: the system we built, when handed over.

## How to tell the system is healthy
Per workflow: the single "green light" signal you check daily/weekly.

## How to use the dashboard
Where it lives, what each section means.

## Recovery procedures
Per workflow: what to do if it stops working.
  - Step 1: check [X]
  - Step 2: try [Y]
  - Step 3: contact Dream Helpers via [channel]

## Where everything lives
- Workflows: [system + location]
- Dashboard: [URL]
- Logs: [where]
- Credentials: [where stored]
- Architecture summary: [link]
- Training video: [link]

## Change requests
How to request changes to what we built. Link to: Managed Services SOW (if active), change order template, or Dream Helpers contact.

## Reaching us
- During the 30-day support window: [email + expected response time]
- After: depends on whether Managed Services is active
```

---

## Architecture summary outline

One page, scannable. The point is the client can look at it and understand the shape of what they bought.

```
# [Client] — System Architecture Summary

## What we built
[Bullet list of workflows]

## How the pieces connect
[ASCII or simple diagram showing data flow between systems]

## Key decisions (links to ADRs)
- ADR-001: [decision title]
- ADR-002: [decision title]
- ...

## What we explicitly did NOT build
[Bullet list — items from the audit that were de-scoped, with reason]

## Where the money is going (ongoing costs)
- [SaaS tool 1]: $X/mo
- [SaaS tool 2]: $Y/mo
- Total ongoing: $Z/mo
```

---

## Sign-off block

I, [client decision-maker name], confirm receipt of the complete handoff package from Dream Helpers, including the training video, runbook, monitoring instructions, recovery procedures, architecture summary, and credentials handover.

I confirm I understand:
- The 30-day support window is in scope for bug fixes on what was built.
- New workflows or scope expansion are out of scope for this Implementation and require either a change order or a Managed Services engagement.
- The 30-day check-in is scheduled for [date].

**Signed:** _____________________
**Name:** _____________________
**Date:** YYYY-MM-DD

---

## QC log

- §11 Tier A pass: [auditor name], [date], [training video + runbook reviewed]
- §11 Tier B pass: [auditor name], [date], [behavioral claims in training video re-derived against production data]
