import React, { useState } from "react";
import { StyledTimeSelector } from "./StyledTimeSelect";

const TripTimeSelector = ({handleChange}) => {
  const [selectedTime, setSelectedTime] = useState(null);

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
      <p>Choose the perfect time for your trip:</p>
      <div className="time-options-container">{renderTimeOptions()}</div>
    </StyledTimeSelector>
  );
};

export default TripTimeSelector;
