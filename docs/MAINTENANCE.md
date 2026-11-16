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

At desktop (1440×1000) and phone (390×844), when a supported browser tool is available:

- Every student sees the same After Grade 9 / After Grade 11 / All options choices. Legacy grade preferences must not restrict access. No score entry is required.
- Select an interest: the menu has 12 simple groups and a short explanation appears below it. Select country and search. Reset clears all controls and hides the explanation.
- Find a Kazakhstan college after Grade 9, read its qualification/practical training/funding, then browse after Grade 11. Compare a domestic university with an international option.
- Open NUET for NU Computer Science: English, 120/50 thresholds, regular GPA offer prerequisite, separate funding steps and applicable dates. Follow the prerequisite link. Compare with the SAT/ACT category and foundation.
- Open new university routes. Confirm foreign diploma-recognition limitations, extra preparation, historical fee references and unknown amounts stay visible. No ordinary Grade 11 certificate is assumed equivalent everywhere.
- Save routes, reload, remove saved routes. Compare up to three, refuse a fourth with a message, remove a comparison. Check that the compact comparison cards stack on a phone.
- Check that institution counts differ from route counts where a university has multiple admission options.
- Select Iceland or transport/safety to see an honest coverage gap; choose a covered country/stage combination with no result to see an ordinary empty search. Never add demo programmes to fill a gap.
- Change entry year to 2029: older records stay reference-only; new dates await confirmation. Check deadline types, applicant scope, source dates and funding conditions.
- Switch English/Russian/Kazakh on every page and detail. Check interest explanations, currencies, costs and fee periods. Official acronyms/URLs remain canonical; explanatory prose must be translated completely.
- Tab through header, entry choices, filters, card actions, dialog, comparison and calendar; visible focus and Escape work. Check labels, no page overflow and narrow layout.
- At the private deployed URL, signed-out requests are access-gated; the owner can sign in. Verify allowed users/groups in Sites. Do not change access to test it.

Pure logic tests retain advanced admissions-test, funding and budget-filter scenarios for data correctness; the main interface only exposes search, country and interest. Browser visual/interaction verification remains unavailable in this managed environment. DOM tests do not establish browser layout or signed-in navigation.

## Approved school access later

This release has a custom Sites policy containing only the owner. Sites owns authentication; the app has no separate student login or credential store. After explicit approval of the audience and access method, the owner can add named viewers with the Sites access controls. The current account supports custom and public audiences and external visitor invitations. An invitation may send email; obtain rollout authorisation first. Each visitor signs in with the permitted ChatGPT account. Remove leavers from the allowlist; keep editor access restricted. Workspace-wide groups require platform support and an approved group selection; do not assume they exist here. Never publish publicly just to avoid a sign-in problem.


## Complete language coverage

`src/i18n.mjs` contains core labels, `src/ui-i18n.mjs` contains all other interface phrases and `src/catalogue-i18n.mjs` and `src/research-*-i18n.mjs` contain catalogue translations. Phrase rows are `[English, Russian, Kazakh]`. Keep the English source string exact and translate the full meaning, including uncertainty, cycle, applicant category and fee period. Preserve numerical thresholds, original URLs and official exam/degree/currency identifiers. Translate names and explanatory text; official brand/test names may remain recognisable. A translation is not a newly verified admissions claim.

When adding or changing catalogue prose, add/update both translations in the same change. `tests/localization.test.mjs` fails if a human-readable catalogue value lacks either language. It checks legacy grade preferences, all pages, every route detail, filled comparison, deadlines and correction feedback in a DOM and checks for untranslated English outside an explicit list of official names/codes. These checks use development-only `linkedom`, installed by `npm ci`; they do not launch a browser. Add every new interaction or message to this audit.

The renderer translates visible text and accessible labels, preserving canonical filter values, source URLs, stable record IDs and user-written notes. Its original-text tracking prevents repeated passes from duplicating translated labels and supports switching back to English. Search indexes all three languages. Do not translate keys/IDs or filter values at rest.


## Current simple interface — 16 November 2026

Only search, country, interest and after-9/after-11/all-options choices are on the main view. Primary navigation is Explore, Shortlist and Compare; deadlines and About stay in the footer. Five collapsible detail groups preserve admissions, costs, funding, deadlines and evidence. Reference tuition on cards may have an older source cycle; the detail must state it.

Keep all 249 destination choices. Use the 12 student-facing groups from `src/interests.mjs`, with complete English/Russian/Kazakh labels and explanations. The 120 detailed ISCED tags stay internal. Add source-backed `subjectCodes` or update the fallback map; every programme must belong to a simple group. See `TAXONOMY.md`. This replaces the older 120-option technical menu.

Counts must distinguish institutions, programmes and applicant routes. Current catalogue: 33 institutions / 78 programmes and major options / 84 routes / 14 awards / 61 deadline records / 205 source records. The original regional `EXPANSION-*.md` notes document the earlier university expansion; `EXPANSION-MORE.md` records the latest 24-option batch. Africa/Latin America and transport/safety remain sparse; do not imply complete worldwide programme coverage.

`src/currency.mjs` owns display names and amount formatting for the 16 supported currency codes. Apply localisation after translating prose. Retain source amounts and ISO keys in data; do not convert costs when switching language. Extend the supported codes when introducing another currency, then check all three languages. URLs, IDs and student-written notes stay unchanged.

