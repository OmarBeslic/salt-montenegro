import React, { useState } from "react";
import dayjs from "dayjs";
function DatePicker() {
  const [value, setValue] = useState(dayjs());
  console.log(value,"datepicker")
  return (
    <>
      <input type="date" placeholder="Choose date" />
    </>
  );
}

export default DatePicker;
