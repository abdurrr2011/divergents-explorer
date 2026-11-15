# Private-review verification — 14 November 2026

## Automated scope

- `npm run validate`: zero structural errors; 109 editorial warnings remain intentionally visible in `docs/VALIDATION-REPORT.json`. Checks include stable IDs, cross-references, official-source metadata, date/time and currency formats, tuition units, required test aggregate, duplicate/conflicting route keys and scholarship coverage evidence.
- `npm test`: 18 scenario tests pass. Covers interests without scores, Grade 9/11 browsing, two fields/profile subjects, UNT/NUET/SAT separation, regular-GPA prerequisite, unknown English exclusion, full-scholarship coverage, native-currency/period budget handling, comparison limit, persistence serialization, corrupt/disabled storage, historical cycles, search and translation label completeness.
- `npm run build`: static output is generated with 40 routes and 34 programmes. Source descriptions are English; core labels have three dictionaries.
- `node --check src/app.mjs`: JavaScript parses. There are no external runtime dependencies or third-party asset fetches.
- `npm run links`: 74/74 distinct official URLs returned successful HTTP responses. See `docs/LINK-REPORT.json` for results. An HTTP success establishes reachability, not factual correctness or absence of a bot page. The first Node-fetch attempt could not use the managed proxy; the final checker uses curl with inherited proxy/CA configuration. A timeout, 403 or bot gate requires a manual check, not an invented broken-link conclusion. Research itself used official pages through the web research tool.

## Browser verification blocker

The selected managed environment has `SITES_MANAGED_LINUX_CONTAINER=1`, but no `cua_repl.js` browser-control tool is exposed. The installed Sites skill's managed-preview instructions require that tool and direct us not to improvise a replacement browser path or launch a preview server when it is missing. As a result, desktop/mobile interactions, screenshots, keyboard flow, actual browser reload persistence, phone comparison scrolling and signed-in owner navigation are **not browser-verified** in this release. The scenario checks above are data/logic checks, not a substitute for those interactions. A complete repeatable manual checklist is in `docs/MAINTENANCE.md`.

The Sites source helper scripts were also absent from the installed filesystem and unavailable as cloud skill resources. Source synchronisation therefore uses ordinary Git with a short-lived credential held only in process memory; packaging uses the documented static manifest and exact dist output. No credential is tracked.

This is a private build for review with explicit QA and editorial limits. Do not treat it as school-rollout ready until the browser checklist and relevant unresolved eligibility checks are complete.

## Access/deployment

The new Site was created independently from the personal explorer. The initial native access-policy inspection confirmed custom access containing only the owner, zero external visitors and no allowed groups/editors. The release uses the native owner-private deployment operation. The access method and release procedure are recorded in `docs/DEPLOYMENT.md`; the final native receipt accompanies the delivered source bundle.

## Editorial scope

40 routes / 34 programmes / 13 institutions / 74 official-source records / 9 awards / 31 deadline records. Region counts: Kazakhstan 16; North America 6; Europe 6; Asia 7; Latin America 1; Africa 2; Oceania 2. Breadth is deliberately sparse outside the main regions; foreign diploma recognition is not universally settled.

Key open questions: AITU paid UNT threshold conflict, college funded-place allocations, current tuition periods, programme-specific foreign diploma recognition, KAIST English validity wording, HKUST scholarship nationality eligibility, Melbourne/UCT fees, UBA equivalence/fees/duration and NU complete grant package/renewal. See regional notes and validation report. A school-appointed teacher or counsellor must review source claims before using a route to advise an individual application.


## Complete localisation update — 15 November 2026

Added Russian and Kazakh translations for all 769 distinct human-readable catalogue strings, plus the remaining interface copy. Grade guidance, subject and country values, programme descriptions, qualifications, admissions details, funding, deadlines, source notes, accessibility labels, empty states and copied feedback are covered. Official exam/award names, currency codes, qualification codes and source URLs retain their identifiers. English prose and canonical records remain unchanged.

`npm test` now contains 25 checks, including DOM-rendered checks of all five grades, every main page, all 40 programme-route details in each language, populated shortlist/comparison, future-cycle messages, translated search, copied corrections and switching between all three languages. Catalogue translation coverage, important thresholds, number/billing-period formatting and preservation of IDs/URLs/user input are checked separately. These are DOM tests, not a claim of desktop/mobile browser verification; the browser-tool limitation above still applies.


## Simplified shared browsing — 15 November 2026

Removed current-grade selection and grade-specific content. All visitors get the same after-9/after-11/undecided entry controls; advanced filters and detail sections are collapsed. Updated translation journeys and added five legacy-grade migration checks. Total: 30 logic/DOM checks. Visual browser QA remains unavailable in this environment.


## Minimal interface and currency names — 15 November 2026

Currency prices and source-derived prose now use names in English, Russian or Kazakh instead of visible ISO codes. Numeric source records and currency keys remain unchanged. Removed the interest panel and advanced controls from the main view, shortened cards, and merged detailed information into five sections. Added dedicated currency regressions and minimal-view DOM assertions; the full suite has 37 checks. No browser-visual verification is claimed.


## Complete destination and subject selectors — 15 November 2026

Added 249 ISO country/territory options and 120 ISCED-based subject choices (11 broad, 29 narrow, 80 defined detailed fields), with all three language labels. Verified the 80 detailed IDs against the downloaded official UNESCO 2015 list; see `TAXONOMY-REFERENCE.json`. Editorial classification tags cover all 34 programmes. The 40 source-backed routes and their admissions/financial facts were not expanded or invented.

The 45-check suite verifies destination uniqueness, translations and locale sorting, legacy country compatibility, hierarchy matching, all programme mappings, country/field/stage combinations, distinct empty/coverage states and selection persistence through language switching. Existing currency, admissions and minimal-interface checks still run. Actual browser visual QA remains unavailable.
