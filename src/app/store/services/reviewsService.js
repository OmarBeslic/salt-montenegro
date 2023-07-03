import instance from "../api_config";

const getAllReviews = () => {
  return instance.get("/reviews");
};
const postReview = (data) => {
  return instance.post("/reviews", {
    data,
  });
};

const reviewsService = {
  getAllReviews,
  postReview,
};
export default reviewsService;
