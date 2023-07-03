import instance from "../api_config";

const getTranslations = (page, pagination = false) => {
  const url = pagination
    ? `/translations?populate=*`
    : `/translations?pagination[page]=${page}`;

  return instance.get(url);
};

const translationsService = {
    getTranslations,
};
export default translationsService;
