import React from "react";
import { StyledTeamSection } from "./StyledTeamSection";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "../../../../Components/Shared/Buttons/iconButton";
import Sailor from "./Crew";
function TeamSection() {
  // odraditi fetch posade i mapirati sailora
  return (
    <StyledTeamSection>
      <div className="meet-team">
        <span>Crew</span>
        <h2>Meet our dream team</h2>
      </div>
      <div className="boat-crew">
        <Sailor />
        <Sailor />
      </div>
    </StyledTeamSection>
  );
}

export default TeamSection;
