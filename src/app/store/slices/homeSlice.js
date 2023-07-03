import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeService from "../services/homeService";

const initialState = {
  homeForm: null,
  homepage: null,
  aboutUs: null,
  crew: null,
  loading: false,
  error: null,
};
export const getHomepage = createAsyncThunk("single/home", async () => {
  const res = await homeService.getHomepage();
  return res.data?.data?.attributes;
});

export const getAboutUs = createAsyncThunk("single/aboutUs", async () => {
  const res = await homeService.getAboutUs();
  return res.data?.data?.attributes;
});

export const sendBooking = createAsyncThunk(
  "booking/sendBooking",
  async (data) => {
    const res = await homeService.sendBooking(data);
    return res.data;
  }
);

export const getCrew = createAsyncThunk("crew/all", async () => {
  const res = await homeService.getCrew();
  const sailor = res?.data?.data?.map((el) => ({
    id: el?.id,
    name: el?.attributes?.name,
    aboutSailor: el?.attributes?.aboutSailor,
    sailorFb: el?.attributes?.sailorFb,
    sailorInsta: el?.attributes?.sailorInsta,
    sailorWA: el?.attributes?.sailorWA,
    sailorPhoto: `https://salt-mne-be-s8vht.ondigitalocean.app${el?.attributes?.sailorPhoto?.data?.attributes?.url}`,
  }));
  return sailor;
});

export const homeSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    populateHomeForm: (state, action) => {
      const { name, value, label } = action.payload;
      return {
        ...state,
        homeForm: {
          ...state.homeForm,
          [name]: {
            label,
            value,
          },
        },
      };
    },
    cleanUpHome: (state, action) => {
      state[action.payload] = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomepage.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getHomepage.fulfilled, (state, action) => {
        return {
          ...state,
          homepage: {
            ...action.payload,
            homeHeaderBackground: `https://salt-mne-be-s8vht.ondigitalocean.app${action.payload?.homeHeaderBackground?.data?.attributes?.url}`,
          },
          loading: false,
        };
      })
      .addCase(getHomepage.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      })
      .addCase(getAboutUs.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getAboutUs.fulfilled, (state, action) => {
        return {
          ...state,
          aboutUs: {
            ...action.payload,
            smallerPhoto: `https://salt-mne-be-s8vht.ondigitalocean.app${action.payload?.smallerPhoto?.data?.attributes?.url}`,
            biggerPhoto: `https://salt-mne-be-s8vht.ondigitalocean.app${action.payload?.biggerPhoto?.data?.attributes?.url}`,
          },
          loading: false,
        };
      })
      .addCase(getAboutUs.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      })
      .addCase(getCrew.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getCrew.fulfilled, (state, action) => {
        return {
          ...state,
          crew: action.payload,

          loading: false,
        };
      })
      .addCase(getCrew.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const { populateHomeForm, cleanUpHome } = homeSlice.actions;

export default homeSlice.reducer;
