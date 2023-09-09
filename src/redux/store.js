import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";

export const store = configureStore({
  reducer: productsReducer,
});
