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
      border-radius: 10px;
    }
    svg {
      path {
        fill: ${props=> props.scrolled ? "var(--primary)": "var(--textMain)" };
      }
    }
  }

  ul {
    position: absolute;
    background: #fff;
    min-width: 200px;
    padding: 5px;
    border-radius: 10px;
    opacity: 0;
    right: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    li {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: all 0.3s ease-in-out;

      img {
        width: 2.5rem;
        margin-right: 10px;
        transform: scale(0.8);
        transition: all 0.3s ease-in-out;
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
      li {
        padding: 8px 15px;
        font-size: 18px;
        color: var(--primary);
        &:hover {
          background: var(--primary);
          color: var(--textMain);
          border-radius: 10px;
        }
      }
    }
  }
`;
