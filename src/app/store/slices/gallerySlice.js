import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import galleryService from "../services/galleryService";
import { convertToCompressedWebP } from "../../../FormFields/helpers";

const initialState = {
  photos: null,
  instaPosts: null,
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

export const getInstaPosts = createAsyncThunk("all/instPhotos", async () => {
  try {
    const res = await galleryService.getInstaPosts();

    // Convert each Instagram image link to a compressed WebP image file
    const convertedData = await Promise.all(
      res.data?.data?.map(async (el) => {
        const compressedBlob = await convertToCompressedWebP(el?.media_url);
        const file = new File([compressedBlob], "insta_photo.webp", {
          type: "image/webp",
        });
        return { ...el, compressedMedia: URL.createObjectURL(file) };
      })
    );

    return convertedData;
  } catch (error) {
    // Handle errors, e.g., show error message or handle retries
    throw new Error("Error fetching Instagram photos: " + error.message);
  }
});

export const photoSlice = createSlice({
  name: "photos",
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
      })
      .addCase(getInstaPosts.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getInstaPosts.fulfilled, (state, action) => {
        return {
          ...state,
          instaPosts: action.payload,
          loading: false,
        };
      })
      .addCase(getInstaPosts.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const { cleanUpGallery } = photoSlice.actions;

export default photoSlice.reducer;
