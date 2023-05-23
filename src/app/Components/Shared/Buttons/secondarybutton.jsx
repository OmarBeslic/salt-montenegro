import React from "react";
import styled from "styled-components";

const StyledSecondaryBtn = styled.button`
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px auto;
  background: #b1dae7;
  border-radius: 4px;

  span {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  &:active {
    transform: scale(0.95);
  }
`;

function SecondaryButton({ children , ...otherProps}) {
  return (
    <StyledSecondaryBtn {...otherProps}>
      <span>{children}</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </StyledSecondaryBtn>
  );
}

export default SecondaryButton;
