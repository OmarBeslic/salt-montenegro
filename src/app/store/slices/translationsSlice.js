import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import translationsService from "../services/translationsService";

const initialState = {
  translations: null,
  loading: false,
  error: null,
};

export const getAllTranslations = createAsyncThunk("translations", async () => {
  const res = await translationsService.getTranslations(null, true);
  const pageCount = res?.data?.meta?.pagination?.pageCount;

  const fetchPromises = Array.from({ length: pageCount }, (_, i) =>
    translationsService.getTranslations(i + 1, false)
  );

  const responses = await Promise.all(fetchPromises);
  const allTranslations = responses.flatMap((el) => el?.data?.data || []);

  const formattedTranslations = allTranslations.map((el) => ({
    slug: el?.attributes?.slug,
    en: el?.attributes?.en,
    me: el?.attributes?.me,
    ru: el?.attributes?.ru,
  }));

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


export default translationSlice.reducer;
