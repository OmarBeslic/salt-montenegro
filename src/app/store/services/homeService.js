import axios from "axios";

const getHomepage = () => {
  return axios.get("http://localhost:1337/api/homepage?populate=*");
};
const getAboutUs = () => {
  return axios.get("http://localhost:1337/api/about-us?populate=*");
};
const sendBooking = (data) => {
  return axios.post("http://localhost:1337/api/bookings", {
    data,
  });
};
const getCrew = () => {
  return axios.get("http://localhost:1337/api/crews?populate=*");
};
const homeService = {
  getHomepage,
  sendBooking,
  getAboutUs,
  getCrew
};

export default homeService;
