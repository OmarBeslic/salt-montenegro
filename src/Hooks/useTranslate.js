import i18next from "i18next";
import { useSelector } from "react-redux";

export default function useTranslate() {
  const translations = useSelector((state) => state.translations?.translations);
  const lang = i18next.language;

  const translate = (key) => {
    let translation = translations?.find((el) => el?.slug === key);
    return translation?.[lang] || key;
  };
  return translate;
}
