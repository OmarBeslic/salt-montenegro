import axios from "axios";
import instance from "../api_config";

const getGallery = () => {
  return instance.get(`/galleries?populate=*`);
};
const getInstaPosts = () => {
  return axios.get(
    `https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJWOWxwYi1SeFQtNXQyVUtfbERNZAWRHcHA2YXZAMVnVuU21SRGx3cVNaNWJUR2VTdVpoeUFVbG9iV3o1dTFKZAFFQOUNmeVRJWVQ2VlBTSS1GTUJhcU92RHJBb0dwNnp6S2dLM19UTVUwZAm5veUJscQZDZD`
  );
};

const galleryService = {
  getGallery,getInstaPosts
};
export default galleryService;
