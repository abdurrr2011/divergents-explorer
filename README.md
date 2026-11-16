# Divergents Explorer

**Find a direction. Compare your options. Take the next step.**

A multilingual college and university explorer for students in Kazakhstan, developed for private review by Divergents Leadership School.

[Private application](https://divergents-university-college-explorer.surecarrot2.chatgpt.site) · [Project handbook](docs/PROJECT-HANDBOOK.md) · [Maintenance guide](docs/MAINTENANCE.md) · [Roadmap](docs/ROADMAP.md)

## What students can do

- Browse college entry after Grade 9 and college or university entry after Grade 11.
- Search by subject, institution, city or country in English, Russian and Kazakh.
- Save options locally and compare up to three admissions routes.
- Check tuition in its native currency, scholarship coverage, exams and sourced deadlines.
- Explore real campus photography with recorded credits and provenance.

## Current coverage

| Catalogue | Records |
| --- | ---: |
| Institutions | 33 |
| Programmes | 54 |
| Admissions routes | 60 |
| Official source records | 146 |
| Campus photo records | 33 |
| Interface languages | 3 |

The 12 simple interest groups organise browsing; they are not the number of degree options. Internal classification supports 120 subject categories and navigation includes 249 countries and territories. Actual researched coverage remains incomplete, especially transport, teaching, languages and services. See the [expansion priorities](docs/ROADMAP.md).

Source cycles stay independent of the student's planned entry year. Unknown eligibility, costs and tests remain explicit. A sourced listing does not guarantee admission, diploma recognition or funding.

## Run locally

Requires Node.js 22+ and Python 3.

```sh
npm ci
npm run check
npm start
```

Open http://localhost:4173. The application is static; student preferences, bookmarks and comparison choices stay in the current browser. No student account, grades or contact details are collected.

## Project structure

```text
data/             Institutions, programmes, routes, awards, deadlines and sources
src/              UI, filters, translations, plain names and photo provenance
public/media/     Local campus photographs
tests/            Logic and DOM journey checks
scripts/          Build, catalogue validation and source-link checks
docs/             Schema, evidence, coverage, handoff and maintenance
.openai/          Existing private Sites hosting identity
```

## Quality and maintenance

`npm run check` validates catalogue and photographs, runs 69 automated checks and builds `dist/`. `npm run links` produces a separate source-link report. [GitHub Actions](https://github.com/abdurrr2011/divergents-explorer/actions/workflows/check.yml) repeats these checks for pull requests and pushes to main; its run page records the current result.

Browser visual QA is still pending because supported browser controls were unavailable during development. Editorial questions remain in the validation reports. New data must identify the official source, applicable intake, applicant category and date checked. Read [CONTRIBUTING.md](CONTRIBUTING.md) before editing.

## Privacy, access and media

The deployed application remains owner-private. The source repository is public at the owner's explicit request. This does not authorise public or school-wide access to the deployed application. Credentials, student records and local work files must never be committed.

Photograph and taxonomy licences are recorded separately. Reuse terms for three source photographs covering four institution records need confirmation before wider distribution. See [photo credits](docs/PHOTO-CREDITS.md) and [licensing](LICENSE.md).

## Maintainer

Maintained by [Abdurakhman Sagyngaliyev — @abdurrr2011](https://github.com/abdurrr2011). A school-appointed teacher or counsellor should own admissions-data review; technical releases and school access require a designated maintainer.
