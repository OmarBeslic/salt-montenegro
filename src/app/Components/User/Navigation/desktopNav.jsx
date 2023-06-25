import React from "react";
import { StyledDesktopNav } from "./StyledNavigation";
import logo from "../../../../Assets/images/logo2.png";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import LangBtn from "../Languages";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

function DesktopNav({ scrolled }) {
  const { t } = useTranslation();

  const links = [
    { route: "/home", item: t("nav.home") },
    { route: "/tours", item: t("nav.tours") },
    { route: "/blog", item: t("nav.blog") },
    { route: "/gallery", item: t("nav.gallery") },
    { route: "/about-us", item: t("nav.about") },
  ];
  return (
    <StyledDesktopNav scrolled={scrolled}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="links-wrapper">
        <div className="contact-info">
          <div className="hours">
            <span>Mon – Sun: 9.00 am – 8.00pm</span>
          </div>
          <div className="mail">
            <span className="phone">+382 69 789 465</span>
            <span>info@salt-montenegro.com</span>
          </div>
        </div>
        <div className="links">
          <div className="nav-links">
            {links?.map((el) => {
              return (
                <Typography sx={{ p: 2 }} key={el?.item}>
                  <Link to={el?.route}>{el?.item}</Link>
                </Typography>
              );
            })}
          </div>

          <div className="lang-contact">
            <Typography sx={{ p: 2 }}>
              <Link to={"/testimonials"}>{t("nav.testimonials")}</Link>
            </Typography>
            <LangBtn scrolled={scrolled} />
          </div>
        </div>
      </div>
    </StyledDesktopNav>
  );
}

export default DesktopNav;
