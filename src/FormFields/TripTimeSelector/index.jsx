import React, { useState } from "react";
import { StyledTimeSelector } from "./StyledTimeSelect";
import { useTranslation } from "react-i18next";

const TripTimeSelector = ({handleChange}) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const {t}=useTranslation()
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    handleChange(time)
  };

  const renderTimeOptions = () => {
    const options = [];

    for (let hour = 8; hour <= 15; hour++) {
      const formattedTime = `${hour}:00h`;
      const isSelected = selectedTime === formattedTime;

      options.push(
        <div
          key={formattedTime}
          className={`time-option ${isSelected ? "selected" : ""}`}
          onClick={() => handleTimeSelect(formattedTime)}
        >
          {formattedTime}
        </div>
      );
    }

    return options;
  };

  return (
    <StyledTimeSelector >
      <p>{t("form.chooseTime")}:</p>
      <div className="time-options-container">{renderTimeOptions()}</div>
    </StyledTimeSelector>
  );
};

export default TripTimeSelector;
