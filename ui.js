class UI {
 constructor() {
  this.location = document.getElementById('w-location');
  this.desc = document.getElementById('w-desc');
  this.string = document.getElementById('w-string');
  this.details = document.getElementById('w-details');
  this.icon = document.getElementById('w-icon');
  this.humidity = document.getElementById('w-humidity');
  this.visibility = document.getElementById('w-visibility');
  this.feelsLike = document.getElementById('w-feels-like');
  this.wind = document.getElementById('w-wind');
 }


 paint(weather){
   this.location.textContent = weather.name;
   this.desc.textContent = weather.weather[0].description;
   this.string.textContent = `${Math.round((weather.main.temp - 273) * 10 + Number.EPSILON) / 10} Celsius`;
   this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
   this.humidity.textContent = `Humidity: ${weather.main.humidity}` ;
   this.feelsLike.textContent =`Feels like: ${Math.round((weather.main.feels_like - 273) * 10 + Number.EPSILON) / 10} Celsius`;
   this.wind.textContent = `Wind direction: ${weather.wind.deg} degrees, Speed: ${weather.wind.speed} kph`;
   this.visibility.textContent = `Visibility: ${weather.visibility}`;

 }
}