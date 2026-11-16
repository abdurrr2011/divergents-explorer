import {countryRegions,destinationRegions} from './destination-regions.mjs';
export {countryRegions,destinationRegions};
import {countryRecords} from './destination-data.mjs';
export {countryRecords};
const normalize=value=>String(value||'').normalize('NFKC').toLocaleLowerCase().trim();
const codes=new Map();for(const row of countryRecords)for(const alias of [row.code,...Object.values(row.labels),...row.aliases])codes.set(normalize(alias),row.code);
for(const [name,code]of Object.entries({'Hong Kong':'HK','South Korea':'KR','North Korea':'KP','Russia':'RU','Taiwan':'TW','Czech Republic':'CZ','Turkey':'TR','Vietnam':'VN','United Kingdom':'GB','United States':'US'}))codes.set(normalize(name),code);
export function countryCode(value){return codes.get(normalize(value))||null;}
export function countryMatches(recordValue,selected){const code=countryCode(selected);return code?countryCode(recordValue)===code:recordValue===selected;}
export function countryLabel(value,lang='en'){const code=countryCode(value);return countryRecords.find(c=>c.code===code)?.labels[lang]||String(value);}
export function destinationOptions(lang='en',region){return countryRecords.filter(row=>!region||countryInRegion(row.code,region)).sort((a,b)=>a.labels[lang].localeCompare(b.labels[lang],lang));}

export function countryInRegion(value,region){const code=countryCode(value);return region==='Kazakhstan'?code==='KZ':countryRegions[code]===region;}
