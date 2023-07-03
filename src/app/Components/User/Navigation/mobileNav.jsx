import React, { useState } from "react";
import { StyledMobileNav } from "./StyledNavigation";
import logo from "../../../../Assets/images/logo2.png";
import Dropdown from "./Dropdown";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangBtn from "../Languages";

function MobileNav({ scrolled }) {
  const { t } = useTranslation();

  const [navOpened, setNavOpened] = useState(false);
  const links = [
    { route: "/home", item: t("nav.home") },
    { route: "/tours", item: t("nav.tours") },
    { route: "/blog", item: t("nav.blog") },
    { route: "/gallery", item: t("nav.gallery") },
    { route: "/about-us", item: t("nav.about") },
    { route: "/testimonials", item: t("nav.testimonials") },

    
  ];
  return (
    <StyledMobileNav>
      <div className="main-nav">
        <div className="nav">
          <img src={logo} alt="" className="logo-mobile" />
          <div className="lang-nav">
            <LangBtn scrolled={scrolled} />
            <div
              className={`container ${navOpened ? "change" : ""}`}
              onClick={() => setNavOpened(!navOpened)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="div"></div>
      <div className={`nav-opened ${navOpened ? "active" : ""}`}>
        {links?.map((el) => {
          return (
            <Typography sx={{ p: 2 }} key={el?.item}>
              <Link to={el?.route} onClick={() => setNavOpened(false)}>
                {el?.item}
              </Link>
            </Typography>
          );
        })}
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;
