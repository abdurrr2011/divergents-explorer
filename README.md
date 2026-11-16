# Divergents University & College Explorer

Fresh standalone static application for Divergents Leadership School. It does not share code, data, Site identity or bookmarks with the personal 2029 CS/AI explorer. The reference URL could not be read through the research tool and was not modified.

## Local commands

Node 22+ and Python 3. No runtime dependencies; install the development-only DOM test dependency with `npm ci`.

```sh
npm ci            # development-only test dependencies
npm run check     # data validation, 69 scenario/localization/currency/world-filter tests, static build
npm run links     # official-source link report (curl, network required)
npm start         # http://localhost:4173 after building
```

Build output is `dist/`; catalogue source is `data/*.json`; UI/logic/dictionaries are `src/`; full catalogue translations are `src/catalogue-i18n.mjs` and `src/research-*-i18n.mjs`, additional interface copy is `src/ui-i18n.mjs`, and the localisation renderer is `src/localize.mjs`. `data/template.example` is an excluded import example. There is no backend, analytics, score entry, identity collection or feedback destination. Browser-local language, intake, shortlist and comparison are optional and clearable. The catalogue works independently of local storage; disabled storage lasts only for the visit.

See `docs/SCHEMA.md`, `docs/MAINTENANCE.md`, `docs/PLAN.md`, regional research notes and `docs/VERIFICATION.md` for definitions, evidence limits, annual rollover, editorial review, exact checks and release status.

## Current catalogue — 16 November 2026

60 applicant routes across 54 programmes, 33 institutions and 146 official-source records (latest check 16 November 2026): Kazakhstan 22, North America 9, Europe 10, Asia 13, Latin America 1, Africa 2, Oceania 3. There are 14 award records and 50 deadline records; these are separate from the admissions routes. This update adds 20 actual universities, not just filter choices. This is representative coverage, not a comprehensive directory. The seven regions all exist in navigation and the schema. Each route names its applicant category and own source cycle. Admission, fee and award cycles can differ. No future deadline is inferred from a historical date.

Full interface and catalogue text: English, Kazakh, Russian. Currency names and number/billing-period formatting follow the selected language; amounts stay in their original currency, without exchange-rate conversion. Canonical records retain ISO currency keys, source URLs and official exam identifiers. Translated programme, field and place names are searchable.

The shared starting view offers After Grade 9, After Grade 11 and All options. There is no current-grade selection. Main-page controls are search, country and a simple interest selector only. Its 12 groups have short explanations of what students study. Counts distinguish institutions from admission options so separate routes do not inflate the university count. Cards show the programme, institution/location, entry stage, reference tuition and actions. The admissions-route subtitle appears only when needed to distinguish multiple routes into the same programme at the same stage. Legacy grade preferences are ignored.

The interest panel, advanced-filter interface, repeated descriptions and technical filter chips were removed at the user's request. The pure filter library remains tested for data consumers; those extra controls are no longer exposed in the main interface. Programme details are organised into five disclosure groups: programme, admissions, costs/scholarships, deadlines and official sources. Source-cycle and funding conditions remain available there and in comparison.

NU Computer Science includes regular GPA admission, NUET financial support with an offer prerequisite, and SAT/ACT funding as separate routes. NUFYP is a separate preparatory programme. NU 2027/28 entry and support dates coexist with the older 2026/27 fee reference. The financial-support benefits package remains conditional until fully verified; it is not labelled a full scholarship.

Important review limits: AITU official pages conflict on paid UNT minimum (70 vs 80); college funded-place allocation and current billing periods need confirmation. Diploma equivalence for several foreign routes, future fees, scholarship conditions and some yearless deadlines remain explicit questions. Some Oceania/Africa examples require an accepted credential beyond an ordinary Grade 11 certificate. They are discovery routes, not confirmed direct eligibility. Latin America has only one researched example.

## Private hosting and source

Hosting manifest: `.openai/hosting.json`, new Site `appgprj_6af89dedf628819186d2111ee067647a`.

URL: https://divergents-university-college-explorer.surecarrot2.chatgpt.site/

Local source: `/workspace/sites/divergents-explorer`.

The source is synchronised to the Site's private Git repository. See `git remote -v` for its credential-free URL. Do not store the short-lived Git credential or the Site service-access token in a file, Git configuration, browser bundle or report.

For a future release: inspect the existing manifest; reuse its project ID. Acquire a short-lived Sites source-write credential, run the supported Sites source helper when installed, push the exact reviewed source, and package `.openai/hosting.json` plus `dist/` from that commit. Use the owner-private save-and-deploy operation with matching commit SHA and archive; wait for a succeeded result. Preserve custom owner-only access. Platform tooling is required to deploy; a plain static host does not provide Sites' owner gate.

A school counsellor/teacher should own data review; appoint a technical maintainer for builds/releases. Before inviting the school, approve the audience and sign-in method, designate the reviewer and optional correction destination, resolve relevant eligibility questions, complete browser QA and authorise any school branding. No invitations or public sharing are included in this release.


