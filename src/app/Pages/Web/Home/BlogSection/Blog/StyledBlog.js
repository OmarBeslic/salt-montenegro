import styled from "styled-components";

export const StyledBlog = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  box-shadow: rgba(1, 32, 54, .6) 0px 0px 0px 2000px inset;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
    margin:20px 0;
  }
 
  button{
    margin:0 0 0 auto;
    &:hover {
      transform: scale(1.2);
    }
  }
  
`;
