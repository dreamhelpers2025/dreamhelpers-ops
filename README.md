# Dream Helpers · Founder Liberation OS

Central command for Grant and partner during the 4-week go-to-market sprint.

- **Dashboard** — today, week, accountability, overdue/upcoming, milestones.
- **Timeline** — visual 4-week Gantt grid.
- **Schedule** — filterable daily table.
- **Deliverables** — add/edit/delete tasks and milestones.
- **Settings** — rename Person A/B, set Gist sync, import/export.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `dreamhelpers-ops`).
2. Push this directory to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<you>/<repo>.git
   git push -u origin main
   ```
3. In the repo settings → Pages → set **Source: GitHub Actions**.
4. The included workflow at `.github/workflows/deploy.yml` will build and deploy on every push to `main`.
5. Your site will be live at `https://<you>.github.io/<repo>/`.

The `VITE_BASE` env var in the workflow auto-matches the repo name, so the same workflow works whatever you name the repo.

## Sync between two browsers (GitHub Gist)

The app is frontend-only. To share state between you and Grant, it reads and writes a single private GitHub Gist.

1. Each of you creates a fine-grained Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens) with the `gist` scope.
2. One person opens **Settings**, pastes their token, leaves the Gist ID blank, and clicks **↑ Push to Gist (will create)** — this creates a private Gist and fills in the ID.
3. Share that Gist ID with the other person. They paste **their own token** + the same Gist ID in their Settings, then click **↓ Pull from Gist**.
4. After that, every edit auto-syncs (debounced ~1.5s). The sync chip in the header shows status.

Tokens never leave your browser. They live in `localStorage`.

## Reset

Settings → Reset to seed restores the original 4-week plan anchored at **Mon 2026-06-22**.
