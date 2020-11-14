var city = document.getElementById("location-city");
city.addEventListener("input", UpdateWeather);

function KelvinToCelcius(K) 
{
  return K - 273.15;
}

async function UpdateWeather(event) 
{
  if (event.type == "input") 
  {
    api = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${config.apiKey}`;
    fetch(api)
      .then((response) => 
      {
        return response.json();
      })
      .then((WeatherData) => 
      {
        const {} = WeatherData.main;

        temperature = document.getElementById("temp");

        icon = `http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`;

        document.getElementById("temp").innerHTML = KelvinToCelcius(WeatherData.main.temp).toFixed(2) + " C°";
        document.getElementById("icon").innerHTML = `<img src="${icon}">`;
      });
  }
}
