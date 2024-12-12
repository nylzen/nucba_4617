// un thunk es una funcion que retorna otra funcion, en redux se usa para hacer tareas asincronicas y despachar acciones en diferentes momentos. Cuando empieza a fetchear, cuando termina con exito o cuando termina con un error

// import axios from "axios";
import api from "../api/api";
import {
  fetchSuccess,
  isError,
  isFetching,
} from "../redux/slices/pokemon-slice";

export const fetchPokemon = (e, pokemon) => async (dispatch) => {
  // Evitamos que la pagina se refresque
  e.preventDefault();

  dispatch(isFetching());

  try {
    let selectedPokemon = pokemon.toLowerCase().trim();

    // const { data } = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    // );

    // const res = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    // );

    // const data = await res.json();
    const data = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );


    console.log(data);

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(isError());
  }
};
