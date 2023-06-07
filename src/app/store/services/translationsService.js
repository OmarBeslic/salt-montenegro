import axios from "axios";

const getTranslations = () => {
  return axios.get("http://localhost:1337/api/translations");
};

const translationsService = {
    getTranslations,
};
export default translationsService;
