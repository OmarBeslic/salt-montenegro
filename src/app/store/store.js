import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import layoutSlice from './slices/layoutSlice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
  },
});
