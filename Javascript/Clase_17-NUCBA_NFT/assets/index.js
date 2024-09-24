const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriescontainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
// Cart
const cartBtn = document.querySelector(".cart-label");
// Carrito modal
const cartMenu = document.querySelector(".cart");
const productsCart = document.querySelector(".cart-container");
// Overlay
const overlay = document.querySelector(".overlay");
// Menu hamburguesa
const menuBtn = document.querySelector(".menu-label");
const menu = document.querySelector(".navbar-list");
// Total
const total = document.querySelector(".total");
// MOdal
const successModal = document.querySelector(".add-modal");
// Btn vaciar carro
const deleteBtn = document.querySelector('.btn-delete')
// btn comprar
const buyBtn = document.querySelector('.btn-buy')
//burbujita
const cartBubble = document.querySelector('.cart-bubble')

// Carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));

const createProductTemplate = (product) => {
  // TODO: AGREGAR DATASETS

  const { id, name, bid, user, userImg, cardImg } = product;

  return `
  <div class="product">
            <img
              src="${cardImg}"
              alt="${name}"
            />
            <div class="product-info">
              <!-- top -->
              <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
              </div>
              <!-- mid -->
              <div class="product-mid">
                <div class="product-user">
                  <img src="${userImg}" alt="${user}" />
                  <p>@thetroncous</p>
                </div>
                <p class="price">${bid}ETH</p>
              </div>
              <!-- bot -->
              <div class="product-bot">
                <div class="offer-time">
                  <img src="./assets/img/fire.png" alt="" />
                  <p>05:05:05</p>
                </div>
                <button class="btn-add"
                  data-id='${id}'
                  data-name='${name}'
                  data-bid='${bid}'
                  data-img='${cardImg}'
                >Add</button>
              </div>
            </div>
          </div>
  `;
};

const renderProducts = (products) => {
  productsContainer.innerHTML += products.map(createProductTemplate).join("");
};

// Funcion para ver mas
const showMoreProducts = () => {
  // Esto viene del appState
  console.log(appState);
  appState.currentProductsIndex += 1;

  let { products, currentProductsIndex, productsLimit } = appState;

  renderProducts(products[currentProductsIndex]);

  if (currentProductsIndex === productsLimit - 1) {
    showMoreBtn.classList.add("hidden");
  }
};

// logica de filtros
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

// Cambiar colorsito
const changeBtnActiveState = (activeFilter) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== activeFilter) {
      categoryBtn.classList.remove("active");
      return;
    }

    categoryBtn.classList.add("active");
  });
};

// cambia el appState
const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
  // console.log(appState.activeFilter)
};

const applyFilter = (e) => {
  if (!isInactiveFilterBtn(e.target)) return;
  changeFilterState(e.target);

  productsContainer.innerHTML = "";

  if (appState.activeFilter) {
    const filteredProducts = productsData.filter(
      (product) => product.category === appState.activeFilter
    );

    renderProducts(filteredProducts);
    appState.currentProductsIndex = 0;
    return;
  }

  console.log(appState);

  renderProducts(appState.products[0]);
};

// ====================================== //
// ============== Logica Menu Carrito ======================= //
// ====================================== //

const toggleMenu = () => {
  menu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }

  overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (menu.classList.contains("open-menu")) {
    menu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeMenuAndCart = () => {
  if (
    menu.classList.contains("open-menu") ||
    cartMenu.classList.contains("open-cart")
  ) {
    menu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};

// ====================================================== //
// ============== Logica Carrito ======================= //
// ==================================================== //
// Logica crear template
const createCartProductHTML = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;

  return `
      <div class="cart-item">
            <img src="${img}" alt="${name}" />
            <div class="item-info">
              <h3 class="item-title">${name}</h3>
              <p class="item-bid">Current bid</p>
              <span class="item-price">${bid} ETH</span>
            </div>
            <!-- Handler qty -->
            <div class="item-handler">
              <span class="quantity-handler down" data-id='${id}'>-</span>
              <span class="item-quantity">${quantity}</span>
              <span class="quantity-handler up" data-id='${id}'>+</span>
            </div>
          </div>
  `;
};

// Logica renderizar
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductHTML).join("");
};

const getCartTotal = () => {
  const total = cart.reduce(
    (acc, cur) => acc + Number(cur.bid) * cur.quantity,
    0
  );
  return total;
};

const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} ETH `;
  // const precio = new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(getCartTotal())
  // total.innerHTML = `${precio} `
  // total.innerHTML = `${getCartTotal().toFixed(2)} ETH `
};

const renderCartBubble = () => {
  // cartBubble.textContent = cart.length
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0)
}

const disableBtn = (btn) => {
  if(!cart.length){
    btn.classList.add('disabled')
  } else {
    btn.classList.remove('disabled')
  }
}

// Funcion que ejecute todo lo necesario para actualizar el carro
const updateCartState = () => {
  saveCart();
  showCartTotal();
  renderCart();
  disableBtn(buyBtn)
  disableBtn(deleteBtn)
  renderCartBubble()
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.innerHTML = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 2000);
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const product = createProductData(e.target.dataset);

  // Validacion si existe el prod en el cart
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto");
  } else {
    cart = [...cart, { ...product, quantity: 1 }];
    showSuccessModal("El producto se agregó al carrito");
  }
  updateCartState();
  console.log(cart);
};

// Funcion para agregar una unidad
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

// Funcion para crear el objeto con la info del producto
const createProductData = (product) => {
  // Destructuring
  const { id, name, bid, img } = product;
  return { id, name, bid, img };
  // Sin destructuring pero retornando el mismo objeto
  // const id = product.id
  // const name = product.name
  // const bid = product.bid
  // const img = product.img
  // return { id , name, bid, img };
  // Sin nada, directamente creando el objeto
  // return {
  //   id: product.id,
  //   name: product.name,
  //   bid: product.bid,
  //   img: product.img
  // }
};

// Funcion para saber si un producto existe en el carrito
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

// Handle Quantity Plus
const handlePlusEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  console.log(existingCartProduct);
  addUnitToProduct(existingCartProduct);
};

// Handle quantity minus
const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if(window.confirm('¿Querés eliminar el producto del carrito?')){
      removeProductFromCart(existingCartProduct);
    }
    return;
  }

  substractProductUnit(existingCartProduct);
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  updateCartState();
};

const handleQuantity = (e) => {
  // console.log(e.target)
  if (e.target.classList.contains("down")) {
    console.log("resta");
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    // console.log(e.target.dataset)
    handlePlusEvent(e.target.dataset.id);
  }

  updateCartState();
};

const resetCartItems = () =>{
  cart = []
  updateCartState()
}

const completeCartAction = (confirmMsg, successMsg) => {
  if(!cart.length) return;
  if(window.confirm(confirmMsg)){
    resetCartItems()
    alert(successMsg)
  }
}

const deleteCart = () => {
  completeCartAction(
    '¿Deseas vaciar el carrito?',
    'No hay productos en el carrito'
  )
}

const completeBuy = () => {
  completeCartAction(
   '¿Queres terminar la compra?',
   'Gracias por tu compra'
  )
}

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriescontainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenuAndCart);
  window.addEventListener("scroll", closeMenuAndCart);

  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);

  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  deleteBtn.addEventListener('click', deleteCart)
  buyBtn.addEventListener('click', completeBuy)
  disableBtn(buyBtn)
  disableBtn(deleteBtn)
  renderCartBubble(cart)
};

init();
