import React from "react";
import ContentHead from "./ContentHead";
import ContentBottom from "./ContentBottom";

class WeatherBody extends React.Component {
  render() {
    return (
      <section className='weatherBody'>
        <div className='weatherBody_content'>
          <ContentHead />
          <ContentBottom />
        </div>
      </section>
    );
  }
}

export default WeatherBody;
