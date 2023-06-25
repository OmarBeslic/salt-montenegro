import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toursService from "../services/tourService";
import reviewsService from "../services/reviewsService";

const initialState = {
  reviews: null,
  loading: false,
  error: null,
};
export const getAllReviews = createAsyncThunk("all/reviews", async (id) => {
  const res = await reviewsService.getAllReviews();
  return res.data;
});
export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (data) => {
    const res = await reviewsService.postReview(data);
    return res.data;
  }
);
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        let review = action?.payload?.data?.map((el) => {
          const { name, lastName, userPhoto, country, countryFlag, review } =
            el?.attributes;
          return {
            name: name,
            lastName: lastName,
            userPhoto: userPhoto,
            country: country,
            countryFlag: countryFlag,
            review,
          };
        });
        return {
          ...state,
          reviews: review,
          loading: false,
        };
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const {} = reviewsSlice.actions;

export default reviewsSlice.reducer;
