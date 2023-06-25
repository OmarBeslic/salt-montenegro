import axios from "axios";

const getHomepage = () => {
  return axios.get("http://localhost:1337/api/homepage?populate=*");
};

const homeService = {
    getHomepage,
};
export default homeService;
