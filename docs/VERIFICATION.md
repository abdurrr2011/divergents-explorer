# Private-review verification — 16 November 2026

## Current result

`npm run check` passes: zero structural catalogue errors, all 82 logic/DOM/localisation/currency checks pass, all 33 institution photo records validate, and the static build contains 84 routes across 78 programme/major options at 33 institutions. There are 235 editorial warnings/questions, deliberately recorded in `VALIDATION-REPORT.json`; structural validity does not confirm every applicant's eligibility. Photos retain five existing review notes.

The two main filters are Country and Study Subjects. Country opens a main-region panel and shows that region's countries inside the same control; 249 destinations remain supported. Forty programme-backed topics sit inside twelve broad interests. All broad interests now have real routes. Data Science returns 12 options at 11 institutions. Grade 9 searches with only later options offer a Grade 11 action without losing the subject. No scores or personal data are requested.

## Repeatable verification

- `npm run check`: catalogue/source/currency/date/reference validation, no orphan programmes, photo validation, 82 checks and static build. Language journeys inspect every route detail and page in Russian/Kazakh, previous translated search names, test roles, English uncertainty, currencies, shortlist/comparison, deadlines and regional reset behaviour. DOM rendering uses development-only linkedom; it is not browser automation.
- `npm run coverage`: region, broad-interest and focused-topic counts in `work/coverage-report.json`; checked snapshot: `COVERAGE.json`. Programme/route/institution totals remain distinct.
- `npm run links`: 184 distinct URLs checked — 173 successful, seven timeouts/manual checks and four HTTP 503 responses. Sciences Po pages and one KazNU page timed out; Satbayev and UKPTK returned 503. No new URL returned 404. A blocked/temporarily unavailable fetch is not proof of a permanently broken page. Full snapshot: `LINK-REPORT.json`.

There are 205 official-source records, 14 award records and 61 deadline records. Their fee, award and admission cycles remain independent. New source-specific limits and conflicts are recorded in `EXPANSION-MORE.md` and in route questions. No old deadline was shifted into a future cycle.

## Catalogue coverage

| Region | Institutions | Programme/major options | Routes |
| --- | ---: | ---: | ---: |
| Kazakhstan | 10 | 24 | 30 |
| North America | 5 | 14 | 14 |
| Europe | 6 | 13 | 13 |
| Asia | 8 | 18 | 18 |
| Latin America | 1 | 1 | 1 |
| Africa | 1 | 2 | 2 |
| Oceania | 2 | 6 | 6 |

These exclusive editorial regions keep Kazakhstan separate from Asia to avoid double-counting. Geographic Asia in the app also includes Kazakhstan. Africa and Latin America remain thin; transport has one example. Degree majors/concentrations name their parent degree and progression conditions. This batch adds 24 options at existing institutions, rather than 24 new universities.

## Browser and access scope

The managed environment exposes no cua_repl.js browser-control tool. The Sites skill directs us not to improvise a replacement browser path or launch a preview without it. Desktop/mobile appearance, actual browser reload persistence, keyboard interactions and authenticated owner navigation remain unverified in a real browser. DOM checks do not substitute for these; use the manual checklist in `MAINTENANCE.md`.

Native Sites inspection confirms custom owner-only access, no groups and zero external visitors. Publication preserves that audience. Signed-out HTTP and authorised asset-hash checks verify the private gate and package contents; they do not establish an interactive signed-in browser session. The public GitHub source repository and owner-private application are separate audiences.

The personal explorer is a separate Site and is untouched. Source synchronisation uses ordinary Git with short-lived credentials kept only in process memory because the supported helper scripts are absent. Publication packages the exact pushed source's `dist/` and hosting manifest. School access still needs approval of the audience and sign-in method. A designated teacher/counsellor should own source and annual-cycle review.

## Earlier verification milestones

The sections below record earlier changes; their counts are historical. The current result above supersedes them.

## Visual and information redesign — 16 November 2026

Replaced the old green/cream/orange stylesheet with a coherent white/light-grey/system-font interface and blue controls. Initial results are capped at six, with six-at-a-time Show more and full-catalogue search. Responsive rules use three/two/one card columns, a scrollable mobile comparison and a viewport-bounded modal. Reduced motion and visible focus are included.

Nine new DOM journey checks cover result batching/search/reset, initially concise details, switching between the three distinct NU undergraduate routes, exact saved comparison route IDs, collapsed historical deadlines and collapsed editorial detail in all three languages. The catalogue records and claims are unchanged. This is structural/logic verification, not an assertion that the new visual layout has been browser-tested.

## Compact comparison — 16 November 2026

The comparison's large table was replaced with up to three concise cards and four facts each: reference cost, scholarship options, exams/English and nearest upcoming confirmed deadline. Full source-backed information is available through the existing programme-detail dialog. The intake can be edited and options can be removed or cleared; the redundant floating tray is hidden on this page.

Seven new automated checks cover compact test roles, all aggregate English states, correct-cycle/upcoming-date selection without modifying source records, actual NUET deadline sequencing, three-language cards and coverage distinctions, resuming exact stored route IDs, future intake, detail access, removal and empty states. Total: 66 passing checks, zero structural validation errors. Browser visual verification remains unavailable. CSS stacks cards on phones and aligns four facts on supported desktop subgrid layouts. Catalogue data/claims are unchanged.

## Photo coverage — 16 November 2026

33/33 institution photo records pass validation, covering all 60 admission-route cards. Source photos were visually inspected and their institution/campus descriptions checked. Images are stored locally and total 6.30 MB. Captions/alt are translated; photographer names/licence identifiers are preserved. Three new DOM journeys inspect every institution in catalogue/detail, comparison placement, the credits disclosure and a simulated image-load failure without losing navigation. Total: 69 passing tests.

`npm run validate:photos` reports zero errors and five review notes: four institution records need reuse permission review before wider rollout and one file exceeds the preferred 350 KB budget (389 KB, below the 1.5 MB cap). See `PHOTO-CREDITS.md` and `PHOTO-VALIDATION-REPORT.json`. 29 records are freely licensed/public domain. The four remaining records are owner-private source-photo review assets, not claimed as licensed for public distribution. No catalogue admission/funding facts or audience were changed.

This verifies source files, image metadata/coverage and DOM behaviour. No actual browser layout or signed-in owner interaction is claimed because supported browser controls are unavailable. The private deployment also receives a service-authorised file/hash check, including all 33 local image files.

## Plain names — 16 November 2026

All 12 categories and 54 programmes have plain browsing labels in all three languages. Full programme names/codes remain in the information disclosure; canonical catalogue/route records are unchanged. Existing translated-search checks were extended to find new plain labels and retained full names, including Data Science and Genomics. `npm run check`: 69 checks pass; the updated validator also verifies all programme-name language mappings. Browser controls remain unavailable; this is DOM/logic/data verification.

## Region-first destinations and focused subjects — 16 November 2026

75 tests pass, including the six new geographic/topic checks and expanded language journeys. All 249 destinations map to one primary geographic region; Kazakhstan also works as a shortcut and a country inside Asia. Country lists reveal only regional members, reset stale selections, compose with stage/subject filters and retain codes through language changes. All 33 focused topics resolve to actual programmes and distinguish Computer Science from Software Engineering. Original/previous browsing names remain searchable.

Programme/route counts remain 54/60; this update expands subject navigation rather than inventing catalogue entries. Geographic source/version and conventions are documented in GEOGRAPHY.md. Source records, photos and admissions/award rules remain unchanged. Actual browser verification remains unavailable; the new flows have DOM/logic/data coverage.
