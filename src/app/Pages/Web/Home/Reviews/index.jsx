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
import { useDispatch, useSelector } from "react-redux";
import useTranslate from "../../../../../Hooks/useTranslate";
import { useEffect } from "react";
import { getAllReviews } from "../../../../store/slices/reviewsSlice";

function Reviews() {
  SwiperCore.use([Pagination, Autoplay]);
  const dispatch = useDispatch();
  const notDesktop = useSelector((state) => state.layout?.device) !== "desktop";
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);
  const reviews = useSelector((state) => state.reviews?.reviews);

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);
  return (
    <StyledReviews notDesktop={notDesktop}>
      <div className="overlay-div">
        <div className="half-div">
          <span className="cursive-span">{p(home?.homeReviewSubtitle)}</span>
          <h2>{p(home?.homeReviewTitle)}</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
          >
            {reviews?.map((el) => {
              return (
                <SwiperSlide>
                  <Review review={el} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </StyledReviews>
  );
}

export default Reviews;
