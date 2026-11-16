# Private-review verification — 16 November 2026

## Current result

`npm run check` passes: validation has zero structural errors, all 69 logic/DOM/localisation/currency tests pass, and the static build contains 60 routes across 54 programmes and 33 institutions. A separate `node --check src/app.mjs` passes. There are 160 editorial warnings/questions, deliberately recorded in `VALIDATION-REPORT.json`; a green structural check does not confirm every applicant's eligibility.

The interface now has 12 simple interest choices with explanations instead of a 120-item technical hierarchy. Every programme maps to a group; detailed classification stays internal. Country navigation retains 249 multilingual ISO entries. Counts distinguish institutions from admissions options. Current catalogue has 146 official-source records, 14 award records and 50 deadline records. Latest source check: 16 November 2026.

## Automated scope

- `npm run validate`: IDs, foreign keys, source metadata/cycles, dates/times, currencies, tuition units, aggregate English state, duplicate/conflicting route keys, funding labels, valid subject tags and simple-interest mapping. Full report: `VALIDATION-REPORT.json`.
- `npm test`: 69 checks covering entry paths, legacy grade preferences, friendly interests/descriptions, country/stage combinations, appropriate coverage gaps, translated search, every human-readable catalogue value, every route detail and page in Russian/Kazakh, threshold preservation, unknown English exclusion, optional English application step, UNT/NUET/SAT distinction, funding coverage, native currency names/periods, shortlist/comparison, storage logic, deadline cycles and switching languages. DOM checks use development-only linkedom and preserve IDs/URLs/user notes.
- `npm run build`: copies static sources and combines independent data batches into dist/catalogue.json. Metadata uses the latest source check rather than a hardcoded date.
- `npm run links`: 137 successful HTTP responses, 5 manual checks/timeouts and 4 unavailable HTTP 503 responses out of 146 distinct URLs. The Sciences Po site timed out; Satbayev and UKPTK returned 503 to curl. Research used official pages/indexed official evidence with limitations recorded in the sources. A blocked or temporarily unavailable response is not proof that a URL is permanently broken. Full report: `LINK-REPORT.json`. Manual rechecks remain necessary.

## Catalogue coverage

| Region | Institutions | Programmes | Routes |
| --- | ---: | ---: | ---: |
| Kazakhstan | 10 | 16 | 22 |
| North America | 5 | 9 | 9 |
| Europe | 6 | 10 | 10 |
| Asia | 8 | 13 | 13 |
| Latin America | 1 | 1 | 1 |
| Africa | 1 | 2 | 2 |
| Oceania | 2 | 3 | 3 |

20 actual universities were added in this release. Transport/safety has no researched programme yet; all other interest groups have examples. Africa/Latin America remain thin. The catalogue is representative, not comprehensive. Four `EXPANSION-*.md` documents describe new evidence and individual limits.

Important open questions include foreign diploma recognition, NTU/Twente additional-qualification requirements, UNNC preliminary-year entry, TUM fee inconsistency, APU admissions pages blocked to automated fetching, historical UNBC Kazakhstan guidance, current fees and awards. Older questions about AITU's conflicting paid UNT minimum, college funded-place allocations, NU support-package details and other routes remain visible. Admission, fee and award cycles are kept independently; no historical date was moved forward.

## Browser and access scope

The managed environment exposes no cua_repl.js browser-control tool. The Sites skill directs us not to improvise a replacement browser path or launch preview without it. Desktop/mobile layout, actual browser reload persistence, keyboard interactions, phone scrolling and signed-in owner navigation are therefore not browser-verified. DOM tests are not a substitute. The current manual checklist is in `MAINTENANCE.md`.

Native Sites access inspection on 16 November confirms custom owner-only access, no groups and zero external visitors. Deployment preserves that audience. Signed-out HTTP and service-authorised asset checks establish the private gate and whether published files match the package; they do not establish an interactive authenticated browser session.

The personal explorer is a separate Site and was not edited. Source synchronisation uses ordinary Git with short-lived credentials held only in process memory because the supported helper scripts are absent. The release packages the exact pushed source's dist and hosting manifest and uses the native owner-private deployment operation. `DEPLOYMENT.md` records the procedure. School invitations still require explicit approval of audience and sign-in method.

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
