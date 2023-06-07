import axios from "axios";

const getAllBlogs = () => {
  return axios.get("http://localhost:1337/api/blogs");
};

const blogService = {
  getAllBlogs,
};
export default blogService;
