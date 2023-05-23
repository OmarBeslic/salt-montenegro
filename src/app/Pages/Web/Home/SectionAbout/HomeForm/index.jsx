import React from "react";
import { StyledHomeForm } from "./StyledHomeForm";
import logo from "../../../../../../Assets/images/logo2.png";
import SelectField from "../../../../../../FormFields/Select";
import DatePicker from "../../../../../../FormFields/Datepicker";
import PrimaryButton from "../../../../../Components/Shared/Buttons/primaryButton";

function HomeForm() {
  // Take props from Section about
  return (
    <StyledHomeForm>
      <div className="home-form">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Find your tour today</h3>
        <form action="">
          <SelectField />
          <DatePicker />
          <SelectField />
          <PrimaryButton>Search tour</PrimaryButton>
        </form>
      </div>
    </StyledHomeForm>
  );
}

export default HomeForm;
