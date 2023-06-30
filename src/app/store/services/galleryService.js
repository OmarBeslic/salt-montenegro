import axios from "axios";

const getGallery = () => {
  return axios.get(`http://localhost:1337/api/galleries?populate=*`);
};

const galleryService = {
    getGallery,
};
export default galleryService;
