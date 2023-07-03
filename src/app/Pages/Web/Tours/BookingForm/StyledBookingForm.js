import styled from "styled-components";
export const StyledBookingForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  .tour-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0;
    p {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  @media (max-width: 576px) {
    width: 95%;
  }
`;
