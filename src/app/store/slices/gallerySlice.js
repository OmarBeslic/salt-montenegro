import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import galleryService from "../services/galleryService";

const initialState = {
  photos: null,
  loading: false,
  error: null,
};

export const getAllPhotos = createAsyncThunk("all/photos", async () => {
  const res = await galleryService.getGallery();
  const photosAll = res?.data?.data?.map((img) => ({
    id: img?.id,
    photo: `http://localhost:1337${img?.attributes?.photo?.data?.attributes?.url}`,
  }));
  return photosAll;
});

export const photoSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    cleanUpGallery: (state, action) => {
      state[action.payload] = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPhotos.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getAllPhotos.fulfilled, (state, action) => {
        return {
          ...state,
          photos: action.payload,
          loading: false,
        };
      })
      .addCase(getAllPhotos.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const {cleanUpGallery} = photoSlice.actions;

export default photoSlice.reducer;
