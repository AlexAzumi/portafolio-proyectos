import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Locals
import es from './locals/es';
import en from './locals/en';

// Instanciate i18n
i18n.use(initReactI18next).init({
  resources: { es: { translation: { ...es } }, en: { translation: { ...en } } },
  lng: 'es',
  fallbackLng: 'en',
});

export default i18n;
