import React from "react";
import { StyledDesktopNav } from "./StyledNavigation";
import logo from "../../../../Assets/images/logo.jpg";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import LangBtn from "../Languages";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

function DesktopNav() {
  const { t } = useTranslation();

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
    <StyledDesktopNav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        {links?.map((el) => {
          if (el?.children)
            return <Dropdown name={el.item} items={el?.children} />;
          return (
            <Typography sx={{ p: 2 }}>
              <Link to={el?.route}>{el?.item}</Link>
            </Typography>
          );
        })}
      </div>
      <LangBtn />
    </StyledDesktopNav>
  );
}

export default DesktopNav;
