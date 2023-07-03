import styled from "styled-components";
import seabg from "../../../../../Assets/images/seabg.webp";

export const StyledSingleBlog = styled.div`
  padding: 116px 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${seabg});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
  .blog-container {
    width: 85%;
    min-height: 500px;
    background: var(--backgroundMain);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;
    border-radius: 10px;
    margin: 30px 0;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);

    .blog-value {
      width: 70%;
      height: 100%;
      margin-bottom: 20px;
      img {
        max-width: 100%;
        border-radius: 10px;
      }
      p {
        text-align: center;
      }
      h2 {
        text-align: center;
        margin: 10px 0;
      }

      .author-date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        margin: 0 0 20px;
        span {
          font-size: 13;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    .blog-paired {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
      img {
        width: 350px;
        border-radius: 10px;
      }
      &.left,
      &.right {
        display: flex;
        align-items: start;
        justify-content: center;
        p {
          margin: 0 20px;
        }
      }
      &.right {
        flex-direction: row-reverse;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row-reverse;
      svg {
        margin: 0 10px 0 0;
        transform: rotate(180deg);
      }
    }
  }
  @media (max-width: 1024px) {
    .blog-value {
      width: 95%;
    }
    .blog-paired {
      width: 95% !important;
    }
  }
  @media (max-width: 1024px) {
    .blog-paired {
      flex-direction: column !important;
      img {
        margin: 15px 0;
      }
    }
  }
`;
