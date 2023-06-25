import React from "react";
import { StyledAbout } from "./Our story/StyledAbout";
import Page from "../../../Components/User/Page";
import { useTranslation } from "react-i18next";
import OutStory from "./Our story";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <Page title={t("nav.about")} meta="O nama">
      <OutStory />
    </Page>
  );
}

export default AboutUs;
