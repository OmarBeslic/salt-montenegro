import styled from "styled-components";
import clocks from "../../../../../Assets/images/clocks.webp";
export const StyledTourSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .overlay-tour {
    background-image: url(${clocks});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(1, 32, 54, 0.5) 0px 0px 0px 2000px inset;

    width: 100%;
    height: 300px;
    .tours-header {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 300px;

      background: linear-gradient(0deg, white 0%, transparent 30%, white 100%);
      width: 100%;
      margin-bottom: 45px;
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
  }

  .tours {
    display: grid;
    grid-template-columns: repeat(4, 350px);
    gap: 60px;
  }
  .tours-btn {
    margin: 45px 0;
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
    .overlay-tour{
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
