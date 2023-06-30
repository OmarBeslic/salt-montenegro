import axios from "axios";

const getAllBlogs = () => {
  return axios.get("http://localhost:1337/api/blogs?populate=*");
};

const blogService = {
  getAllBlogs,
};
export default blogService;
