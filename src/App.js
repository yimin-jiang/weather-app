import React from "react";
import "./App.scss";
import WeatherHead from "./components/WeatherHead";
import WeatherBody from "./components/WeatherBody";

function App() {
  return (
    <div className='weatherAPP'>
      <WeatherHead city='Europe/Paris' />
      <WeatherBody city='Paris' />
    </div>
  );
}

export default App;
