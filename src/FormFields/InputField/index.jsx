import { Box, TextField } from "@mui/material";
import React from "react";
import { SyledInputField } from "./StyledInputField";

function InputField({error, label, ...otherProps }) {
  return (
    <SyledInputField>
      <TextField
        id="filled-basic"
        label={label}
        variant="filled"
        {...otherProps}
        sx={{  width: "90%" }}
        inputProps={{ maxLength: 180 }}
      />
      <span>{error}</span>
    </SyledInputField>
  );
}

export default InputField;
