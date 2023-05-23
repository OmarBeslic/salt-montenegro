import React, { useState } from "react";
import { Link } from "react-router-dom";
//
import { StyledAccordion, StyledDropdown } from "./StyledDropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
//

function Dropdown({ name, items, scrolled }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useSelector((state) => state.layout?.device) === "desktop";

  return (
    <>
      {isDesktop ? (
        <StyledDropdown
          className={`language-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          scrolled={scrolled}
        >
          <span className="dropdown">
            {name} <ArrowDropDownIcon />
          </span>
          <ul>
            {items?.map((el, idx) => {
              return (
                <Link to={el?.route} className="langs" key={`lang-${el?.item}`}>
                  {el?.item}
                </Link>
              );
            })}
          </ul>
        </StyledDropdown>
      ) : (
        <StyledAccordion className={`customClass ${open ? "active" : ""}`}>
          <div className="accordion-title" onClick={() => setOpen(!open)}>
            <div>{name}</div>
            <div className={`toggle ${!open ? "active" : ""}`}>
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className={`accordion-content ${!open ? "active" : ""}`}>
            <div className="acc-wrapp">
              {items?.map((el, idx) => {
                return (
                  <Link
                    to={el?.route}
                    className="langs"
                    key={`lang-${el?.item}`}
                  >
                    {el?.item}
                  </Link>
                );
              })}
            </div>
          </div>
        </StyledAccordion>
      )}
    </>
  );
}

export default Dropdown;
