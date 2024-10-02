function cityElement(event){
    event.preventDefault();
    let heading = document.querySelector("h1");
    let cityInput = document.querySelector("#search-form-input");
    heading.innerHTML = cityInput.value;
    searchCity(cityInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", cityElement);

function searchCity(city){
let apiKey = "db36a36a2f66f8114f09od05493b24tc";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(fetchWeather);
}

function fetchWeather(response){
    let temperatureValue = document.querySelector("#temperature-value");
    let temperature = Math.round(response.data.temperature.current);
    temperatureValue.innerHTML = temperature;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = response.data.wind.speed;
   

}


