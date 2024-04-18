import { configureStore } from "@reduxjs/toolkit";
import { productListApi } from "../features/productList/ProductListSlice";

export const store = configureStore({
  reducer: {
    [productListApi.reducerPath]: productListApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productListApi.middleware),
})