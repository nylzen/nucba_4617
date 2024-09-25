// Contenedor de productos
const productsContainer = document.querySelector(".products-container");

// El contenedor de las categorías
const categoriesContainer = document.querySelector(".categories");

// Un htmlCollection de botones de todas las categorías
const categoriesList = document.querySelectorAll(".category");

// Botón de ver más
const showMoreBtn = document.querySelector(".btn-load");

//--------------------------------------------------------------

// Botón para abrir y cerrar menú
const menuBtn = document.querySelector(".menu-label");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//icono del cart
const cartBtn = document.querySelector(".cart-label");
// Carrito
const cartMenu = document.querySelector(".cart");

//--------------------------------------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");

//El total en precio del carrito
const total = document.querySelector(".total");

// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");

//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart-bubble");

//  botón de eliminar en el carrito.
const deleteBtn = document.querySelector(".btn-delete");

//modal de agregado al carrito
const successModal = document.querySelector(".add-modal");

//--------------------Lógica de products section-------------------------
//--------------------Lógica de products section-------------------------
//--------------------Lógica de products section-------------------------

// Función individual para crear el template html de un producto.
const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return `
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>


            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>`;
};

// Función de renderizado de los productos
const renderProducts = (productsList) => {
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

// Función para cambiar el estado del botón ver más.
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

//Función para cambiar el estado visual de los botones de filtro de categorías.
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

// Función para cambiar todos los estados relacionados a los filtros.
const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

//Función para aplicar el filtrar productos por categoría.
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFilterState(target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

// Función para saber si el elemento clickeado es un botón de categoría y si no está activo
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

//Función para filtrar los productos por categoría y renderizarlos.
const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );
  renderProducts(filteredProducts);
};

/*----------------------------menu interface---------------------------------*/
/*----------------------------menu interface---------------------------------*/
/*----------------------------menu interface---------------------------------*/

// Logica para apertura de menu y carrito y overlay
const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
  }
  overlay.classList.toggle("show-overlay");
};

// Togglea el cart y si el menu esta abierto , lo cierra. Finalmente, muestra el overlay
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
  }
  overlay.classList.toggle("show-overlay");
};

// Cerrar menú al apretar un enlace de navegación
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// Cerrar menú o carrito al scrollear
const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;

  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

//Cerrar carrito o menú al hacer click en el overlay
const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

/*----------------------------cart interface---------------------------------*/
/*----------------------------cart interface---------------------------------*/
/*----------------------------cart interface---------------------------------*/

//Función para guardar el carrito en el localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Creación de template html de una card del carrito.
const createCartProductTemplate = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `
    <div class="cart-item">
      <img src=${img} alt="Nft del carrito" />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>`;
};

//Función para renderizar el carrito
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

//Función para obtener el precio total de compra
const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0);
};

//Función para renderizar el precio total de compra
const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
};

//Renderizar la burbuja de cantidad de productos en el carrito
const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

//Si no hay nada el carrito, deshabilita el botón que corresponda, sino lo habilita.
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

// Función para chequear el estado del carrito una vez realizada alguna manipulación del mismo.
const updateCartState = () => {
  saveCart();
  renderCart();
  showCartTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

//Función para añadir un producto o una unidad de un producto al carrito.
const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const product = createProductData(e.target.dataset);
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }

  updateCartState();
};

//Función para agregar una unidad a un producto que ya este en el carrito.
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

//Función para crear un objeto con la información del producto que se quiere agregar al carrito.
const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

//Función para chequear si un producto ya esta en el carrito.
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

//Función para crear un objeto con la información del producto que se quiere eliminar del carrito.
const createProductData = (product) => {
  const { id, name, bid, img } = product;
  return { id, name, bid, img };
};

//Función para mostrar el modal de éxito al agregar o añadir un producto.
const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

// Función para manejar el evento click del botón de más de cada producto del carrito.
const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

// Función para manejar el evento click del botón de menos de cada producto del carrito.
const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  // Si se toco en un item con uno solo de cantidad
  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return; // Si no termino confirmando la eliminación, no hace nada, ya que sino la cantidad quedaría en 0, así que cortamos la ejecución.
  }
  substractProductUnit(existingCartProduct);
};

//Función para quitar una unidad de producto.
const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

//Función para eliminar un producto del carrito.
const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  updateCartState();
};

//Función que maneja los eventos de apretar el botón de más o de menos según corresponda.
const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  //Para todos los casos
  updateCartState();
};

//Función para vaciar el carrito.
const resetCartItems = () => {
  cart = [];
  updateCartState();
};

//Función para completar la compra o vaciar el carrito.
const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return; //Si el carrito está vacío, no hace nada.
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

// Función para disparar el mensaje de compra exitosa y su posterior mensaje de exito en caso de darse la confirmación.
const completeBuy = () => {
  completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!");
};

// Función para disparar el mensaje de vaciado de carrito y su posterior mensaje de exito en caso de darse la confirmación.
const deleteCart = () => {
  completeCartAction(
    "¿Desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

//Función inicializadora
const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  productsContainer.addEventListener("click", addProduct);
  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", closeOnScroll);
  barsMenu.addEventListener("click", closeOnClick);
  overlay.addEventListener("click", closeOnOverlayClick);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble(cart);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);
};

init();
