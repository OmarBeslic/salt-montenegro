import instance from "../api_config";


const getAllBlogs = () => {
  return instance.get(`/blogs?populate=*`);
};

const blogService = {
  getAllBlogs,
};
export default blogService;
