import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `6e1534c02ffcaea66f0e4046a35d93b3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setWeather(
      <div className="weather-info">
        <ul>
          <li>{city}</li>
          <li>Temperature: {Math.round(response.data.main.temp)}°C </li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind Speed: {Math.round(response.data.wind.speed)}km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="weather"
            />
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {weather}
    </div>
  );
}
