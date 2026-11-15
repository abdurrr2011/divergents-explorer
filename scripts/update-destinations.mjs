// Input: ISO 3166-1 JSON snapshot in Debian iso-codes format. No network at runtime.
import {readFile,writeFile} from 'node:fs/promises';
const path=process.argv[2];if(!path)throw Error('Usage: node scripts/update-destinations.mjs <iso_3166-1.json>');
const input=JSON.parse(await readFile(path,'utf8'))['3166-1'];
const names=Object.fromEntries(['en','ru','kk'].map(lang=>[lang,new Intl.DisplayNames([lang],{type:'region'})]));
const rows=input.map(row=>({code:row.alpha_2,labels:Object.fromEntries(['en','ru','kk'].map(lang=>[lang,names[lang].of(row.alpha_2)])),aliases:[row.name,row.official_name,row.common_name].filter(Boolean)})).sort((a,b)=>a.code.localeCompare(b.code));
if(rows.length!==249||new Set(rows.map(x=>x.code)).size!==249)throw Error('Review changed ISO coverage before updating the snapshot.');
const header='// ISO 3166-1 country/territory snapshot; names localised with Unicode CLDR through Intl.\n// Reference: https://www.iso.org/iso-3166-country-codes.html (checked 2026-11-15).\n';
await writeFile('src/destination-data.mjs',header+'export const countryRecords='+JSON.stringify(rows,null,1)+';\n');
console.log(`Wrote ${rows.length} destinations in three languages.`);