Run `npm run check` (69 tests) and inspect link/validation reports. Unknown English never passes a no-required-English query; an explicitly optional test may pass for the application step, while later language coursework/exams must remain in the detail. A conditional education waiver is an alternative, not an unconditional exemption.

## Current visual interface

Maintain the white/light-grey/system-font design and its single blue action colour. Avoid restoring the former decorative hero, numerous status panels or long explanatory paragraphs in the starting view. Initial results show six cards; Show more adds six. Search must still find any of the 84 routes regardless of the visible batch. Filters reset the batch, while saving/comparison should preserve it. Test keyboard focus when adding results and changing a detail route.

In the manual desktop/phone checklist, also check all three responsive card-column layouts, native segmented entry buttons, long translated prices/names, the NU route selector, the five initially closed detail sections, collapsed historical deadlines, and expandable About content. Browser QA remains pending until supported controls are available.

## Keep comparison concise

The comparison page shows exactly four main facts per option; use Details for the full conditions and evidence. Do not restore the former nine-row prose table. Preserve exact route IDs when saving/removing options, including the three distinct NU admissions/support routes. English unknown/optional/alternative/required states must not be collapsed into an exemption. Awards remain reference options, not promised funding.

A comparison's year input affects its nearest-deadline view only. Select only confirmed dates for that cycle that are today or later in Asia/Aqtobe; retain old/unpublished records in programme details. If none qualifies, show a confirmation-needed state. Check switching to a future intake, clearing/removing options, full-scholarship versus tuition-only labels, unknown cost/English states and the three-language UI. Browser QA must check desktop alignment and phone stacking when supported controls become available.

## Photo maintenance

Prefer a freely licensed real campus photo, with its exact source page, credited creator and licence URL; school-supplied photography needs authorised reuse. Store downloaded raster bytes in `public/media/campuses/<institution-id>.jpg` and add the corresponding record to `src/campus-photos.mjs`. Copy an existing row, update actual dimensions/bytes, checked date, credit/licence, source/image URLs and all three captions/alts. Keep filenames stable and avoid external hotlinks. Use a source thumbnail of roughly 800–1200 pixels, normally under 350 KB; images above 1.5 MB are rejected. The build copies public assets recursively.

Verify the institution/country/campus and look at the actual downloaded image. Never substitute a logo or an unrelated/generated campus photograph. A university's general campus must not be presented as a guaranteed programme teaching building. For a partner campus context, set `needsContextCaption:true` and state that relationship visibly; Sheffield demonstrates this. AITU and its college intentionally share one verified EXPO location. Preserve artist names and licence codes, and translate captions/alt fully. No student identities are collected by this feature.

Run `npm run validate:photos` and inspect `work/photo-validation-report.json`; then `npm run check`. Test all image placements and the image-load failure state in all languages. Check actual desktop/phone cropping in a supported browser before school rollout. Browser controls remain unavailable here. `docs/PHOTO-CREDITS.md` lists current source/rights notes; clear or replace the four unconfirmed-reuse institution records before expanding the audience.

## Plain names

`src/interests.mjs` contains short category labels; its explanatory sentences preserve each broad scope. `src/programme-names.mjs` contains the plain name for every programme in English, Russian and Kazakh. Maintain those labels together with any new programme record. The data validator requires all three. Use everyday subject words rather than codes, formal degree titles or admissions steps in browsing headings.

Full catalogue titles are kept in data and displayed inside the programme information disclosure, where codes and any major-selection conditions remain visible. Search must support both the plain label and the full title. Never change IDs, source-cycle claims, qualifications or eligibility simply to shorten text. Bookmarks and exact applicant routes remain stable.

## Geographic navigation and specific subjects — 16 November 2026

The two main filters are Country and Study Subjects. Country opens a region panel; choosing a region reveals a country selector within it. The selected region or country stays visible in the closed control. Done, Escape or a click outside closes the panel. `src/destination-regions.mjs` contains the CLDR-based geographic mapping; see GEOGRAPHY.md. Country options must be constrained to the chosen region and cleared when it changes. Region/country IDs must survive language switching. Do not restore the initial 249-item country dump.

`src/interest-topics.mjs` adds 40 concrete specialities under the 12 broad interest groups. These use explicit stable programme IDs, not invented programme records. Add all three labels/descriptions and valid programme references when updating topics; validation and tests check coverage. A topic is distinct from an admissions route. Keep broad foundation degrees broad unless their actual subject scope supports a narrower match.

Use recognisable academic names (Computer Science / Информатика, Software Engineering, Data Science) instead of vague Computing/Computers labels. Full catalogue titles remain in details. Preserve old browsing labels in `programmeNameAliases` so existing search terms still work. Run `npm run check` (82 checks).

## Measuring catalogue breadth

Run `npm run coverage` after adding records. It writes `work/coverage-report.json` with separate programme, institution and route counts for each broad interest, focused subject and exclusive editorial region. Interdisciplinary subject counts overlap. Geographic Asia in the app includes Kazakhstan; the editorial report keeps Kazakhstan separate so worldwide totals do not double-count it. Use these counts to prioritise real research, rather than adding empty menu labels. Source-backed majors must name their parent degree and additional conditions; they are not independent universities.

A Grade 9 search that has matching Grade 11 programmes now offers a direct button to browse those later options while retaining the selected subject and location. No test scores are requested.
