import React from "react";
import styled, { css } from "styled-components";

const StyledPrimaryBtn = styled.div`
  font-weight: bold;
  color: var(--primary);
  margin: 10px 0;
  border: 1px solid var(--primary);
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

function PrimaryButton({ children, ...otherProps }) {
  return (
    <StyledPrimaryBtn  {...otherProps}>
      {children}
    </StyledPrimaryBtn>
  );
}

export default PrimaryButton;
