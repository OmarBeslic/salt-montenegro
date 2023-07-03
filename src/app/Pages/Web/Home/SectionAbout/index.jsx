import React from "react";
import useTranslate from "../../../../../Hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";

import { StyledSectionAbout } from "./StyledSectionAbout";
import fishingRod from "../../../../../Assets/images/static-right.webp";
import anchor from "../../../../../Assets/images/sidroo.webp";
import fish from "../../../../../Assets/images/fish.webp";
import boat from "../../../../../Assets/images/boat.webp";
import { openModal } from "../../../../store/slices/layoutSlice";

function SectionAbout() {
  const dispatch = useDispatch();
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);
  
  return (
    <StyledSectionAbout>
      <div className="about-content">
        <img src={anchor} alt="Anchor" className="anchor" />
        <div className="left-content">
          <div className="photos-div">
            <div className="photo-left">
              <img
                src={fish}
                alt="Tuna fish"
                className="fish"
                onClick={() =>
                  dispatch(
                    openModal({ name: "image", isOpen: true, data: fish })
                  )
                }
              />
              <img
                src={boat}
                alt="Boat"
                onClick={() =>
                  dispatch(
                    openModal({ name: "image", isOpen: true, data: boat })
                  )
                }
              />
            </div>
            <div className="photo-right">
              <img
                src={fishingRod}
                alt="Fishing Rod"
                onClick={() =>
                  dispatch(
                    openModal({ name: "image", isOpen: true, data: fishingRod })
                  )
                }
              />
            </div>
            <div className="photo-left">
              <img
                src={boat}
                alt="Boat"
                onClick={() =>
                  dispatch(
                    openModal({ name: "image", isOpen: true, data: boat })
                  )
                }
              />
              <img
                src={fish}
                alt="Tuna fish"
                className="fish"
                onClick={() =>
                  dispatch(
                    openModal({ name: "image", isOpen: true, data: fish })
                  )
                }
              />
            </div>
          </div>
          <div className="about-desc-div">
            <span>{p(home?.homeAboutSubtitle)}</span>
            <h1>{p(home?.homeAboutTitle)}</h1>
            <p>{p(home?.homeAboutText)}</p>
          </div>
        </div>
      </div>
    </StyledSectionAbout>
  );
}

export default SectionAbout;
