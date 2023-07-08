import styled from "styled-components";

export const StyledTour = styled.div`
  width: 350px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  background: var(--backgroundMain);
  z-index: 1;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > * {
    color: var(--textMain);
  }

  h2 {
    font-size: 20px;
  }
  button {
    margin: 0 0 0 auto;
    &:hover {
      transform: scale(1.2);
    }
  }

  box-shadow: rgba(1, 32, 54, 0.3) 0px 0px 0px 2000px inset;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all 0.3s ease-in-out;
  .show {
    transition: all 0.3s ease-in-out;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    padding: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    .tour-description {
      margin-top: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    h2 {
      width: 100%;
    }
    .price-duration {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
      span {
        display: flex;
        font-weight: 700;
        align-items: center;
        justify-content: center;
        svg {
          margin: 0 5px 0 0;
        }
      }
    }
  }
`;
