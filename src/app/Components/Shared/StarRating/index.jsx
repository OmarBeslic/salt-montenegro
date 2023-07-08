import React, { useState } from "react";

const StarRating = ({getStars}) => {
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarClick = (index) => {
    setSelectedStar(index);
    getStars(index)
  };
  
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            fontSize: "24px",
            cursor: "pointer",
            color:
              selectedStar !== null && index <= selectedStar ? "gold" : "gray",
          }}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
