import React from "react";

import home from "../../../../../Assets/images/homebg.webp";

import { useSelector } from "react-redux";
import { StyledHeader } from "./StyledHome";
import PrimaryButton from "../../../../Components/Shared/Buttons/primaryButton";
import Waves from "../../../../../Assets/Animations/Waves";

function Header() {
  const isMobile = useSelector((state) => state.layout?.device) === "mobile";
  return (
    <StyledHeader isMobile={isMobile}>
      <img src={home} className="bg-video" />
      <div className="overlay">
        <div className="home-content">
          <div className="description">
            <h1 className="home-title">Explore the Sea</h1>
            <PrimaryButton font="19px" hover={true} icon={true}>
              Learn more
            </PrimaryButton>
          </div>
        </div>
        <Waves />
      </div>
    </StyledHeader>
  );
}

export default Header;
