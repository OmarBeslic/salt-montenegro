import React from "react";
import Page from "../../../Components/User/Page";
import AllTours from "./AllTours";
import { useTranslation } from "react-i18next";

function ToursPage() {
  const { t } = useTranslation();
  return (
    <Page
      title={t("nav.tours")}
      meta="Discover the beauty of Montenegro through our fishing tours, panoramic adventures, taxi boat services, picnic tours, and romantic excursions. Immerse yourself in the natural wonders and unique experiences that await you. Browse our selection of extraordinary tours and start planning your perfect getaway today"
      keywords="fishing tours, panorama tours, taxi boat services, picnic tours, romantic excursions, Montenegro tours, Salt Montenegro, coastal exploration, scenic adventures, memorable experiences, book tours, dream getaway."
    >
      <AllTours />
    </Page>
  );
}

export default ToursPage;
