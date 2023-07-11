import React from "react";
import { Link, useNavigate } from "react-router-dom";
//
import { useTranslation } from "react-i18next";
//
import logo from "../../../../Assets/images/logo2.png";
import { Typography } from "@mui/material";
import { StyledDesktopNav } from "./StyledNavigation";
import LangBtn from "../Languages";

function DesktopNav({ scrolled }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate("/home")}
          title="Logo"
        />
      </div>

      <div className="links-wrapper">
        <div className="contact-info">
          <div className="hours">
            <span>
              {t("home.find")}
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g608961-d26241397-Reviews-Private_Fishing_boat_tour-Bar_Bar_Municipality.html"
                target="_blank"
              >
                TripAdvisor
              </a>
            </span>
          </div>
          <div className="mail">
            <span className="phone">+382 67 204808</span>
            <span>info@saltmontenegro.com</span>
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
