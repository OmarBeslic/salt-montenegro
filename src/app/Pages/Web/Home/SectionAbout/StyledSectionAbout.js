import styled from "styled-components";

export const StyledSectionAbout = styled.div`
  height: 440px;
  width: 100vw;
  position: relative;
  background: var(--backgroundMain);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin: 50px 0;
  
  .about-content {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .anchor{
    position: absolute;
    right: 0;
    bottom: 0;
  }
    .left-content {
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: space-between;
      .photos-div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;

        .photo-left {
          /* width: 50%; */
          height: 100%;
          display: flex;
          align-items: end;
          flex-direction: column;
          justify-content: center;
          margin: 0 20px 0 0;
          img{
            width: 200px;
            padding: 5px 0;
          }
        }
        .photo-right {
          margin: 0 20px 0 0;
          /* width: 50%; */
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          img {
            height: 425px;
            transition: 0.5s all ease-in-out;
          }
        }
      }
      .about-desc-div {
        width: 100%;
        padding: 0 40px;
        display: flex;
        align-items: start;
        flex-direction: column;
        & > * {
          color: var(--primary);
        }
        span {
          margin: 20px 0 0;
          text-align: center;
          width: 100%;
          font-family: Great Vibes, "cursive";
          font-weight: 400;
          font-size: 30px;
        }
        h1 {
          margin: 20px 0;
          line-height: normal;
          text-align: center;
          width: 100%;
        }
        p {
          /* width: 80%; */
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    height: 100%;
    margin: 0 0 50px;
    .about-content {
      width: 100%;
      justify-content: center;
      .left-content {
        width: 90% !important;
        flex-direction: column-reverse;
        .photos-div {
          margin-top: 20px;
          .photo-left,
          .photo-right {
            width: 100% !important;
            img {
              padding: 10px;
              /* height: 150px !important; */
            }
          }
        }
        .about-desc-div {
          padding: unset;
          align-items: center;
          h1 {
            font-size: 40px;
          }
          p {
            width: unset;
          }
          & > * {
            text-align: center !important;
          }
        }
      }
    }
    .rudder {
      width: 200px;
      bottom: -195px;
      
      z-index: 1;
    }
  }
  @media (max-width: 576px) {
    .photos-div{
      flex-direction: column;
      justify-content: center !important;
      img{
        width: 100% !important;
      }
      .photo-left,.photo-right{
        margin: 0 !important;
      }
    }
  }
`;
