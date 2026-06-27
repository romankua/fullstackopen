const WeatherDetails = ({ city, weather }) => {
  if (!weather) {
    return null
  }

  return (
    <div>
      <h3>Weather in {city}</h3>
      <div>Temperature {weather.main.temp} Celsius</div>
      <div>
        <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description} />
      </div>
      <div>Wind {weather.wind.speed} m/s</div>
    </div>
  )
}

export default WeatherDetails