import styled from "styled-components";
import rods from "../../../../../Assets/images/rods.webp";

export const StyledReviews = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${rods});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
  background-attachment: ${(props) => (props?.notDesktop ? "unset" : "fixed")};
  .overlay-div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .half-div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 85%;
      flex-direction: column;
      min-height: 330px;
      margin: 50px 0;
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
        width: 50%;
        border-radius: 8px;
      }
    }
  }
  @media (max-width: 1024px) {
    h2 {
      text-align: center;
    }
    .swiper {
      width: 95% !important;
    }
  }
  @media (max-width: 576px) {
    h2 {
      text-align: center;
    }
    .half-div {
      width: 100% !important;
      .swiper {
        width: 95% !important;
      }
    }
  }
`;
