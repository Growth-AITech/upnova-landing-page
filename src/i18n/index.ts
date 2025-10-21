import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonES from './locales/es/common.json'
import homeES from './locales/es/home.json'

import commonEN from './locales/en/common.json'
import homeEN from './locales/en/home.json'

import commonFR from './locales/fr/common.json'
import homeFR from './locales/fr/home.json'

const resources = {
  es: {
    common: commonES,
    home: homeES,
  },
  en: {
    common: commonEN,
    home: homeEN,
  },
  fr: {
    common: commonFR,
    home: homeFR,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es', // Default language
    
    // Detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    // Namespace configuration
    defaultNS: 'common',
    ns: ['common', 'home'],
  })

export default i18n