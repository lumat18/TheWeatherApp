import React from "react";

const Results = props => {
  const {
    city,
    temp,
    sunset,
    sunrise,
    date,
    wind,
    pressure,
    err,
    icon,
    timezone
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(
      (sunrise + timezone - 3600) * 1000
    ).toLocaleTimeString();
    const sunsetTime = new Date(
      (sunset + timezone - 3600) * 1000
    ).toLocaleTimeString();

    content = (
      <div>
        <h2>Weather for: {city}</h2>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <h3>Date and time: {date}</h3>
        <h3>Temperature: {temp} &#176;C</h3>
        <h3>Sunrise at: {sunriseTime}</h3>
        <h3>Sunset at: {sunsetTime}</h3>
        <h3>Wind speed: {wind} m/s</h3>
        <h3>Pressure: {pressure} hPa</h3>
      </div>
    );
  }

  return (
    <div className="result">
      {err ? `There's no such a city as ${city} in the database` : content}
    </div>
  );
};

export default Results;
