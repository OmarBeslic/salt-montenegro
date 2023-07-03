import React, { useEffect } from "react";
import { StyledTours } from "./StyledTours";
import Waves from "../../../../../Assets/Animations/Waves";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpTours, getAllTours } from "../../../../store/slices/tourSlice";
import Tour from "../../Home/TourSection/Tour";

function AllTours() {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state?.tours?.tours);

  useEffect(() => {
    dispatch(getAllTours());

    return () => {
      dispatch(cleanUpTours("tours"));
    };
  }, []);

  return (
    <StyledTours>
      <div className="tours-header">
        <div className="tour-headline">
          <span>All tours</span>
          <h2>Unforgetable experience</h2>
        </div>
        <Waves />
      </div>
      <div className="tours-content">
        <div className="tours-grid">
          {tours?.map((el, idx) => {
            return <Tour tour={el} key={idx} />;
          })}
        </div>
      </div>
    </StyledTours>
  );
}

export default AllTours;
