import React from "react";
import { StyledAbout } from "./Our story/StyledAbout";
import Page from "../../../Components/User/Page";
import { useTranslation } from "react-i18next";
import OutStory from "./Our story";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <Page
      title={t("nav.about")}
      meta="Discover the breathtaking beauty of Montenegro with Salt Montenegro. Join us for unforgettable fishing tours, panoramic adventures, taxi boat services, and romantic excursions. Explore the hidden gems of this enchanting destination and create memories that will last a lifetime. Book your dream tour today!"
      keywords="fishing tours, panorama tours, taxi boat services, picnic tours, romantic tours, Montenegro tourism, Salt Montenegro, adventure tours, coastal exploration, scenic boat rides, memorable experiences"
    >
      <OutStory />
    </Page>
  );
}

export default AboutUs;
