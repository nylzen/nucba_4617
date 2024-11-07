import { productos } from "./data/data.js";
import { createProduct } from "./template.js";
import { container, form, input } from "./elements.js";

const showProduct = (e) => {
  e.preventDefault();
  const value = input.value;

  const product = productos.find((producto) => producto.id === Number(value));

  if (!product) {
    container.innerHTML = `<h1>Producto no encontrado</h1>`;
  }

  container.innerHTML = createProduct(product);
};

const init = () => {
  form.addEventListener("submit", (e) => showProduct(e));
};

init();
