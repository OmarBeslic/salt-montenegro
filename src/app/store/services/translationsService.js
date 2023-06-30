import axios from "axios";

const getTranslations = (page, pagination = false) => {
  const url = pagination
    ? `http://localhost:1337/api/translations?populate=*`
    : `http://localhost:1337/api/translations?pagination[page]=${page}`;

  return axios.get(url);
};

const translationsService = {
    getTranslations,
};
export default translationsService;
