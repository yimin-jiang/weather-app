import React from "react";
import Moment from "moment-timezone";
import Axios from "axios";
import {
  TiWeatherShower,
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherWindyCloudy,
  TiWeatherSnow,
} from "react-icons/ti";

const Rain = TiWeatherShower;
const Clear = TiWeatherSunny;
const Thunderstorm = TiWeatherStormy;
const Clouds = TiWeatherWindyCloudy;
const Snow = TiWeatherSnow;

const lat = "48";
const lon = "2";
const API_KEY = "f6a5164e2bcbd61c2bc261cd86373354";
const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;

class DailyForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dayName: "",
      mainWeather: "",
      minTemp: "",
      MaxTemp: "",
    };
  }

  async componentDidMount() {
    const { theDayOf } = this.props;
    const {
      data: { daily },
    } = await Axios.get(API);
    this.setState({
      dayName: Moment.unix(daily[theDayOf].dt).format("ddd"),
      mainWeather: daily[theDayOf].weather[0].main,
      minTemp: daily[theDayOf].temp.min.toFixed(0),
      MaxTemp: daily[theDayOf].temp.max.toFixed(0),
      loading: false,
    });
  }

  render() {
    const { loading, dayName, mainWeather, minTemp, MaxTemp } = this.state;

    return (
      <li>
        {loading && <p>...</p>}
        {!loading && (
          <>
            <h1>{dayName}</h1>
            <p className='weatherIcon'>
              {mainWeather == "Clouds" ? <Clouds /> : <span></span>}
              {mainWeather == "Clear" ? <Clear /> : <span></span>}
              {mainWeather == "Rain" ? <Rain /> : <span></span>}
              {mainWeather == "Thunderstorm" ? <Thunderstorm /> : <span></span>}
              {mainWeather == "Drizzle" ? <Rain /> : <span></span>}
              {mainWeather == "Snow" ? <Snow /> : <span></span>}
            </p>
            <p>
              {minTemp}° - {MaxTemp}°
            </p>
            <p>{mainWeather}</p>
          </>
        )}
      </li>
    );
  }
}

export default DailyForecast;
