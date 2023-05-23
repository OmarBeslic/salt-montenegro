import React, { useState } from "react";
import { StyledDatePicker } from "./StyledDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
function DatePicker() {
  const [value, setValue] = useState(dayjs("2022-04-07"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker
        disableFuture
        label="Responsive"
        openTo="year"
        views={["year", "month", "day"]}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      >
        DatePicker
      </StyledDatePicker>
    </LocalizationProvider>
  );
}

export default DatePicker;
