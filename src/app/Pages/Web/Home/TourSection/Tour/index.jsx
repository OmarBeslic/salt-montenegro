import React from "react";
import { StyledTour } from "./StyledTour";
import homeBg from "../../../../../../Assets/images/homebg.webp";
import SecondaryButton from "../../../../../Components/Shared/Buttons/secondarybutton";
import { useNavigate } from "react-router-dom";
function Tour() {
  const navigate = useNavigate();
  return (
    <StyledTour bgImg={homeBg}>
      <SecondaryButton onClick={() => navigate(`/tours/`)}></SecondaryButton>
      {/* <img src={homeBg} alt="" /> */}
      <div className="show">
      <h2>Best Tour</h2>
        <p className="tour-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a
          quo, nemo ab iusto officiis magni optio commodi! Laboriosam alias eius
          quasi unde ut voluptas iste delectus repudiandae fugiat dicta?
        </p>
        <div className="price-duration">
          <span>Duration: 3h</span>
          <span>Starting from: 300$</span>
        </div>
      </div>
    </StyledTour>
  );
}

export default Tour;
