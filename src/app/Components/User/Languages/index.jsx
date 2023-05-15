import { useState } from "react";
import { useTranslation } from "react-i18next";
//
import EN from "../../../../Assets/images/eng.png";
import RU from "../../../../Assets/images/ru.png";
import MNE from "../../../../Assets/images/mne.png";
//
import { StyledLangBtn } from "./StyledLangBtn";

const LANGS = [
  {
    value: "me",
    label: "lang.montenegrian",
    icon: MNE,
  },
  {
    value: "en",
    label: "lang.english",
    icon: EN,
  },
  {
    value: "ru",
    label: "lang.russian",
    icon: RU,
  },
];

export default function LangBtn() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const activeLang =
    LANGS[i18n.language === "en" ? 1 : i18n.language === "me" ? 0 : 2];

  const openLang = (code) => {
    console.log(code, "koddd");
    i18n.changeLanguage(code);
    setOpen(!open);
  };

  return (
    <StyledLangBtn
      className={`language-btn ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span>
        <img src={activeLang?.icon} alt={LANGS[0].label} />
      </span>
      <ul>
        {LANGS?.map((lang, idx) => {
          return (
            <li
              onClick={() => openLang(lang?.value)}
              key={`lang-${lang?.value}`}
              className={i18n.language === lang?.value ? "active" : ""}
            >
              <img src={lang?.icon} alt="" />
              {t(lang?.label)}
            </li>
          );
        })}
      </ul>
    </StyledLangBtn>
  );
  
}
