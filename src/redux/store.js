import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import userReducer from "./reducers/userSlice";
import productsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
