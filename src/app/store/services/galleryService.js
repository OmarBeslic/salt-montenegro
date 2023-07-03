import instance from "../api_config";

const getGallery = () => {
  return instance.get(`/galleries?populate=*`);
};

const galleryService = {
    getGallery,
};
export default galleryService;
