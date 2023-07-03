import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import layoutService from "../services/layoutService";

const initialState = {
  device: "",
  modal: {
    name: null,
    isOpen: false,
    data: null,
  },
  countries: [],
  loading: false,
  error: null,
};
export const getCountryList = createAsyncThunk("all/countries", async (id) => {
  const res = await layoutService.getCountries();
  const countryData = res.data.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flags.svg,
  }));
  return countryData;
});
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    layoutChange: (state, action) => {
      const device =
        action.payload <= 576
          ? "mobile"
          : action.payload > 576 && action.payload <= 1024
          ? "tablet"
          : "desktop";
      state.device = device;
    },
    openModal: (state,action) => {
      const { name, data, isOpen } = action.payload;
      state.modal = {
        name: name,
        isOpen: isOpen,
        data: data,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountryList.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getCountryList.fulfilled, (state, action) => {
        return {
          ...state,
          countries: action.payload,
          loading: false,
        };
      })
      .addCase(getCountryList.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const { layoutChange, openModal } = layoutSlice.actions;

export default layoutSlice.reducer;
