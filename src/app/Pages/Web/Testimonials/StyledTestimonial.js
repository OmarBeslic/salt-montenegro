import styled from "styled-components";
import seabg from "../../../../Assets/images/seatough.webp";
export const StyledTestimonial = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${seabg});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
  padding-top: 100px;
  .review {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    width: 50%;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 20px 15px;
    .left-review,
    .right-review {
      width: 50%;
      height: 100%;
    }
    .left-review {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h2 {
        margin: 35px 0;
        display: flex;
        align-items: center;
        &.cursive {
          font-family: "Great Vibes", "cursive";
          font-weight: 400;
          font-size: 35px;
        }
      }
      p {
        width: 80%;
        text-align: center;
      }
      svg {
        margin: 0 0 0 15px;
      }
    }
    .right-review {
      border-left: 1px solid var(--primary);
      padding: 0 10px;

      .review-form {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .MuiTextField-root {
          width: 100% !important;
        }
        button {
          margin: unset;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .review {
      flex-direction: column;
      width: 60%;
      .left-review {
        width: 100%;
      }
      .right-review {
        width: 100%;
        border: unset;
      }
    }
  }
  @media (max-width: 576px) {
    height: unset;
    padding: 110px 0 50px;
    .review {
      flex-direction: column;
      width: 95%;
      .left-review {
        width: 100%;
      }
      .right-review {
        width: 100%;
        border: unset;
      }
    }
  }
`;
