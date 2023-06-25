import React, { useState } from "react";
import dayjs from "dayjs";
// import { StyledDatePicker } from "./StyledDatePicker";
import {
  LocalizationProvider,
  DatePicker as DateInput,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { populateHomeForm } from "../../app/store/slices/homeSlice";

function DatePicker({ name, label }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(dayjs());
  const handleChange = (e) => {
    setValue(e);
    dispatch(populateHomeForm({ name, value: e }));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateInput
        label={label}
        value={value}
        format="DD-MM-YYYY"
        sx={{
          width: "100%",
          margin: "15px !important",
          ".MuiInputBase-root": {
            justifyContent: "space-between",
            paddingRight: "unset",
            input: {
              margin: "0 !important",
              height: "56px !important",
              padding: "0 16px!important",
            },
            ".MuiInputAdornment-root": {
              button: {
                marginTop: "unset",
                margin: "5px",
              },
            },
          },
        }}
        onChange={(newValue) => handleChange(newValue)}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
