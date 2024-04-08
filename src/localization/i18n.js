import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHeader from "./locales/en/header.json";
import enHero from "./locales/en/hero.json";
import frHeader from "./locales/fr/header.json";
import frHero from "./locales/fr/hero.json";

const resources = {
  en: {
    translation: {
      header: enHeader,
      hero: enHero,
    },
  },
  fr: {
    translation: {
      header: frHeader,
      hero: frHero,
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
