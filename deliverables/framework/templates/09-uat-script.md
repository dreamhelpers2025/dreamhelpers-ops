# Template — User Acceptance Testing (UAT) Script

**Status:** Standard UAT script + sign-off block. Used in Week 4 (Standard tier) or last week of build (Starter / Comprehensive).
**Purpose:** Give the client a structured way to test that what we built does what we promised. UAT is the payment milestone for the 50% balance — sign-off triggers invoice for the remaining 50%.
**Inputs:** SOW, built workflows in production environment, [methodology v0.1](../01-implementation-methodology-v0.1.md).
**Output:** completed UAT script with pass/fail per case + signed sign-off + list of fixes shipped before sign-off.

## Glossary (read once, then skim)

- **UAT** (User Acceptance Testing) — the client tests the system from their perspective using real or realistic data.
- **Test case** — one specific scenario with a known expected outcome.
- **Pass / Conditional Pass / Fail** — the three outcomes per test case.
- **Conditional Pass** — passes the test but client raised a non-blocking concern (logged for handoff, not a blocker for sign-off).
- **Defect** — a test case fails. We fix and re-test before requesting sign-off.
- **Sign-off** — written confirmation (email or DocuSign) that UAT is complete and the second payment milestone is unlocked.

---

## Methodology

### Test case structure

Every test case has the same five fields:

1. **ID** — `UAT-NNN`
2. **Workflow** — which SOW workflow this tests
3. **Scenario** — plain-English description of the scenario being tested
4. **Steps** — numbered list of what the client does
5. **Expected outcome** — what should happen if the system works

### Coverage requirement

Each workflow in the SOW needs:
- At least 1 happy-path test case (normal usage, expected outcome)
- At least 1 edge-case test case (boundary condition, unusual input)
- At least 1 error-case test case (intentional bad input — system should fail gracefully)

For Standard tier (2–3 workflows): 9–12 test cases total minimum.
For Comprehensive tier (4 workflows): 12–16 test cases total minimum.

### Pre-UAT steps

Before sending the script to the client:

1. **Self-run every test case** as Tack. All must pass on our end before client sees the script.
2. **§11 Tier B re-derivation** on every behavioral claim made in the script (e.g., "the classifier routes correctly in this scenario" — confirm with fresh prompts independently).
3. **Confirm the client has all access required** to run each test case (login, sample data, etc.).
4. **Schedule a 30-min UAT kickoff call** where we walk the client through the first 2–3 cases live, then leave them to complete the rest async.

### During UAT

- Client runs test cases over 2–3 business days.
- Client logs pass / conditional pass / fail per case.
- For any fail: client writes 1–2 sentences about what went wrong.
- We monitor the test cases daily; we fix defects within 24 hours of being reported.
- Re-test runs on fixed cases happen during a daily check-in call.

### Sign-off

UAT is signed off when:
- All test cases are Pass or Conditional Pass
- No open defects
- Client confirms in writing (email reply with "UAT signed off" is sufficient)

We then invoice the 50% balance per the SOW payment terms.

---

## BLANK TEMPLATE STARTS HERE — fill in per Implementation

# [Client name] — UAT Script

**Engagement:** [client name]
**SOW reference:** [link]
**UAT week:** [start date – end date]
**Lead tester (client side):** [name, email]
**Sign-off authority (client side):** [name, email — should be the buyer-side decision-maker from kickoff]

## Test cases

### Workflow 1: [workflow name]

#### UAT-001 — Happy path

- **Scenario:** [plain-English]
- **Steps:**
  1. [Client action]
  2. [Client action]
- **Expected outcome:** [what should happen]
- **Result:** [ ] Pass  [ ] Conditional Pass  [ ] Fail
- **Notes:** ____________

#### UAT-002 — Edge case

(same structure)

#### UAT-003 — Error case

(same structure)

### Workflow 2: [workflow name]

#### UAT-004 — Happy path

(same structure)

[Continue per workflow]

## Defect log (filled during UAT)

| ID | Test case | Reported | Fixed | Re-tested | Status |
|---|---|---|---|---|---|
| DEF-001 | UAT-007 | YYYY-MM-DD | YYYY-MM-DD | YYYY-MM-DD | Closed |

## UAT sign-off

I, [client decision-maker name], have run or supervised the test cases above and confirm that all are Pass or Conditional Pass.

I authorize Tack to invoice the remaining 50% balance per the SOW and proceed to handoff.

Open conditional-pass items and any future-phase requests are logged in the engagement folder and acknowledged as out-of-scope for the current SOW.

**Signed:** _____________________
**Name:** _____________________
**Date:** YYYY-MM-DD

---

## QC log

- §11 Tier A pass: [auditor name], [date]
- §11 Tier B pass: [auditor name], [date], [list of behavioral claims re-derived]
