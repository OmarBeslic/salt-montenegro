import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
  right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  span {
    position: relative;
    padding: 0 25px;
    border-radius: 10px;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    color: var(--textMain);
    transition: 0.3s ease-in-out;
  }
  .dropdown {
    color: ${(props) =>
      props.scrolled ? "var(--primary)" : "var(--textMain)"};
  }
  ul {
    position: absolute;
    left: 25px;
    background: #fff;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    min-width: 140px;
    border-radius: 10px;
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
      .langs {
        color: var(--primary);
        padding: 8px 15px;
        border-radius: 10px;
        font-size: 18px;
        &:hover {
          color: #fff;
          background-color: var(--primary);
        }
      }
    }
  }
`;

export const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--primary);
  border-radius: 10px;
  margin-bottom: 15px;
  &:nth-of-type(1) {
    border-top-width: 1px;
  }
  .accordion-title {
    padding: 7px 20px;
    font-size: 1em;
    color: var(--primary);
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    &:hover {
      cursor: pointer;
    }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      margin-left: auto;
      transition: 0.3s ease;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        transition: 0.3s ease;
        path {
          fill: var(--primary);
        }
      }
      &.active {
        svg {
          transform: rotateZ(90deg);
        }
      }
    }
  }
  .accordion-content {
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
    overflow-y: scroll;
    padding: 0 20px;
    .acc-wrapp {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--primary);
      a {
        padding: 5px 0;
      }
    }
    &.active {
      max-height: 0px;
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    }
  }
  &.active {
    .accordion-title {
      border-radius: 10px 10px 0 0;
    }
  }
`;
