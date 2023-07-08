import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../store/slices/layoutSlice";
//
import { Pagination, Autoplay, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function TourSlider({ images }) {
  const dispatch = useDispatch();

  const sliderSettings = {
    modules: [Autoplay, Scrollbar, A11y, Pagination],
    spaceBetween: 1,
    initialSlide: 1,
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <Swiper {...sliderSettings}>
      {images?.map((el, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img
              src={el}
              alt="Slider images"
              title="Slide"
              onClick={() =>
                dispatch(
                  openModal({
                    name: "image",
                    isOpen: true,
                    data: el,
                  })
                )
              }
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default TourSlider;
