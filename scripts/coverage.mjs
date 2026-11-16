import {mkdir,writeFile} from 'node:fs/promises';
import {loadCatalogue} from './catalogue.mjs';
import {interests,interestTopics} from '../src/interests.mjs';
import {subjectMatches} from '../src/subjects.mjs';
import {regions} from '../src/logic.mjs';

// An editorial snapshot, not a claim of complete destination or subject coverage.
const catalogue=await loadCatalogue();
const count=programmes=>({
  programmes:programmes.length,
  institutions:new Set(programmes.map(p=>p.institutionId)).size,
  routes:catalogue.routes.filter(r=>programmes.some(p=>p.id===r.programmeId)).length
});
const bySubject=rows=>rows.map(row=>({id:row.id,name:row.labels.en,...count(catalogue.programmes.filter(p=>subjectMatches(p,row.id)))}));
const report={
  checked:catalogue.sources.map(s=>s.checked).sort().at(-1),
  totals:Object.fromEntries(Object.entries(catalogue).filter(([,rows])=>Array.isArray(rows)).map(([key,rows])=>[key,rows.length])),
  // Exclusive editorial regions keep Kazakhstan separate from the Asia total.
  regions:regions.map(region=>({name:region,...count(catalogue.programmes.filter(p=>catalogue.institutions.find(i=>i.id===p.institutionId)?.region===region))})),
  interests:bySubject(interests),
  topics:bySubject(interestTopics)
};
await mkdir('work',{recursive:true});
await writeFile('work/coverage-report.json',JSON.stringify(report,null,2)+'\n');
console.table(report.interests);
console.log('Detailed region/topic counts: work/coverage-report.json. Subject counts overlap.');
