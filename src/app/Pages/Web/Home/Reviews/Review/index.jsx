import React from "react";
import { StyledReview } from "./StyledReview";
import crew from "../../../../../../Assets/images/crew.webp";

function Review() {
  return (
    <StyledReview>
      <div className="mask">
        <div className="img-backg">
          <img src={crew} alt="" />
        </div>
        <div className="name-review">
          <div className="person">
            <h3 className="name">Omar Beslic</h3>
            <div className="country">
              <img src="https://flagcdn.com/me.svg" alt="Montenegro" />
              <span>Montenegro</span>
            </div>
          </div>
          <p className="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            aspernatur, dolorum dolore assumenda vero sint nisi laborum quis
            tenetur aspernatur
            
          </p>
        </div>
      </div>
    </StyledReview>
  );
}

export default Review;
