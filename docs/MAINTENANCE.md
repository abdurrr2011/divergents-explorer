# School maintenance guide

## Responsibility and review path

Appoint a teacher or counsellor as the data reviewer and a second adult reviewer for changes to entry rules, fees, awards or deadlines. A student editor can prepare a source update in a branch; the reviewer compares it with the official page, checks applicant category and cycle, runs the checks, and approves the exact diff before deployment. No paid feed, scheduled job or external account integration is required.

Use a simple review log with record ID, changed claim, exact source URL, intake, applicant type, checked date, outstanding question, editor and reviewer initials. Do not put student names, marks or application documents in this repository. Core application choices remain local to the browser.

## Add a programme

1. Copy `data/template.example` to `data/new-batch.json`, or add records to an existing regional JSON. The example is deliberately excluded from the build. Remove all placeholders and use a new, stable ID for each entity.
2. Read `docs/SCHEMA.md`. Reuse existing institution/programme IDs; add another route when tests, applicant category or entry stage differ. Link funding and deadlines with route IDs. Do not duplicate a programme just to add a funding step.
3. Read the official programme page, the relevant applicant-category admissions page, fee schedule and award provider page. Record exact URLs and checked dates. Write short summaries in your own words. Scope every source by its actual intake, not the student's preferred year. If a page cannot be fetched automatically, open it manually, record what was checked and retain a short evidence excerpt or local reference in a private editorial workspace. Mark inaccessible or ambiguous claims partial/unverified and write the specific question.
4. Set unknown amounts/dates to null. Do not use zero for unknown tuition. Set all test rules explicitly where known; `tests.ENGLISH` summarises whether ANY English proficiency test is required. A conditional English-medium waiver is an alternative, not an unconditional exemption. Optional or unknown SAT says nothing about English requirements. Published minima do not predict admission.
5. Use full_scholarship only with sourced tuition plus maintenance/housing. Attach award eligibility, separate application, renewal and upfront costs. A programme listing alone does not verify that a Kazakh school diploma is accepted.
6. Run `npm run check` and `npm run links`. Read every warning in `work/validation-report.json` and non-ok entry in `work/link-report.json`. A blocked HTTP check requires manual review; it is not proof the link is broken. Treat duplicate/conflicting records as errors, and resolve or explicitly flag conflicting official wording.
7. Follow the browser acceptance checklist, review the source diff, then package and deploy the same source commit. Keep Site access owner-private until the rollout audience and access method are expressly approved.

## Annual rollover

- Review source checks older than 120 days; the validator uses today's date (override with `CHECK_DATE=YYYY-MM-DD npm run validate` for a reproducible audit).
- Research the next published intake. Never add a year to old deadlines. Retain historical deadlines with their original date and cycle; create a new deadline record with a new ID. Use null and awaiting_publication until a precise new date is published.
- Recheck diploma recognition, profile subjects, test role/validity, fee billing period, funding eligibility, benefits, renewal and timezone. An admissions rule, fee schedule and scholarship call may refer to three different cycles.
- For changed routes, retain past records with a cycle suffix if their conditions differ; keep programme IDs stable. Avoid silently changing an old saved route's meaning. The current site displays cycles independently and never auto-rolls them.
- Recheck the Kazakhstan national grant notice and actual programme-specific rules separately. NU regular admission, NUET funding, SAT/ACT funding and foundation remain distinct. Confirm the regular-offer prerequisite and grant application dates each year.
- Update research notes, coverage counts and the release verification report. Review unknowns even if the build is green. A valid JSON file is not a completed eligibility review.

## Reports

`npm run validate` checks IDs, references, sources, ISO currencies, dates, tuition units, test states, required fields and duplicate/conflicting route keys. It writes a full stale/missing/question report. `npm run links` uses curl with inherited proxy/CA settings, follows redirects, verifies TLS and reports HTTP failures/timeouts. Neither command scrapes rules into production automatically. For a semantic conflict, record it in route questions/source notes, and seek a written clarification or newer official notice.

