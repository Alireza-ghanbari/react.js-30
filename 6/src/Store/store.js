import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import ProductSlice from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: ProductSlice,
  },
});

export default store;
