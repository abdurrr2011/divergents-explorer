# Country and subject references

The reference selectors are separate from the admissions catalogue. A selectable country or discipline is not a claim of researched programmes, diploma eligibility, funding or study availability. Current programme coverage is 60 routes / 54 programmes / 33 institutions (16 November 2026).

## Destinations

249 ISO 3166-1 alpha-2 entries, including dependent territories and other areas in that standard. This is a defined reference scope, not a count of sovereign states. Source: [ISO country codes](https://www.iso.org/iso-3166-country-codes.html), checked 15 November 2026. The ISO page permits free use of its codes. The initial code snapshot came from the execution environment's Debian iso-codes JSON. Display labels were generated using Unicode CLDR through Node Intl.DisplayNames for English, Russian and Kazakh; the resulting labels are version-controlled.

Refresh with a reviewed ISO JSON snapshot using:

```sh
node scripts/update-destinations.mjs /path/to/iso_3166-1.json
npm run check
```

The generator deliberately requires review if the expected ISO count changes. Keep source/common names as aliases. Country matching supports existing English catalogue names and resolves Hong Kong and South Korea separately from China and North Korea; locale changes do not change the stored selection. Names and codes describe navigation, not a political or admissions determination.

## Fields of study

Adapted from UNESCO Institute for Statistics, *International Standard Classification of Education: Fields of education and training 2013 (ISCED-F 2013) – Detailed field descriptions* (2015), [official publication](https://www.uis.unesco.org/sites/default/files/medias/fichiers/2025/04/international-standard-classification-of-education-fields-of-education-and-training-2013-detailed-field-descriptions-2015-en.pdf), checked 15 November 2026.

The internal reference contains all 11 broad fields, 29 narrow fields and 80 defined subject fields. The student-facing selector uses 12 simple groups from `src/interests.mjs`, with a short explanation for each; the technical hierarchy is no longer exposed as 120 choices. Administrative residual codes such as “not further defined”, “not elsewhere classified” and interdisciplinary residual bins are represented by the relevant parent choice instead of extra technical menu items. This is a comprehensive classification of study fields, not a claim to enumerate every degree title or emerging specialisation.

The project shortened/adapted English labels for students and translated them into Russian and Kazakh. Examples: audiovisual/media production includes graphic design; software/application development includes AI; electronics/automation includes mechatronics. These are browsing labels rather than official translations endorsed by UNESCO. Subject hierarchy IDs remain stable and are kept internal.

The category-label adaptations/translations are provided under [CC BY-SA 3.0 IGO](https://creativecommons.org/licenses/by-sa/3.0/igo/), the publication's licence, with attribution to UNESCO-UIS. This attribution does not imply endorsement. The app's About page includes source and licence links. The rest of the application retains its existing licensing status.

## Editorial programme mappings

`src/subjects.mjs` assigns existing programme IDs to discovery categories based on the programme topic. These are not official institutional classification claims. A programme may span multiple categories; a broad or preparatory programme can retain a broad code without implying every child specialisation is available. Parent selections match assigned descendants. A child selection does not match a merely broad parent tag.

Maintain mappings when programmes are added; alternatively provide `subjectCodes` directly on a programme record. Use source-backed subject content to choose tags. The validator rejects missing/unknown classifications. Keep all 12 simple interest groups selectable and display honest coverage gaps instead of adding demonstration programme records.

## Simple interest mapping

Use detailed tags supported by programme content. `src/interests.mjs` maps their prefixes to student-facing groups and excludes overlapping branches where needed (economics belongs to business; architecture to design; biology to medicine/biology; ecology to nature). A broad Science tag stays in science without claiming every specific discipline. Programmes can appear in multiple relevant groups. The validator rejects a programme with no simple group. Translate group labels and explanations together.

## Current subject menu

The student menu now adds 33 specific specialities in `src/interest-topics.mjs` beneath the 12 broader groups. Topics use explicit programme IDs and recognisable academic names, while internal ISCED tags remain available to logic and validation. All current focused topics have researched examples. Country navigation now begins with region; see GEOGRAPHY.md.
