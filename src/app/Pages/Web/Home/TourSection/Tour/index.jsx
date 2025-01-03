import React from "react";
import { useNavigate } from "react-router-dom";
//
import useTranslate from "../../../../../../Hooks/useTranslate";
//
import SecondaryButton from "../../../../../Components/Shared/Buttons/secondarybutton";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import { StyledTour } from "./StyledTour";

function Tour({ tour }) {
  const navigate = useNavigate();
  const p = useTranslate();
  return (
    <StyledTour bgImg={tour?.coverPicture}>
      <SecondaryButton onClick={() => navigate(`/tours/${tour?.id}`)}></SecondaryButton>
      <div className="show">
        <h2>{p(tour?.tourName)}</h2>
        <p className="tour-description">{p(tour?.shortDesc)}</p>
        <div className="price-duration">
          <span><AccessTimeOutlinedIcon/> {tour?.tourDuration}h</span>
          <span><EuroOutlinedIcon/> {tour?.price}€</span>
        </div>
      </div>
    </StyledTour>
  );
}

export default Tour;
