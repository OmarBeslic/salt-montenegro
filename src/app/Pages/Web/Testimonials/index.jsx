import React from "react";
import Page from "../../../Components/User/Page";
import { useTranslation } from "react-i18next";
import { StyledTestimonial } from "./StyledTestimonial";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WriteReview from "./WriteReview";

function Testimonials() {
  const { t } = useTranslation();
  return (
    <Page
      title={t("nav.testimonials")}
      meta="Discover the heartfelt experiences shared by our satisfied customers at Salt Montenegro. Read testimonials and reviews about our exceptional fishing tours, panoramic adventures, taxi boat services, picnic tours, and romantic excursions. Gain insights into the unforgettable moments and cherished memories created by our dedicated team. Join us and be a part of the Salt Montenegro success story"
      keywords="customer testimonials, reviews, fishing tours, panorama tours, taxi boat services, picnic tours, romantic excursions, Salt Montenegro, customer satisfaction, memorable experiences, cherished memories"
    >
      <StyledTestimonial>
        <div className="review">
          <div className="left-review">
            <h2 className="cursive">Leave a review</h2>
            <p>
              You had beutiful experience, some complaints or just want to share
              your experience with us?{" "}
            </p>
            <h2>
              Let other people see it <ArrowForwardIosIcon />
            </h2>
          </div>
          <div className="right-review">
            <WriteReview />
          </div>
        </div>
      </StyledTestimonial>
    </Page>
  );
}

export default Testimonials;
