# Divergents University & College Explorer

Fresh standalone static application for Divergents Leadership School. It does not share code, data, Site identity or bookmarks with the personal 2029 CS/AI explorer. The reference URL could not be read through the research tool and was not modified.

## Local commands

Node 22+ and Python 3. No runtime dependencies; install the development-only DOM test dependency with `npm ci`.

```sh
npm ci            # development-only test dependencies
npm run check     # data validation, 45 scenario/localization/currency/world-filter tests, static build
npm run links     # official-source link report (curl, network required)
npm start         # http://localhost:4173 after building
```

Build output is `dist/`; catalogue source is `data/*.json`; UI/logic/dictionaries are `src/`; full catalogue translations are `src/catalogue-i18n.mjs`, additional interface copy is `src/ui-i18n.mjs`, and the localisation renderer is `src/localize.mjs`. `data/template.example` is an excluded import example. There is no backend, analytics, score entry, identity collection or feedback destination. Browser-local language, intake, shortlist and comparison are optional and clearable. The catalogue works independently of local storage; disabled storage lasts only for the visit.

See `docs/SCHEMA.md`, `docs/MAINTENANCE.md`, `docs/PLAN.md`, regional research notes and `docs/VERIFICATION.md` for definitions, evidence limits, annual rollover, editorial review, exact checks and release status.

## Catalogue at launch

40 applicant routes across 34 programmes, 13 institutions and 74 official-source records (checked 14 November 2026): Kazakhstan 16, North America 6, Europe 6, Asia 7, Latin America 1, Africa 2, Oceania 2. This is representative coverage, not a comprehensive directory. The seven regions all exist in navigation and the schema. Each route names its applicant category and own source cycle. Admission, fee and award cycles can differ. No future deadline is inferred from a historical date.

Full interface and catalogue text: English, Kazakh, Russian. Currency names and number/billing-period formatting follow the selected language; amounts stay in their original currency, without exchange-rate conversion. Canonical records retain ISO currency keys, source URLs and official exam identifiers. Translated programme, field and place names are searchable.

The shared starting view offers After Grade 9, After Grade 11 and All options. There is no current-grade selection. Main-page controls are search, country and subject only. Cards show the programme, institution/location, entry stage, reference tuition and actions. The admissions-route subtitle appears only when needed to distinguish multiple routes into the same programme at the same stage. Legacy grade preferences are ignored.

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


## Complete destination and subject lists

The two simple selectors expose all 249 ISO 3166-1 countries/territories and 120 subject choices: 11 broad, 29 narrow and 80 defined detailed UNESCO ISCED-F 2013 fields. Names are provided in English, Russian and Kazakh. `src/destination-data.mjs` stores the destination snapshot; `src/subject-data.mjs` stores adapted subject labels. `src/subjects.mjs` maps the 34 programme records to discovery categories. Broad/interdisciplinary preparation stays broad and does not automatically match every specific specialism.

This expands navigation, not the researched programme catalogue. There are still 40 source-backed applicant routes. Unresearched country/subject selections show explicit coverage gaps; combinations that merely exclude existing records use the ordinary empty-search state. Country ISO keys and subject IDs persist through language changes. The older English country/family values remain accepted by the filter library. See `docs/TAXONOMY.md` for standards, attribution, refresh and editorial mapping rules.
