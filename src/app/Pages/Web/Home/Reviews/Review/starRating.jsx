import React, { useState } from "react";

const StarRating = ({ numStars }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            fontSize: "24px",
            color: index <= numStars ? "var(--primary)" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
