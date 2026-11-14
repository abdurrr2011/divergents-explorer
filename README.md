# Divergents University & College Explorer

Fresh standalone static application for Divergents Leadership School. It does not share code, data, Site identity or bookmarks with the personal 2029 CS/AI explorer. The reference URL could not be read through the research tool and was not modified.

## Local commands

Node 22+ and Python 3; no application dependencies or install step.

```sh
npm run check     # data validation, 18 scenario tests, static build
npm run links     # official-source link report (curl, network required)
npm start         # http://localhost:4173 after building
```

Build output is `dist/`; catalogue source is `data/*.json`; UI/logic/dictionaries are `src/`. `data/template.example` is an excluded import example. There is no backend, analytics, score entry, identity collection or feedback destination. Browser-local grade, language, intake, shortlist and comparison are optional and clearable. The catalogue works independently of local storage; disabled storage lasts only for the visit.

See `docs/SCHEMA.md`, `docs/MAINTENANCE.md`, `docs/PLAN.md`, regional research notes and `docs/VERIFICATION.md` for definitions, evidence limits, annual rollover, editorial review, exact checks and release status.

## Catalogue at launch

40 applicant routes across 34 programmes, 13 institutions and 74 official-source records (checked 14 November 2026): Kazakhstan 16, North America 6, Europe 6, Asia 7, Latin America 1, Africa 2, Oceania 2. This is representative coverage, not a comprehensive directory. The seven regions all exist in navigation and the schema. Each route names its applicant category and own source cycle. Admission, fee and award cycles can differ. No future deadline is inferred from a historical date.

Core labels and navigation: English, Kazakh, Russian. Catalogue descriptions: English, labelled. Grade 7–11 is a local navigation preference, distinct from entry after Grade 9/11; all pathways stay browsable. Subject filters combine as OR; other filter dimensions combine as AND. Unknown tuition can be included, but different currencies and nonannual totals are never converted into an annual budget silently. Unknown test states are opt-in; confirmed no-required-English always requires explicit evidence.

NU Computer Science includes regular GPA admission, NUET financial support with an offer prerequisite, and SAT/ACT funding as separate routes. NUFYP is a separate preparatory programme. NU 2027/28 entry and support dates coexist with the older 2026/27 fee reference. The financial-support benefits package remains conditional until fully verified; it is not labelled a full scholarship.

Important review limits: AITU official pages conflict on paid UNT minimum (70 vs 80); college funded-place allocation and current billing periods need confirmation. Diploma equivalence for several foreign routes, future fees, scholarship conditions and some yearless deadlines remain explicit questions. Some Oceania/Africa examples require an accepted credential beyond an ordinary Grade 11 certificate. They are discovery routes, not confirmed direct eligibility. Latin America has only one researched example.

## Private hosting and source

Hosting manifest: `.openai/hosting.json`, new Site `appgprj_6af89dedf628819186d2111ee067647a`.

URL: https://divergents-university-college-explorer.surecarrot2.chatgpt.site/

Local source: `/workspace/sites/divergents-explorer`.

The source is synchronised to the Site's private Git repository. See `git remote -v` for its credential-free URL. Do not store the short-lived Git credential or the Site service-access token in a file, Git configuration, browser bundle or report.

For a future release: inspect the existing manifest; reuse its project ID. Acquire a short-lived Sites source-write credential, run the supported Sites source helper when installed, push the exact reviewed source, and package `.openai/hosting.json` plus `dist/` from that commit. Use the owner-private save-and-deploy operation with matching commit SHA and archive; wait for a succeeded result. Preserve custom owner-only access. Platform tooling is required to deploy; a plain static host does not provide Sites' owner gate.

A school counsellor/teacher should own data review; appoint a technical maintainer for builds/releases. Before inviting the school, approve the audience and sign-in method, designate the reviewer and optional correction destination, resolve relevant eligibility questions, complete browser QA and authorise any school branding. No invitations or public sharing are included in this release.
