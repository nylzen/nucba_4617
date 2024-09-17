const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriescontainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");

const createProductTemplate = (product) => {
  // TODO: AGREGAR DATASETS

  const { id, name, bid, user, category, userImg, cardImg } = product;

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
                <button class="btn-add">Add</button>
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
  console.log(appState)
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
    appState.currentProductsIndex = 0
    return;
  }

  console.log(appState)

  renderProducts(appState.products[0]);
};

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriescontainer.addEventListener("click", applyFilter);
};

init();
