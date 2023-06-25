import React from "react";
import { useTranslation } from "react-i18next";
import { StyledGallery } from "./StyledGallery";
import Page from "../../../Components/User/Page";

function Gallery() {
  const { t } = useTranslation();

  return (
    <Page title={t("page.gallery")} meta="Galerija">
      <StyledGallery>Galeojaaa</StyledGallery>
    </Page>
  );
}

export default Gallery;
