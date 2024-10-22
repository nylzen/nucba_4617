export const getCityData = (cityData) => {
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