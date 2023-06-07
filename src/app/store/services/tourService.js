import axios from "axios";

const getAllTours = () => {
  return axios.get("http://localhost:1337/api/tours");
};

const toursService = {
    getAllTours,
};
export default toursService;