import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form";
import Results from "./Results/Results";

const APIKEY = "8421c2958fcf22091ff67790b522214d";

class App extends Component {
  state = {
    value: "Rome",
    date: "",
    timezone: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    icon: "",
    err: ""
  };

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleCitySubmit = event => {
    event.preventDefault();
    console.log("Submit confirmed");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`;
    console.log(API);

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Couldn't fetch from API");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: data.name,
          icon: data.weather[0].icon,
          timezone: data.timezone
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: true,
          city: this.state.value
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1 id="app-title">The Weather App</h1>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <hr></hr>
        <Results weather={this.state} />
      </div>
    );
  }
}

export default App;
