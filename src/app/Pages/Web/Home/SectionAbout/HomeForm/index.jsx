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

function HomeForm() {
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);
  const navigate = useNavigate();

  return (
    <StyledHomeForm>
      <div className="container">
        <h2>{p(home?.homeFormTitle)}</h2>
        {/* <div className="home-form">
          <form action="">
            <SelectField
              name="tourChoose"
              label="Choose tour"
              options={countries}
              onChange = {(e)=>handleChange(e,"tourChoose")}
            />{" "}
            <SelectField
              name="peopleCount"
              label="Number of people"
              options={countries}
              onChange = {(e)=>handleChange(e,"peopleCount")}

            />
            <DatePicker name="dateChoose" label="Choose date" />
          </form>
        </div> */}
      </div>
      <SecondaryButton onClick={() => navigate("/tours")}>
        Search tour
      </SecondaryButton>
    </StyledHomeForm>
  );
}

export default HomeForm;
