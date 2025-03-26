import { createSlice } from "@reduxjs/toolkit";
import { productsMock } from "../../mock/products";

const generateRandomRecommended = (count) => {
  const recommended = [];
  // Set para evitar duplicados
  const usedIds = new Set();

  // Mientras la cantidad de recomendados sea menor a la cantidad deseada
  while (recommended.length < count) {
    // Generamos un índice aleatorio
    const randomIndex = Math.floor(Math.random() * productsMock.length);
    // Obtenemos un producto aleatorio
    const product = { ...productsMock[randomIndex] };

    // Si el producto no ha sido usado, lo agregamos a la lista de recomendados
    if (!usedIds.has(product.id)) {
      // Agregamos el producto a la lista de recomendados
      recommended.push(product);
      // Agregamos el ID del producto a la lista de IDs usados
      usedIds.add(product.id);
    }
  }

  // Retornamos la lista de recomendados
  return [...recommended];
};

const INITIAL_STATE = {
  recommended: generateRandomRecommended(4),
};

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: INITIAL_STATE,
  reducers: {
    randomRecommended: (state) => {
      state.recommended = generateRandomRecommended(4);
    },
  },
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;
