import React, { useEffect } from "react";
import { StyledSingleTour } from "./StyledSingleTour";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTour } from "../../../../store/slices/tourSlice";
import useTranslate from "../../../../../Hooks/useTranslate";
import { openModal } from "../../../../store/slices/layoutSlice";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
import TourSlider from "./TourSlider";
import PrimaryButton from "../../../../Components/Shared/Buttons/primaryButton";
import { useRef } from "react";
import BookingForm from "../BookingForm/bookForm";
import { scrollToDiv } from "../../../../../FormFields/helpers";

function SingleTour() {
  const { id } = useParams();
  const p = useTranslate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookDiv = useRef(null);
  const singleTour = useSelector((state) => state.tours?.singleTour);

  useEffect(() => {
    dispatch(getSingleTour(id));
  }, []);

  return (
    <StyledSingleTour>
      <div className="tour-container">
        <div className="tour-header">
          <div className="main-image">
            <img
              src={singleTour?.coverPicture}
              alt=""
              onClick={() =>
                dispatch(
                  openModal({
                    name: "image",
                    isOpen: true,
                    data: singleTour?.coverPicture,
                  })
                )
              }
            />
          </div>
          <div className="short-desc">
            <h2>{p(singleTour?.tourName)}</h2>
            <p>{p(singleTour?.shortDesc)}</p>
          </div>
          <div className="tour-info">
            <h2>Tour Info</h2>
            <div className="infos">
              <div className="info">
                Duration: <h4>{singleTour?.tourDuration}h</h4>
              </div>
              <div className="info">
                Price: <h4>{singleTour?.price}€</h4>
              </div>
              <div className="info">
                Max: <h4>{singleTour?.tourDuration} people</h4>
              </div>
            </div>
            <PrimaryButton onClick={() => scrollToDiv(bookDiv)}>
              Proceed to booking
            </PrimaryButton>
          </div>
        </div>
        <div className="single-section">
          <TourSlider images={singleTour?.images} />

          <div className="long-desc">
            <p>{p(singleTour?.longDesc)}</p>
          </div>
        </div>
        <div className="booking-section" ref={bookDiv}>
          <BookingForm tour={singleTour} />
        </div>
        <SecondaryButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </SecondaryButton>
      </div>
    </StyledSingleTour>
  );
}

export default SingleTour;
