# Template — Implementation Kickoff

**Status:** Standard kickoff agenda + notes template + access provisioning checklist. Used on Day 1 of every Implementation.
**Purpose:** Lock scope and access on Day 1 so build sprints don't get blocked. The kickoff is not a sales call; the sale was already made. This call is operational.
**Inputs:** signed SOW, audit report deck, Opportunity Matrix, [methodology v0.1](../01-implementation-methodology-v0.1.md).
**Output:** kickoff notes + completed access checklist + scheduled weekly check-in cadence + scheduled UAT and handoff dates.

## Glossary (read once, then skim)

- **Buyer-side decision-maker** — the person on the client's side who can approve scope changes, sign off UAT, and make calls on the fly. Critical: not always the same as the buyer who signed the SOW.
- **Access provisioning** — the credentials, OAuth grants, and shared folders Tack needs to do the work.
- **Hard scope** — the explicit list of workflows in the SOW. Anything outside this list is out of scope until a change order is signed.
- **Soft scope (de-scoped)** — things the audit recommended but the client decided not to do now. We name them explicitly so they don't sneak back in.

---

## Pre-call prep (15 min before the call)

1. Re-read the SOW. Note the workflows in scope and the price.
2. Re-read the audit report deck. Confirm the workflows in the SOW match the locks from the matrix.
3. Open the engagement folder. Confirm it has: SOW PDF, audit report PDF, access checklist draft.
4. Open the kickoff notes template (below). Have it on a second screen.

---

## The call structure (60 min)

| Minute | Activity |
|---|---|
| 0–5 | Welcome + confirm everyone on the call |
| 5–15 | Walk through what we're building (workflows in scope) and what we're explicitly NOT building (soft scope / de-scoped) |
| 15–25 | Identify the buyer-side decision-maker for scope and UAT |
| 25–40 | Walk the access provisioning checklist together. Mark each item green / yellow / red |
| 40–50 | Confirm weekly check-in cadence, UAT week date, handoff week date |
| 50–55 | Open questions / concerns |
| 55–60 | Confirm next 24 hours: what client does, what we do |

---

## Kickoff notes template (fill during the call)

```
ENGAGEMENT: [client business name]
TIER: [Starter / Standard / Comprehensive]
SOW DATE: [YYYY-MM-DD]
KICKOFF DATE: [YYYY-MM-DD]
PROJECTED UAT WEEK: [date range]
PROJECTED HANDOFF: [YYYY-MM-DD]

ATTENDEES ON CLIENT SIDE:
- [name, role, email]
- [name, role, email]

BUYER-SIDE DECISION-MAKER:
- [name] is empowered to approve scope changes and sign off UAT.
- Backup if [name] is unavailable: [name].

HARD SCOPE (workflows in this SOW):
1. [workflow name] — [one-line description]
2. [workflow name] — [one-line description]
3. [workflow name] — [one-line description]

EXPLICITLY DE-SCOPED (audit recommended; not in this SOW):
- [item] — reason: [SOW phase 2, budget, regulatory, etc.]
- [item] — reason: [...]

WEEKLY CHECK-IN:
- Day: [day of week]
- Time: [time + timezone]
- Format: [video call / Slack / email update]
- Length: [15 / 30 min]

POST-CALL NEXT 24 HOURS:
- Client to complete: [items]
- Tack to complete: [items]
```

---

## Access provisioning checklist

For each system involved in the workflows in scope, capture:

```
SYSTEM: [name, e.g., Squarespace / Klaviyo / ezyVet / Applied Epic]

NEEDED ACCESS:
- [ ] Admin login to the system
- [ ] OAuth grant to Tack app (if applicable)
- [ ] API key with appropriate scope (read/write/admin)
- [ ] IP allowlist (if the system has one): add Tack' dev server IP
- [ ] Shared folder in Drive (or equivalent) for exports and reports

WHO PROVISIONS:
- [name on client side]

DEADLINE:
- [YYYY-MM-DD — typically end of Day 3 of Week 1]

STATUS: [GREEN — granted / YELLOW — in progress / RED — blocked]
NOTES: [any caveats: e.g., "service account in progress, ETA tomorrow"]
```

Repeat for every system. Track in a single doc in the engagement folder.

### Common access items by segment

**Vet segment:**
- PIMS admin login (ezyVet / Shepherd / AVImark)
- Practice email (Gmail / Outlook) — service account preferred
- Online booking system (if separate from PIMS)
- Payment processor admin (Stripe / Square)

**Insurance segment:**
- AMS login (Applied Epic / AMS360 / EZLynx)
- Carrier portals (per carrier)
- Email service (Gmail Workspace)
- Comparative rater (if used)

**Shopify segment:**
- Shopify admin
- Klaviyo admin
- Helpdesk admin (Gorgias / Help Scout / Zendesk)
- 3PL or fulfillment admin (if applicable)
- Triple Whale / similar analytics

**Other (e.g., Soil Detective beta):**
- Site CMS admin
- Patreon admin (if applicable)
- Email service
- Payment processor
- Any custom-built tools or spreadsheets

---

## Pre-kickoff hard gate confirmation

Before the kickoff call ends, confirm in writing (in the kickoff notes):

- [ ] SOW signed by both parties (link to PDF)
- [ ] 50% deposit received in Stripe (confirmation number)
- [ ] Tech E&O insurance is active for Tack (policy number, expiry date)
- [ ] Make AI Agents rebuild check passed (documented in engagement folder)
- [ ] Access provisioning started (status of each system)

If any of these is red, the kickoff is informational only — build does not start until they're all green.

---

## Post-call (within 4 hours)

1. Send the client a recap email with: scope confirmed, access checklist with current status, next 24-hour actions on both sides, weekly check-in calendar invite.
2. Log the kickoff in CRM with date, attendees, and notes link.
3. Add UAT and handoff dates to both founders' shared calendars.
4. Schedule the first daily §11 QC review (internal, 15 min) for Day 2 of Week 1.

---

## QC log

- §11 Tier A pass: [auditor name], [date], [items found and resolved]
