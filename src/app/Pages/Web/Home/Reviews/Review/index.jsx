import React from "react";
import { StyledReview } from "./StyledReview";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarRating from "./starRating";
function Review({ review }) {
  return (
    <StyledReview>
      <div className="mask">
        <div className="name-review">
          <div className="person">
            <h3 className="name">{`${review?.name} ${review?.lastName}`}</h3>
            <div className="country">
              <img src={review?.countryFlag} alt="Country" title="Country" />
              <span>{review?.country}</span>
            </div>
          </div>
          <StarRating numStars={review?.rating} />
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
