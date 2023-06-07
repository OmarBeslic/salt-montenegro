import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogService";
import translationsService from "../services/translationsService";

const initialState = {
  translations: null,
  loading: false,
  error: null,
};
export const getAllTranslations = createAsyncThunk("translations", async () => {
  const res = await translationsService.getTranslations();
  let formattedTranslations = [];
  res?.data?.data?.map((el) => {
    return formattedTranslations.push({
      slug: el?.attributes?.slug,
      en: el?.attributes?.en,
      me: el?.attributes?.me,
      ru: el?.attributes?.ru,
    });
  });
  return formattedTranslations;
});
export const translationSlice = createSlice({
  name: "translations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTranslations.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getAllTranslations.fulfilled, (state, action) => {
        return {
          ...state,
          translations: action.payload,
          loading: false,
        };
      })
      .addCase(getAllTranslations.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      });
  },
});

export const {} = translationSlice.actions;

export default translationSlice.reducer;
