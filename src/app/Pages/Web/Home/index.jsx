import React from "react";

import { useTranslation } from "react-i18next";
import useTranslate from "../../../../Hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHomepage } from "../../../store/slices/homeSlice";

import Page from "../../../Components/User/Page";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import TourSection from "./TourSection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";
import Reviews from "./Reviews";

function Homepage() {
  const { t } = useTranslation();
  const p = useTranslate();
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home?.homepage);

  useEffect(() => {
    !home && dispatch(getHomepage());
  });

  return (
    <Page title={t("nav.home")} meta="Pocetna stranica">
      <Header />
      <SectionAbout />
      <TourSection />
      <TeamSection />
      <Reviews />
      <BlogSection />
    </Page>
  );
}

export default Homepage;
