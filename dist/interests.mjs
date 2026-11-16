import {interestTopics} from './interest-topics.mjs';
export {interestTopics};
export const interests = [
  {
    "id": "it",
    "prefixes": [
      "06"
    ],
    "labels": {
      "en": "Computer Science and IT",
      "ru": "Информатика и IT",
      "kk": "Информатика және IT"
    },
    "descriptions": {
      "en": "Programming, apps, data and artificial intelligence.",
      "ru": "Программирование, приложения, данные и искусственный интеллект.",
      "kk": "Бағдарламалау, қосымшалар, деректер және жасанды интеллект."
    }
  },
  {
    "id": "engineering",
    "prefixes": [
      "07"
    ],
    "exclude": [
      "0731"
    ],
    "labels": {
      "en": "Engineering",
      "ru": "Инженерия и техника",
      "kk": "Инженерия және техника"
    },
    "descriptions": {
      "en": "Design machines, electronics, energy systems and buildings.",
      "ru": "Проектирование техники, электроника, энергетика и строительство.",
      "kk": "Техника жобалау, электроника, энергетика және құрылыс."
    }
  },
  {
    "id": "business",
    "prefixes": [
      "041",
      "0311"
    ],
    "labels": {
      "en": "Business and Economics",
      "ru": "Бизнес и экономика",
      "kk": "Бизнес және экономика"
    },
    "descriptions": {
      "en": "How companies, money, markets and management work.",
      "ru": "Как работают компании, деньги, рынки и управление.",
      "kk": "Компаниялар, ақша, нарықтар және басқару қалай жұмыс істейді."
    }
  },
  {
    "id": "health",
    "prefixes": [
      "09",
      "051"
    ],
    "labels": {
      "en": "Medicine and Biology",
      "ru": "Медицина и биология",
      "kk": "Медицина және биология"
    },
    "descriptions": {
      "en": "Human health, living organisms, medicines and care.",
      "ru": "Здоровье человека, живые организмы, лекарства и помощь людям.",
      "kk": "Адам денсаулығы, тірі ағзалар, дәрі-дәрмек және адамдарға көмек."
    }
  },
  {
    "id": "creative",
    "prefixes": [
      "021",
      "0321",
      "0731"
    ],
    "labels": {
      "en": "Arts and Design",
      "ru": "Искусство и дизайн",
      "kk": "Өнер және дизайн"
    },
    "descriptions": {
      "en": "Drawing, architecture, music, film and journalism.",
      "ru": "Рисунок, архитектура, музыка, кино и журналистика.",
      "kk": "Сурет, сәулет, музыка, кино және журналистика."
    }
  },
  {
    "id": "society",
    "prefixes": [
      "03",
      "022",
      "042"
    ],
    "exclude": [
      "0311",
      "0321"
    ],
    "labels": {
      "en": "Society and Law",
      "ru": "Общество и право",
      "kk": "Қоғам және құқық"
    },
    "descriptions": {
      "en": "Psychology, history, politics, society and the law.",
      "ru": "Психология, история, политика, общество и законы.",
      "kk": "Психология, тарих, саясат, қоғам және заңдар."
    }
  },
  {
    "id": "education",
    "prefixes": [
      "01",
      "023"
    ],
    "labels": {
      "en": "Teaching and Languages",
      "ru": "Педагогика и языки",
      "kk": "Педагогика және тілдер"
    },
    "descriptions": {
      "en": "Teaching others, learning languages and translation.",
      "ru": "Преподавание, изучение языков и перевод.",
      "kk": "Сабақ беру, тіл үйрену және аударма."
    }
  },
  {
    "id": "science",
    "prefixes": [
      "05"
    ],
    "exclude": [
      "051",
      "052"
    ],
    "labels": {
      "en": "Natural Sciences and Mathematics",
      "ru": "Наука и математика",
      "kk": "Ғылым және математика"
    },
    "descriptions": {
      "en": "Physics, chemistry, mathematics, statistics and research.",
      "ru": "Физика, химия, математика, статистика и исследования.",
      "kk": "Физика, химия, математика, статистика және зерттеу."
    }
  },
  {
    "id": "nature",
    "prefixes": [
      "08",
      "052"
    ],
    "labels": {
      "en": "Environment and Nature",
      "ru": "Экология и природа",
      "kk": "Экология және табиғат"
    },
    "descriptions": {
      "en": "Ecology, conservation, agriculture and veterinary care.",
      "ru": "Экология, охрана природы, сельское хозяйство и ветеринария.",
      "kk": "Экология, табиғатты қорғау, ауыл шаруашылығы және ветеринария."
    }
  },
  {
    "id": "services",
    "prefixes": [
      "101",
      "102"
    ],
    "labels": {
      "en": "Tourism and Hospitality",
      "ru": "Туризм и гостиничный бизнес",
      "kk": "Туризм және қонақүй бизнесі"
    },
    "descriptions": {
      "en": "Hotels, travel, food service, sport and everyday services.",
      "ru": "Гостиницы, путешествия, питание, спорт и бытовые услуги.",
      "kk": "Қонақүйлер, саяхат, тамақтандыру, спорт және тұрмыстық қызметтер."
    }
  },
  {
    "id": "transport",
    "prefixes": [
      "103",
      "104"
    ],
    "labels": {
      "en": "Transport and Safety",
      "ru": "Транспорт и безопасность",
      "kk": "Көлік және қауіпсіздік"
    },
    "descriptions": {
      "en": "Transport, aviation, navigation, public safety and defence.",
      "ru": "Транспорт, авиация, навигация, безопасность людей и оборона.",
      "kk": "Көлік, авиация, навигация, адамдардың қауіпсіздігі және қорғаныс."
    }
  },
  {
    "id": "preparation",
    "prefixes": [
      "00"
    ],
    "labels": {
      "en": "University Preparation",
      "ru": "Подготовка к поступлению",
      "kk": "Оқуға түсуге дайындық"
    },
    "descriptions": {
      "en": "An extra preparatory stage: language, maths and study skills.",
      "ru": "Дополнительный подготовительный этап: язык, математика и учебные навыки.",
      "kk": "Қосымша дайындық кезеңі: тіл, математика және оқу дағдылары."
    }
  }
];
export function interestById(id){return interests.find(row=>row.id===id)||interestTopics.find(row=>row.id===id);}
export function matchesInterest(codes,id,programmeId){const interest=interestById(id);if(!interest)return false;if(interest.programmeIds)return interest.programmeIds.includes(programmeId);return codes.some(code=>interest.prefixes.some(prefix=>code.startsWith(prefix))&&!(interest.exclude||[]).some(prefix=>code.startsWith(prefix)));}
export function interestDescription(id,lang='en'){return interestById(id)?.descriptions[lang]||'';}
export function catalogueSummary(routes,lang='en'){
 const count=new Set(routes.map(r=>r.i.id)).size,total=routes.length;
 if(lang==='kk')return `${count} оқу орны · ${total} нұсқа`;
 if(lang==='ru'){const rule=new Intl.PluralRules('ru');const noun=(n,one,few,many)=>({one,few,many,other:many})[rule.select(n)];return `${count} ${noun(count,'учебное заведение','учебных заведения','учебных заведений')} · ${total} ${noun(total,'вариант','варианта','вариантов')}`;}
 return `${count} ${count===1?'institution':'institutions'} · ${total} ${total===1?'option':'options'}`;
}
