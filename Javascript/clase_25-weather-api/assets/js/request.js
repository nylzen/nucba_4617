// API KEY
const API_KEY = "d53aee6d228de8a26e1cb0883e238a88";

// URL
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// https://www.miapi.com/api/login
// https://www.miapi.com/api/register
// https://www.miapi.com/api/getProducts

// const mapperCityData = (city) => {
//   return {
//     cityName: city.name
//   }
// }

// Funcion para getFech
const requestCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    );
    const data = await response.json();

    // console.log(data)
    // return mapperCityData(data)
    return data
  } catch (error) {
    console.error(`Hubo un error en la peticion: ${error}`);
  }
};

// requestCity('japon')
