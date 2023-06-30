import styled from "styled-components";

export const Styled404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #e7edf6;
  background: rgb(231, 237, 246);
  .notfound {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
  }
  img {
    height: 50%;
    object-fit: cover;
    z-index: 1;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    svg{
        transform: rotate(180deg);
        margin-right: 10px;
    }
  }
`;
