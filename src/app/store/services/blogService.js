import instance from "../api_config";

const getAllBlogs = () => {
  const postsBaseURL = `${API_BASE_URL}/posts`;
  return instance.get(postsBaseURL);
};

const blogService = {
  getAllBlogs,
};
export default blogService;
