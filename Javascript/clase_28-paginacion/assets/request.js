// Guardar la api KEY
const API_KEY = "2b1b9a32975c0fcbff405c0cbe51e9a2";

// URLS
const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${API_KEY}`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${API_KEY}`;

const fetchMovies = async (searchTerm, page = 1) => {
  try {
    const response = await fetch(searchTerm + `&page=${page}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(`Hubo un error al traer los datos: ${error}`);
  }
};

// fetchMovies(TRENDING );
