import styled from "styled-components";
import tourBg from "../../../../../Assets/images/tourBg.webp";
export const StyledTours = styled.div`
  width: 100vw;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  .tours-header {
    background-image: url(${tourBg});
    background-position: center 135%;
    background-repeat: no-repeat;
    box-shadow: rgba(1, 32, 54, 0.4) 0px 0px 0px 2000px inset;
    background-attachment: fixed;
    position: relative;
    background-size: cover;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > * {
      color: var(--textMain);
    }
    .tour-headline {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      span {
        font-family: "Great Vibes", "cursive";
        font-weight: 400;
        font-size: 30px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
  .tours-content {
    background: var(--backgroundMain);
    width: 100%;
    height: auto;
    .tours-grid {
      margin: 50px 0;
      width: 100%;
      place-items: center;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 20px;
    }
  }
`;
