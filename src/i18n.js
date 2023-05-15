import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//
import { transEN } from "./Assets/translations/en";
import { transME } from "./Assets/translations/me";
import { transRU } from "./Assets/translations/ru";

i18n.use(initReactI18next).init({
    resources:{
        en: { translation: transEN },
        ru: { translation: transRU },
        me: { translation: transME }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
});

export default i18n;