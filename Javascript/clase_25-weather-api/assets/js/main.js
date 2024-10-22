/*
  Renderizar una card cuando busquemos una ciudad en el input
  - Escuchar el submit del form ✅
  - Capturar el valor del input (city) ✅
  - Pasamos el valor a la fn getCity ✅
  - Renderizar la card ✅
*/
const form = document.querySelector("#form");
const cityInput = document.querySelector(".search-input");
const cardContainer = document.querySelector(".card-container");
const searchMsg = document.querySelector(".search-msg");
const cityTitle = document.querySelector(".city");

// Ideal el mapper para crearse su propio objeto con la respuesta de la api para asi poder estar mas controlado si algo puede llegar a fallar
const getCityData = (cityData) => {
  return {
    cityName: cityData.name,
    image: cityData.weather[0].icon,
    description: cityData.weather[0].description,
    cityTemp: cityData.main.temp.toFixed(1),
    cityST: Math.round(cityData.main.feels_like),
    cityMaxTemp: cityData.main.temp_max,
    cityMinTemp: cityData.main.temp_min,
    cityHumidity: cityData.main.humidity,
  };
};

// URL IMG
// https://openweathermap.org/img/wn/10d@2x.png
/* <img src="https://openweathermap.org/img/wn/${image}@2x.png" alt="weather image" /> */

const createCityTemplate = (cityData) => {
  const {
    cityName,
    image,
    description,
    cityHumidity,
    cityMaxTemp,
    cityMinTemp,
    cityST,
    cityTemp,
  } = getCityData(cityData);
  return `
  <div class="weather-card animate">
          <div class="weather-info-container">
            <h2 class="weather-title">${cityName}</h2>
            <p class="weather-description">${description}</p>
            <div class="weather-temp-container">
              <span class="weather-temp">${cityTemp} °</span>
              <span class="weather-st">${cityST}° ST</span>
            </div>
          </div>
          <div class="weather-img-container">
          <img src="./assets/img/${image}.png" alt="${cityName}" />

          </div>
          <div class="weather-extra-container">
            <div class="weather-minmax-container">
              <span class="weather-span"><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span>
              <span class="weather-span"><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span>
            </div>
            <span class="weather-humidity">${cityHumidity}% Humedad</span>
          </div>
        </div>
  `;
};

const renderCityCard = (cityData) => {
  cardContainer.innerHTML = createCityTemplate(cityData);
};

const changeSearchMsg = (cityData) => {
  const { cityName } = getCityData(cityData);

  cityTitle.textContent = cityName;
  // searchMsg.textContent = `Asi está el clima en ${cityName}.`
  // searchMsg.textContent = "";
};

const searchCity = async (event) => {
  event.preventDefault();
  const searchedCity = cityInput.value.trim();

  if (!searchedCity) {
    searchMsg.textContent = "Por favor, ingresa una ciudad";
    return;
  }

  const fetchedCity = await requestCity(searchedCity);

  console.log(fetchedCity);
  if (!fetchedCity.id) {
    searchMsg.textContent = `La ciudad ${searchedCity} no existe`;
    cityTitle = "";
    cardContainer.innerHTML = "";
    form.reset();
    return;
  }

  renderCityCard(fetchedCity);
  changeSearchMsg(fetchedCity);
  form.reset();
};

// Init
const init = () => {
  form.addEventListener("submit", searchCity);
};

init();
