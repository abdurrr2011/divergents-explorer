# Second programme expansion — 16 November 2026

The reported empty/sparse Data Science choice prompted this batch. It adds 24 actual degree/major records and 24 admissions routes at 15 institutions already in the catalogue, rather than adding university names without programmes. Total institutions remain 33; programmes/major options increase from 54 to 78 and routes from 60 to 84. Data Science now returns 12 options at 11 institutions. Forty focused subject choices sit inside the twelve broad interests.

| Batch | New options | New sources | New deadline records |
| --- | ---: | ---: | ---: |
| Kazakhstan | 8 | 17 | 0 |
| Europe / North America | 8 | 16 | 8 |
| Asia / Oceania | 8 | 26 | 3 |

Files are `data/expansion-{kz,europe,world}-more.json` and their `src/research-*-more-i18n.mjs` dictionaries. Plain browsing names and explicit topic IDs are in `src/programme-names.mjs` and `src/interest-topics.mjs`. Every new programme has an admissions route; validation rejects orphan programmes. Run `npm run coverage` for repeatable programme/institution/route counts. Subject totals overlap.

## Degree and major distinctions

- Manitoba Data Science is a major declared after faculty admission, at least 24 credit hours and specified courses/grades. Its listing does not promise direct major admission.
- Melbourne Data Science and Waikato Data Analytics are named majors within a Bachelor of Science; the existing general science records remain separate browsing choices.
- KIMEP Data Analytics is a concentration/path within Computer Science, not a separate Data Science degree. Bologna Stats&Maths is a curriculum within Statistical Sciences, not a Data Science master's degree.
- The ASU biomedical data degree is taught Downtown Phoenix. Its general university photograph is Tempe Old Main; the location caption is explicitly visible.

## Applicant-specific limits for editorial review

- NTU's ordinary Kazakhstan school-certificate route needs additional AP/A-level qualifications. NIS Grade 12 is a different route. The official degree heading/table and introductory prose disagree on the award title; confirm the selected intake. The July 2027 AP document deadline is distinct from admission closing.
- Melbourne's published Kazakhstan direct-entry listing is NIS Grade 12, not blanket acceptance of an ordinary Grade 11 Attestat. English and subject prerequisites remain visible.
- Waikato Primary Teaching has higher English requirements than its BSc: IELTS 7.0 in every band rather than the general 6.0 overall / 5.5 bands. Other accepted evidence/waivers remain conditional.
- SDU Statistics/Data Science uses its published Mathematics–Physics pairing. Other Kazakhstan programmes use their own sourced subjects. AITU's paid threshold conflict and KazNU Tourism's conflicting 75/92 minima remain unresolved rather than silently choosing a number.
- UNBC's Kazakhstan-specific guide is a historical 2021 reference; current mathematics/diploma equivalence still needs confirmation.
- Twente's principal instructions say 30 April 2027 at 23:59 CET, while a lower FAQ says 1 May. The original timezone wording is retained; do not silently convert or resolve the discrepancy. Matching is a separate mandatory step.
- Bologna's verified non-EU application deadline is historical 2026/27. A distinct unpublished 2027/28 record has no fabricated date. Its qualification-length rules and SAT route remain explicit.
- Aalto Finance uses its sourced SAT/ACT route and the applicable Round A deadlines. Its competitive Excellence award is tuition-only; ASU's applicable merit award remains partial. General award applicability was verified before extending their route links.

Costs, living estimates, future dates and funding eligibility were left unknown when evidence was insufficient. English unknown/alternative/optional states are not converted into confirmed exemptions. The new programme labels, narratives, source titles and deadline actions have English, Russian and Kazakh versions.

A teacher/counsellor should review the recorded questions and applicant-specific equivalence before advising a student to apply. Latin America and Africa remain thin, and transport has only one researched example. This is expanded representative coverage, not a worldwide directory.
