# Intake Automation Setup Walkthrough

**Status:** Step-by-step companion to `01-intake-automation-playbook.md`. This is the "click here, then click there, then verify" version — use it the afternoon you sit down to build the SaaS stack.
**Owner:** Whichever founder is doing the setup (Claude can help debug live if you hit a snag).
**Total time:** ~3.5 hours of focused click-through. Don't context-switch — this kind of integration work compounds errors when interrupted.
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

## Step 2 — Tally form (45 min — the longest step)

1. Go to **https://tally.so**. Sign up with `dreamhelpers2025` Google account. Free plan is enough for now.
2. Click **+ Create a form → Start from scratch**.
3. Title at top: `Founder Hours Audit — Discovery Questionnaire`.
4. Open these two repo files side-by-side as your spec source:
   - [`deliverables/framework/templates/01-discovery-questionnaire.md`](../framework/templates/01-discovery-questionnaire.md) — the generic template (the source of truth for question labels)
   - [`deliverables/pilot/05-soil-detective-discovery-questionnaire.md`](../pilot/05-soil-detective-discovery-questionnaire.md) — Rosalinda's pre-filled version, just for reference

   **Use the generic template for the form structure.** Every audit reuses the same form — Rosalinda's pre-fills are her instance, not the form.

5. Build the form by adding blocks. For each question in the generic template (Sections A–H):
   - **Section header** (A, B, C, etc.) → Tally **"Heading 2"** block (one per section letter)
   - **Short text answers** (A1, A2, A4, A6, B2–B4, etc.) → **"Short answer"** block
   - **Long text answers** (B2, C6, E2, E4, G4, H5, H6) → **"Long answer"** block
   - **Multiple choice** (A3 revenue band) → **"Multiple choice"** block, single select
   - **Hours-per-week category table** (B1) → 8 separate **"Number"** blocks, one per category, with the category name in the label
   - **File uploads** (rate sheets, paper photos, etc.) → **"File upload"** block (Tally free supports it)
   - **Tier table** (H1) → 5 **"Long answer"** blocks (Seed/Sprout/Root/Mycelium/Forest), with the tier price in the label

6. Add **two "Hidden field" blocks at the top** — Make.com populates both from the Calendly booking via URL parameters:
   - Hidden field 1: name `clientName`
   - Hidden field 2: name `segment` — accepts values `vet`, `insurance`, `shopify`, `other`

