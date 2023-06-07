import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toursService from "../services/tourService";
import reviewsService from "../services/reviewsService";

const initialState = {
  reviews:null,
  loading:false,
  error:null
};
export const getAllReviews = createAsyncThunk("all/reviews", async (id) => {
  const res = await reviewsService.getAllReviews();
  return res.data
});
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state,action) => {
       return{
        ...state,
        loading:true
       }
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        return{
          ...state,
          tours:action.payload,
          loading:false
         }
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        return{
          ...state,
          error:action.payload,
          loading:false
         }
      });
  },
});

export const {  } = reviewsSlice.actions;

export default reviewsSlice.reducer;
