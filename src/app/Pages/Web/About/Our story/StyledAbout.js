import styled from "styled-components";
import seabg from "../../../../../Assets/images/seabg.webp";
export const StyledAbout = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .container {
    position: relative;
    width: 100%;
    min-height: 500px;
    padding-top: 120px;
    background: linear-gradient(
      to bottom,
      var(--primary) 80%,
      var(--backgroundMain) 20%
    );
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    .overlay-about {
      box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
      position: absolute;
      top: 0;
      width: 100%;
      height: 80%;
      background-image: url(${seabg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    & > * {
      color: var(--textMain);
    }
    .aboutus {
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
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
    .pictures-div {
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .smaller {
        width: 500px;
        height: 300px;
        margin: 15px 20px;
        border-radius: 10px;
        object-fit: cover;
      }
      .bigger {
        object-fit: cover;
        border-radius: 10px;
        margin: 15px 20px;
        height: 400px;
        width: 600px;
      }
    }
  }
  p {
    width: 60%;
    text-align: center;
    margin: 20px 0;
  }
  .crew {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 1024px) {
    .container {
      .pictures-div {
        .smaller {
          width: 350px;
          height: 250px;
        }
        .bigger {
          width: 300px;
          height: 200px;
        }
      }
    }
    p {
      width: 90%;
    }
  }
  @media (max-width: 576px) {
    .container {
      .pictures-div {
        .smaller {
          width: 300px;
          height: 200px;
        }
        .bigger {
          display: none;
        }
      }
    }
    p {
      width: 90%;
    }
    .crew {
      width: 100%;
    }
  }
`;