The minimal shared view supersedes the original grade-based product brief and broad main-page filter interface. Primary navigation is Explore, Shortlist and Compare; Deadlines and Coverage remain available in the footer.


## Destinations and simple interests

The country selector keeps all 249 ISO 3166-1 countries/territories. The interest selector now shows 12 understandable groups with a one-sentence explanation after selection: computers/programming; engineering/construction; business/economics; medicine/biology; design/arts/media; society/law; education/languages; science/mathematics; nature/animals; tourism/sport/services; transport/safety; preparation for entry. Labels and explanations are complete in English, Russian and Kazakh.

`src/interests.mjs` owns these groups and their mappings. The 120 technical ISCED tags remain internal to `src/subject-data.mjs` and `src/subjects.mjs`; students no longer choose from that long hierarchy. All 54 programmes have valid tags and a simple interest group. `src/destination-data.mjs` stores multilingual destination names. See `docs/TAXONOMY.md` for attribution and editorial mapping rules.

The catalogue is researched separately from navigation. An unresearched country/interest shows an explicit coverage gap. A combination that excludes existing records shows the ordinary empty-search state. Country and interest IDs remain stable across languages. Transport/safety is currently an uncovered interest; other groups have examples. Africa and Latin America still have one institution each. Programme-specific recognition, extra preparation and future fees remain explicit checks, including Twente/NTU/UNNC Grade 11 limitations and TUM fee inconsistency. The four `docs/EXPANSION-*.md` files document this release's research.

## Minimal visual redesign — 16 November 2026

The current interface uses white and light-grey surfaces, system fonts, large headings, a compact segmented entry selector and blue actions. No external fonts, imagery or new runtime dependencies were added. Desktop cards use three columns, tablet two and phone one. Focus indicators and reduced-motion preferences are supported.

Explore initially shows six routes. Show more reveals six at a time, while search and filters always run across the full catalogue. A new filter resets the visible batch. Loading more moves keyboard focus to the first new detail button. This is presentation pagination; no records are deleted or hidden from search.

Details start with one short description, entry stage and duration. Full admissions/cost/evidence content and next actions live in five closed disclosure groups. Programmes with multiple routes have a route selector; NU GPA admission, NUET financial support and SAT/ACT remain separate saved/comparison choices. The deadline page leads with confirmed dates for the chosen cycle; other cycles and unpublished dates are collapsed. About initially shows a brief introduction and counts; geography, editorial review, privacy and sources are expandable.

The 69-test suite verifies these behaviours in all three languages, including the entire catalogue and route switching. Browser visual QA remains unavailable because no supported browser-control tool is exposed.

## Simple comparison — 16 November 2026

Comparison uses up to three compact cards with four facts: reference tuition in native currency and billing period, scholarship coverage options, compact exams/English roles and the nearest upcoming confirmed deadline for the selected intake. Desktop facts align across cards; phone cards stack. Remove an option with its labelled × button or clear the comparison. The floating comparison tray is omitted on this page.

Complete admissions, eligibility, curriculum, cost scope, awards and official evidence remain available through each card's Details button. Unknown English remains unknown, conditional English alternatives stay conditional, and tuition-only awards are distinct from maintenance-supported full scholarships. Costs and awards remain reference claims with their own cycles, regardless of the selected intake. No historical or unpublished deadline can become the upcoming date. `src/comparison.mjs` owns these compact summaries; it does not change catalogue records.

`npm run check` passes 66 checks; browser layout verification remains unavailable in this environment.

## Campus photographs — 16 November 2026

All 33 institutions have a real, source-checked campus photograph in programme cards, shortlists, comparison and detail. Files are local JPEGs under `public/media/campuses`; the build copies `public/` into `dist/`. It does not hotlink image hosts or send student browsing activity to image providers. Images load lazily, reserve their dimensions and use a fixed crop; a failed image leaves the catalogue usable. Captions/alt follow English, Russian or Kazakh. Source/credit links are on each photo, with the complete list under About → Photo credits.

`src/campus-photos.mjs` is the independent media manifest. Keep admissions sources in `data/`; photo provenance is not admissions evidence. See `docs/PHOTO-CREDITS.md` for sources, licences and campus-specific context. AITU/its college intentionally share their verified EXPO campus; Sheffield shows a labelled partner-campus context image.

The 33 files total 6.30 MB; each is below 390 KB. 29 photo records have verified free licences/public-domain status. Reuse terms for four institution records (three source photos) remain unconfirmed: NU, AITU/its college and Oskemen college. They are documented for the owner-private review edition and must be cleared or replaced before wider rollout. The request for images is not a copyright permission grant.

Run `npm run validate:photos` or `npm run check` (69 tests). The photo validator checks complete institution coverage, local files/raster signatures, dimensions, byte budget, HTTPS provenance, licences and translations; it writes `work/photo-validation-report.json`. Current result: zero errors, five review notes (four reuse reviews and one 389 KB image above the 350 KB target).
