import React from "react";
import Page from "../../../Components/User/Page";
import clip from "../../../../Assets/videos/test2.mp4";
import { StyledHome } from "./StyledHome";
function Homepage() {
  return (
    <Page title="Pocetna" meta="Pocetna stranica">
      <StyledHome>
        <video autoPlay loop muted className="bg-video">
          <source src={clip} type="video/mp4" />
        </video>
        <div>caooo</div>
      </StyledHome>
    </Page>
  );
}

export default Homepage;
