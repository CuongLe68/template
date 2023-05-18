import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to React and react-i18next",
    },
  },
  vi: {
    translation: {
      welcome: "Xin chào react",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", //mặc định sẽ là tiếng việt
  fallbackLng: "vi", // trong trường hợp không xác đinh dược ngôn ngữ thì cho về vi
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});