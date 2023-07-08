import React from "react";
import { StyledGallery } from "./StyledGallery";
function Gallery() {
  return (
    <StyledGallery>
      <span className="rock-it">#We rock it</span>
      <div className="photos">
        <div className="photo">Photo</div>
        <div className="photo">Photo</div>
        <div className="photo">Photo</div>
        <div className="photo">Photo</div>
      </div>
    </StyledGallery>
  );
}

export default Gallery;
