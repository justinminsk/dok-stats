# Daughters of Khaine stats

[![CI](https://github.com/justinminsk/dok-stats/actions/workflows/tests.yml/badge.svg)](https://github.com/justinminsk/dok-stats/actions/workflows/tests.yml)

Small repo for parsing Daughters of Khaine event lists and generating readable summaries.

- Last run date: 2026-04-20 19:58:14 MDT
- Python version: 3.11

## What lives where

- [Daughters of Khaine 5-0s.md](Daughters%20of%20Khaine%205-0s.md): source document with Singles and Teams lists
- [analyze_daughters_lists.py](analyze_daughters_lists.py): thin runner entrypoint
- [daughters_stats](daughters_stats): modular parsing/stats package
- [reports/combined.md](reports/combined.md): combined Markdown report
- [reports/singles.md](reports/singles.md): singles-only Markdown report
- [reports/teams.md](reports/teams.md): teams-only Markdown report
- [docs/index.html](docs/index.html): generated static dashboard for GitHub Pages
- [summaries/combined](summaries/combined): combined CSV outputs
- [summaries/singles](summaries/singles): singles-only CSV outputs
- [summaries/teams](summaries/teams): teams-only CSV outputs

## Workflow

1. Update [Daughters of Khaine 5-0s.md](Daughters%20of%20Khaine%205-0s.md)
2. Install dependencies:
   - `python -m pip install -r requirements-dev.txt`
   - `npm ci --prefix frontend`
3. Rebuild the reports, summaries, and published site:
   - `python analyze_daughters_lists.py`
4. Read the outputs in [reports](reports), [summaries](summaries), and [docs](docs)

## Current setup status

- The repo is scaffolded from the Helsmith stats project but reset for Daughters of Khaine data.
- Faction-specific unit aliases, model-size inference, and trait categorization are intentionally minimal in [daughters_stats/constants.py](daughters_stats/constants.py).
- After you add real lists, we can extend the parser tables and tests around the exact export formats you use.

## Web dashboard + hosting

- Running `python analyze_daughters_lists.py` rebuilds [docs/index.html](docs/index.html), republishes the React frontend, and refreshes [docs/data/site-data.json](docs/data/site-data.json).
- Stats table row count is configurable via `DAUGHTERS_STATS_TABLE_ROWS` (default: `12`).
- The dashboard shows **Current** plus up to the 3 newest archived snapshots from [history](history).
- Local built-site preview:
   - `python analyze_daughters_lists.py`
   - `python preview_site.py`
   - open `http://127.0.0.1:8000/dok-stats/`
- Frontend-only development server:
   - `npm --prefix frontend run dev`
   - when the generated contract is unavailable, the app falls back to bundled sample data for UI work
- GitHub Pages deploy is handled by [.github/workflows/pages.yml](.github/workflows/pages.yml).
- In GitHub repo settings, set **Pages** source to **GitHub Actions**.
- After push to `main`, your site will be available at:
   - `https://<your-github-username>.github.io/dok-stats/`

## Local CI checks

- `pre-commit run --all-files`
- `python -m pytest -q`
- `npm --prefix frontend run lint`
- `npm --prefix frontend run test`
- `npm --prefix frontend run build`
