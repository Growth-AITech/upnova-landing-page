import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonES from './locales/es/common.json'
import homeES from './locales/es/home.json'
import valuePropositionES from './locales/es/valueProposition.json'
import realEstateES from './locales/es/realEstate.json'

import commonEN from './locales/en/common.json'
import homeEN from './locales/en/home.json'
import valuePropositionEN from './locales/en/valueProposition.json'
import realEstateEN from './locales/en/realEstate.json'

import commonFR from './locales/fr/common.json'
import homeFR from './locales/fr/home.json'
import valuePropositionFR from './locales/fr/valueProposition.json'
import realEstateFR from './locales/fr/realEstate.json'

const resources = {
  es: {
    common: commonES,
    home: homeES,
    valueProposition: valuePropositionES,
    realEstate: realEstateES,
  },
  en: {
    common: commonEN,
    home: homeEN,
    valueProposition: valuePropositionEN,
    realEstate: realEstateEN,
  },
  fr: {
    common: commonFR,
    home: homeFR,
    valueProposition: valuePropositionFR,
    realEstate: realEstateFR,
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
    ns: ['common', 'home', 'valueProposition', 'realEstate'],
  })

export default i18n