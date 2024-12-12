import { useState } from "react";
import { initialPokemon } from "../data/initialPokemon";
import axios from "axios";
// import { useDispatch } from "react-redux";

export const useAxios = () => {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // const dispatch = useDispatch()

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();
    // Manejamos el antes de la peticion
    setData(null);
    setError(false);
    setIsLoading(true);

    // Peticion
    try {
      let selectedPokemon = pokemon.toLowerCase().trim();

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );

      setData(data);
      // dispatch()
    } catch (error) {
      setError("Hubo un error");
    }

    setIsLoading(false);
  };

  return { data, isLoading, error, handleSubmit };
};
