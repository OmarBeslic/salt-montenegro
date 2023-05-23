import styled from "styled-components";

export const StyledSectionAbout = styled.div`
  height: 800px;
  width: 100vw;
  position: relative;
  background: var(--backgroundMain);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin: 50px 0;
  .about-content {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-content {
      flex-direction: column;
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .photos-div {
        /* border: 1px solid red; */
        width: 100%;
        height: 48%;
        display: flex;
        align-items: center;
        justify-content: center;

        .photo-left {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          .photo-up {
            height: 50%;
            width: 100%;
            display: flex;
            align-items: start;
            justify-content: space-around;
            margin: 0 auto;
            overflow: hidden;
            img {
              height: 80%;
              transition: 0.5s all ease-in-out;
            }
            .fish {
              &:hover {
                transform: scale(1.2);
              }
            }
          }
          .photo-down {
            height: 50%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            overflow: hidden;
            img {
              height: 100%;
              transition: 0.5s all ease-in-out;
              &:hover {
                transform: scale(1.2);
              }
            }
          }
        }
        .photo-right {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          overflow: hidden;

          img {
            height: 100%;
            transition: 0.5s all ease-in-out;
            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
      .about-desc-div {
        width: 100%;
        height: 50%;
        padding: 20px 40px;
        display: flex;
      align-items: start;
      flex-direction: column;
        &>*{
          color: var(--primary);
        }
        span{
          margin: 20px 0 0;
          text-align: left;
          width: 100%;
          font-family: Great Vibes, 'cursive';
          font-weight: 400;
          font-size: 30px;
        }
        h1{
          margin: 20px 0;
          line-height: normal;
          text-align: left;
          width: 100%;
          
        }
        p{
          width: 80%;
          text-align: left;
        }
      }
    }
    
  }
  .rudder {
    position: absolute;
    bottom: -210px;
    right: 20px;
    animation: rotate 30s linear infinite !important;
    z-index: 2;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
