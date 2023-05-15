import styled from "styled-components";

export const StyledLangBtn = styled.div`
  position: relative;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  span {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text1);
    font-size: 3em;
    transition: 0.3s ease-in-out;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  ul {
    position: absolute;
    background: #fff;
    min-width: 200px;
    padding: 15px;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    li {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      transition: 0.3s ease-in-out;
      color: var(--primary);
      img {
        width: 2.5rem;
        margin-right: 10px;
        transform: scale(0.8);
        transition: 0.3s ease-in-out;
      }

      &:not(:last-child) {
        margin: 0 0 5px;
      }
    }
  }

  &.active {
    ul {
      opacity: 1;
      visibility: visible;
    }
  }
`;
