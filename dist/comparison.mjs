import {deadlineState, testState} from './logic.mjs';

// Summaries preserve the role of each test; omitted tests are never exemptions.
export function comparisonTests(route) {
  const names = {UNT: 'ЕНТ / ҰБТ / UNT', PSYCHOMETRIC: 'Psychometric assessment', PEDAGOGICAL: 'Teaching aptitude assessment'};
  const academic = Object.entries(route.tests || {})
    .filter(([key, value]) => !['ENGLISH', 'IELTS', 'TOEFL'].includes(key) && ['required', 'alternative', 'optional'].includes(value.status))
    .map(([key, value]) => ({label: names[key] || key, status: value.status}));
  const english = testState(route, 'ENGLISH');
  const labels = {
    required: 'English evidence required',
    alternative: 'English: test or approved alternative',
    optional: 'English test optional at application',
    not_required: 'No English test required',
    unknown: 'English requirement to confirm'
  };
  return [...academic, {label: labels[english] || labels.unknown, status: english, english: true}];
}

export function nearestDeadline(route, year, today = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Aqtobe', year: 'numeric', month: '2-digit', day: '2-digit'
}).format(new Date())) {
  return (route.deadlines || [])
    .filter(deadline => deadlineState(deadline, year) === 'Confirmed for selected cycle' && deadline.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0] || null;
}
