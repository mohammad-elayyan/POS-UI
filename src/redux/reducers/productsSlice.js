import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    searchInProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((product) =>
        product.product_title.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setProducts, searchInProducts } = productsSlice.actions;
export default productsSlice.reducer;
