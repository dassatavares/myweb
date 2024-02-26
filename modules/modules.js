// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello',
          // ... other English translations
        },
      },
      pt: {
        translation: {
          greeting: 'Olá',
          // ... other Portuguese translations
        },
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;