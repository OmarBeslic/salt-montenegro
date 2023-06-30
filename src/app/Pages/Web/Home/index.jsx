import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { useTranslation } from "react-i18next";
//
import { getHomepage } from "../../../store/slices/homeSlice";
//
import Page from "../../../Components/User/Page";
import Header from "./Header";
import SectionAbout from "./SectionAbout";
import TourSection from "./TourSection";
import TeamSection from "./TeamSection";
import BlogSection from "./BlogSection";
import Reviews from "./Reviews";

function Homepage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const home = useSelector((state) => state.home?.homepage);

  useEffect(() => {
    !home && dispatch(getHomepage());
  }, []);

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
