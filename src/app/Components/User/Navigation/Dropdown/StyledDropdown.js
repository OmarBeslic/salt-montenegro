import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavidation = styled.div`
  position: relative;
  right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  span {
    position: relative;
    background-color: var(--background3);
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text1);
    transition: 0.3s ease-in-out;
  }

  ul {
    position: absolute;
    background: #fff;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    min-width: 140px;
    border-radius: 4px;
    padding: 5px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &.active {
    ul {
      opacity: 1;
      visibility: visible;
      a {
        color: var(--primary);
        padding: 8px 15px;
        border-radius: 4px;
        &:hover {
          color: #fff;
          background-color: var(--primary);
        }
      }
    }
  }
`;
