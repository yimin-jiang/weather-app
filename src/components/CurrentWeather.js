import React from "react";
import Axios from "axios";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      temperature: "",
      main: "",
      humidity: "",
      wind: "",
    };
    this.API_KEY = "f6a5164e2bcbd61c2bc261cd86373354";
    this.API = `http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=metric&appid=${this.API_KEY}`;
  }

  componentDidMount() {
    Axios.get(this.API).then((res) => {
      // console.log(res.data.main.temp.toFixed(1));
      this.setState({
        main: res.data.weather[0].main,
        temperature: res.data.main.temp.toFixed(1),
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        loading: false,
      });
    });
  }

  render() {
    const { loading, temperature, main, humidity, wind } = this.state;
    return (
      <div className='contentHead_left'>
        <div className='contentHead_left_temperature'>
          {loading && <h1>...</h1>}
          {!loading && <h1>{temperature}°</h1>}
          <p>{main}</p>
        </div>
        <ul>
          <li>
            <h1>HUMIDITY</h1>
            {loading && <p>...</p>}
            {!loading && <p>{humidity}%</p>}
          </li>
          <li>
            <h1>WIND</h1>
            {loading && <p>...</p>}
            {!loading && <p>{wind} K/M</p>}
          </li>
        </ul>
      </div>
    );
  }
}

export default CurrentWeather;
