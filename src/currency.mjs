// Presentation only. Source amounts and ISO currency keys remain unchanged.
export const currencyCodes=['USD','EUR','KZT','GBP','HKD','KRW','AUD','ZAR','ARS','CAD','MYR','JPY','SGD','TRY','CNY','NZD'];
const supported=new Set(currencyCodes);
const displays=new Map();
export function currencyName(code,locale='en'){
 if(!supported.has(code))return code;
 if(code==='KZT')return {en:'tenge',ru:'тенге',kk:'теңге'}[locale]||'tenge';
 if(!displays.has(locale))displays.set(locale,new Intl.DisplayNames([locale],{type:'currency'}));
 return displays.get(locale).of(code);
}
export function currencyAmount(amount,code,locale='en'){
 if(code==='KZT')return `${new Intl.NumberFormat(locale,{maximumFractionDigits:2}).format(amount)} ${currencyName(code,locale)}`;
 return new Intl.NumberFormat(locale,{style:'currency',currency:code,currencyDisplay:'name',minimumFractionDigits:0,maximumFractionDigits:2}).format(amount);
}
const codes=currencyCodes.join('|');
const number='(?:\\d{1,3}(?:[ ,\\u00a0\\u202f]\\d{3})+(?:\\.\\d+)?|\\d+(?:\\.\\d+)?)';
const after=new RegExp(`(?<![\\p{L}\\p{N}_])(${number})\\s*(${codes})(?![\\p{L}\\p{N}_])`,'gu');
const before=new RegExp(`(?<![\\p{L}\\p{N}_])(${codes})\\s*(${number})(?![\\p{L}\\p{N}_])`,'gu');
const standalone=new RegExp(`(?<![\\p{L}\\p{N}_])(${codes})(?![\\p{L}\\p{N}_])`,'gu');
const parseAmount=value=>Number(value.replace(/[ ,\u00a0\u202f]/g,''));
export function localizeCurrencies(text,locale='en'){
 const result=String(text).replace(after,(_,amount,code)=>currencyAmount(parseAmount(amount),code,locale))
  .replace(before,(_,code,amount)=>currencyAmount(parseAmount(amount),code,locale))
  .replace(standalone,code=>currencyName(code,locale));
 return locale==='kk'?result.replaceAll('теңге-ге','теңгеге').replaceAll('Оңтүстік Корея воны-де','Оңтүстік Корея вонымен'):result;
}
