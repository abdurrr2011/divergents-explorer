# Region-to-country navigation

Geographic navigation uses Unicode CLDR 49 territory containment (Unicode 16.0.0), checked 16 November 2026. Source: https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-core/supplemental/territoryContainment.json . Licence: licenses/UNICODE.txt.

`src/destination-regions.mjs` maps every one of the 249 ISO destination records to Europe, Asia, North America, Latin America, Africa, Oceania or Antarctica. North America uses CLDR Northern America; Latin America includes the Caribbean and Central/South America. Antarctica is a separate browsing category rather than CLDR's outlying-Oceania grouping. Kazakhstan also has a single-country shortcut and remains included in Asia. CLDR places Russia in Europe and Türkiye/Cyprus in Asia; the map uses those geographic conventions consistently.

The UI first displays region and study-subject selectors. Selecting a region reveals only that region's countries/territories, sorted in the current language. The all-countries option searches the region as a whole. Changing region clears the old country; resetting removes both. A country selection and language switch preserve stable codes. Selecting a region does not verify a programme's availability there.

This map is independent of the institution records' legacy research-region labels and admission rules. Geography filtering and coverage navigation use the country map; source records and costs are not reassigned to a different intake or applicant category.

To refresh, fetch and review the official CLDR containment data, map its geographic leaves to the existing ISO country codes, and retain the explicit Antarctica/Kazakhstan navigation rules. Run `npm run check`: every ISO destination must have exactly one primary region, and regional filters must compose with country/stage/subject filters.
