import styled from "styled-components";

export const StyledHomeForm = styled.div`
  min-width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 60px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  .container {
    display: flex;
    padding: 20px 0 0;
    min-width: 870px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
    h1 {
      text-align: center;
      font-size: 55px;
      width: 50%;
      line-height: 1.125;
    }
    .home-form {
      border-left: 1px solid var(--primary);
      padding: 20px 15px;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
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
  }
  @media (max-width: 1024px) {
    margin: 0;
    width: 50%;
    .container {
      flex-direction: column;
      min-width: 100%;
      h1 {
        text-align: center;
        font-size: 40px;
        width: 95%;
        line-height: 1.125;
      }
      .home-form {
        width: 95%;
        padding: 10px;
        margin: 20px 0;
        border: unset;
      }
    }
  }
  @media (max-width: 576px) {
    width: 90%;
    .container {
      flex-direction: column;
      min-width: 100%;
      h1 {
        text-align: center;
        font-size: 40px;
        width: 95%;
        line-height: 1.125;
      }
      .home-form {
        width: 95%;
        padding: 10px;
        margin: 20px 0;
        border: unset;
      }
    }
  }
`;
// @media (max-width: 1024px) {
// }
