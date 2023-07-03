import React, { useState, useEffect } from "react";
//
import "react-toastify/dist/ReactToastify.css";
//
import InputField from "../../../../../FormFields/InputField";
import PrimaryButton from "../../../../Components/Shared/Buttons/primaryButton";
import { StyledBookingForm } from "./StyledBookingForm";
import useTranslate from "../../../../../Hooks/useTranslate";
import DatePicker from "../../../../../FormFields/Datepicker";
import TripTimeSelector from "../../../../../FormFields/TripTimeSelector";
import dayjs from "dayjs";
import {
  showToast,
  validateEmail,
  validatePhoneNumber,
} from "../../../../../FormFields/helpers";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { sendBooking } from "../../../../store/slices/homeSlice";
import { CircularProgress } from "@mui/material";

function BookingForm({ tour }) {
  const p = useTranslate();
  const dispatch = useDispatch();
  let tourName = p(tour?.tourName);
  const [message, setMessage] = useState(null);
  const [booking, setBooking] = useState({
    tourName: tourName,
  });

  const handleBookTour = () => {
    if (
      !booking.name ||
      !booking.email ||
      !booking.phoneNumber ||
      !booking.date ||
      !booking.timeSelect
    ) {
      return showToast("error", "Please fill in all required fields.");
    } else if (!validatePhoneNumber(booking.phoneNumber)) {
      return showToast("error", "Phone number has invalid characters");
    } else if (!validateEmail(booking.email)) {
      return showToast("error", "Email is not in valid format");
    }

    dispatch(sendBooking(booking)).then((res) => {
      setMessage(
        "Booking successfully sent! We will contact you soon. Salt montenegro team! "
      );
    });
  };

  return (
    <StyledBookingForm>
      {!Boolean(message) ? (
        <>
          <ToastContainer />
          <div className="tour-info">
            <h2>Booking form </h2>
            <p>Max passengers: {tour?.people} </p>
          </div>
          <InputField
            label={"Name*"}
            name="name"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <InputField
            label={"Email*"}
            name="email"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <InputField
            label={"Phone number*"}
            name="phoneNumber"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <DatePicker
            label={"Choose date*"}
            name="date"
            cb={(e) => {
              setBooking({
                ...booking,
                date: dayjs(e).format("DD-MM-YYYY"),
              });
            }}
          />
          <TripTimeSelector
            name="timeSelect"
            handleChange={(e) => {
              setBooking({
                ...booking,
                timeSelect: e,
              });
            }}
          />
          <InputField
            label={"Message (optional)"}
            multiline
            rows={4}
            name="message"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <PrimaryButton className="tour-btn" onClick={() => handleBookTour()}>
            Book tour
          </PrimaryButton>
        </>
      ) : (
        <p>{message}</p>
      )}
    </StyledBookingForm>
  );
}

export default BookingForm;
