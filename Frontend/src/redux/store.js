import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import booksApi from "./features/books/booksApi";
import ordersApi from "./features/orders/orderApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add the generated reducer as a specific top-level slice
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})
