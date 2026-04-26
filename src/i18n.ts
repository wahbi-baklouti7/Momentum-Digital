import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import itTranslation from './locales/it/translation.json';
import deTranslation from './locales/de/translation.json';

const resources = {
  en: { translation: enTranslation },
  it: { translation: itTranslation },
  de: { translation: deTranslation },
};

const detectLanguageByCountry = async () => {
  try {
    // Check if we already have a saved language preference
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && ['en', 'it', 'de'].includes(savedLang)) {
      return savedLang;
    }

    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const country = data.country_code;

    if (country === 'IT') return 'it';
    if (['DE', 'NL', 'AT'].includes(country)) return 'de';
    
    return 'en';
  } catch (error) {
    console.error('Error detecting country:', error);
    return 'en';
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Apply automatic detection if no preference is set
detectLanguageByCountry().then((lang) => {
  if (!localStorage.getItem('i18nextLng')) {
    i18n.changeLanguage(lang);
  }
});

export default i18n;
