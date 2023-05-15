import React, { useState } from "react";
import { Link } from "react-router-dom";
// 
import { StyledNavidation } from "./StyledDropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// 
function Dropdown({ name, items }) {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavidation
      className={`language-btn ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span className="dropdown">
        {name} <ArrowDropDownIcon/>
      </span>
      <ul>
        {items?.map((el, idx) => {
          return (
            <Link
              to={el?.route}
              key={`lang-${el?.item}`}
            >
              {el?.item}
            </Link>
          );
        })}
      </ul>
    </StyledNavidation>
  );
}

export default Dropdown;
