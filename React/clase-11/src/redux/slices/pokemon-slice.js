import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../../data/initialPokemon";

const INITIAL_STATE = {
  data: initialPokemon,
  isLoading: false,
  error: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    isFetching: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
        error: false,
        isLoading: false,
      };
    },
    isError: (state) => {
      return {
        ...state,
        error: "Pokemon no enconrtado, buscá bien pa 👀",
        isLoading: false,
        data: null,
      };
    },
  },
});

export const { isFetching, fetchSuccess, isError } = pokemonSlice.actions;

export default pokemonSlice.reducer;
