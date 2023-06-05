import styled from "styled-components";
import rods from "../../../../../Assets/images/rods.webp";
export const StyledBlogSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background-image: url(${rods}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 0 0 50px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: start;

    width: 100%;
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
          width: 75%;
          text-align: center;
        }
      }
      .blogs-grid {
        display: grid;
        grid-template-columns: 350px 350px;
        place-content: center;
        place-items: center;
        gap: 15px;
        & > * {
          color: var(--textMain);
        }
      }
      .all-blogs-btn {
        margin: 45px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
          height: 15px;
        }
      }
    }
    .right-content {
      width: 40%;
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
        margin-bottom: 100px;
      }

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
      p {
        color: var(--primary);
        width: 75%;
        text-align: center;
      }
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
      .right-content{
        width: 95%;
      }
    }
  }
  @media (max-width: 576px) {
    .container {
     
      .left-content {
       
        .blogs-grid {
          grid-template-columns: 1fr ;
        }
      }
      .right-content{
        width: 95%;
      }
    }
  }
`;
