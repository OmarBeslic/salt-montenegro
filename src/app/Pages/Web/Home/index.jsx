import React from "react";

import { useTranslation } from "react-i18next";
import Page from "../../../Components/User/Page";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import TourSection from "./TourSection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";
import Reviews from "./Reviews";
import useTranslate from "../../../../Hooks/useTranslate";

function Homepage() {
  const { t } = useTranslation();
  const T = useTranslate()
  console.log(T("tes2"),":language")
  return (
    <Page title={t("page.home")} meta="Pocetna stranica">
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
