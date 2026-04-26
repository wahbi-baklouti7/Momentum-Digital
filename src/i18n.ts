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

const USER_PREF_KEY = 'momentum_user_pref';

const detectLanguageByCountry = async () => {
  try {
    // 1. Priority: User explicitly selected a language
    const manualPref = localStorage.getItem(USER_PREF_KEY);
    if (manualPref && ['en', 'it', 'de'].includes(manualPref)) {
      return manualPref;
    }

    // 2. Secondary: Detect by IP (Geo-location)
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('IP detection failed');
    
    const data = await response.json();
    const country = data.country_code;


    if (country === 'IT') return 'it';
    if (['DE', 'NL', 'AT', 'CH'].includes(country)) return 'de';
    
    return 'en';
  } catch (error) {
    console.error('Error detecting country:', error);
    return null; // Return null to allow fallback to browser language
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
      // We still use the standard detector for initial render
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// Apply IP-based detection only if the user hasn't made a manual choice yet
detectLanguageByCountry().then((detectedLang) => {
  const hasManualPref = localStorage.getItem(USER_PREF_KEY);
  
  if (!hasManualPref && detectedLang) {
    i18n.changeLanguage(detectedLang);
  }
});

export default i18n;
