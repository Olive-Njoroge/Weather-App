function cityElement(event){
    event.preventDefault();
    let heading = document.querySelector("h1");
    let cityInput = document.querySelector("#search-form-input");
    heading.innerHTML = cityInput.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", cityElement);