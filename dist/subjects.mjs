import {subjectRecords} from './subject-data.mjs';
export {subjectRecords};
// Editorial discovery tags; not an institution's formal classification or entry guarantee.
// Broad tags deliberately stay broad for preparatory/multi-major degrees.
export const programmeSubjects={
 'prog-berea-cs':['0613'],'prog-berea-bio':['0511'],'prog-berea-art':['0213'],
 'prog-smc-cs':['0613'],'prog-smc-business':['0413'],'prog-smc-psychology':['0313'],
 'prog-aalto-data-science':['0613','0542'],'prog-aalto-chemical':['0711'],
 'prog-aalto-economics':['0311'],'prog-aalto-design':['0211','0212'],
 'prog-sheffield-foundation-business':['00','03','04'],
 'prog-sheffield-foundation-science':['00','05','07'],
 'aw-p-kaist-cs':['0613'],'aw-p-kaist-ee':['0714'],'aw-p-kaist-mse':['0722'],
 'aw-p-kaist-bio':['0511'],'aw-p-hkust-bibu':['0512','0413'],
 'aw-p-hkust-maec':['0541','0311'],'aw-p-hkust-dsct':['0613','0542'],
 'aw-p-melb-science':['05'],'aw-p-melb-commerce':['041'],
 'aw-p-uct-it':['0613','03'],'aw-p-uct-bas':['0731'],'aw-p-uba-design':['0211'],
 'kz-aitu-college-software':['0613'],'kz-aitu-college-database':['0612'],
 'kz-uk-software':['0613'],'kz-uk-renewables':['0713'],'kz-uk-mechatronics':['0714'],
 'kz-aitu-se':['0613'],'kz-aitu-im':['0413'],'kz-aitu-ee':['0714'],
 'nu-bsc-cs':['0613'],'nu-foundation':['00']
};
export function subjectCodesFor(programme){return programme.subjectCodes||programmeSubjects[programme.id]||[];}
export function subjectMatches(programme,selected){
 if(!/^\d{2,4}$/.test(selected))return programme.field===selected;
 return subjectCodesFor(programme).some(code=>code.startsWith(selected));
}
export function subjectLabel(code,lang='en'){return subjectRecords.find(row=>row.code===code)?.labels[lang]||String(code);}
export function subjectGroups(){return subjectRecords.filter(row=>row.code.length===2).map(row=>({...row,children:subjectRecords.filter(child=>child.code.length>2&&child.code.startsWith(row.code))}));}
