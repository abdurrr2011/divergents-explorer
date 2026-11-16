# Kazakhstan expansion — checked 16 November 2026

Added six actual, distinct universities, six concrete programmes and six domestic school-leaver routes. Added 14 official source records and two genuine 2026 SDU reference deadlines. No speculative numeric tuition, future dates or scholarship promises.

| University | Programme | Discovery tag |
| --- | --- | --- |
| Satbayev University | Civil Engineering | 0732 |
| Asfendiyarov Kazakh National Medical University | Medicine 6B10116 | 0912 |
| Maqsut Narikbayev University | Law 6B04204 | 0421 |
| KIMEP University | Management BMGT | 0413 |
| Al-Farabi Kazakh National University | Management 6B04102 | 0413 |
| SDU University | Mathematics teacher education 6B01501 | 0114 |

Tags support browsing and are editorial ISCED discovery mappings, not formal institutional classification claims. These six universities were not in the previous catalogue.

## Evidence and remaining limits

- [Satbayev programme](https://satbayev.university/ru/specialties/stroitelnaya-inzheneriya-civil-engineering?professionSubjectId=2) and [domestic admission steps](https://satbayev.university/ru/undergraduate) are indexed on the official domain. Direct page requests timed out. Programme existence, the Mathematics–Physics pairing and use of UNT are supported by official indexed text. Both sources are marked **partial**; current duration, credits, language cohort and programme minimum remain unverified. No old 2023/24 duration is rolled forward.
- [KazNMU admissions](https://kaznmu.edu.kz/ru/бакалавриат/) links a minima PDF under its 2026/27 heading. Medicine minima are 90 for grant-competition eligibility and 80 for paid tuition. The PDF itself is undated, which is explicitly recorded. A psychometric pass is required. The [current programme catalogue](https://kaznmu.edu.kz/ru/образовательные-программы/бакалавриат/) lists 6B10116. Duration, final qualification, the current profile-subject mapping and professional licensing conditions remain open; older 5+1 information is not presented as current.
- [MNU Law](https://mnu.kz/en/educational/law/) publishes four years and 248 ECTS, UNT 75, World History 5 and Fundamentals of Law 10. Language of instruction and state-grant threshold are TBA; IELTS varies by concentration. Aggregate English state remains unknown, so this cannot appear as a verified no-English-requirement route.
- [KIMEP's 2026/27 Kazakhstan-citizen guide](https://www.kimep.kz/prospective-students/files/2026/02/HowToApplyENGUgrad_2026-27.pdf) verifies school certificate, UNT 50 and subject minima. [Management](https://www.kimep.kz/bang-college-of-business/kz/bachelor-of-management/) gives 146 KIMEP credits / 240 ECTS and practical modules. [English placement guidance](https://www.kimep.kz/prospective-students/kz/admission/high-school-graduates/) says English proficiency is not an admission requirement; without placement students start beginner English. Aggregate ENGLISH is **optional**, with time/cost consequences explicit. This is not a promise of direct access to academic English courses. TOEFL scale conversion and total fees need confirmation.
- [KazNU Management](https://welcome.kaznu.kz/ru/education_programs/bachelor/speciality/1447) verifies the programme and a paid minimum of 70. Current programme-specific profile subjects, duration, language and grant rules require confirmation; no national group rule was silently substituted for a university rule.
- [SDU domestic admissions](https://sdu.edu.kz/en/admission-3-2/) verifies UNT, Mathematics–Physics, pedagogical examination and English proof via IELTS, SDU language-school certificate or SDU examination. [Programme page](https://sdu.edu.kz/en/mathematics/) gives four years / 240 ECTS but shows an undated paid minimum 80 and scholarship threshold 127. Only the paid minimum is recorded with a reconfirmation warning; 127 is not treated as a future grant minimum or an admission prediction. Old grant counts retained on the admissions page are excluded. Two explicit 2026 dates are historical.

## Translation and verification

`src/research-kazakhstan-i18n.mjs` exports `researchPhrases`: 126 English–Russian–Kazakh phrase entries. Every human-readable string in the batch is covered, including institution names, source titles, source limitations, requirements, unknown states and next actions. IDs, URLs, codes, enum keys and numeric dates/cycles are not translated. Proper brand names may remain identical.

Local checks passed: JSON parse, six distinct institution IDs, unique IDs, foreign keys, source references, explicit aggregate English state on every route, and complete phrase coverage. Root maintainer should run the repository-wide validator after integrating the batch and translations.
