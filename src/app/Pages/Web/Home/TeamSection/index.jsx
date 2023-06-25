import React from "react";
import { StyledTeamSection } from "./StyledTeamSection";
import IconButton from "../../../../Components/Shared/Buttons/iconButton";
import Sailor from "./Crew";
import useTranslate from "../../../../../Hooks/useTranslate";
import { useSelector } from "react-redux";
function TeamSection() {
  // odraditi fetch posade i mapirati sailora
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);
  return (
    <StyledTeamSection>
      <div className="meet-team">
        <span>{p(home?.homeTourSubtitle)}</span>
        <h2>{p(home?.homeCrewTitle)}</h2>
      </div>
      <div className="boat-crew">
        <Sailor />
        <Sailor />
      </div>
    </StyledTeamSection>
  );
}

export default TeamSection;
