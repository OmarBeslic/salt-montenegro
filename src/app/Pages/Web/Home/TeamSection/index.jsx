import React, { useEffect } from "react";
import { StyledTeamSection } from "./StyledTeamSection";
import IconButton from "../../../../Components/Shared/Buttons/iconButton";
import Sailor from "./Crew";
import useTranslate from "../../../../../Hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { getCrew } from "../../../../store/slices/homeSlice";
function TeamSection() {
  const dispatch = useDispatch();
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);
  const crew = useSelector((state) => state.home?.crew);

  useEffect(() => {
    dispatch(getCrew());
  }, []);

  return (
    <StyledTeamSection>
      <div className="meet-team">
        <span>{p(home?.homeTourSubtitle)}</span>
        <h2>{p(home?.homeCrewTitle)}</h2>
      </div>
      <div className="boat-crew">
        {crew?.map((el) => {
          return <Sailor sailor={el} />;
        })}
      </div>
    </StyledTeamSection>
  );
}

export default TeamSection;
