const fetchPokemons = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Hubo un error al hacer la peticion: ${error}`);
  }
};

// fetchPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8')
