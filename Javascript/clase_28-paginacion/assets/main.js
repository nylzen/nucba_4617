/* Las imágenes de movieDB vienen con una URL de base la cual se tiene que colocar en conjunto con lo que venga en el objeto de cada película para que la imagen aparezca. Guardamos esta en una constante.
Para mas referencia :  https://developers.themoviedb.org/3/getting-started/images . Elegimos para esta APP el tamaño original.
*/
const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

// Traer los elementos del DOM ✅
// Crear la funcion init en la cual vamos a renderizar lo que traiga la api  ✅
// vamos a querer renderizar html  ✅

// Una vez terminado la renderizacion vamos a querer paginar, que seria pegarle a la api de nuevo con la page + 1 o con la page - 1

// Filtrado de pelis que seria pegarle al otro endpoint top rated o upcoming

// DOM ELEMENTS
const cardsContainer = document.querySelector(".cards-container");
const prevBTN = document.querySelector(".left");
const nextBTN = document.querySelector(".right");
const pageNumber = document.querySelector(".page-number");
const filterContainer = document.querySelector(".filter-container");
const filterButtons = document.querySelectorAll(".btn");

// Estado de la pagina
const appState = {
  page: null,
  total: null,
  searchParameter: TRENDING,
};

const showMovies = async () => {
  try {
    cardsContainer.innerHTML = renderLoader()
    const movies = await fetchMovies(appState.searchParameter);
    // console.log(movies);
    appState.total = movies.total_pages;
    appState.page = movies.page;
    setPaginationState();
    renderCards(movies.results);
  } catch (error) {
    // RENDER ERROR
    console.error(error);
  }
};

const renderLoader = () => {
  return `
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
};

// Fn para el html
const createCardTemplate = (movie) => {
  const { title, poster_path, vote_average, release_date } = movie;
  return `
  <div class="card">
      <img loading="lazy" src="${
        ImgBaseUrl + poster_path
      }" alt="pelicula" class="card-img" />
      <div class="card-popularity">${formatVoteAverage(
        vote_average
      )}% de popularidad</div>
        <div class="card-content">
        <h2>${title}</h2>
        <p>Fecha de estreno: ${formatDate(release_date)} </p>
      </div>
  </div>
  `;
};

const formatVoteAverage = (voteAverage) => {
  return Math.floor(voteAverage * 10);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  // const [year, month, day] = date.split('-')
  // return `${day}/${month}/${year}`
};

// Fn para mapear
const renderCards = (movies) => {
  cardsContainer.innerHTML = movies
    .map((movie) => createCardTemplate(movie))
    .join("");
};

// Funcion para setear el estado de la paginacion.
const setPaginationState = () => {
  pageNumber.textContent = appState.page;
  togglePreviousBtn(appState.page);
  toggleNextBtn(appState.page, appState.total);
};

const togglePreviousBtn = (page) => {
  if (page === 1) {
    prevBTN.classList.add("disabled");
  } else {
    prevBTN.classList.remove("disabled");
  }
};

const toggleNextBtn = (page, total) => {
  if (page === total) {
    nextBTN.classList.add("disabled");
  } else {
    nextBTN.classList.remove("disabled");
  }
};

// Cambiar pagina \\
const nextPage = () => {
  if (appState.page === appState.total) return;
  appState.page += 1;
  changePage();
};

const previousPage = () => {
  if (appState.page === 1) return;
  appState.page -= 1;
  changePage();
};

const changePage = async () => {
  try {
    cardsContainer.innerHTML = renderLoader();
    const movies = await fetchMovies(appState.searchParameter, appState.page);
    setPaginationState();
    renderCards(movies.results);
    // filterContainer.scrollIntoView({ behavior: "smooth" });
    scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.log(error);
  }
};

// FILTROS

const changeSearchParameter = (e) => {
  if (!isActiveCategoryBtn(e.target)) return;
  const selectedParameter = e.target.dataset.filter;
  appState.searchParameter = parameterSelector(selectedParameter);
  setActiveButton(selectedParameter);
  showMovies();
};

const isActiveCategoryBtn = (btn) => {
  return (
    btn.classList.contains("btn") && !btn.classList.contains("btn--active")
  );
};

const parameterSelector = (paramater) => {
  switch (paramater) {
    case "TRENDING":
      return TRENDING;
    case "TOPRATED":
      return TOPRATED;
    case "UPCOMING":
      return UPCOMING;
    default:
      return TRENDING;
  }
};

const setActiveButton = (selectedParameter) => {
  const buttons = [...filterButtons];

  buttons.forEach((btn) => {
    if (btn.dataset.filter !== selectedParameter) {
      btn.classList.remove("btn--active");
    } else {
      btn.classList.add("btn--active");
    }
  });
};

const init = () => {
  window.addEventListener("DOMContentLoaded", showMovies);
  nextBTN.addEventListener("click", nextPage);
  prevBTN.addEventListener("click", previousPage);
  filterContainer.addEventListener("click", changeSearchParameter);
};

init();
