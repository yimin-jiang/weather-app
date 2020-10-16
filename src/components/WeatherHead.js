import React from "react";
import Moment from "moment-timezone";
import { BsList } from "react-icons/bs";

class WeatherHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: Moment.tz(this.props.city).format("MMMM"),
      date: Moment.tz(this.props.city).format("D"),
      day: Moment.tz(this.props.city).format("dddd"),
    };
  }
  render() {
    const { month, date, day } = this.state;
    return (
      <header className='weatherHead'>
        <BsList
          size='30px'
          style={{ position: "absolute", left: 0, height: "40px" }}
        />
        <span>
          {day} {date}th {month}
        </span>
      </header>
    );
  }
}

export default WeatherHead;
