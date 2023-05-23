import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.button`
  background: var(--primary);
  padding: 25px;
  color: var(--textMain);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

function IconButton({ children, ...otherProps }) {
  return <StyledIconButton {...otherProps}>{children}</StyledIconButton>;
}

export default IconButton;
