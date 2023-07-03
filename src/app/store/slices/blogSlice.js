import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogService";
import dayjs from "dayjs";

const initialState = {
  blogs: null,
  singleBlog: null,
  loading: false,
  error: null,
};
export const getAllBlogs = createAsyncThunk("all/blogs", async (id) => {
  const res = await blogService.getAllBlogs();
  const blogsAll = res?.data?.data?.map((blog) => ({
    id: blog?.id,
    author: blog?.attributes?.author,
    published: dayjs(blog?.attributes?.createdAt).format("DD/MM/YYYY"),
    blogContent: blog?.attributes?.blogContent,
    blogContentTwo: blog?.attributes?.blogContentTwo,
    blogContentThree: blog?.attributes?.blogContentThree,
    blogTitleSlug: blog?.attributes?.blogTitleSlug,
    mainPicture: `https://salt-mne-be-s8vht.ondigitalocean.app${blog?.attributes?.mainPicture?.data?.attributes?.url}`,
    blogPicTwo: `https://salt-mne-be-s8vht.ondigitalocean.app${blog?.attributes?.blogPicTwo?.data?.attributes?.url}`,
    blogPicOne: `https://salt-mne-be-s8vht.ondigitalocean.app${blog?.attributes?.blogPicOne?.data?.attributes?.url}`,
  }));
  return blogsAll;
});

export const getSingleBlog = createAsyncThunk(
  "single/blog",
  async (id, { dispatch }) => {
    const blogs = await dispatch(getAllBlogs());
    const singleBlog = blogs?.payload?.find(
      (blog) => blog?.id === parseInt(id)
    );
    return singleBlog;
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    cleanUpBlogs: (state, action) => {
      state[action.payload] = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        return {
          ...state,
          blogs: action.payload,
          loading: false,
        };
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      })
      .addCase(getSingleBlog.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        return {
          ...state,
          singleBlog: action.payload,
          loading: false,
        };
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const {cleanUpBlogs} = blogSlice.actions;

export default blogSlice.reducer;
