import React from "react";
import { BsList } from "react-icons/bs";

class WeatherHead extends React.Component {
  render() {
    return (
      <header className='weatherHead'>
        <BsList
          size='30px'
          style={{ position: "absolute", left: 0, height: "40px" }}
        />
        <span>Sunday 12th December</span>
      </header>
    );
  }
}

export default WeatherHead;
