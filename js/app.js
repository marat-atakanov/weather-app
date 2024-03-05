import { getDateFunc } from "./utils.js";
import {
  searchBarFunc,
  closeSearchBar,
  isSearchBarOpen,
  searchBarInput,
} from "./searchBar.js";
import { fetchCityWeatherData } from "./data.js";
import { mobileDeviceMenuFunc } from "./mobileDeviceMenu.js";

const cityName = document.querySelectorAll(".cityName");
const weatherType = document.querySelector("#weatherType");
const mainTemperature = document.querySelector("#mainTemperature");
const dateInfo = document.querySelector("#dateInfo");
const airConditionsFeelsLike = document.querySelector(
  "#airConditionsFeelsLike"
);
const airConditionsWind = document.querySelector("#airConditionsWind");
const errorMessage = document.querySelector(".errorMessage");
const htmlBody = document.querySelector("body");

const changeInfo = (data) => {
  htmlBody.style.backgroundImage = data.weather[0].main.toLowerCase() === "rain" ? "url(assets/thunderBg.jpeg)" : ""
  htmlBody.style.backgroundColor = data.weather[0].main.toLowerCase() === "rain" ? "#1f1d23" : "#D69E36"
  localStorage.setItem("city", data.name)
  cityName.forEach(name => {
    name.innerText = data.name;
  })
  weatherType.innerText = data.weather[0].main;
  mainTemperature.innerText = data.main.temp.toFixed(0) + "°C";

  const date = getDateFunc();
  dateInfo.innerText = `${date.day} | ${date.dayNum} ${date.month} ${date.year}`;

  airConditionsFeelsLike.innerText = data.main.feels_like.toFixed(0) + "°C";
  airConditionsWind.innerText = data.wind.speed.toFixed(1) + "km/h";
};

const showAndHideErrorMessage = (message) => {
  errorMessage.innerText = message
  errorMessage.style.opacity = 1;
  errorMessage.style.transition = "150ms";
  setTimeout(() => {
    errorMessage.style.opacity = 0;
    errorMessage.style.transition = "500ms";
  }, 2000);
};

export const fetchDataChangeInfo = async (city) => {
  const cityWeather = await fetchCityWeatherData(city);
  if (cityWeather.cod === 200) changeInfo(cityWeather);
  else showAndHideErrorMessage(cityWeather.message);
}

window.onkeydown = async (e) => {
  if (
    e.key.toLowerCase() === "enter" &&
    isSearchBarOpen &&
    searchBarInput.value !== ""
  ) {
    await fetchDataChangeInfo(searchBarInput.value)
    closeSearchBar();
  } else if (e.key.toLowerCase() === "enter") {
    closeSearchBar();
  }
};

(async () => {
  const initialCityName = localStorage.getItem("city") || "Bishkek"
  fetchDataChangeInfo(initialCityName)
})();

searchBarFunc();
mobileDeviceMenuFunc()