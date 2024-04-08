import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAbout from "./locales/en/about.json";
import enCta from "./locales/en/cta.json";
import enExample from "./locales/en/example.json";
import enHeader from "./locales/en/header.json";
import enHero from "./locales/en/hero.json";
import enMilestones from "./locales/en/milestones.json";
import enServices from "./locales/en/services.json";
import frAbout from "./locales/fr/about.json";
import frCta from "./locales/fr/cta.json";
import frExample from "./locales/fr/example.json";
import frHeader from "./locales/fr/header.json";
import frHero from "./locales/fr/hero.json";
import frMilestones from "./locales/fr/milestones.json";
import frServices from "./locales/fr/services.json";

const resources = {
  en: {
    translation: {
      header: enHeader,
      hero: enHero,
      about: enAbout,
      example: enExample,
      services: enServices,
      cta: enCta,
      milestones: enMilestones,
    },
  },
  fr: {
    translation: {
      header: frHeader,
      hero: frHero,
      about: frAbout,
      example: frExample,
      services: frServices,
      cta: frCta,
      milestones: frMilestones,
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
