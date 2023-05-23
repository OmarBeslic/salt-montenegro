import styled from "styled-components";
import clocks from "../../../../../Assets/images/clocks.webp";
export const StyledTourSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .tours-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 0 2000px rgba(1, 32, 54, 0.5);
    background-image: url(${clocks});
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin-bottom: 30px;
    h2 {
      margin:0 0 20px 0;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
  }
  .tours-btn {
    margin: 45px 0;
  }
  .boat-sm {
    position: absolute;
    bottom: 0;
    left: 50px;
  }
`;
