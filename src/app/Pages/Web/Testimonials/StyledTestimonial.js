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
  background-size: cover;
  box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
  .review {
    background-color: rgba(255,255,255,0.95);
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
      /* border: 1px solid red; */
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
        .first-fields {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: start;
          justify-content: space-between;
          .inputs {
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-between;
            width: 70%;
          }
        }
      }
    }
  }
`;
