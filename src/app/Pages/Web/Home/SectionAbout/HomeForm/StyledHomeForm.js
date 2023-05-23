import styled from "styled-components";

export const StyledHomeForm = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: start;
  justify-content: center;
  .home-form {
    width: 80%;
    height: 80%;
    box-shadow: 0 8px 32px 0 var(--primary);

    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to left, var(--primary), var(--primaryThree));
    .logo {
      width: 60px;
    }
    h3 {
      color: var(--textMain);
      margin: 20px 0;
    }
    form {
      height: 400px;
      width: 300px;
      border-radius: 16px;
      backdrop-filter: blur(8.6px);
      -webkit-backdrop-filter: blur(8.6px);
      display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    }
  }
`;
