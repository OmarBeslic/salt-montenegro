import React from "react";
import { StyledReview } from "./StyledReview";
import user from "../../../../../../Assets/images/user.webp";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function Review({ review }) {
  return (
    <StyledReview>
      <div className="mask">
        <div className="name-review">
          <div className="person">
            <h3 className="name">{`${review?.name} ${review?.lastName}`}</h3>
            <div className="country">
              <img src={review?.countryFlag} alt="Montenegro" />
              <span>{review?.country}</span>
            </div>
          </div>
          <p className="review">
            <FormatQuoteIcon className="upper-quote" />
            {review?.review}
            <FormatQuoteIcon className="down-quote" />
          </p>
        </div>
      </div>
    </StyledReview>
  );
}

export default Review;
