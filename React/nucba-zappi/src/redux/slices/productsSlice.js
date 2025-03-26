import { createSlice } from "@reduxjs/toolkit";
import { productsMock } from "../../mock/products";

const INITIAL_STATE = {
  productsMock: productsMock,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => {
      return state;
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
