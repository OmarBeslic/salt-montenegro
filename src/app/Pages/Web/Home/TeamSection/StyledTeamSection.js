import styled from "styled-components";
import sunset from "../.././../../../Assets/images/sunset.webp";
export const StyledTeamSection = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  height: 650px;
  padding: 15px 0;
  background-image: url(${sunset});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .meet-team {
    width: 550px;
    height: 550px;
    box-shadow: inset 0 0 0 2000px rgba(49, 112, 142, 0.7);

    display: flex;
    align-items: end;
    justify-content: end;
    flex-direction: column;
    border-radius: 0 4px 4px 0;
    h1 {
      color: var(--textMain);
      text-align: center;
    }
    span {
      color: var(--textMain);
      font-family: "Great Vibes", "cursive";
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      width: 100%;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 0 0 4px;
      svg {
        height: 15px;
        margin-left: 8px;
      }
    }
  }
  .boat-crew {
    width: calc(100vw - 550px);
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: space-evenly;
  }
`;
