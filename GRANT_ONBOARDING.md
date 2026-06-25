# Grant — Onboarding to Dream Helpers Ops

Welcome. This doc gets you working from your machine in about 30 minutes. If anything below is unclear or breaks, message me and we sort it.

## What this repo is

Two things live in this repo:

1. **`src/`** — the Founder Liberation OS dashboard (the React app at https://dreamhelpers2025.github.io/dreamhelpers-ops/) that we both use as our shared project-management surface. State syncs through a private GitHub Gist.
2. **`deliverables/`** — the source-of-truth for every business decision we have made. Business model (currently v0.4), market research, validation findings, glossaries. **This folder is the brain.** When in doubt, read here, not your chat history.

There's also `archive/` inside `deliverables/` with the older versions (v0.2, v0.3) for reference.

## What you need to install

You don't need everything to do everything. Read all three, install what fits how you'll work.

### Required: a code editor

Any of these works — pick the one you already use:
- VS Code: https://code.visualstudio.com/
- Cursor: https://cursor.sh
- Anything else you like

### Required if you want to use Claude Code (highly recommended)

Claude Code is Anthropic's AI assistant that does most of the work in this project. Install:

1. Go to https://claude.com/product/claude-code or whatever the current install page is
2. Install the desktop app for your OS (or the CLI if you prefer terminal)
3. Sign in. **Use your own Anthropic account if you have one** — billing is separate from the GitHub account. If we want shared billing, we'll set up a Team plan later. For now your account is fine.

Important: **Claude Code conversation threads are local to each machine.** You cannot open my threads on your computer, and I can't open yours. The shared brain is the repo, not the chat history. Anything we decide that matters gets pushed to the repo so the other person can read it.

### Required if you'll touch the dashboard code

Only needed if you'll modify the React app itself (most work won't need this — the dashboard is feature-complete for now). If yes:

1. Node 20+ from https://nodejs.org/
2. Git from https://git-scm.com/ (you probably have it already)

## Credentials you need

### GitHub: dreamhelpers2025

Both of us use this one shared GitHub account for the business. Get the password from me (use a password manager — 1Password, Bitwarden, Apple Keychain, etc.). Sign in at https://github.com.

Then create your own personal access token for the dashboard's Gist sync — instructions below in "Connect the dashboard."

### Anthropic (Claude Code)

Use your personal Anthropic account for Claude Code. Or sign in to whatever I'm using if I share it with you. Either works.

## Clone the repo

```bash
git clone https://github.com/dreamhelpers2025/dreamhelpers-ops.git
cd dreamhelpers-ops
```

That's it. You now have a local copy of everything.

If you want to also run the dashboard locally for development:

```bash
npm install
npm run dev
```

Opens at http://localhost:5180/dreamhelpers-ops/

## Connect the dashboard (read-write access to our shared state)

The OS dashboard at https://dreamhelpers2025.github.io/dreamhelpers-ops/ stores its state in a private GitHub Gist. Both of us read and write to the same Gist using our own personal access tokens.

To connect your browser:

1. **Create your token.** Go to https://github.com/settings/personal-access-tokens/new (you must be signed in as `dreamhelpers2025` for this). Set:
   - **Token name:** `dreamhelpers-ops-sync-grant`
   - **Resource owner:** `dreamhelpers2025`
   - **Expiration:** 1 year
   - **Repository access:** Public Repositories (read-only)
   - **Repository permissions:** leave all as "No access"
   - **Account permissions → Gists:** Read and write (this is the only thing that matters)
   - Click **Generate token**, copy the `github_pat_…` string immediately (you can't see it again)

2. **Get the Gist ID from me.** Message me, I'll send it. It's a hex string like `a1b2c3d4e5f6…`.

3. **Connect the dashboard.**
   - Open https://dreamhelpers2025.github.io/dreamhelpers-ops/
   - Click **Settings**
   - Paste your token in **Personal Access Token**
   - Paste the Gist ID in **Gist ID**
   - Leave **Filename in Gist** as the default
   - Click **↓ Pull from Gist** — you should see all the tasks load
   - Done. Edits now auto-sync between us.

4. **Set "I am this person."** In Settings, find the Team section. Click "I am this person" under whichever of us is you. This tags your edits with your name and helps us see who completed which task. You can also rename "Person B" to "Grant" right there.

## How we work together (the actual workflow)

### Git: simple but disciplined

```bash
# Before starting any work session
git pull

# Do your work — edits, commits, whatever
git add <files>
git commit -m "Short description of what changed"

# When done
git push
```

If `git push` rejects because I pushed something while you were working, you `git pull --rebase` to layer your changes on top of mine, then `git push` again. If that creates a conflict, message me before doing anything fancy.

### Conventions we follow

- **Branch on `main`** for now. We're two people — no need for feature branches yet.
- **Pull before you start.** Don't work on a stale tree.
- **Commit small.** Easier to review and revert.
- **If you're going to edit a deliverable for more than 5 minutes, tell me.** Avoids both of us editing the same paragraph.

### The deliverables folder is sacred

- Versioned docs (like `01-founder-liberation-business-model.md`) are the source of truth. If you want to materially change one, **archive the current version** first by copying to `archive/01-business-model-vN.md`, then edit. We have v0.2 and v0.3 archived already as the pattern.
- Add a **Changelog** entry at the top of the new version explaining what shifted and why.
- Don't delete archived versions. They're cheap to keep.

### Claude Code etiquette (when both of us use it)

- Each of us has our own conversation threads. They are not shared.
- Decisions Claude helps you make should land in the repo — a new doc, a doc edit, or a commit message detailing the change. That's how I see what you decided. Same the other way.
- If we're both running Claude Code at the same time on the same account, we share usage limits. Worth knowing.

## Where to start — your first 30 minutes

1. Read `deliverables/01-founder-liberation-business-model.md` (v0.4). The glossary at the top is intentional — start there.
2. Skim `deliverables/05-validation-workflow-findings.md` and `deliverables/06-broader-market-scan-findings.md` to see how we got to v0.4.
3. Open the dashboard. Click into a few task cards to see the enriched notes.
4. Find anything that feels wrong or under-baked. Push back. Better to argue now than after we've sold something.

## The 11 open Monday decisions

`deliverables/01-founder-liberation-business-model.md` §10 lists 11 decisions that need both of us in a room to settle. That's our Mon 6/29 working session agenda. Read them in advance.

## Quick troubleshooting

- **Dashboard says "Not connected" forever:** your token expired or the gist scope is missing. Re-create the token per "Connect the dashboard."
- **Dashboard pulls but shows old data:** click **↓ Pull** in the header. If still stale, hard-refresh (Ctrl+Shift+R).
- **`npm install` fails:** make sure you're on Node 20 or higher (`node --version`).
- **Git push rejected:** `git pull --rebase` then push again. If you hit a conflict you don't recognize, message me.

## Questions to ask me when you start

- "What is the Gist ID?"
- "What's the shared GitHub password? (sending via password manager)"
- "Did anything change in `deliverables/` between when we last talked and now?"

Welcome aboard.
