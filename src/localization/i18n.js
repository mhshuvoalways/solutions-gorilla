import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHeader from "./locales/en/header.json";
import frHeader from "./locales/fr/header.json";

const resources = {
  en: {
    translation: {
      header: enHeader,
    },
  },
  fr: {
    translation: {
      header: frHeader,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
