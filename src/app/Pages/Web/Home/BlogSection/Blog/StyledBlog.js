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
    img {
      /* flex-shrink: 0; */
      min-width: 100%;
      min-height: 100%;
    }
  }
  .blog-content {
    width: 73%;
    .tittle {
      text-decoration: underline;
    }
    .by-date {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
`;
