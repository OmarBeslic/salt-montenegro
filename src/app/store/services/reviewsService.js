import axios from "axios";

const getAllReviews = () => {
  return axios.get("http://localhost:1337/api/reviews");
};
const postReview = (data) => {
  return axios.post("http://localhost:1337/api/reviews", {
    data,
  });
};

const reviewsService = {
  getAllReviews,
  postReview,
};
export default reviewsService;
