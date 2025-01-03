import styled from "styled-components";
export const StyledTeamSection = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:80px 0;

  .meet-team {
   margin-bottom: 30px;

    display: flex;
    align-items: end;
    justify-content: end;
    flex-direction: column;
    border-radius: 0 4px 4px 0;
    h1 {
      color: var(--primary);
      text-align: center;
    }
    span {
      color: var(--primary);
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
    height: 100%;
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    height: unset;
    .meet-team{
      margin-bottom: 20px;
    }
   .boat-crew{
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
  }
`;
