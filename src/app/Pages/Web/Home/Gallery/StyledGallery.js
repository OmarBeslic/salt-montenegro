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
      border: 1px solid blue;
      height: 100px;
      width: 100px;
    }
  }
  @media (max-width: 1024px) {
  }
`;
