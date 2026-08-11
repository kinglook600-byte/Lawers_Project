import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { resources } from "./../i18next.config.ts";
import ru from "./app/Locales/ru/translation.json"
import en from "./app/Locales/en/translation.json"

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      ru: {
        translation: ru
      },
      en: {
        translation: en
      }
    }
  });

export default i18n;