import styled from "styled-components";

export const StyledGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  flex-direction: column;
  padding: 10px 15px;
  .rock-it {
    color: var(--textMain);
    font-family: "Great Vibes", "cursive";
    font-weight: 400;
    font-size: 30px;
    margin: 0 0 20px 0;
  }

  .photos {
    display: flex;
    gap: 10px;
    .photo {
      width: 110px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  @media (max-width: 1024px) {
    .photos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .photo{
        width: 100%;
      }
    }
  }
  @media (max-width: 576px) {
    .photos {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      .photo{
        width: 70%;
      }
    }
  }
`;
