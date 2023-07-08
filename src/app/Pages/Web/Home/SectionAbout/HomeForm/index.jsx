import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useTranslate from "../../../../../../Hooks/useTranslate";

import { StyledHomeForm } from "./StyledHomeForm";
import SelectField from "../../../../../../FormFields/Select";
import DatePicker from "../../../../../../FormFields/Datepicker";
import SecondaryButton from "../../../../../Components/Shared/Buttons/secondarybutton";
import { useState } from "react";
import { populateHomeForm } from "../../../../../store/slices/homeSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomeForm() {
  const p = useTranslate();
  const { t } = useTranslation();
  const home = useSelector((state) => state.home?.homepage);
  const navigate = useNavigate();

  return (
    <StyledHomeForm>
      <div className="container">
        <h2>{p(home?.homeFormTitle)}</h2>
      </div>
      <SecondaryButton onClick={() => navigate("/tours")}>
        {t("home.tourFind")}
      </SecondaryButton>
    </StyledHomeForm>
  );
}

export default HomeForm;
