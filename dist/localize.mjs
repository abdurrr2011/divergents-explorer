import {programmeNames} from './programme-names.mjs';
import {interests,matchesInterest} from './interests.mjs';
import {countryRecords,countryCode} from './destinations.mjs';
import {subjectRecords,subjectCodesFor} from './subjects.mjs';
import {localizeCurrencies} from './currency.mjs';
import {cataloguePhrases} from './catalogue-i18n.mjs';
import {researchPhrases as kazakhstanPhrases} from './research-kazakhstan-i18n.mjs';
import {researchPhrases as europeAmericasPhrases} from './research-europe-americas-i18n.mjs';
import {researchPhrases as asiaWorldPhrases} from './research-asia-world-i18n.mjs';
import {researchPhrases as extraPhrases} from './research-extra-i18n.mjs';
import {uiPhrases} from './ui-i18n.mjs';
import {translations} from './i18n.mjs';
const escapeRE=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const maps={ru:new Map(),kk:new Map()};
const core=Object.entries(translations.en).map(([key,en])=>[en,translations.ru[key],translations.kk[key]]);
export const allCataloguePhrases=[...cataloguePhrases,...kazakhstanPhrases,...europeAmericasPhrases,...asiaWorldPhrases,...extraPhrases];
for(const [en,ru,kk]of [...allCataloguePhrases,...core,...uiPhrases]){maps.ru.set(en,ru);maps.kk.set(en,kk);}
const patterns=Object.fromEntries(Object.entries(maps).map(([lang,map])=>[lang,new RegExp(`(?<![\\p{L}\\p{N}_])(?:${[...map.keys()].sort((a,b)=>b.length-a.length).map(escapeRE).join('|')})(?![\\p{L}\\p{N}_])`,'gu')]));
export function translateText(value,lang='en'){
 const text=String(value??'');if(lang==='en'||!maps[lang])return localizeCurrencies(text,lang);
 const trimmed=text.trim();let match;
 if((match=trimmed.match(/^(\d+) route\(s\) have no confirmed deadlines in the selected (\d{4}) cycle\.$/)))return lang==='ru'?`${match[1]} маршрут(а) без подтверждённых сроков для набора ${match[2]}.`:`${match[2]} қабылдау кезеңінде ${match[1]} жолдың расталған мерзімі жоқ.`;
 if((match=trimmed.match(/^Routes awaiting (\d{4}) deadline confirmation \((\d+)\)$/)))return lang==='ru'?`Пути, ожидающие подтверждения сроков ${match[1]} (${match[2]})`:`${match[1]} мерзімдерін растауды күтетін жолдар (${match[2]})`;
 if((match=trimmed.match(/^(\d{4}) cycle dates await confirmation\.$/)))return lang==='ru'?`Даты набора ${match[1]} ожидают подтверждения.`:`${match[1]} қабылдау күндері растауды күтеді.`;
 return localizeCurrencies(text.replace(patterns[lang],key=>maps[lang].get(key)),lang);
}
// Store original strings per node/attribute so repeated rendering and language changes
// cannot translate a previously translated label twice. Values and IDs stay canonical.
const originals=new WeakMap();
function localValue(node,key,current,lang){let record=originals.get(node);if(!record){record=new Map();originals.set(node,record);}const old=record.get(key);const original=old&&old.rendered===current?old.original:current;const rendered=translateText(original,lang);record.set(key,{original,rendered});return rendered;}
export function localizeDOM(root,lang){
 root.normalize?.();
 function visit(node){
  if(node.nodeType===3){node.textContent=localValue(node,'text',node.textContent,lang);return;}
  if(node.nodeType===1){
   if(node.hasAttribute('data-no-i18n')||['SCRIPT','STYLE','CODE','PRE'].includes(node.tagName))return;
   for(const key of ['aria-label','title','placeholder','alt'])if(node.hasAttribute(key))node.setAttribute(key,localValue(node,key,node.getAttribute(key),lang));
   if(['INPUT','TEXTAREA'].includes(node.tagName))return;
  }
  for(const child of [...(node.childNodes||[])])visit(child);
 }
 visit(root);
}
export function searchAliases(route){return [...Object.values(programmeNames[route.p.id]||{}),...interests.filter(row=>matchesInterest(subjectCodesFor(route.p),row.id)).flatMap(row=>Object.values(row.labels)),...['ru','kk'].flatMap(lang=>[route.name,route.p.name,route.p.field,route.p.qualification,route.i.name,route.i.city,route.i.country].map(text=>translateText(text,lang)).concat(countryRecords.find(row=>row.code===countryCode(route.i.country))?.labels[lang]||[],subjectRecords.filter(row=>subjectCodesFor(route.p).some(code=>code.startsWith(row.code))).map(row=>row.labels[lang])))];}
export function hasTranslation(text,lang){return lang==='en'||maps[lang]?.has(text);}
