import styled from "styled-components";

export const StyledReview = styled.div`
  height: 300px;
  width: 99.8%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: var(--background3); */
  .mask {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      color: var(--textMain);
    }

    .name-review {
      padding: 0 15px;
      .person {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        .country {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px 0 15px;
          img {
            width: 50px;
            margin-right: 10px;
          }
          span {
            color: var(--textMain);
          }
        }
      }
    }
    img {
      width: 100px;
    }
    .img-backg {
      height: 100%;
      width: 160px;
      background-color: var(--textMain);
      display: flex;
      margin: 0 10px;
      align-items: center;
      justify-content: center;
      img {
        width: 180px;
        margin: 10px 0;
      }
    }
  }
  @media (max-width: 576px) {
    height: 470px !important;
    .mask {
      flex-direction: column;
      .name-review {
        .person {
          align-items: center;
        }
        .review {
          text-align: center;
        }
      }
    }
  }
`;
