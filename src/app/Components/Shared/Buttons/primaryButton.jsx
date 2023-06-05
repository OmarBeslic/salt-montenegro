import React from "react";
import styled, { css } from "styled-components";

const StyledPrimaryBtn = styled.button`
  padding: 10px 24px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: var(--textMain);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: ${(props) => props.font};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;

  ${({ hover, icon }) =>
    hover && icon
      ? css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          &:after {
            content: "»";
            position: absolute;
            transform: rotate(90deg);
            opacity: 0;
            /* top: 44px; */
            top: -20px;
            transition: 0.5s;
            right: 55px;
            font-size: 40px;
          }
          &:hover:after {
            top: 44px;
            opacity: 1;
            right: 55px;
          }
        `
      : hover
      ? css`
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        `
      : css``};
`;

function PrimaryButton({ children, font, hover, icon, ...otherProps}, ) {
  return (
    <StyledPrimaryBtn
      font={font}
      hover={hover}
      icon={icon}
      {...otherProps}
    >
      {children}
    </StyledPrimaryBtn>
  );
}

export default PrimaryButton;
