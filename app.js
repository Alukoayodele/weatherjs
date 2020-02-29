// Init storage
const storage = new Storage();
// Get stored location data
const weatherlocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherlocation.city, weatherlocation.country);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

// Set location in LS
storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather () {
weather.getWeather()
      .then(results => {
        ui.paint(results);
      })
      .catch(err => console.log(err));
    }