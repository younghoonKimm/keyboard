import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langEn from "@lang/lang.en.json";
import langKr from "@lang/lang.ko.json";

export const languages = ["en", "ko"] as const;

const resources = {
  en: {
    translations: langEn,
  },
  ko: {
    translations: langKr,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  // 초기 설정 언어
  lng: "ko",
  fallbackLng: "ko",
  debug: true,
  defaultNS: "translations",
  ns: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
