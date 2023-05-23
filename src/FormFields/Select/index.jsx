import React from "react";
import { StyledSelect } from "./StyledSelect";
import { FormControl, MenuItem } from "@mui/material";

function SelectField({ handleChange, name, label, options }) {
  return (
    <FormControl fullWidth>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={10}
        label="Age"
        onChange={handleChange}
      >
        {/* {options?.map((el) => { */}
         <MenuItem value={10}>Ten</MenuItem>;
        {/* // })} */}
      </StyledSelect>
    </FormControl>
  );
}

export default SelectField;
