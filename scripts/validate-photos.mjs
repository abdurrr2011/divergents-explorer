import {readFile,stat,mkdir,writeFile} from 'node:fs/promises';
import {loadCatalogue} from './catalogue.mjs';
import {photoRecords} from '../src/campus-photos.mjs';
const catalogue=await loadCatalogue(),errors=[],warnings=[];
const ids=new Set(),institutions=new Set(catalogue.institutions.map(i=>i.id));
let totalBytes=0;
const check=(ok,message)=>{if(!ok)errors.push(message);};
for(const photo of photoRecords){
 const id=photo.institutionId;
 check(institutions.has(id),`${id}: unknown institution`);
 check(!ids.has(id),`${id}: duplicate photo`);ids.add(id);
 check(/^media\/campuses\/[a-z0-9-]+\.(?:jpg|png|webp)$/.test(photo.src),`${id}: unsafe photo path`);
 for(const key of ['sourcePage','imageUrl'])check(/^https:\/\//.test(photo[key]||''),`${id}: missing HTTPS ${key}`);
 for(const key of ['credit','license','checked'])check(typeof photo[key]==='string'&&!!photo[key],`${id}: missing ${key}`);
 check(/^\d{4}-\d{2}-\d{2}$/.test(photo.checked||'')&&!Number.isNaN(Date.parse(photo.checked)),`${id}: invalid checked date`);
 check(photo.licenseUrl==null||/^https:\/\//.test(photo.licenseUrl),`${id}: invalid licence link`);
 check(/^\d{1,3}% \d{1,3}%$/.test(photo.position||'50% 50%'),`${id}: invalid crop position`);
 for(const key of ['caption','alt'])for(const lang of ['en','ru','kk']){
  check(!!photo[key]?.[lang],`${id}: missing ${lang} ${key}`);
  if(lang!=='en')check(/\p{Script=Cyrillic}/u.test(photo[key]?.[lang]||''),`${id}: untranslated ${lang} ${key}`);
 }
 check(Number.isInteger(photo.width)&&photo.width>=480&&Number.isInteger(photo.height)&&photo.height>=240,`${id}: image too small or missing dimensions`);
 try{
  const path=`public/${photo.src}`,info=await stat(path),data=await readFile(path);
  check(info.isFile()&&info.size>1024,`${id}: empty photo`);
  check(info.size===photo.bytes,`${id}: byte metadata mismatch`);
  check(data.subarray(0,3).equals(Buffer.from([0xff,0xd8,0xff]))||data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))||(data.subarray(0,4).toString()==='RIFF'&&data.subarray(8,12).toString()==='WEBP'),`${id}: not a supported raster image`);
  check(info.size<=1500000,`${id}: image exceeds 1.5 MB`);
  if(info.size>350000)warnings.push(`${id}: image exceeds target 350 KB`);
  totalBytes+=info.size;
 }catch{errors.push(`${id}: photo file missing`);}
 if(!/^(CC(?:0|[ -])|Public domain|PD\b)/i.test(photo.license))warnings.push(`${id}: reuse terms need review before wider rollout (${photo.license})`);
}
for(const id of institutions)check(ids.has(id),`${id}: campus photo missing`);
const report={checked:new Date().toISOString().slice(0,10),institutions:institutions.size,photos:photoRecords.length,totalBytes,errors,warnings};
await mkdir('work',{recursive:true});await writeFile('work/photo-validation-report.json',JSON.stringify(report,null,2)+'\n');
console.log(`${photoRecords.length}/${institutions.size} institution photos; ${errors.length} errors; ${warnings.length} review notes; ${(totalBytes/1000000).toFixed(2)} MB total.`);
for(const error of errors)console.error(error);
process.exitCode=errors.length?1:0;
