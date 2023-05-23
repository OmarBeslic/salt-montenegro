import React from "react";

import { useTranslation } from "react-i18next";
import Page from "../../../Components/User/Page";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import TourSection from "./TourSection";
import EnjoySection from "./EnjoySection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";

function Homepage() {
  const { t } = useTranslation();
  
  return (
    <Page title={t("page.home")} meta="Pocetna stranica">
      <Header />
      <SectionAbout />
      <TourSection />
      <TeamSection />
      <EnjoySection />
      <BlogSection />
    </Page>
  );
}

export default Homepage;