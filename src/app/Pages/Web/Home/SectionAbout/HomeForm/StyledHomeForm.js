import styled from "styled-components";

export const StyledHomeForm = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  .home-form {
    box-shadow: 0 8px 32px 0 var(--primary);

    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.35);

    h3 {
      color: var(--textMain);
      margin: 20px 0 0;
    }
    form {
      width: 100%;
      border-radius: 16px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 20px;
      select,
      input {
        margin: 10px 0;
        border: unset;
        width: 70%;
        height: 48px;
        &:hover,
        &:active,
        &:focus,
        &:focus-visible,
        &:visited {
          border: unset;
          outline: unset;
        }
      }
      button {
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
    .home-form {
      width: 95%;
      padding: 10px;
      margin: 20px 0;
    }
  }
`;
// @media (max-width: 1024px) {
// }
