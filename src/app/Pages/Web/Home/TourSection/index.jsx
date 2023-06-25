import React from "react";
import { StyledTourSection } from "./StyledTourSection";
import Tour from "./Tour";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
import { useNavigate } from "react-router-dom";
import boat from "../../../../../Assets/images/boat2.webp";
import { useSelector } from "react-redux";
import useTranslate from "../../../../../Hooks/useTranslate";
function TourSection() {
  // fetch tura pa ih slicovati i mapirati da prikazuje samo tri
  const notDesktop = useSelector((state) => state.layout?.device) !== "desktop";
  const navigate = useNavigate();
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);

  return (
    <StyledTourSection notDesktop={notDesktop}>
      <div className="overlay-tour"></div>
      <div className="tours-header">
        <span>{p(home?.homeTourSubtitle)}</span>
        <h2>{p(home?.homeTourTitle)}</h2>
        <p className="about-tours">{p(home?.homeTourText)}</p>
      </div>

      <div className="tours">
        <Tour />
        <Tour />
        <Tour />
        <Tour />
      </div>
      <div className="btn-div">
        <SecondaryButton
          onClick={() => navigate("/tours")}
          className="tours-btn"
        >
          View all Tours
        </SecondaryButton>
      </div>
      <img src={boat} alt="Boat" className="boat-sm" />
    </StyledTourSection>
  );
}

export default TourSection;
