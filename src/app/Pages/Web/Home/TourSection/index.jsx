import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//
import { useDispatch, useSelector } from "react-redux";
import { cleanUpTours, getAllTours } from "../../../../store/slices/tourSlice";
//
import useTranslate from "../../../../../Hooks/useTranslate";
//
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
//
import Tour from "./Tour";
import boat from "../../../../../Assets/images/boat2.webp";
import { StyledTourSection } from "./StyledTourSection";

function TourSection() {
  const navigate = useNavigate();
  const p = useTranslate();
  const dispatch = useDispatch();
  // fetch tura pa ih slicovati i mapirati da prikazuje samo tri
  const notDesktop = useSelector((state) => state.layout?.device) !== "desktop";
  const home = useSelector((state) => state.home?.homepage);
  const tours = useSelector((state) => state.tours?.tours)?.slice(0, 4);

  useEffect(() => {
    dispatch(getAllTours());
    return () => {
      dispatch(cleanUpTours("tours"));
    };
  }, []);

  return (
    <StyledTourSection notDesktop={notDesktop}>
      <div className="overlay-tour"></div>
      <div className="tours-header">
        <span>{p(home?.homeTourSubtitle)}</span>
        <h2>{p(home?.homeTourTitle)}</h2>
        <p className="about-tours">{p(home?.homeTourText)}</p>
      </div>

      <div className="tours">
        {tours?.map((el, idx) => {
          return <Tour tour={el} key={idx} />;
        })}
      </div>
      <div className="btn-div">
        <SecondaryButton
          onClick={() => navigate("/tours")}
          className="tours-btn"
        >
          View all Tours
        </SecondaryButton>
      </div>
      <img src={boat} alt="Boat" className="boat-sm" />
    </StyledTourSection>
  );
}

export default TourSection;
