import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartOpen: false,
  total: 0,
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.product_price.replace("$", "")) * item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.asin === action.payload.asin
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.total = calculateTotal(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.asin === action.payload.asin
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity--;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }

      state.total = calculateTotal(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCart } =
  cartSlice.actions;
export default cartSlice.reducer;
