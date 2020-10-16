import React from "react";
import TwitterFeed from "./TwitterFeed";
import WeeklyForecast from "./WeeklyForcast";

class ContentBottom extends React.Component {
  render() {
    return (
      <div className='contentBottom'>
        <TwitterFeed />
        <WeeklyForecast />
      </div>
    );
  }
}

export default ContentBottom;
