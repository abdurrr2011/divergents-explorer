import {mkdir,copyFile,readFile,writeFile,readdir} from 'node:fs/promises';
const keys=['institutions','programmes','routes','awards','deadlines','sources'];
const data=Object.fromEntries(keys.map(k=>[k,[]]));
for(const file of (await readdir('data')).filter(f=>f.endsWith('.json')&&!f.startsWith('template'))){
 const batch=JSON.parse(await readFile(`data/${file}`,'utf8'));
 for(const key of keys)data[key].push(...(batch[key]||[]));
}
data.meta={schemaVersion:1,checked:data.sources.map(s=>s.checked).sort().at(-1)||null,description:'Official-source catalogue. Source checks do not establish every applicant’s eligibility.'};
await mkdir('dist',{recursive:true});
for(const file of await readdir('src'))await copyFile(`src/${file}`,`dist/${file}`);
await writeFile('dist/catalogue.json',JSON.stringify(data,null,2));
console.log(`Built ${data.routes.length} routes / ${data.programmes.length} programmes.`);