## Browser acceptance checklist

Run `npm run build`, then `npm start` outside managed Sites preview, and open http://localhost:4173. In a managed Sites environment with browser controls, use `sites-preview start /workspace/sites/divergents-explorer` and its exact returned URL instead of a separate server.

At desktop (1440×1000) and phone (390×844):

- Choose Grades 7 and 8, browse interests, check college-after-9 vs university-after-11 explanation; no score entry or dates should appear initially.
- Choose Grade 9, filter a Kazakhstan technology college, read practical qualification/funding, then browse after Grade 11.
- Choose Grade 10, combine Technology and Business, select UNT, read Math/Informatics vs Math/Geography preparation.
- Choose Grade 11, find UNT with no SAT requirement, then add an international route for comparison; no scores are assumed.
- Open NUET for NU Computer Science: English, 120/50 thresholds, regular GPA offer prerequisite, separate funding application and exact dates. Follow the prerequisite link. Compare with the SAT/ACT category and foundation.
- Filter required/alternative/not-required/unknown test states. Enable unknowns, then confirm the no-required-English filter still excludes unverified routes and AET-English requirements.
- Filter full scholarship; Berea/KAIST appear, tuition-only and conditional awards do not. Check USD per credit, GBP foundation total, unknown tuition and EUR annual tuition.
- Save routes, reload, remove saved routes. Compare up to three, refuse a fourth with a message, remove a comparison. Scroll the comparison on a phone.
- Reset filters, create an empty search, compare a region with insufficient coverage if a future release has one.
- Change entry year to 2029: older records stay reference-only; new dates await confirmation. Check admission/funding/test/document distinctions and official-source check dates.
- Tab through header, grade choices, filters, card actions, dialog, comparison and calendar; visible focus and Escape work. Check labels, no page overflow, language switching, English description fallback labels and narrow layout.
- At the private deployed URL, a signed-out browser sees ChatGPT sign-in; the owner can sign in. Verify allowed users/groups in Sites. Do not change access to test it.

## Approved school access later

This release has a custom Sites policy containing only the owner. Sites owns authentication; the app has no separate student login or credential store. After explicit approval of the audience and access method, the owner can add named viewers with the Sites access controls. The current account supports custom and public audiences and external visitor invitations. An invitation may send email; obtain rollout authorisation first. Each visitor signs in with the permitted ChatGPT account. Remove leavers from the allowlist; keep editor access restricted. Workspace-wide groups require platform support and an approved group selection; do not assume they exist here. Never publish publicly just to avoid a sign-in problem.


## Complete language coverage

`src/i18n.mjs` contains core labels, `src/ui-i18n.mjs` contains all other interface phrases and `src/catalogue-i18n.mjs` contains catalogue translations. Phrase rows are `[English, Russian, Kazakh]`. Keep the English source string exact and translate the full meaning, including uncertainty, cycle, applicant category and fee period. Preserve numerical thresholds, original URLs and official exam/degree/currency identifiers. Translate names and explanatory text; official brand/test names may remain recognisable. A translation is not a newly verified admissions claim.

When adding or changing catalogue prose, add/update both translations in the same change. `tests/localization.test.mjs` fails if a human-readable catalogue value lacks either language. It renders every grade, all pages, every route detail, filled comparison, deadlines and correction feedback in a DOM and checks for untranslated English outside an explicit list of official names/codes. These checks use development-only `linkedom`, installed by `npm ci`; they do not launch a browser. Add every new interaction or message to this audit.

The renderer translates visible text and accessible labels, preserving canonical filter values, source URLs, stable record IDs and user-written notes. Its original-text tracking prevents repeated passes from duplicating translated labels and supports switching back to English. Search indexes all three languages. Do not translate keys/IDs or filter values at rest.
