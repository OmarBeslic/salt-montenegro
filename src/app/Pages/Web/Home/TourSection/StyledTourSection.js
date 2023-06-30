import styled from "styled-components";
import clocks from "../../../../../Assets/images/clocks.webp";
export const StyledTourSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 2;
  min-height: 85vh;
  .overlay-tour {
    background-image: url(${clocks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(1, 32, 54, 0.5) 0px 0px 0px 2000px inset;
    background-attachment: ${(props) =>
      props?.notDesktop ? "unset" : "fixed"};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
  }
  .tours-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
    width: 100%;
    padding: 50px 0;
    h2 {
      margin: 0 0 20px 0;
      color: var(--textMain);
    }
    span {
      color: var(--textMain);
      font-family: Great Vibes, "cursive";
      font-weight: 400;
      font-size: 30px;
    }
    .about-tours {
      color: var(--textMain);
      width: 50%;
      text-align: center;
    }
  }
  .tours {
    display: grid;
    grid-template-columns: repeat(4, 350px);
    gap: 60px;
  }
  .btn-div {
    padding: 30px 0 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    text-align: center;
    .tours-btn {
    }
  }
  .boat-sm {
    position: absolute;
    bottom: 0;
    left: 50px;
  }
  @media (max-width: 1024px) {
    .tours {
      grid-template-columns: repeat(2, 350px);
      gap: 30px;
    }
  }
  @media (max-width: 576px) {
    .tours-header {
      padding: 50px 0 20px;
      .about-tours {
        width: 90% !important;
      }
    }
    .tours {
      margin-top: 50px;
      grid-template-columns: repeat(1, 350px);
      gap: 30px;
    }
  }
`;
