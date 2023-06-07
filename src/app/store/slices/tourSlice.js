import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toursService from "../services/tourService";

const initialState = {
  tours:null,
  loading:false,
  error:null
};
export const getAllTours = createAsyncThunk("all/tours", async (id) => {
  const res = await toursService.getAllTours();
  return res.data
});
export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTours.pending, (state,action) => {
       return{
        ...state,
        loading:true
       }
      })
      .addCase(getAllTours.fulfilled, (state, action) => {
        return{
          ...state,
          tours:action.payload,
          loading:false
         }
      })
      .addCase(getAllTours.rejected, (state, action) => {
        return{
          ...state,
          error:action.payload,
          loading:false
         }
      });
  },
});

export const {  } = toursSlice.actions;

export default toursSlice.reducer;
