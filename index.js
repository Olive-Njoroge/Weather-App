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
    console.log(apiUrl);

}

let apiKey = "7243b2ee32b4208bfd7a98f70e8955de";
let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
