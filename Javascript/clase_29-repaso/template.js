import { suma } from "./helpers/helpers.js";

export const createProduct = (producto) => {
  return `
   <div class="card">
    <img src="${producto.img}" alt="">
    <h1>${producto.nombre}</h1>
    <p>$135</p>
    <p>${suma(2,2)}</p>
    <a href="#">Comprar</a>
  </div>
  `;
};