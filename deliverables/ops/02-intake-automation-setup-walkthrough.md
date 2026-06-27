# Intake Automation Setup Walkthrough

**Status:** v3, updated 2026-06-26 — replaces Tally with our custom intake portal at `dreamhelpers-intake` and pulls Make.com Scenario 2 inside the Supabase Postgres trigger. Net effect: shorter, cheaper, more controllable.
**Owner:** Whichever founder is doing the setup (Claude can help debug live if you hit a snag).
**Total time:** ~2.5 hours of focused click-through (down from 3.5 when Tally was in the stack).
**Prerequisite:** read `01-intake-automation-playbook.md` first so you know what we're building and why. This doc skips the why.

## Glossary (read once, then skim)

- **Trigger** — the event that starts an automated workflow in Make.com (e.g., "a new Calendly booking happened").
- **Module** — a single step inside a Make.com scenario (e.g., "send email," "copy folder").
- **Scenario** — a complete Make.com workflow made of trigger + modules in sequence.
- **Webhook** — a URL one service calls to notify another that something happened. The plumbing of SaaS integration.
- **PAT** (Personal Access Token) — a string you generate in GitHub that grants API access.
- **Connection** — a stored login Make.com keeps so it can act on your behalf in another service (Gmail, Drive, Calendly, etc.).
- **Incognito window** — a private browsing window where you're not signed in. Used to test "what does a prospect see?"

---

## Before you start (10 min prep)

Have these ready before you sit down:

