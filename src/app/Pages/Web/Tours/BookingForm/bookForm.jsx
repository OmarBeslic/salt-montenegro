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
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function BookingForm({ tour }) {
  const p = useTranslate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tName = p(tour?.tourName);
  const [message, setMessage] = useState(null);
  const [booking, setBooking] = useState({});

  const templateParams = {
    message: "Imas novi booking!",
    name: booking.name,
    tourName: tName,
    email: booking?.email,
    phone: booking?.phoneNumber,
    date: booking?.date,
    time: booking?.timeSelect,
  };

  const bookingAlert = () => {
    // Ubaciti eminine parametre tu
    emailjs
      .send(
        "service_081h4xl",
        "template_rgxtsoj",
        templateParams,
        "QDRaPlWHJ1PijgrlB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

    dispatch(sendBooking({ ...booking, tourName: tName })).then((res) => {
      bookingAlert();
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
            <h2>{t("form.booking")} </h2>
            <p>Max passengers: {tour?.people} </p>
          </div>
          <InputField
            label={t("form.name")}
            name="name"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <InputField
            label={t("form.email")}
            name="email"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <InputField
            label={t("form.phone")}
            name="phoneNumber"
            onChange={(e) => {
              setBooking({
                ...booking,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <DatePicker
            label={t("form.date")}
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
            label={t("form.message")}
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
            {t("form.bookTour")}
          </PrimaryButton>
        </>
      ) : (
        <p>{message}</p>
      )}
    </StyledBookingForm>
  );
}

export default BookingForm;
