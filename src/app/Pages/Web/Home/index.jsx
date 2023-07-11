import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { useTranslation } from "react-i18next";
//
import { cleanUpHome, getHomepage } from "../../../store/slices/homeSlice";
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
    return () => {
      dispatch(cleanUpHome("homepage"));
    };
  }, []);

  return (
    <Page
      title={t("nav.home")}
      meta="Welcome to Salt Montenegro, your gateway to an extraordinary coastal experience. Immerse yourself in the stunning landscapes and crystal-clear waters of Montenegro with our fishing tours, panoramic adventures, taxi boat services, and romantic excursions. Let us guide you through a world of natural wonders and create unforgettable memories along the way. Plan your perfect getaway with Salt Montenegro today!"
      keywords="coastal experience, fishing tours, panorama tours, taxi boat services, romantic excursions, Montenegro tourism, Salt Montenegro, natural wonders, coastal landscapes, memorable adventures, crystal-clear waters."
    >
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
