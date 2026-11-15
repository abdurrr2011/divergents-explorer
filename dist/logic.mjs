import {currencyAmount} from './currency.mjs';
export const regions=['Kazakhstan','North America','Europe','Asia','Latin America','Africa','Oceania'];
export const fields=['Technology','Engineering','Business & economics','Health & life sciences','Arts & design','Social sciences','General preparation'];
export const coverageLabels={full_scholarship:'Full scholarship · tuition + living support',tuition_limited_support:'Full tuition + limited support',tuition_only:'Full tuition only',partial:'Partial award',conditional:'Conditional aid'};
export const testLabels={required:'Required',alternative:'One accepted route',optional:'Optional',not_required:'Explicitly not required',unknown:'Awaiting verification'};
export function testState(r,key){return r.tests?.[key]?.status||'unknown';}
export function noEnglish(r){return testState(r,'ENGLISH')==='not_required';}
export function noSAT(r){return ['not_required','optional'].includes(testState(r,'SAT'));}
export function money(t,locale='en'){
 const labels={en:{unknown:'Price to confirm',year:'year',programme:'programme',credit:'credit',unknownPeriod:'period to confirm'},ru:{unknown:'Стоимость уточняется',year:'год',programme:'программу',credit:'кредит',unknownPeriod:'период уточняется'},kk:{unknown:'Бағасы нақтыланады',year:'жыл',programme:'бағдарлама',credit:'кредит',unknownPeriod:'кезеңі нақтыланады'}}[locale];
 if(t?.amount==null)return labels.unknown;
 return `${currencyAmount(t.amount,t.currency,locale)} / ${labels[t.period]||labels.unknownPeriod}`;
}
export function enrich(d){return d.routes.map(r=>({...r,p:d.programmes.find(p=>p.id===r.programmeId),i:d.institutions.find(i=>i.id===d.programmes.find(p=>p.id===r.programmeId)?.institutionId),awards:d.awards.filter(a=>a.routeIds.includes(r.id)),deadlines:d.deadlines.filter(a=>a.routeIds.includes(r.id))}));}
export function filterRoutes(routes,f={}){
 const query=(f.q||'').toLocaleLowerCase().normalize('NFKC').replace(/ұбт|ент|unt/g,'unt');
 return routes.filter(r=>{
 const search=[r.name,r.p.name,r.p.field,r.i.name,r.i.city,r.i.country,...(r.i.aliases||[]),...(r.searchAliases||[]),...Object.keys(r.tests||{}).filter(k=>testState(r,k)!=='unknown')].join(' ').toLocaleLowerCase().normalize('NFKC').replace(/ұбт|ент|unt/g,'unt');
 if(query&&!query.split(/\s+/).every(q=>search.includes(q)))return false;
 if(f.stage&&r.entryAfter!==+f.stage)return false;
 if(f.region&&r.i.region!==f.region)return false;
 if(f.country&&r.i.country!==f.country)return false;
 if(f.fields?.length&&!f.fields.includes(r.p.field))return false;
 if(f.qualification&&r.p.qualification!==f.qualification)return false;
 if(f.pathway&&r.pathway!==f.pathway)return false;
 if(f.language&&!r.p.languages.includes(f.language))return false;
 if(f.cycle&&r.cycle!==f.cycle)return false;
 if(f.funding&&!r.awards.some(a=>a.coverage===f.funding))return false;
 if(f.currency&&r.tuition.currency!==f.currency&&!(f.costUnknown&&r.tuition.currency==null&&r.tuition.amount==null))return false;
 if(f.max!==' '&&f.max!=null&&f.max!==''){
 if(r.tuition.amount==null){if(!f.costUnknown)return false;}
 else if(r.tuition.period!=='year'||!f.currency||r.tuition.currency!==f.currency||r.tuition.amount>+f.max)return false;
 }
 if(f.noSAT&&!noSAT(r)&&!(f.testUnknown&&testState(r,'SAT')==='unknown'))return false;
 if(f.noEnglish&&!noEnglish(r))return false;
 if(f.test){const status=testState(r,f.test);if(f.testRole?status!==f.testRole:!['required','alternative','optional'].includes(status)){if(!(f.testUnknown&&status==='unknown'))return false;}}
 if(f.deadline&&!r.deadlines.some(d=>d.date&&d.date<=f.deadline&&String(d.cycle).startsWith(String(f.year))&&d.status!=='historical'))return false;
 return true;
 });
}
export function deadlineState(d,year){if(d.status==='awaiting_publication'||!d.date)return 'Awaiting publication';if(!String(d.cycle).startsWith(String(year)))return 'Historical reference · different cycle';if(d.status==='historical')return 'Historical reference';return 'Confirmed for selected cycle';}
export function addComparison(ids,id){if(ids.includes(id))return ids.filter(x=>x!==id);return ids.length<3?[...ids,id]:ids;}
export function safeStored(storage,key,fallback){try{return JSON.parse(storage.getItem(key))??fallback;}catch{return fallback;}}
export function safeSave(storage,key,value){try{storage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
