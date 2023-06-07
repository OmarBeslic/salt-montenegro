import styled from "styled-components";
import rods from "../../../../../Assets/images/rods.webp";

export const StyledReviews = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${rods});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
  background-attachment: ${(props) => (props?.notDesktop ? "unset" : "fixed")};
  margin: 100px 0;
  .overlay-div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      0deg,
      white 0%,
      transparent 20%,
      transparent 80%,
      white 100%
    );
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
        border-radius: 8px;
      }
    }
  }
  @media (max-width: 1024px) {
    height: 450px;
    h2 {
      text-align: center;
    }
    .swiper {
      width: 95% !important;
    }
  }
`;
