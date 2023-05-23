import React from "react";
import { StyledSectionAbout } from "./StyledSectionAbout";
import rudder from "../../../../../Assets/images/volan.webp";
import fishingRod from "../../../../../Assets/images/static-right.webp";
import anchor from "../../../../../Assets/images/sidroo.webp";
import fish from "../../../../../Assets/images/fish.webp";
import boat from "../../../../../Assets/images/boat.webp";
import HomeForm from "./HomeForm";
function SectionAbout() {
  // Fetch all tours
  // Save tour, date and number of peoples in redux 
  // on button click go to tours page with that filters selected
  // Send that as props to home form
  return (
    <StyledSectionAbout>
        <div className="about-content">
          <div className="left-content">
            <div className="photos-div">
              <div className="photo-left">
                <div className="photo-up">
                  <img src={anchor} alt="Anchor" />
                  <img src={fish} alt="Tuna fish" className="fish" />
                </div>
                <div className="photo-down">
                  <img src={boat} alt="Boat" />
                </div>
              </div>
              <div className="photo-right">
                <img src={fishingRod} alt="Fishing Rod" />
              </div>
            </div>
            <div className="about-desc-div">
              <span>About Salt Montenegro</span>
              <h1>Welcome to best Fishing Platform</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have in some form by injected humour randomised
                words which don't look even slightly believable quis nostrud
                exercitation ullamco laboris nisi ut aliquip
              </p>
            </div>
          </div>
          <HomeForm />
        </div>
        <img src={rudder} alt="Rudder" className="rudder" />
    </StyledSectionAbout>
  );
}

export default SectionAbout;
