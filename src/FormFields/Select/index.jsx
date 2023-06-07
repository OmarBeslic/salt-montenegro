import React from "react";
import { StyledSelect } from "./StyledSelect";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { populateHomeForm } from "../../app/store/slices/homeSlice";

function SelectField({ name, label, options }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const option = options?.find((el) => el?.value?.includes(e?.target?.value));
    setValue(e?.target?.value);
    dispatch(
      populateHomeForm({ name, value: option?.value, label: option?.label })
    );
    console.log(option, name, "sliceVar");
  };
  console.log(value, "selectvalue");
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <StyledSelect
        variant="filled"
        labelId={name}
        name={name}
        id={name}
        label={label}
        onChange={(e) => handleChange(e)}
      >
        {options?.map((el) => {
          return <MenuItem value={el?.value}>{el?.label}</MenuItem>;
        })}
      </StyledSelect>
    </FormControl>
  );
}

export default SelectField;
