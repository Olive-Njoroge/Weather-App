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
    let temperature = `${Math.round(response.data.temperature.current)}&degC`;
    let descriptionElement = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let time = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    time.innerHTML =formatDate(date);
    temperatureValue.innerHTML = temperature;
    descriptionElement.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    wind.innerHTML = `${response.data.wind.speed}km/h`;
    let icon = document.querySelector("#icon");
    icon.innerHTML = `<img src="${response.data.condition.icon_url}">`;

    getForecast(response.data.city)
}

function formatDate(date){
    let day = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = days[date.getDay()];
    if(minutes<10){
        minutes = `0${minutes}`;
    }
    return `${day} ${hour}:${minutes}`;
}

function displayForecast(response){
    let forecast = document.querySelector(".weather");
    let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
    let forecastHtml = "";
    days.forEach(function (day){
        forecastHtml +=
        `<div class="Tue">
        <div class="weather-day">${day}</div>
        <div class="weather-icon">⛅</div>
        <div class="weather-temperature"><strong>29&deg</strong>  14&deg</div>
        </div>`;
    });

    forecast.innerHTML = forecastHtml;
}
displayForecast();


function getForecast(city){
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    let apiKey = "db36a36a2f66f8114f09od05493b24tc";
    axios.get(apiUrl).then(displayForecast);

}





