import React from "react";
import { StyledHomeForm } from "./StyledHomeForm";
import PrimaryButton from "../../../../../Components/Shared/Buttons/primaryButton";
import SelectField from "../../../../../../FormFields/Select";
import { useSelector } from "react-redux";
import DatePicker from "../../../../../../FormFields/Datepicker";

function HomeForm() {
  // Take props from Section about
  const countries = useSelector((state) => state?.layout?.countries);
  return (
    <StyledHomeForm>
      <div className="home-form">
        <h3>Explore the sea</h3>
        <form action="">
          <SelectField name="peopleCount" label="Number of people" options={countries}/>
          <SelectField name="tourChoose" label="Choose tour" options={countries}/>
          <DatePicker />
          <PrimaryButton>Search tour</PrimaryButton>
        </form>
      </div>
    </StyledHomeForm>
  );
}

export default HomeForm;
