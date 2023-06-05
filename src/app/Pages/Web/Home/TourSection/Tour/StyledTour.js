import styled from "styled-components";

export const StyledTour = styled.div`
  width: 350px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  background: #fff;
  z-index: 1;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > * {
    color: var(--textMain);
  }

  h3 {
    font-size: 50px;
  }
  button {
    margin: 0 0 0 auto;
    &:hover {
      transform: scale(1.2);
    }
  }

  box-shadow: rgba(1, 32, 54, 0.8) 0px 0px 0px 2000px inset;
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
    .tour-description {
      margin-top: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
      
    }h2{
        width:100%;
      }
    .price-duration {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
      span {
        font-weight: 700;
      }
    }
  }
`;
