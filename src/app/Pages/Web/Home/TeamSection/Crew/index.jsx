import React from "react";
import crew from "../../../../../../Assets/images/crew.webp";
import styled from "styled-components";

const StyledSailor = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 15px;
  /* background: rgba(255, 255, 255, 0.1); */
  box-shadow: inset 0 0 0 2000px rgba(49,112, 142,0.7);
  /* box-shadow: 0 0 3px 0px rgba(49,112, 142,0.7);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px); */
  border-radius: 4px;
  color: var(--textMain);
  h1 {
    line-height: normal;
    margin: 10px 0;
    font-size: 55px;
    color: var(--textMain);
  }
  img {
    width: 100%;
    margin: 10px 0;
  }
`;

function Sailor() {
  return (
    <StyledSailor>
      <h1>John Doe</h1>
      <p>
        We have a very high candidate success rate as well as a reputation for
        producing well trained Dive Instructors. The program is a mixture of...
      </p>
      <div className="socials"></div>
      <img src={crew} alt="" />
    </StyledSailor>
  );
}

export default Sailor;