7. **Segment-specific questions and conditional logic.** Sections A, B, E, F, G, H are universal — they show to every prospect. Sections C and D have variants per segment. We don't build four separate forms; instead, we add segment-specific blocks alongside the universal ones and use Tally's conditional logic so each prospect sees only the variant matching their segment.

   For Section C (tool stack), build all four variants as separate sub-sections of the same form:
   - **C-vet block:** PIMS questions (which platform, etc.)
   - **C-insurance block:** AMS questions
   - **C-shopify block:** Sidekick / Klaviyo / VA questions
   - **C-other block:** generic tool stack questions

   For each variant block, click the lightning-bolt icon (Tally's conditional logic) → **Add condition → Show this block when** `segment` **equals** `vet` (or `insurance`, `shopify`, `other`).

   Do the same for Section D (touch points) — four variant blocks each conditionally shown based on `segment`.

   Result: a vet prospect sees A, B, C-vet, D-vet, E, F, G, H. A Shopify prospect sees A, B, C-shopify, D-shopify, E, F, G, H. The "Other" segment skips C-variant and D-variant entirely and goes A, B, E, F, G, H.

8. (Optional, can skip for v1) **Settings → Logic** lets you add additional page transitions. Skip for speed.
9. Click **Publish** in the top-right. Pick a custom slug like `dh-audit-discovery`. The public URL becomes `https://tally.so/r/dh-audit-discovery`. **Save this URL — you use it in Step 5.**
10. Stay on Tally. Click **Integrations → Webhooks → Add webhook**. **Leave the URL field empty for now** — we fill it in Step 7. Just leave this tab open in your browser.

**STOP and verify:** Open the published form URL with the segment URL parameter set to test each variant. Try each in an incognito window:
- `https://tally.so/r/dh-audit-discovery?segment=vet` → confirm only C-vet and D-vet blocks show
- `?segment=insurance` → confirm only C-insurance and D-insurance show
- `?segment=shopify` → confirm only C-shopify and D-shopify show
- `?segment=other` → confirm neither C-variant nor D-variant blocks show

Don't submit. Close.

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
     - `[Tally link]` → your Tally URL from Step 2 plus `?clientName={{clientName}}&segment={{segment}}` (uses the variables from the previous module — Tally reads these into the hidden fields and routes the segment-specific sections automatically)
     - `[Drive folder link]` → `{{2.webViewLink}}` (Make exposes this from the previous folder-copy module's output)

   **Future enhancement (skip for v1, ~30 min when you want it):** add a **Router** module after the segment normalization that branches into four paths (vet / insurance / shopify / other) — each path sends a slightly different welcome email tailored to that segment. For v1 the generic welcome email above works fine; segment routing still happens correctly in the Tally form via the URL parameter.
10. Add a final notification module: **Gmail → Send Email** to `dreamhelpers2025@gmail.com`:
    - **Subject:** `[Audit] New prospect: {{clientName}} ({{segment}})`
    - **Body:** brief summary — client name, segment, email, booking time, Drive folder URL
11. Save the scenario. Leave it OFF for now — we test in Step 8.

**Note:** the Gist PATCH approach (updating the OS dashboard automatically from Make) is documented in the playbook but skipped here. The Gmail notification gives you the same information without the complexity of the GET-modify-PATCH chain. Wire dashboard updates later if you want.

---

## Step 6 — Scenario 2: Questionnaire Received (30 min)

1. **Scenarios → + Create new**. Title: `2. Questionnaire Received`.
2. First module: **Webhooks → Custom webhook**. Add → name `tally-questionnaire-received`. Make generates a webhook URL like `https://hook.us1.make.com/abc123…`. **Copy this URL — Step 7 needs it.**
3. Switch to your Tally tab from Step 2. Edit the form → **Integrations → Webhooks → Add → paste the Make webhook URL → Save**.
4. Back in Make, click the webhook module → **Redetermine data structure**. It'll show "Waiting for data." In a third tab, open the Tally public form URL, fill in dummy answers, submit. Make captures the structure within seconds.
5. Next module: **Google Drive → Upload a file**:
   - **Folder:** for v1, hard-code to your test client folder created in Step 5. We'll improve dynamic folder lookup once a real flow proves out.
   - **File source:** Map → "Generate from data" → use the JSON payload from the webhook
   - **Filename:** `Questionnaire Response — {{webhook.submittedAt}}.json`
6. Next module: **Gmail → Send Email**:
   - **To:** `{{webhook.respondent.email}}` (Make shows the actual field path from the webhook structure)
   - **Subject:** `Audit Day 1 — data upload checklist`
   - **Body:** copy **Email Template 2** from the playbook
7. Final notification module: **Gmail → Send Email** to `dreamhelpers2025@gmail.com`, subject `[Audit] Questionnaire received from {{clientName}}`.
8. Save. Toggle scenario **ON**.

**STOP and verify:** submit a second test response on Tally. Within 1 min:
- A JSON file lands in Drive
- The data-upload email arrives at the email address you entered in the form
- The notification email arrives at `dreamhelpers2025@gmail.com`

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
   - Notification email arrives at `dreamhelpers2025@gmail.com` with subject including `(vet)`
   - The Tally link in the welcome email ends with `?clientName=Test+Audit+1&segment=vet`
3. Click the Tally link in the welcome email. Confirm only the C-vet and D-vet variant sections show (not insurance, shopify, or other). Fill in answers (any). Submit.
4. Wait 1 min. **Verify:**
   - Data-upload email arrives in your personal inbox
   - JSON file lands in the test client's Drive folder
   - Notification arrives at `dreamhelpers2025@gmail.com`
5. From your personal Gmail or any other browser, drop a test file into Drive folder `Test Audit 1.../02 — Client Data Uploads/`.
6. Wait 1 min. **Verify:** notification arrives.
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
- **Dashboard PATCH from Make** (so the OS dashboard Audits view auto-updates from the flow): the Gmail-notification approach gets us the same information without the complexity. Wire dashboard updates later if you want — ~20 min of additional Make work using HTTP modules with a GET → modify → PATCH pattern.
- **Slack integration:** Gmail notifications to `dreamhelpers2025@gmail.com` work fine for v1.
- **Custom domain email** (e.g., `audits@dreamhelpers.org`): later. `dreamhelpers2025@gmail.com` is fine.

---

## When you hit a snag

Most common issues we'll see:

- **"Connection expired"** in Make → Connections page → click the red one → re-auth.
- **Tally webhook doesn't fire** → check the webhook URL in Tally matches the Make webhook module exactly. Re-copy from Make if needed. Webhooks are case-sensitive and trailing-slash sensitive.
- **Drive folder copy fails** → confirm the template folder ID is correct (it's the long string in the folder's URL after `/folders/`, not the name).
- **Calendly trigger never fires** → confirm the event type filter matches exactly. The "Watch Events" trigger only fires for events created AFTER the scenario was set to "from now on."
- **Make module errors with red bubble** → click the bubble to see the actual error message. Most are auth or field mapping.
- **Tally answers come through as `q_abc123` field names instead of question text** → that's Tally's webhook payload format. In Make's mapping UI, hover the field to see the question text mapped to that ID.

When something's stuck, message me with: which step, which module, and a screenshot of the error. I can usually diagnose in 2–3 minutes.

---

## Final order of operations

| Step | Activity | Time | Cumulative |
|---|---|---:|---:|
| Prep | Sign-ins, tokens, cards ready | 10 min | 10 min |
| 1 | Calendly | 15 min | 25 min |
| 2 | Tally | 45 min | 70 min |
| 3 | Drive | 10 min | 80 min |
| 4 | Make signup + connections | 20 min | 100 min |
| 5 | Scenario 1 | 30 min | 130 min |
| 6 | Scenario 2 | 30 min | 160 min |
| 7 | Scenario 3 | 15 min | 175 min |
| 8 | End-to-end test | 30 min | 205 min |
| 9 | Send Rosalinda | 5 min | 210 min |

**Total: 3.5 hours of focused click-through.**

Plan a single afternoon block; this kind of integration work shouldn't be context-switched.

You can stop at the end of any step and pick up later — each step's prerequisites are listed at the top of that step.
