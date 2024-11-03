import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import id from './locales/id.json';
import bn from './locales/bn.json';
import ms from './locales/ms.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
    bn: { translation: bn },
    ms: { translation: ms }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
