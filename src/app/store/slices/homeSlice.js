import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeService from "../services/homeService";

const initialState = {
  homeForm: null,
  homepage: null,
  loading: false,
  error: null,
};
export const getHomepage = createAsyncThunk("single/home", async (id) => {
  const res = await homeService.getHomepage();
  return res.data?.data?.attributes;
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
            homeHeaderBackground: `http://localhost:1337${action.payload?.homeHeaderBackground?.data?.attributes?.url}`,
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
      });
  },
});

export const { populateHomeForm,cleanUpHome } = homeSlice.actions;

export default homeSlice.reducer;
