import styled from "styled-components";

export const StyledReview = styled.div`
  width: 99.8%;
  display: flex;
  align-items: center;
  justify-content: center;
  .mask {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding:20px 10px;
    border-radius: 8px;
    background: #fff;

    & > * {
      color: var(--primary);
    }

    .name-review {
      padding: 0 15px;
      display: flex;
      width: 90%;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      min-height: 170px;
      .person {
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        .country {
          margin: 0 0 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 50px;
            margin-right: 10px;
          }
          span {
            color: var(--primary);
          }
        }
      }

      .review {
        text-align: start;
        min-height: 100px;
        max-height:150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        .upper-quote {
          margin: 0 auto 0 0;
          transform: rotate(180deg);
          opacity: 0.4;
        }
        .down-quote {
          margin: 0 0 0 auto;
          opacity: 0.4;
        }
      }
    }
    img {
      width: 100px;
    }
    .img-backg {
      height: 100%;
      width: 160px;
      display: flex;
      margin: 0 10px;
      align-items: center;
      justify-content: center;
      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 20px 3px;
        margin: 10px 0;
        border-radius: 10px;
        position: absolute;
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
