import styled from "styled-components";

export const StyledTour = styled.div`
  width: 450px;
  min-height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.2 );
  transition: all 0.3s ease-in-out;
  background: #fff;
  z-index: 1;
  &:hover {
    transform: scale(1.0125);
    box-shadow: rgb(190, 190, 190) 0px 1px 9px 5px;
  }

 
  img {
    height: 150px;
    margin: 10px 0;
  }
  .tour-description {
    margin-top: 20px;
  }
  .price-duration {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    span{
        font-weight: 700;
    }
  }
`;
