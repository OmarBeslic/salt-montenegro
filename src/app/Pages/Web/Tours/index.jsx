import React from "react";
import Page from "../../../Components/User/Page";
import AllTours from "./AllTours";
import { useTranslation } from "react-i18next";

function ToursPage() {
  const { t } = useTranslation();
  return (
    <Page title={t("nav.tours")} meta="Ture">
      <AllTours />
    </Page>
  );
}

export default ToursPage;
