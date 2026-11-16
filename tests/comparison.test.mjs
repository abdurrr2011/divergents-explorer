import test from 'node:test';
import assert from 'node:assert/strict';
import {loadCatalogue} from '../scripts/catalogue.mjs';
import {enrich} from '../src/logic.mjs';
import {comparisonTests,nearestDeadline} from '../src/comparison.mjs';
const routes=enrich(await loadCatalogue()),find=id=>routes.find(r=>r.id===id);

test('compact tests preserve NUET, regular GPA admission, SAT/ACT alternatives and English requirements',()=>{
 const nuet=comparisonTests(find('nu-cs-nuet'));
 assert.ok(nuet.some(x=>x.label==='NUET'&&x.status==='required'));
 assert.ok(nuet.some(x=>x.english&&x.status==='required'));
 assert.ok(!nuet.some(x=>x.label==='SAT'));
 assert.ok(!comparisonTests(find('nu-cs-gpa')).some(x=>x.label==='NUET'));
 const sat=comparisonTests(find('nu-cs-sat'));
 for(const label of ['SAT','ACT'])assert.ok(sat.some(x=>x.label===label&&x.status==='alternative'));
});
test('compact English summaries never turn unknowns or conditional alternatives into exemptions',()=>{
 for(const status of ['required','alternative','optional','not_required','unknown']){
  const row=comparisonTests({tests:{ENGLISH:{status}}}).find(x=>x.english);
  assert.equal(row.status,status);
  assert.equal(row.label==='No English test required',status==='not_required');
 }
 assert.equal(comparisonTests({tests:{}}).at(-1).status,'unknown');
 assert.equal(comparisonTests(find('route-aalto-data-science')).at(-1).status,'not_required');
});
test('nearest deadline keeps type and selected intake, excludes old, past and unpublished dates',()=>{
 const route={deadlines:[
  {date:'2026-12-01',cycle:'2026',status:'confirmed',type:'admission'},
  {date:'2026-11-01',cycle:'2027',status:'confirmed',type:'admission'},
  {date:'2026-11-17',cycle:'2027',status:'historical',type:'test'},
  {date:null,cycle:'2027',status:'awaiting_publication',type:'test'},
  {date:'2026-12-11',cycle:'2027/28',status:'confirmed',type:'funding'},
  {date:'2026-12-08',cycle:'2027/28',status:'confirmed',type:'document'}
 ]};
 const original=JSON.stringify(route);
 assert.equal(nearestDeadline(route,2027,'2026-11-16').date,'2026-12-08');
 assert.equal(nearestDeadline(route,2027,'2026-11-16').type,'document');
 assert.equal(nearestDeadline(route,2029,'2026-11-16'),null);
 assert.equal(nearestDeadline(route,2027,'2027-01-01'),null);
 assert.equal(JSON.stringify(route),original);
});
test('real NUET summary leads with English document deadline and never rolls it forward',()=>{
 const route=find('nu-cs-nuet');
 assert.equal(nearestDeadline(route,2027,'2026-11-16').id,'nu-nuet-english');
 assert.equal(nearestDeadline(route,2027,'2026-12-09').id,'nu-nuet-fund');
 assert.equal(nearestDeadline(route,2029,'2026-11-16'),null);
});
