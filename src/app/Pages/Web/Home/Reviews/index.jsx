import React from "react";
import { StyledReviews } from "./StyledReviews";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Review from "./Review";
import { useSelector } from "react-redux";

function Reviews() {
  SwiperCore.use([Pagination, Autoplay]);
  const notDesktop = useSelector((state) => state.layout?.device) !== "desktop";

  return (
    <StyledReviews notDesktop={notDesktop}>
      <div className="overlay-div">
        <div className="half-div">
        <span className="cursive-span">Testimonials</span>
        <h2>What our clients say about us</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      
    </StyledReviews>
  );
}

export default Reviews;
