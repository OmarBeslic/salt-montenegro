import styled from "styled-components";

export const StyledBlogs = styled.div`
  padding-top: 120px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: var(--primary);
  .blogs-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
    height: 20vh;

    & > * {
      color: var(--textMain);
    }

    span {
      font-family: "Great Vibes", "cursive";
      font-weight: 400;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      font-size: 24px;
    }
  }
  .blogs-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    justify-content: center;
    background: var(--backgroundMain);
    .waves {
      top: 0;
      bottom: unset;
    }
    .blogs-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      width: 85%;
      margin: 50px 0;
      border-radius: 10px;
      padding: 20px 10px;
    }
  }
  @media (max-width: 1024px) {
    .blogs-container {
      .blogs-grid {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
