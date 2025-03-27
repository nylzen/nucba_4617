import { createSlice } from "@reduxjs/toolkit";
import { categoriesMock } from "../../mock/categories";

const INITIAL_STATE = {
  categories: categoriesMock,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
  },
});

export const { getCategories, selectCategory, resetSelectedCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
