import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";
import homeSlice from "./slices/homeSlice";
import blogSlice from "./slices/blogSlice";
import translationsSlice from "./slices/translationsSlice";
import tourSlice from "./slices/tourSlice";
import reviewsSlice from "./slices/reviewsSlice";
import gallerySlice from "./slices/gallerySlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    home: homeSlice,
    blogs: blogSlice,
    translations: translationsSlice,
    tours: tourSlice,
    reviews: reviewsSlice,
    gallery:gallerySlice
  },
});