- [ ] Signed into the `dreamhelpers2025` Google account in your default browser
- [ ] The Gist ID from the OS dashboard (Settings → copy the `Gist ID` field)
- [ ] A GitHub Personal Access Token with `gist` scope (the one in your dashboard Settings works, OR create a fresh one labeled `intake-automation` at https://github.com/settings/personal-access-tokens/new — best practice is a separate token per use)
- [ ] A credit card for Make.com Core ($9/mo — the only paid tool in this stack)
- [ ] Your **personal** Gmail address (not `dreamhelpers2025@gmail.com`) for the end-to-end test in Step 8

---

## Step 1 — Calendly (15 min)

1. Go to **https://calendly.com**. Sign up with the `dreamhelpers2025` Google account. Free plan.
2. Connect Google Calendar when it prompts. Allow it.
3. Skip "Connect Zoom" — we'll use Google Meet.
4. Dashboard → **Event Types → New Event Type → One-on-One**.
5. Fill in:
   - **Event name:** `Founder Hours Audit — Discovery Call`
   - **Description:** `30 minutes. Free. We'll use the call to confirm your questionnaire answers and plan next steps in the audit.`
   - **Duration:** 30 min
   - **Location:** Google Meet (auto-generates a meet link per booking)
6. Scroll to **Booking page → Questions invitees answer when booking**. The defaults include First name + Email. **Add two custom questions:**

   **Question 1 — Business name (text):**
   - Question: `What's the name of your business?`
   - Type: Single line text
   - Required: yes

   **Question 2 — Segment (multiple choice):**
   - Question: `What type of business do you run?`
   - Type: Multiple choice (single select)
   - Required: yes
   - Options (one per line):
     - `Veterinary clinic`
     - `Insurance agency`
     - `Shopify store (ecommerce)`
     - `Other / something else`

   This second answer drives segment-specific routing through the rest of the pipeline — different questionnaire branches, different welcome email language, different audit positioning. Make.com reads it on every booking.

7. Save. You'll land on the event page. **Copy the public booking link** (top of the page) — looks like `https://calendly.com/dreamhelpers2025/founder-hours-audit-discovery-call`. **Save it — you'll use it in Step 5.**

**STOP and verify:** Open the link in an incognito window. You should see the event with both custom questions ("business name" and "type of business"). Don't actually book. Close.

---

## Step 2 — Confirm the custom intake portal is live (5 min)

**No setup required for the form itself — it's already built and deployed.** This step replaces what was previously 45 minutes of Tally configuration.

The intake portal lives at: **https://dreamhelpers2025.github.io/dreamhelpers-intake/**

Source code: https://github.com/dreamhelpers2025/dreamhelpers-intake
Backend: Supabase project `vmewqxmnvyszbwioqiby` (Postgres for responses, Storage for file uploads)
Notification: Resend trigger fires on every submission, emails `dreamhelpers2025@gmail.com`

### URL parameters the portal accepts

The portal reads URL parameters and pre-fills hidden fields plus drives the segment-specific section routing:

| Parameter | What it does | Example |
|---|---|---|
| `clientName` | Pre-fills the welcome line + the businessName field | `?clientName=Acme%20Vet` |
| `segment` | Drives which Tool Stack (C) and Touch Points (D) variant shows | `?segment=vet` (or `insurance` / `shopify` / `other`) |

Combined example: `https://dreamhelpers2025.github.io/dreamhelpers-intake/?segment=vet&clientName=Acme%20Vet`

### Quick verification

Open these in an incognito window — confirm the segment-specific sections show/hide correctly:

- `https://dreamhelpers2025.github.io/dreamhelpers-intake/?segment=vet&clientName=Test` → vet-specific PIMS/practice-manager/PE questions show; insurance/Shopify variants do not
- `?segment=insurance&clientName=Test` → AMS/Big I/carrier questions show
- `?segment=shopify&clientName=Test` → Sidekick/Klaviyo/VA questions show
- `?segment=other&clientName=Test` → none of the C/D variants show; Section H Custom Notes shows

Don't submit. Close.

### If you need to edit a question

Edit `src/components/IntakeForm.tsx` in the `dreamhelpers-intake` repo. Push to `main` triggers an automatic GH Pages redeploy. Production URL stays the same.

---

## Step 3 — Google Drive folder template (10 min)

1. Go to **https://drive.google.com** signed in as `dreamhelpers2025`.
2. **New → Folder** named `Dream Helpers — Audits`. This is the parent of every client audit folder going forward.
3. Open it. Inside, **New → Folder** named `_TEMPLATE — Client Audit Folder` (underscore prefix keeps it at the top of any sort).
4. Inside the template folder, create 5 subfolders:
   - `01 — Questionnaire Response`
   - `02 — Client Data Uploads`
   - `03 — Workflow Map + Analysis`
   - `04 — Audit Deck (final)`
   - `05 — Post-walkthrough`
5. Right-click the template folder → **Get link** → set "General access" to **Restricted** (you and Grant only). Copy the link. **Save the template folder ID** (the long string in the URL after `/folders/`) — Make.com uses it in Step 5.

**STOP and verify:** Open the template folder link in an incognito window. It should be access-blocked (correct — only you and Grant should see it).

---

## Step 4 — Make.com signup + connections (20 min)

1. Go to **https://www.make.com**. Sign up with `dreamhelpers2025` Google account.
2. Choose the **Core plan ($9/mo)** — enter the credit card. You can technically start on free, but free has scenario limits that will block us.
3. After signup, top-right → **Connections → + Add new connection**. Add each of these in sequence, authorizing each one:
   - **Google Calendar** — name the connection `dreamhelpers2025-calendar`
   - **Gmail** — name `dreamhelpers2025-gmail`
   - **Google Drive** — name `dreamhelpers2025-drive`
   - **Calendly** — OAuth, redirects through Calendly to grant permissions. Name `dreamhelpers2025-calendly`
   - **Tally** — API key based. Get yours: in Tally, **Settings → API → Generate key**. Paste into Make. Name `dreamhelpers2025-tally`
4. We **don't** need a connection for HTTP modules — those are generic.

**STOP and verify:** Connections page shows 5 green connections.

---

## Step 5 — Scenario 1: New Prospect Onboarding (30 min)

1. **Scenarios → + Create a new scenario**. Title: `1. New Prospect Onboarding`.
2. Click the big **+** in the center to add the first module.
3. Search **Calendly → Watch Events**. Pick the `dreamhelpers2025-calendly` connection. Configure:
   - **Trigger event type:** `Invitee Created`
   - **Event type filter:** `Founder Hours Audit — Discovery Call` (will appear in the dropdown from Step 1)
   - **Limit:** 1 (don't bulk process; we want one trigger per booking)
4. Save. Click the wrench icon on the trigger → **Choose where to start: From now on**.
5. Click **+** after the trigger to add the next module.
6. **Google Drive → Copy a Folder**:
   - **Source folder:** the `_TEMPLATE — Client Audit Folder` (use the ID from Step 3)
   - **Destination folder:** parent `Dream Helpers — Audits`
   - **New folder name:** click into the field and use Make's expression builder. The expression is: `[answer to "business name"] — Audit [today's date]`. In Make's syntax: `{{1.payload.questions_and_answers[].answer}} — Audit {{formatDate(now; "YYYY-MM-DD")}}`. (The questions_and_answers array contains all custom Calendly questions; Make's UI helps you click to the right one.)
7. Right-click the line between the trigger and this module → **Run this module only** to test the folder copy. Pick a real Calendly booking from your test if possible, or use Make's "fake data" option.
8. **Segment normalization helper.** Before the Gmail send, add a **Tools → Set multiple variables** module that converts the Calendly "type of business" answer (e.g., `Veterinary clinic`) into the lowercase segment key (`vet`) that the Tally URL parameter expects. Define variables:
   - `segment` — use a small switch expression: if the answer contains `Vet` → `vet`; if `Insurance` → `insurance`; if `Shopify` → `shopify`; otherwise → `other`. In Make's expression builder: `{{ifContains(answer; "Vet"; "vet"; ifContains(answer; "Insurance"; "insurance"; ifContains(answer; "Shopify"; "shopify"; "other")))}}` — the exact syntax is shown in Make's helper UI.
   - `clientName` — the business name answer from Calendly.

9. Add the **Gmail → Send an Email** module:
   - **Connection:** `dreamhelpers2025-gmail`
   - **To:** `{{1.payload.email}}` (the prospect's email from Calendly)
   - **From:** `dreamhelpers2025@gmail.com`
   - **Subject:** `Welcome to your Dream Helpers audit — next steps inside`
   - **Content type:** HTML
   - **Body:** copy **Email Template 1** from [`01-intake-automation-playbook.md` § "Email templates"](01-intake-automation-playbook.md#email-templates). Replace placeholders:
     - `[first name]` → `{{1.payload.name}}`
     - `[Intake portal link]` → `https://dreamhelpers2025.github.io/dreamhelpers-intake/?clientName={{clientName}}&segment={{segment}}` (our custom portal reads these from the URL to pre-fill the welcome line and route the segment-specific sections automatically)
     - `[Drive folder link]` → `{{2.webViewLink}}` (Make exposes this from the previous folder-copy module's output)

   **Future enhancement (skip for v1, ~30 min when you want it):** add a **Router** module after the segment normalization that branches into four paths (vet / insurance / shopify / other) — each path sends a slightly different welcome email tailored to that segment. For v1 the generic welcome email above works fine; segment routing still happens correctly in the Tally form via the URL parameter.
10. Add a final notification module: **Gmail → Send Email** to `dreamhelpers2025@gmail.com`:
    - **Subject:** `[Audit] New prospect: {{clientName}} ({{segment}})`
    - **Body:** brief summary — client name, segment, email, booking time, Drive folder URL
11. Save the scenario. Leave it OFF for now — we test in Step 8.

**Note:** the Gist PATCH approach (updating the OS dashboard automatically from Make) is documented in the playbook but skipped here. The Gmail notification gives you the same information without the complexity of the GET-modify-PATCH chain. Wire dashboard updates later if you want.

---

## Step 6 — Postgres trigger handles questionnaire received (already done)

**This step replaces what was Make Scenario 2 (~30 min of click-through).** The intake portal saves submissions directly to Supabase, and a Postgres trigger fires the notification email via Resend. Everything is already wired — this step is just for confirming and (optionally) extending the trigger to also send a prospect-facing "we got it" email.

### What's already running

- Form submission → INSERT into `public.responses` (Supabase Postgres)
- File uploads → `uploads/{submission-id}/...` (Supabase Storage)
- Postgres trigger `notify_on_response_insert` → calls Resend → emails `dreamhelpers2025@gmail.com` with subject `[Audit] New intake: {client} ({segment})`

Trigger source: [`dreamhelpers-intake/supabase/notify.sql`](https://github.com/dreamhelpers2025/dreamhelpers-intake/blob/main/supabase/notify.sql).

### Optional — add a prospect-facing acknowledgment email

If you want the prospect to get an immediate "we got your intake, here's what happens next" confirmation, extend the trigger function in Supabase SQL Editor:

```sql
-- Add this after the existing notify_resend() function, OR replace notify_resend
-- with a version that sends two emails.

create or replace function public.notify_resend()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  request_id bigint;
  resend_key text := 'YOUR_RESEND_API_KEY';  -- same key as before
  prospect_email text;
begin
  -- Existing internal notification (unchanged) — sends to dreamhelpers2025@gmail.com
  select net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object('Content-Type', 'application/json', 'Authorization', format('Bearer %s', resend_key)),
    body := jsonb_build_object(
      'from', 'Dream Helpers Intake <onboarding@resend.dev>',
      'to', jsonb_build_array('dreamhelpers2025@gmail.com'),
      'subject', format('[Audit] New intake: %s (%s)', coalesce(new.client_name, 'unknown'), new.segment),
      'html', format('<h2>New audit intake submitted</h2><p><strong>Client:</strong> %s</p><p><strong>Segment:</strong> %s</p>',
                     coalesce(new.client_name, '(no name)'), new.segment)
    )
  ) into request_id;

  -- New: prospect-facing acknowledgment (only if their email is in the payload)
  prospect_email := new.payload->>'prospectEmail';  -- requires the form to capture email
  if prospect_email is not null then
    select net.http_post(
      url := 'https://api.resend.com/emails',
      headers := jsonb_build_object('Content-Type', 'application/json', 'Authorization', format('Bearer %s', resend_key)),
      body := jsonb_build_object(
        'from', 'Dream Helpers <onboarding@resend.dev>',
        'to', jsonb_build_array(prospect_email),
        'subject', 'Got it — your Dream Helpers audit intake is in',
        'html', '<p>Thanks for submitting your audit intake. We''ll review and reach out within 1 business day with the next step — usually a quick confirmation call and the shared folder for any data exports.</p><p>— Dream Helpers</p>'
      )
    ) into request_id;
  end if;

  return new;
end;
$$;
```

Note: the prospect-facing email requires the form to capture `prospectEmail` in the payload. Make Scenario 1 already collects this from the Calendly booking — to make it available in the portal, append `&prospectEmail={{1.payload.email}}` to the welcome-email link's URL parameters (alongside `clientName` and `segment`).

If you skip this enhancement, the prospect still sees the thank-you page that confirms their submission. The internal notification email still works either way.

---

## Step 7 — Scenario 3: Data Received (15 min)

1. **+ Create scenario**. Title: `3. Data Received`.
2. First module: **Google Drive → Watch Files in a Folder**:
   - **Folder:** parent `Dream Helpers — Audits` (Make watches recursively — fires on any new file in any client subfolder)
   - **Limit:** 5
3. Next module: **Gmail → Send Email** to `dreamhelpers2025@gmail.com`:
   - **Subject:** `[Audit] New file uploaded: {{1.name}}`
   - **Body:** `Client uploaded {{1.name}} to {{1.parents[0].name}}. Ready for Day 2 analysis.`
4. Save. Toggle ON.

**STOP and verify:** drag any test file into the `02 — Client Data Uploads/` subfolder of your test client folder. Within 1 min you should get a notification email.

---

## Step 8 — End-to-end test (30 min)

In one continuous session, in a fresh incognito browser:

1. Open the Calendly link. Book a slot using your **personal Gmail**, business name `Test Audit 1`, and segment `Veterinary clinic`.
2. Wait 1 min. **Verify:**
   - Welcome email arrives in your personal inbox
   - Drive folder `Test Audit 1 — Audit 2026-06-XX` exists
   - Internal-notification email arrives at `dreamhelpers2025@gmail.com` (the one from Scenario 1's final Gmail module, before the form is even submitted)
   - The portal link in the welcome email is `https://dreamhelpers2025.github.io/dreamhelpers-intake/?clientName=Test+Audit+1&segment=vet`
3. Click the portal link in the welcome email. Confirm only the C-vet and D-vet variant sections show (not insurance, shopify, or other). Fill in answers (any). Submit.
4. Wait 30 sec. **Verify:**
   - You land on the thank-you page at `https://dreamhelpers2025.github.io/dreamhelpers-intake/thank-you/`
   - Notification email arrives at `dreamhelpers2025@gmail.com` from `onboarding@resend.dev` with subject `[Audit] New intake: Test Audit 1 (vet)` — this is from the Postgres trigger, not Make
   - In Supabase Studio → Table Editor → `responses`, the new row exists with `segment=vet` and the full payload
5. From your personal Gmail or any other browser, drop a test file into Drive folder `Test Audit 1.../02 — Client Data Uploads/`.
6. Wait 1 min. **Verify:** notification arrives (from Scenario 3 in Make).
7. **Clean up:** delete the test client folder, cancel the Calendly booking in the test inbox, archive test emails.

**If all 6 checkpoints pass → system is live.**

---

## Step 9 — Send Rosalinda the Calendly link (5 min)

Email her:

> Hi Rosalinda — we've set up the formal audit intake. Book a confirmation discovery call here when convenient: [your Calendly link]. Booking will auto-trigger the questionnaire and a shared folder for the audit materials. We pre-filled what we already know from our meeting; you just confirm or fill in the gaps.
>
> Dream Helpers

She books → the whole pipeline fires automatically → you and Grant get pinged at each stage.

---

## What we deferred (you do NOT need any of this today)

- **Scenarios 4 and 5** (walkthrough reminder + post-call deck delivery): both manual-trigger, easy to add when you actually need them. ~30 min of additional Make work each.
- **Dashboard PATCH from Make** (so the OS dashboard Audits view auto-updates from the flow): the Gmail-notification approach gets us the same information without the complexity. Wire dashboard updates later if you want — alternative: extend the Postgres trigger to PATCH the OS dashboard Gist directly using `pg_net`, no Make module needed.
- **Slack integration:** Gmail notifications to `dreamhelpers2025@gmail.com` work fine for v1.
- **Custom domain email** (e.g., `audits@dreamhelpers.org`): later. `onboarding@resend.dev` is fine for the trigger, and `dreamhelpers2025@gmail.com` is fine for Make-sent emails.
- **Prospect-facing acknowledgment email** after intake submission: optional enhancement to the Postgres trigger documented in Step 6.

---

## When you hit a snag

Most common issues we'll see:

- **"Connection expired"** in Make → Connections page → click the red one → re-auth.
- **Intake portal won't load** → check `https://dreamhelpers2025.github.io/dreamhelpers-intake/` is up. If it shows a 404, the GH Pages deploy is broken — check Actions tab in the `dreamhelpers-intake` repo.
- **Form submits but no notification email arrives** → check the Resend trigger fired by looking at the row in `responses` table (Supabase Studio). If the row is there, the trigger likely failed silently. Run `select * from net._http_response order by created desc limit 5;` in SQL Editor to see Resend's response.
- **"new row violates row-level security policy"** when submitting → run `supabase/fix-rls.sql` from the intake repo in Supabase SQL Editor. This is a known one-time RLS fix if the original `schema.sql` was applied before the patch.
- **Drive folder copy fails** → confirm the template folder ID is correct (it's the long string in the folder's URL after `/folders/`, not the name).
- **Calendly trigger never fires** → confirm the event type filter matches exactly. The "Watch Events" trigger only fires for events created AFTER the scenario was set to "from now on."
- **Make module errors with red bubble** → click the bubble to see the actual error message. Most are auth or field mapping.

When something's stuck, message me with: which step, which module/component, and a screenshot of the error. I can usually diagnose in 2–3 minutes.

---

## Final order of operations

| Step | Activity | Time | Cumulative |
|---|---|---:|---:|
| Prep | Sign-ins, tokens, cards ready | 10 min | 10 min |
| 1 | Calendly | 15 min | 25 min |
| 2 | Confirm intake portal is live (no setup) | 5 min | 30 min |
| 3 | Drive folder template | 10 min | 40 min |
| 4 | Make signup + connections (Tally connection no longer needed) | 15 min | 55 min |
| 5 | Scenario 1: New Prospect Onboarding (welcome email links to our portal) | 30 min | 85 min |
| 6 | Postgres trigger (already done — optional acknowledgment email enhancement ~15 min) | 0–15 min | 85–100 min |
| 7 | Scenario 3: Data Received | 15 min | 100–115 min |
| 8 | End-to-end test | 30 min | 130–145 min |
| 9 | Send Rosalinda | 5 min | 135–150 min |

**Total: ~2.5 hours of focused click-through (down from 3.5 hours when Tally was in the stack).**

Plan a single afternoon block; this kind of integration work shouldn't be context-switched.

You can stop at the end of any step and pick up later — each step's prerequisites are listed at the top of that step.
