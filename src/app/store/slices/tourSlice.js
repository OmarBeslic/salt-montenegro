import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toursService from "../services/tourService";

const initialState = {
  tours: null,
  singleTour: null,
  loading: false,
  error: null,
};

export const getAllTours = createAsyncThunk("all/tours", async (id) => {
  const res = await toursService.getAllTours();
  const formattedTours = res?.data?.data.map((el) => ({
    id: el?.id,
    tourName: el?.attributes?.tourNameSlug,
    shortDesc: el?.attributes?.tourShortDescSlug,
    longDesc: el?.attributes?.tourLongDescSlug,
    price: el?.attributes?.tourPrice,
    people: el?.attributes?.peopleCount,
    tourDuration: el?.attributes?.tourDuration,
    coverPicture: `http://localhost:1337${el?.attributes?.thumbnailCoverPic?.data?.attributes?.url}`,
    images: el?.attributes?.tourPhotos?.data?.map(
      (el) => `http://localhost:1337${el?.attributes?.url}`
    ),
  }));
  return formattedTours;
});
export const getSingleTour = createAsyncThunk(
  "single/tour",
  async (id, { dispatch }) => {
    const tours = await dispatch(getAllTours());
    const singleTour = tours?.payload?.find(
      (tour) => tour?.id === parseInt(id)
    );
    return singleTour;
  }
);

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    cleanUpSingle: (state, action) => {
      state.singleTour = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTours.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getAllTours.fulfilled, (state, action) => {
        return {
          ...state,
          tours: action.payload,
          loading: false,
        };
      })
      .addCase(getAllTours.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      })
      .addCase(getSingleTour.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getSingleTour.fulfilled, (state, action) => {
        return {
          ...state,
          singleTour: action.payload,
          loading: false,
        };
      })
      .addCase(getSingleTour.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const { cleanUpSingle } = toursSlice.actions;

export default toursSlice.reducer;
