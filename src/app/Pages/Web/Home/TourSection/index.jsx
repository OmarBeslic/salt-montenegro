import React from "react";
import { StyledTourSection } from "./StyledTourSection";
import Tour from "./Tour";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
import { useNavigate } from "react-router-dom";
import boat from "../../../../../Assets/images/boat2.webp"
function TourSection() {
    // fetch tura pa ih slicovati i mapirati da prikazuje samo tri
    const navigate = useNavigate()

  return (
    <StyledTourSection>
      <div className="tours-header">
        <span>Our Exlusives</span>
        <h2>Some of our best tours</h2>
        <p className="about-tours">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          porro adipisci cumque odit placeat facilis sint iste consequuntur
          cupiditate nihil. Dolorum cum tempora velit minima impedit ab
          excepturi debitis. Eum.
        </p>
      </div>
      <div className="tours">
        <Tour />
        <Tour />
        <Tour />
      </div>
      <SecondaryButton onClick={()=> navigate("/tours")} className="tours-btn">View all Tours</SecondaryButton>
      <img src={boat} alt="Boat" className="boat-sm" />
    </StyledTourSection>
  );
}

export default TourSection;