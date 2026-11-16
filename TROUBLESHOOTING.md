# Troubleshooting

## Setup or dependency installation fails

Use Node.js 22 (`nvm use` when available), then run `npm ci` from the folder containing package.json. The lockfile is committed. Do not delete it or run a forced dependency upgrade to conceal a failed installation. Record the exact command/error in a bug report without credentials or student information.

## The catalogue does not load

Run `npm run build`, then `npm start`. Open http://localhost:4173 instead of opening index.html directly with a file URL. The app fetches catalogue.json, which requires an HTTP server.

If Python is named differently on your computer, serve the generated directory directly:

```sh
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

On Windows, `py -m http.server 4173 --bind 127.0.0.1 --directory dist` is another option. If the port is occupied, choose another free port and use it in the browser URL.

## The hosted URL asks for sign-in or returns an access gate

The published Site is owner-private. A public GitHub repository does not grant Site access. Run the source locally or use an explicitly approved account; do not change the Site audience simply to troubleshoot it.

## No results appear

Reset filters and try All options. Search includes plain and full programme names in three languages. A country or interest may be available in navigation without researched programmes. An explicit coverage gap is not a broken filter.

## Saved options disappeared

Selections belong to the current browser/profile and origin. Private browsing, disabled storage or clearing site data may remove them. The app does not have a student account or cloud synchronisation. Moving between localhost and the hosted Site creates separate local selections.

## Photos fail to display

Build again and verify that public/media/campuses files were copied into dist/media/campuses. Run `npm run validate:photos`. Keep the exact manifest path and filename case. Do not replace missing campus photos with unrelated images; records and source links stay usable if an image fails.

## Validation fails or reports warnings

Run `npm run check` and read the explicit reports under work/. Missing IDs, invalid fields or references must be corrected. Warnings can describe unresolved real admissions or media questions; do not invent values or remove the warning merely to make a report appear clean. A blocked institutional link requires a manual check.

## Git pull refuses to fast-forward

Fetch and inspect remote changes before merging in a branch. Do not force-push shared history or discard another contributor's work. See docs/GIT-WORKFLOW.md. Repeated pulls without new remote commits do not add changes.

## GitHub About fields cannot be edited by the integration

Repository-settings API calls currently return HTTP 403. The owner can set the copy-ready description, website and topics from docs/REPOSITORY-SETUP.md in GitHub's About/settings controls. This does not block commits, pull requests or CI.
