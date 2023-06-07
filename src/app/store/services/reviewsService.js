import axios from "axios";

const getAllReviews = () => {
  return axios.get("http://localhost:1337/api/reviews");
};

const reviewsService = {
    getAllReviews,
};
export default reviewsService;
