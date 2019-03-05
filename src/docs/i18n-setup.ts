import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
// tslint:disable-next-line:no-var-requires
const text = require('./lang/en.properties');
export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages: {
    en: {
      message: text,
    },
  },
});

const loadedLanguages = ['en'];

function setI18nLanguage(lang: string) {
  i18n.locale = lang;
  return lang;
}
export function loadLanguageAsync(lang: string) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return new Promise((resolve) => {
        try {
          const t = require('./lang/'+lang+'.properties');
          i18n.setLocaleMessage(lang, {message: t});
          loadedLanguages.push(lang);
          setI18nLanguage(lang);
          resolve();
        } catch(err) {
          resolve();
        }
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}
