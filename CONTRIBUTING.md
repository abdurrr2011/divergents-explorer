# Contributing

See [community expectations](CODE_OF_CONDUCT.md), [architecture](docs/ARCHITECTURE.md) and [Git workflow](docs/GIT-WORKFLOW.md).

## Make a focused change

1. Create a branch from the latest main: `git switch -c feature/descriptive-name`.
2. Keep catalogue records separate from UI and student-local preferences.
3. Include English, Russian and Kazakh labels in the same change.
4. Run `npm ci` and `npm run check`.
5. Open a pull request describing the problem, resulting behaviour, validation and remaining questions.

## Research and editorial review

Use official programme, admissions, government and funding-provider pages. Record the exact URL, applicant category, published cycle, verification state and checked date. Never move a historical deadline into a future year or infer diploma equivalence, exam substitution or international funding eligibility.

Use stable IDs and link routes, awards and deadlines rather than duplicating programmes. Add simple programme names in `src/programme-names.mjs` and verified campus photography for new institutions. Read `docs/SCHEMA.md` and `docs/MAINTENANCE.md`.

A teacher or counsellor must review decision-critical changes. Unknown values should stay unknown until supported. Tests passing does not replace editorial or browser review.

## Repository hygiene

Do not commit tokens, authentication headers, `.env` files, student names, marks, contacts or application documents. `work/` contains local research and deployment state and is ignored. Keep the existing Sites remote and hosting identity intact. A GitHub push does not publish the website.

Preserve commit history. Fetch remote changes before merging; do not force-push shared branches or rewrite published history. Deployment and audience changes are separate from source review.
