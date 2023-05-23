import styled from "styled-components";

export const StyledBlogSection = styled.div`
width: 100%;
  .blog-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 0 2000px rgba(1, 32, 54, 0.5);
    height: 300px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;
    h2 {
      margin: 20px 0;
      color: var(--textMain);
    }
    span {
      color: var(--textMain);
      font-family: Great Vibes, "cursive";
      font-weight: 400;
      font-size: 30px;
    }
    .about-blogs {
      color: var(--textMain);
      width: 50%;
      text-align: center;
    }
  }
`;
