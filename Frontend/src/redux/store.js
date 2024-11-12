import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import booksApi from "./features/cart/booksApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add the generated reducer as a specific top-level slice
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
