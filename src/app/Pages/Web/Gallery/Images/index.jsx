import React from "react";
import { useDispatch } from "react-redux";
//
import { openModal } from "../../../../store/slices/layoutSlice";
//
import { StyledImages } from "../StyledGallery";

function Images({ src, ...otherProps }) {
  const dispatch = useDispatch();
  return (
    <>
      <StyledImages
        {...otherProps}
        onClick={() =>
          dispatch(openModal({ name: "image", isOpen: true, data: src }))
        }
      >
        <img src={src} alt="" />
      </StyledImages>
    </>
  );
}

export default Images;
