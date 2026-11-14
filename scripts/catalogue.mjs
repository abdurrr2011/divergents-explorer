import {readFile,readdir} from 'node:fs/promises';
export const keys=['institutions','programmes','routes','awards','deadlines','sources'];
export async function loadCatalogue(){const d=Object.fromEntries(keys.map(k=>[k,[]]));for(const file of (await readdir('data')).filter(f=>f.endsWith('.json')&&!f.startsWith('template'))){const batch=JSON.parse(await readFile(`data/${file}`,'utf8'));for(const key of keys)d[key].push(...(batch[key]||[]));}return d;}
