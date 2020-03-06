class Weather {
  constructor(city, country) {
    this.apiKey = '8a32be9a1aced4ad7f9fc23f1a07257c';
     this.city = city;
     this.country = country;
  }

  // Fetch weather from API
  async getWeather(){
     const response =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

      const responseData = await response.json();

      return responseData;
  }

   // Change weather location
   changeLocation(city, country) {
     this.city = city;
     this.country = country;
   }
}