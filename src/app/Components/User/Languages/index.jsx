import { useState } from "react";
import { useTranslation } from "react-i18next";
//
import { StyledLangBtn } from "./StyledLangBtn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const LANGS = [
  {
    value: "me",
    label: "lang.montenegrian",
    icon: 'https://flagcdn.com/me.svg',
  },
  {
    value: "en",
    label: "lang.english",
    icon: 'https://flagcdn.com/gb.svg',
  },
  {
    value: "ru",
    label: "lang.russian",
    icon: 'https://flagcdn.com/ru.svg',
  },
];

export default function LangBtn({scrolled}) {
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
      scrolled={scrolled}
    >
      <span>
        <img src={activeLang?.icon} alt={LANGS[0].label} />
        <ArrowDropDownIcon />

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

