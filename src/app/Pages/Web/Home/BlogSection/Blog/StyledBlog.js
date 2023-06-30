import styled from "styled-components";

export const StyledBlog = styled.div`
  width: 95%;
  height: 200px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease-in-out;
  & > * {
    color: var(--primary);
  }
  border-bottom: 1px solid rgba(1, 32, 54, 0.3);
  .blog-picture {
    width: 180px;
    height: 100%;
    background-image: ${({ bgImg }) => `url(${bgImg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    img {
      /* flex-shrink: 0; */
      min-width: 100%;
      min-height: 100%;
    }
  }
  .blog-content {
    width: 73%;
    margin: 0 0 0 15px;
    .tittle {
      text-decoration: underline;
    }
    .by-date {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > * {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .blog {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
      margin: 20px 0;
    }
  }

  &:hover {
    cursor: pointer;
    h2 {
      color: rgb(177, 218, 231);
      transition: all 0.3s ease-in-out;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    height: unset;
    .blog-picture {
      width: 100%;
      height: 200px;
    }
    .blog-content {
      width: 100%;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    h2 {
    text-align: center;
  }
  }
 
`;
