import React from "react";
import { useSelector } from "react-redux";
//
import { StyledHeader } from "./StyledHome";
import Waves from "../../../../../Assets/Animations/Waves";
import HomeForm from "../SectionAbout/HomeForm";

function Header() {
  const isMobile = useSelector((state) => state.layout?.device) === "mobile";
  const home = useSelector((state) => state.home?.homepage);
  return (
    <StyledHeader isMobile={isMobile}>
      <img loading="lazy" src={home?.homeHeaderBackground} className="bg-video" />
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
