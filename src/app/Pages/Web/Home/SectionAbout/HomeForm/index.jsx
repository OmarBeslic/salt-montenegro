import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useTranslate from "../../../../../../Hooks/useTranslate";

import { StyledHomeForm } from "./StyledHomeForm";
import PrimaryButton from "../../../../../Components/Shared/Buttons/primaryButton";
import SelectField from "../../../../../../FormFields/Select";
import DatePicker from "../../../../../../FormFields/Datepicker";
import SecondaryButton from "../../../../../Components/Shared/Buttons/secondarybutton";
import { useState } from "react";
import { populateHomeForm } from "../../../../../store/slices/homeSlice";

function HomeForm() {
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const countries = useSelector((state) => state?.layout?.countries);
  const handleChange = (e,name) => {
    const option = countries?.find((el) => el?.value?.includes(e?.target?.value));
    setValue(e?.target?.value);
    dispatch(
      populateHomeForm({ name:name, value: option?.value, label: option?.label })
    );
  };
  return (
    <StyledHomeForm>
      <div className="container">
        <h1>{p(home?.homeFormTitle)}</h1>
        <div className="home-form">
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
        </div>
      </div>
      <SecondaryButton>Search tour</SecondaryButton>
    </StyledHomeForm>
  );
}

export default HomeForm;
