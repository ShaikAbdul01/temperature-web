const apiKeys = `d531f427ca5b2308d427f96461aefef5`;

const loadPage = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showTemperature(data));
};
const showElementById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

const showTemperature = (temp) => {
  showElementById("temperature", temp.main.temp);
  showElementById("location", temp.name);
  showElementById("weather-st", temp.weather[0].main);
};
document.getElementById("btn-search").addEventListener("click", function () {
  const inputField = document.getElementById("inputField");
  const city = inputField.value;
  loadPage(city);
});
