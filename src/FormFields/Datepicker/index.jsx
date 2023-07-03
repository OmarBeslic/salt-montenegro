import React, { useState } from "react";
import { useDispatch } from "react-redux";
//
import dayjs from "dayjs";

import {
  LocalizationProvider,
  DatePicker as DateInput,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//
import { populateHomeForm } from "../../app/store/slices/homeSlice";

function DatePicker({ name, label, cb }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(dayjs());
  const handleChange = (e) => {
    setValue(e);
    dispatch(populateHomeForm({ name, value: e }));
    cb(e);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateInput
        label={label}
        value={value}
        format="DD-MM-YYYY"
        sx={{
          width: "90%",
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
