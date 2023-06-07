import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogService";

const initialState = {
  blogs:null,
  loading:false,
  error:null
};
export const getAllBlogs = createAsyncThunk("all/blogs", async (id) => {
  const res = await blogService.getAllBlogs();
  return res.data
});
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state,action) => {
       return{
        ...state,
        loading:true
       }
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        return{
          ...state,
          blogs:action.payload,
          loading:false
         }
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        return{
          ...state,
          error:action.payload,
          loading:false
         }
      });
  },
});

export const {  } = blogSlice.actions;

export default blogSlice.reducer;
