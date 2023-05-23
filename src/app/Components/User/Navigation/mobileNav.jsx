import React, { useState } from "react";
import { StyledMobileNav } from "./StyledNavigation";
import logo from "../../../../Assets/images/logo2.png";
import Dropdown from "./Dropdown";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MobileNav({ scrolled }) {
  const { t } = useTranslation();

  const [navOpened, setNavOpened] = useState(false);
  const links = [
    { route: "/home", item: t("nav.home") },
    { route: "/about-us", item: t("nav.about") },
    { route: "/contact", item: t("nav.contact") },
    { route: "/blog", item: t("nav.blog") },
    { route: "/reviews", item: t("nav.reviews") },
    {
      item: t("nav.services"),
      children: [
        { route: "/tours", item: t("nav.tours") },
        { route: "/booking", item: t("nav.booking") },
        { route: "/gallery", item: t("nav.gallery") },
      ],
    },
  ];
  return (
    <StyledMobileNav>
      <div className="main-nav">
        <div className="nav">
          <img src={logo} alt="" className="logo-mobile" />
          <div
            class={`container ${navOpened ? "change" : ""}`}
            onClick={() => setNavOpened(!navOpened)}
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </div>
      <div className={`nav-opened ${navOpened ? "active" : ""}`}>
        {links?.map((el) => {
          if (el?.children)
            return (
              <Dropdown
                name={el.item}
                items={el?.children}
                scrolled={scrolled}
              />
            );
          return (
            <Typography sx={{ p: 2 }}>
              <Link to={el?.route}>{el?.item}</Link>
            </Typography>
          );
        })}
      </div>
    </StyledMobileNav>
  );
}

export default MobileNav;
