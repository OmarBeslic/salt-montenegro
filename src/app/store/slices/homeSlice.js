import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeForm: null,
};
// export const getCountryList = createAsyncThunk("all/countries", async (id) => {
//   const res = await layoutService.getCountries();
//   return res.data
// });
export const homeSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    populateHomeForm: (state, action) => {
      const { name, value, label } = action.payload;
      console.log(name, value, label, "storeProps");
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
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getCountryList.pending, (state,action) => {
    //    return{
    //     ...state,
    //     loading:true
    //    }
    //   })
    //   .addCase(getCountryList.fulfilled, (state, action) => {
    //     return{
    //       ...state,
    //       countries:action.payload,
    //       loading:false
    //      }
    //   })
    //   .addCase(getCountryList.rejected, (state, action) => {
    //     return{
    //       ...state,
    //       error:action.payload,
    //       loading:false
    //      }
    //   });
  },
});

export const { populateHomeForm } = homeSlice.actions;

export default homeSlice.reducer;
