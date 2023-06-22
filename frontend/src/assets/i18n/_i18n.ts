import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vietnamese from "./vi.json"
import english from "./en.json"

const resources = {
  vi: vietnamese,
  en: english
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", //mặc định sẽ là tiếng việt
  fallbackLng: "vi", // trong trường hợp không xác đinh dược ngôn ngữ thì cho về vi
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
