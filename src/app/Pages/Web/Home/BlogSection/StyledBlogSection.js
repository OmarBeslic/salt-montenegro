import styled from "styled-components";
export const StyledBlogSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: linear-gradient(
    to bottom,
    var(--backgroundMain) 85%,
    var(--primary) 15%
  );
  .container {
    margin: 50px 0 0;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    background: var(--backgroundMain);
    align-items: start;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px -20px 20px 20px;
    width: 85%;
    .left-content {
      width: 50%;
      border-right: 1px solid var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .blog-header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin-bottom: 30px;
        h2 {
          margin: 0 0 20px 0;
          color: var(--primary);
        }
        span {
          color: var(--primary);
          font-family: Great Vibes, "cursive";
          font-weight: 400;
          font-size: 30px;
        }
        .about-blogs {
          color: var(--primary);
          width: 90%;
          text-align: center;
        }
      }
      .blogs-grid {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        & > * {
          color: var(--textMain);
        }
      }
      .all-blogs-btn {
        margin: 45px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          height: 15px;
        }
      }
    }
    .right-content {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      .contact-header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .contact-form {
        width: 95%;
        min-height: 150px;
        min-height: 610px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        position: relative;
        .fields {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        button {
          margin: unset;
          position: absolute;
          bottom: 0;
        }
      }

      h2 {
        margin: 0 0 20px 0;
        color: var(--primary);
      }
      .subtitle {
        color: var(--primary);
        font-family: Great Vibes, "cursive";
        font-weight: 400;
        font-size: 30px;
      }
      p {
        color: var(--primary);
        width: 75%;
        text-align: center;
      }
    }
    button {
      width: 40%;
    }
  }
  @media (max-width: 1024px) {
    .container {
      width: 100%;
      flex-direction: column;
      align-items: center;
      .left-content {
        width: 95% !important;
        border: unset;
        margin-bottom: 20px;
      }
      .right-content {
        width: 100%;
        border-top: 1px solid rgba(1, 32, 54, 0.3);
        padding: 20px 0;
        button {
          width: unset;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .container {
      .left-content {
        .blogs-grid {
          grid-template-columns: 1fr;
        }
      }
      .right-content {
        width: 95%;
      }
    }
  }
`;
