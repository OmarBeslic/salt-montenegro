import instance from "../api_config";

const getHomepage = () => {
  return instance.get("/homepage?populate=*");
};
const getAboutUs = () => {
  return instance.get("/about-us?populate=*");
};
const sendBooking = (data) => {
  return instance.post("/bookings", {
    data,
  });
};
const getCrew = () => {
  return instance.get("/crews?populate=*");
};
const homeService = {
  getHomepage,
  sendBooking,
  getAboutUs,
  getCrew
};

export default homeService;
