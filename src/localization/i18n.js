import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAbout from "./locales/en/about.json";
import enCalculator from "./locales/en/calculator.json";
import enComparegorilla from "./locales/en/comparegorilla.json";
import enContact from "./locales/en/contact.json";
import enCta from "./locales/en/cta.json";
import enExample from "./locales/en/example.json";
import enHeader from "./locales/en/header.json";
import enHero from "./locales/en/hero.json";
import enMembers from "./locales/en/members.json";
import enMilestones from "./locales/en/milestones.json";
import enMission from "./locales/en/mission.json";
import enPricing from "./locales/en/pricing.json";
import enProvides from "./locales/en/provides.json";
import enReferact from "./locales/en/referact.json";
import enServices from "./locales/en/services.json";
import enTrial from "./locales/en/trial.json";
import frAbout from "./locales/fr/about.json";
import frCalculator from "./locales/fr/calculator.json";
import frComparegorilla from "./locales/fr/comparegorilla.json";
import frContact from "./locales/fr/contact.json";
import frCta from "./locales/fr/cta.json";
import frExample from "./locales/fr/example.json";
import frHeader from "./locales/fr/header.json";
import frHero from "./locales/fr/hero.json";
import frMembers from "./locales/fr/members.json";
import frMilestones from "./locales/fr/milestones.json";
import frMission from "./locales/fr/mission.json";
import frPricing from "./locales/fr/pricing.json";
import frProvides from "./locales/fr/provides.json";
import frReferact from "./locales/fr/referact.json";
import frServices from "./locales/fr/services.json";
import frTrial from "./locales/fr/trial.json";

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
      trial: enTrial,
      comparegorilla: enComparegorilla,
      referact: enReferact,
      calculator: enCalculator,
      pricing: enPricing,
      mission: enMission,
      members: enMembers,
      contact: enContact,
      provides: enProvides,
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
      trial: frTrial,
      comparegorilla: frComparegorilla,
      referact: frReferact,
      calculator: frCalculator,
      pricing: frPricing,
      mission: frMission,
      members: frMembers,
      contact: frContact,
      provides: frProvides,
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
