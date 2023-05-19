import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: {
        "btn-next-page": "Next page",
        "btn-previous-page": "Previous",
        "loading-data": "Loading data...",
        "create-page": "Create page",
      },
    },
  },
  vi: {
    translation: {
      home: {
        "btn-next-page": "Trang sau",
        "btn-previous-page": "Trang trước",
        "loading-data": "Đang tải dữ liệu...",
        "create-page": "Tạo trang",
      },
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
