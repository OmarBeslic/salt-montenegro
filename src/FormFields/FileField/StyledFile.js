import styled from "styled-components";

export const StyledFile = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  img {
    width: 100px;
    height: 80px;
    object-fit: cover;
  }
  label {
    background: #b1dae7;
    color: #234567;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  span {
    min-height: 23px;
    color: crimson;
  }
`;
