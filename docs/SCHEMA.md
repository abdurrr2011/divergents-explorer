# Catalogue v1 field definitions

Each regional JSON file contains arrays: institutions, programmes, routes, awards, deadlines, sources. All IDs are stable, globally unique strings; foreign keys refer to IDs. Null means unpublished/unknown, never zero.

- source: id, url (exact official HTTPS URL), title, checked (YYYY-MM-DD), cycle (published intake or `current catalogue`/`undated`), applicant (applicant category), status (`verified`, `partial`, `unverified`), note (specific limits/questions). Avoid storing whole copyrighted pages.
- institution: id, name, country, region (Kazakhstan, North America, Europe, Asia, Latin America, Africa, Oceania), city, aliases[], sourceIds[].
- programme: id, institutionId, name, field (Technology, Engineering, Business & economics, Health & life sciences, Arts & design, Social sciences, General preparation), qualification, duration (human readable), credits (human readable incl system or `Not published`), languages[], description, curriculum, practical, campus, descriptionLanguage (`en` etc), sourceIds[].
- route: id, programmeId, name, entryAfter (9 or 11), pathway (`college`, `direct`, `foundation`, `transfer`), cycle, applicant, eligibility, recognition, subjects, tests (map UNT/NUET/SAT/ACT/IELTS/TOEFL to {status, detail}; status = required/alternative/optional/not_required/unknown), tuition ({amount:number|null, currency:ISO-4217|null, period:year/programme/credit/unknown, note}), mandatoryFees (text), living (text with dated source, otherwise unknown), nextAction, questions[], sourceIds[]. Missing test keys are unknown, never exemptions. `alternative` means one accepted route; requirements may be conjunctive and details must explain that.
- award: id, routeIds[], name, coverage (`full_scholarship`, `tuition_limited_support`, `tuition_only`, `partial`, `conditional`), benefits, eligibility, application, renewal, upfront, cycle, sourceIds[]. Full scholarship requires sourced tuition AND maintenance/housing package. No invented amounts.
- deadline: id, routeIds[], awardId (optional), type (`admission`, `funding`, `test`, `nomination`, `document`), label, date (YYYY-MM-DD|null), time (HH:mm|null), timezone (IANA/string|null), cycle, applicant, status (`confirmed`, `historical`, `awaiting_publication`), nextAction, sourceIds[]. Cycle is independent from student entry year. Do not advance historical dates.

Sources on an entity apply only to its written, scoped claims. If an entity combines different cycles, say so in its prose or split the entity; dates and awards always carry independent cycles. Unknown or conflicting facts belong in questions and source notes. An editor must verify all decision-critical fields before treating a route as application-ready. `verified source` means the official page was checked, not that every aspect of eligibility is settled.


### Navigation reference lists

The institution country name resolves through `src/destinations.mjs` to the ISO alpha-2 code used by the selector. It remains independent of verified destination coverage. Programme `field` retains its original broad family for compatibility. The 12 student-facing interest groups and explanations live in `src/interests.mjs`; their IDs are local filter values rather than admissions claims. Optional `subjectCodes` accepts an array of 2-, 3- or 4-digit reference IDs; absent arrays use the editor-maintained `programmeSubjects` map in `src/subjects.mjs`. The validator requires a valid mapping and at least one simple interest group. These are discovery tags, not a claim that a university formally assigns that ISCED code. Do not infer acceptance, scholarships or curriculum solely from a classification.

### Plain browsing labels

Programme `name` remains the full source-backed catalogue title. `src/programme-names.mjs` maps stable programme IDs to short `{en,ru,kk}` display names. All three are required by validation. This presentation mapping does not create a new qualification or alter an admissions route. Full titles are visible in details and remain searchable alongside short names.

### Geographic regions and focused study topics

`src/destination-regions.mjs` maps stable ISO country codes to geographic browsing regions; it is independent of legacy institution research-region labels. Kazakhstan is also a shortcut. `src/interest-topics.mjs` contains `{id,parentId,programmeIds,labels,descriptions}` with all three languages. Topic IDs are local navigation values; programme IDs must exist. They neither create a degree nor change the source's admissions claims. `programmeNameAliases` retains previous display names for search.
