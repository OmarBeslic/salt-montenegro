import styled from "styled-components";

export const StyledGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  min-height: 500px;
  box-shadow: inset 0 0 0 2000px rgba(1, 32, 54, 0.5);
  .rock-it {
    color: var(--textMain);
    font-family: "Great Vibes", "cursive";
    font-weight: 400;
    font-size: 30px;
    margin:0 0 20px 0;
  }
  
  .photos {
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    .photo {
      border: 1px solid blue;
      height: 180px;
      width: 180px;
    }
  }
  @media (max-width: 1024px) {

    
  }
  
`;
