const productsContainer = document.querySelector(".products-container");
const tecnologiaBtn = document.querySelector(".filter-category");
const searchInput = document.querySelector(".search-input");

// if(condicion){
//   hacemos algo
// } else {
//   hacemos otra
// }

// condicion ? hacemos algo : hacemos otra

const is200 = (precio) => {
  return precio > 200 ? "price" : "";
};

const createProductCard = (product) => {
  const { imagen, nombre, precio } = product;
  return `
    <div class="product-card">
      <img src="${imagen}"/>
      <h3>${nombre}</h3>
      <p class="${is200(precio)}">$${precio}</p>
      <button class='btn' data-producto="${nombre}">Agregar al carrito</button>
    </div>
  `;
};

const renderProducts = (filteredProducts = productos) => {
  // productsContainer.innerHTML = productos
  //   .map((producto) => `${producto.nombre}`)
  //   .join("");

  productsContainer.innerHTML = filteredProducts
    .map((product) => createProductCard(product))
    .join("");
};

const filterCategory = (category) => {
  const filteredProducts = productos.filter((producto) =>
    producto.categorias.includes(category.toLowerCase())
  );

  console.log(filteredProducts);
  // productsContainer.innerHTML = filteredProducts.map(createProductCard).join('')
  renderProducts(filteredProducts);
};

const searchProduct = (e) => {
  const searchedProduct = e.target.value.toLowerCase();
  const filteredProduct = productos.filter((product) =>
    product.nombre.toLowerCase().includes(searchedProduct)
  );
  renderProducts(filteredProduct);
};

let carrito = [];

const addProduct = (e) => {
  if (e.target.tagName !== "BUTTON") return;
  // if(!e.target.classList.contains('btn'))return

  const producto = e.target.dataset.producto;

  carrito = [...carrito, {producto}];

  localStorage.setItem('carrito', JSON.stringify(carrito))
};

// // console.log(typeof )
// const productoLs = JSON.parse(localStorage.getItem('carrito'))

// productoLs.forEach(producto => console.log(producto))

const init = () => {
  renderProducts();
  tecnologiaBtn.addEventListener("click", () => filterCategory("tecnologia"));
  searchInput.addEventListener("input", searchProduct);
  productsContainer.addEventListener("click", addProduct);
};

init();
