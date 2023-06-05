import React from "react";
import { StyledHomeForm } from "./StyledHomeForm";
import PrimaryButton from "../../../../../Components/Shared/Buttons/primaryButton";

function HomeForm() {
  // Take props from Section about
  return (
    <StyledHomeForm>
      <div className="home-form">
        <h3>Explore the sea</h3>
        <form action="">
          <select name="Select tour" id="">
            <option value="">Number of people</option>
          </select>
          <select name="" id="">
            <option value="">Choose Tour</option>
            <option value="">Choose Tour</option>
            <option value="">Choose Tour</option>
          </select>
          <input type="date" placeholder="Choose date"/>
          <PrimaryButton>Search tour</PrimaryButton>
        </form>
      </div>
    </StyledHomeForm>
  );
}

export default HomeForm;
