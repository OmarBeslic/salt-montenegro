import styled from "styled-components";

export const StyledReviews = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: start;
  justify-content: center;
  .overlay-div {
    height: 300px;
    width: 100%;

    display: flex;
    align-items: start;
    justify-content: center;
    background: var(--primary);
    background: linear-gradient(0deg, white 0%, var(--primary) 50%, white 100%);
    border-radius: 10px;
    .half-div {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 85%;
      flex-direction: column;
      min-height: 500px;
      padding-top: 10px;
      .cursive-span {
        color: var(--textMain);
        font-family: "Great Vibes", "cursive";
        font-weight: 400;
        font-size: 30px;
      }
      h2,
      span {
        color: var(--textMain);
      }
      .swiper {
        margin: 30px 0;
        width: 50%;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        border-radius: 8px;
      }
    }
  }
  @media (max-width: 1024px) {
    height: 450px;
    h2{
      text-align: center;
    }
    .swiper {
      width: 95% !important;
    }
  }
`;
