import React from "react";
import { StyledSelect } from "./StyledSelect";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

function SelectField({ name, label, error, options,value, ...otherProps }) {
  const styles = {
    height: "23px",
    color: "crimson",
  };
  return (
    <FormControl fullWidth sx={{ margin: " 0 15px" }}>
      <InputLabel id={name}>{label}</InputLabel>
      <StyledSelect
        variant="filled"
        labelId={name}
        name={name}
        id={name}
        label={label}
        {...otherProps}
      >
        {options?.map((el) => {
          return (
            <MenuItem key={el?.value} value={el?.value}>
              {el?.label}
            </MenuItem>
          );
        })}
      </StyledSelect>
      <span style={styles}>{error}</span>
    </FormControl>
  );
}

export default SelectField;
