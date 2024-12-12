import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './slices/pokemon-slice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
