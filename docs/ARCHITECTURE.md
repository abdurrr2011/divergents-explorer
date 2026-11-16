# Architecture

## Runtime

The application is static HTML, CSS and ES modules. `src/app.mjs` fetches the built catalogue and renders the catalogue, detail dialog, shortlist, comparison, deadline and coverage views. There is no student-record backend or analytics service.

`src/logic.mjs` joins stable IDs and implements filters, storage handling, costs and comparison limits. `src/comparison.mjs` produces concise test/English and deadline summaries. `src/subjects.mjs`, `src/interests.mjs` and `src/destinations.mjs` separate classifications and navigation from actual researched availability.

`src/localize.mjs` combines editorial dictionaries, translates text/accessibility labels and creates search aliases. `src/programme-names.mjs` contains plain browsing labels; full catalogue names remain in data. `src/campus-photos.mjs` records separate image provenance; photo evidence never proves admission eligibility.

## Build and data

`data/*.json` stores institutions, programmes, routes, awards, deadlines and sources separately. `scripts/build.mjs` combines them into `dist/catalogue.json`, copies source modules and copies `public/` assets. The excluded import template is documented in SCHEMA.md. No credentials are required to build.

Validation checks structural consistency, source/cycle metadata, test states, currencies, dates, naming coverage and photo files/provenance. Tests exercise logic and DOM journeys. They do not prove factual correctness, current institutional eligibility or browser layout.

## Trust and privacy

- Editors check official HTTPS evidence manually; source text is summarised rather than automatically imported into production.
- Student preferences, entry year, shortlist and comparison remain in browser-local storage. Shared-browser users can clear them from About.
- Native costs and source cycles remain independent; unknown values are not exemptions or zero costs.
- Sites provides the existing owner-private access gate. GitHub source visibility and CI artifacts do not grant application access.
- CI builds locally without deployment credentials and uploads only the two explicit validation report files.

Read MAINTENANCE.md for annual rollover, DEPLOYMENT.md for the exact-source publication workflow, and PHOTO-CREDITS.md for media rights/context.
