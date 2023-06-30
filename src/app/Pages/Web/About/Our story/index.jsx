import React from "react";
import { StyledAbout } from "./StyledAbout";
import Sailor from "../Crew";
import photo from "../../../../../Assets/images/rods.webp";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/slices/layoutSlice";

function OutStory() {
  const dispatch = useDispatch();
  return (
    <StyledAbout>
      <div className="container">
        <div className="overlay-about"></div>
        <div className="aboutus">
          <span>Our Exlusives</span>
          <h2>About us</h2>
        </div>
        <div className="pictures-div">
          <img
            src={photo}
            alt=""
            className="smaller"
            onClick={() =>
              dispatch(openModal({ name: "image", isOpen: true, data: photo }))
            }
          />
          <img
            src={photo}
            alt=""
            className="bigger"
            onClick={() =>
              dispatch(openModal({ name: "image", isOpen: true, data: photo }))
            }
          />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        accusantium exercitationem, officia soluta sunt tempora ratione.
        Asperiores, ipsam? Cumque atque laudantium magni nam incidunt corrupti a
        unde facere voluptas doloribus.
      </p>
      <div className="crew">
        <Sailor />
        <Sailor />
      </div>
    </StyledAbout>
  );
}

export default OutStory;
