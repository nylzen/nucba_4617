import { appState } from "../data/data";
import { addProduct } from "../cart/cart";
import {
  productsContainer,
  categoriesContainer,
  showMoreBtn,
} from "./elements";

import { createProductTemplate } from "./templateHTML";
import { applyFilter } from "./filters";

// Función de renderizado de los productos
export const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

//Función que indica si estamos en el último array del array de  productos divididos.
const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

//Función para mostrar más productos al apretar en el botón ver más.
const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

export const productsSectionInit = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  productsContainer.addEventListener("click", addProduct);
};
