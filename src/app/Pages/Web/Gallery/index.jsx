import React from "react";
import { useTranslation } from "react-i18next";
import { StyledGallery } from "./StyledGallery";
import Page from "../../../Components/User/Page";
import Images from "./Images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  cleanUpGallery,
  getAllPhotos,
} from "../../../store/slices/gallerySlice";
import { useState } from "react";
import { useRef } from "react";
import { getClassName } from "../../../../FormFields/helpers";
import { useInfiniteScroll } from "../../../../Hooks/useInfiniteScroll";
import { CircularProgress } from "@mui/material";

function Gallery() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const divRef = useRef(null);
  const gallery = useSelector((state) => state?.gallery?.photos);
  const [pageNum, setPageNum] = useState(10);

  const { pageData, isLoading } = useInfiniteScroll(gallery, pageNum);

  useEffect(() => {
    dispatch(getAllPhotos());
    return () => {
      dispatch(cleanUpGallery("photos"));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = divRef.current;
      if (divElement) {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const isScrolledToBottom =
          scrollTop + clientHeight >= scrollHeight - 0.8;
        if (isScrolledToBottom) {
          gallery?.length !== pageData?.length && setPageNum(pageNum + 10);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNum]);

  return (
    <Page
      title={t("nav.gallery")}
      meta="Immerse yourself in the captivating visuals of Montenegro's scenic wonders at Salt Montenegro's gallery. Browse through stunning photographs and breathtaking images showcasing the beauty of our fishing tours, panoramic adventures, taxi boat services, picnic tours, and romantic excursions. Get inspired, envision your next adventure, and let the visuals transport you to the remarkable world of Salt Montenegro"
      keywords="gallery, photographs, images, scenic wonders, fishing tours, panorama tours, taxi boat services, picnic tours, romantic excursions, Salt Montenegro, visual inspiration, adventure, beauty of Montenegro, montenegro fishing,montenegro tours"
    >
      <StyledGallery>
        <div className="gallery-header">
          <span>Gallery</span>
          <h2>Some photos we made</h2>
        </div>
        <div className="grid-wrapper" ref={divRef}>
          {pageData?.map((el, idx) => {
            return (
              <Images
                src={el?.photo}
                className={getClassName(idx)}
                key={el?.id}
              />
            );
          })}
        </div>
        {isLoading ? (
          <CircularProgress sx={{ margin: "20px 0", color: "#012036" }} />
        ) : null}
      </StyledGallery>
    </Page>
  );
}

export default Gallery;
