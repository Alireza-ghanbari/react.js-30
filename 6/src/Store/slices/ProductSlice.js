import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    getProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const { getProductStart, getProductSuccess, getProductFail } =
  productSlice.actions;
export default productSlice.reducer;
