import React from "react";
import DailyForecast from "./DailyForecast";

class WeeklyForecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contentBottom_right'>
        <ul>
          <DailyForecast theDayOf='0' />
          <DailyForecast theDayOf='1' />
          <DailyForecast theDayOf='2' />
          <DailyForecast theDayOf='3' />
          <DailyForecast theDayOf='4' />
        </ul>
      </div>
    );
  }
}

export default WeeklyForecast;
