import React from "react";
import { StyledGallery } from "./StyledGallery";
import seawatch from "../../../../../Assets/images/seawatch.webp"
function Gallery() {
  return (
    <StyledGallery>
      <span className="rock-it">#We rock it</span>
      {/* <h2>Gallery</h2> */}
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
