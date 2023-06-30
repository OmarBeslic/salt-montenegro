import styled from "styled-components";

export const StyledSingleBlog = styled.div`
  background: var(--primary);
  padding: 116px 0 0 0;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  .blog-header {
    position: relative;
    width: 100%;
    min-height: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    .blog-title {
      min-height: 15vh;
      margin: 50px 0;
      color: var(--textMain);
      font-family: "Great Vibes", "cursive";
      font-weight: 400;
      font-size: 30px;
      display: flex;
      align-items: start;
      justify-content: center;
    }
  }
  .blog-container {
    width: 100%;
    min-height: 500px;
    background: var(--backgroundMain);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;
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
      /* border: 1px solid purple; */
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
    .blog-value{
      width: 95%;
    }
    .blog-paired{
      width: 95% !important;
    }
  }
  @media (max-width: 1024px) {
    .blog-paired{
      flex-direction: column !important;
      img{
        margin: 15px 0;
      }
    }
  }
`;
