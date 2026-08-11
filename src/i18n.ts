import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { resources } from "./../i18next.config.ts";
import ru from "./app/Locales/ru/translation.json"
import en from "./app/Locales/en/translation.json"
import tg from "./app/Locales/tg/translation.json"


i18n
  .use(initReactI18next)
  .init({
     lng: "ru",
     resources: {
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
      tg: {
        translation: tg,
      }
     }
    // interpolation: {
    //   escapeValue: false,
    // },
  });

export default i18n;