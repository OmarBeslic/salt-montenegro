import React from "react";
import { StyledFooter } from "./StyledFooter.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../../../Assets/images/logo2.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Gallery from "../../../Pages/Web/Home/Gallery/index.jsx";
function Footer() {
  const { t } = useTranslation();

  const links = [
    { route: "/home", item: t("nav.home") },
    { route: "/about-us", item: t("nav.about") },
    { route: "/blog", item: t("nav.blog") },
    { route: "/testimonials", item: t("nav.testimonials") },
    { route: "/tours", item: t("nav.tours") },
    { route: "/gallery", item: t("nav.gallery") },
  ];
  return (
    <StyledFooter>
      <div className="footer-up">
        <div className="footers">
          <div className="footer-el">
            <img src={logo} alt="" className="logo" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo itaque, ipsa suscipit fuga facere, facilis assumenda
              magnam dignissimos doloribus dolorem praesentium architecto soluta
              odit doloremque perspiciatis. Molestias sit dignissimos nesciunt?
            </p>
            <div className="socials">
              <Link to="https://wa.me/69627028" target="_blank">
                <FacebookIcon />
              </Link>
              <Link to="https://wa.me/69627028" target="_blank">
                <InstagramIcon />
              </Link>
              <Link to="https://wa.me/69627028" target="_blank">
                <WhatsAppIcon />
              </Link>
            </div>
          </div>
          <div className="footer-el links">
            <h3>Explore</h3>
            <div className="footer-links">
              {links.map((el) => {
                return <Link key={el?.item} to={el?.route}>{el?.item}</Link>;
              })}
            </div>
          </div>

          <Gallery />
        </div>
      </div>
      <div className="footer-down">
        © Copyright 2023 by <span> Salt Montenegro</span>
      </div>
    </StyledFooter>
  );
}

export default Footer;
