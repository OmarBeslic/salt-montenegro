import styled from "styled-components";

export const StyledHomeForm = styled.div`
  min-width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  .container {
    display: flex;
    padding: 20px 0 0;
    min-width: 870px;
    height: 20vh;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    h2 {
      color: var(--textMain);
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
      
    }
  }
`;
