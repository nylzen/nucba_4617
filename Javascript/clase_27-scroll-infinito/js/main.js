/*
  Al cargar la app queremos mostrar la info de los primeros 8 pokemons:

  - Traer lo del dom necesario caja
  - Render de los pokemons
  - Hacer un fetch a cada url de los pokemons traido en el fetchPokemons (Promise.all)


  Scroll infinto
  - Pensar como almacenar la siguiente url

*/

const pokemonContainer = document.getElementById("caja");
const loader = document.querySelector(".pokeballs-container");

// Funcion controladora de la app.
const OFFSET = 0;
const LIMIT = 9;

const appState = {
  currentURL: `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`,
  isFetching: false,
};

const pokemonMapper = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other.home.front_default,
    height: pokemon.height,
    weight: pokemon.weight,
    experience: pokemon.base_experience,
    types: pokemon.types,
  };
};

// Html
const createPokemonCard = (pokemon) => {
  const { id, name, height, image, weight, experience, types } =
    pokemonMapper(pokemon);

  return `
   	  <div class='poke'>
      <img src="${image}">
      <h2>${name}</h2>
      <span>Exp: ${experience}</span>
      <div class="tipo-poke">
        ${types
          .map(
            (type) =>
              `<span class="${type.type.name} poke__type">${type.type.name}</span>`
          )
          .join("")}
      </div>
          <p class="id-poke">#${id}</p>
          <p class="height">Height: ${height / 10}</p>
          <p class="weight">Weight: ${weight / 10}kg</p>
      </div>
    `;
};

const getPokemonsData = async () => {
  try {
    const { next, results } = await fetchPokemons(appState.currentURL);
    appState.currentURL = next;

    const pokemonDataURLS = results.map((pokemon) => pokemon.url);

    const pokemonsData = await Promise.all(
      pokemonDataURLS.map(async (url) => {
        const nextPokemonsData = await fetch(url);
        return await nextPokemonsData.json();
      })
    );

    console.log(pokemonsData);
    return pokemonsData;
  } catch (error) {
    console.error(error);
  }
};

const renderPokemonList = async (pokemonsData) => {
  pokemonContainer.innerHTML += pokemonsData
    .map((pokemon) => createPokemonCard(pokemon))
    .join("");
};

const renderOnScroll = (pokemonList) => {
  // logica de tiempo de espera
  // loader.classList.toggle("show");
  // setTimeout(() => {
  // loader.classList.toggle("show");
  renderPokemonList(pokemonList);
  appState.isFetching = false;
  // }, 1000);
};

// Recibe por parametro una funcion encargada de renderizar. 1 es renderizar al inicio de la pagina (renderPokemonList), la 2da opcion es renderizar con scroll
const loadAndRenderPokemons = async (renderingFunction) => {
  try {
    loader.classList.toggle("show");
    const pokemonsData = await getPokemonsData();
    // renderPokemonList(pokemonsData)
    // renderOnScroll(pokemonsData)
    renderingFunction(pokemonsData);
  } catch (error) {
    console.error(error);
  } finally {
    loader.classList.toggle("show");
    // console.log('termine')
  }
};

// Funcion para checkear que estamos al final de la pagina
const isEndOfPage = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  const bottom = scrollTop + clientHeight >= scrollHeight - 5;

  return bottom;
};

// Funcion en el cual vamos a escuchar el scroll para ver si estamos al final, si lo estamos fetcheamos los nuevos pokes y si no lo estamos no hacemos nada
const loadNextPokemons = () => {
  if (isEndOfPage() && !appState.isFetching) {
    appState.isFetching = true;
    loadAndRenderPokemons(renderOnScroll);
    // renderPokemonList();
  }
};

const init = () => {
  window.addEventListener("DOMContentLoaded", () =>
    loadAndRenderPokemons(renderPokemonList)
  );

  window.addEventListener("scroll", () => loadNextPokemons());
};

init();
