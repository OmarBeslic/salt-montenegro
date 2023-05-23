import React from "react";
import { StyledTeamSection } from "./StyledTeamSection";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "../../../../Components/Shared/Buttons/iconButton";
import crew from "../../../../../Assets/images/crew.webp"
import Sailor from "./Crew";
function TeamSection() {
  // odraditi fetch posade i mapirati sailora
  return (
    <StyledTeamSection>
      <div className="meet-team">
        <span>Crew</span>
        <h1>Meet our dream team</h1>
        <IconButton>
         Read More <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div className="boat-crew">
        <Sailor />
        <Sailor />
      </div>
    </StyledTeamSection>
  );
}

export default TeamSection;
