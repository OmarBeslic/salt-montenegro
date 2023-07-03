import instance from "../api_config";

const getAllTours = () => {
  return instance.get("/tours?populate=*");
};

const toursService = {
    getAllTours,
};
export default toursService;
