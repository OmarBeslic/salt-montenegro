import React, { useEffect, useRef, useState } from "react";
import { StyledBooking } from "./StyledBooking";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { openModal } from "../../../../store/slices/layoutSlice";
import { ToastContainer } from "react-toastify";
import InputField from "../../../../../FormFields/InputField";
import SelectField from "../../../../../FormFields/Select";
import SecondaryButton from "../../../Shared/Buttons/secondarybutton";
import useTranslate from "../../../../../Hooks/useTranslate";

function Booking() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const modal = useSelector((state) => state.layout?.modal);
  const tours = useSelector((state) => state.tours?.tours);
  const p = useTranslate();
  const [booking, setBooking] = useState({});

  const slectTours = tours?.map((el) => ({
    value: el?.tourName,
    label: p(el?.tourName),
  }));
  console.log(slectTours, "slectTours");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(openModal({ name: null, isOpen: false, data: null }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleBookTour = () => {};

  return (
    <StyledBooking isOpen={modal?.isOpen}>
      <CloseIcon
        onClick={() =>
          dispatch(openModal({ name: null, isOpen: false, data: null }))
        }
      />
      <div className="form-div">
        <ToastContainer />
        <InputField
          label="Name"
          value={booking?.name}
          onChange={(e) =>
            setBooking({
              ...booking,
              name: e.target.value,
            })
          }
        />
        <InputField
          value={booking?.lastName}
          label="Last name"
          onChange={(e) =>
            setBooking({
              ...booking,
              lastName: e.target.value,
            })
          }
        />
        <InputField
          value={booking?.userEmail}
          label="Email"
          onChange={(e) =>
            setBooking({
              ...booking,
              userEmail: e.target.value,
            })
          }
        />

        <SelectField
          value={booking?.country}
          name="country"
          label="Your country"
          options={slectTours}
          onChange={(e) => setBooking({})}
        />

        <SecondaryButton onClick={() => handleBookTour()}>
          Send booking
        </SecondaryButton>
      </div>
    </StyledBooking>
  );
}

export default Booking;
