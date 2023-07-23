import React, { useEffect } from "react";
import { StyledGallery } from "./StyledGallery";
import { useDispatch, useSelector } from "react-redux";
import { getInstaPosts } from "../../../../store/slices/gallerySlice";
import { openModal } from "../../../../store/slices/layoutSlice";
function Gallery() {
  const dispatch = useDispatch();
  const instaPosts = useSelector((state) => state.gallery?.instaPosts);
  useEffect(() => {
    dispatch(getInstaPosts());
  }, []);

  return (
    <StyledGallery>
      <span className="rock-it">#We rock it</span>
      <div className="photos">
        {instaPosts?.slice(0, 4)?.map((el, idx) => {
          return (
            <img
              src={el?.compressedMedia}
              className="photo"
              alt="Insta photo"
              title="Insta photo"
              key={idx}
              onClick={() =>
                dispatch(
                  openModal({
                    name: "image",
                    isOpen: true,
                    data: el?.compressedMedia,
                  })
                )
              }
            />
          );
        })}
      </div>
    </StyledGallery>
  );
}

export default Gallery;
