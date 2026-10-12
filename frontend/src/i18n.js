import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import ar from './locales/ar/translation.json';

const translations = { en, es, fr, ar };
const resources = Object.fromEntries(
  Object.entries(translations).map(([language, translation]) => [language, { translation }])
);
const savedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('p4-language') : null;
const initialLanguage = resources[savedLanguage] ? savedLanguage : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnNull: false
});

const updateDocumentLanguage = (language) => {
  const shortLanguage = language.split('-')[0];
  document.documentElement.lang = shortLanguage;
  document.documentElement.dir = shortLanguage === 'ar' ? 'rtl' : 'ltr';
  window.localStorage.setItem('p4-language', shortLanguage);
};

if (typeof document !== 'undefined') {
  updateDocumentLanguage(initialLanguage);
  i18n.on('languageChanged', updateDocumentLanguage);
}

export default i18n;
