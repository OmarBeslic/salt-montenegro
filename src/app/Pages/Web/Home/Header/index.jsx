import React from "react";

import home from "../../../../../Assets/images/homebg.webp";

import { useSelector } from "react-redux";
import { StyledHeader } from "./StyledHome";
import Waves from "../../../../../Assets/Animations/Waves";
import test from "../../../../../Assets/videos/test2.mp4";
import HomeForm from "../SectionAbout/HomeForm";

function Header() {
  const isMobile = useSelector((state) => state.layout?.device) === "mobile";
  return (
    <StyledHeader isMobile={isMobile}>
      <img src={home} className="bg-video" />
      {/* <video className="bg-video" autoPlay loop muted>
        <source src={test} type="video/mp4" />
      </video> */}
      <div className="overlay">
        <div className="home-content">
          <HomeForm />
        </div>
        <Waves />
      </div>
    </StyledHeader>
  );
}

export default Header;
