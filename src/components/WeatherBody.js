import React from "react";
import ContentHead from "./ContentHead";
import ContentBottom from "./ContentBottom";

class WeatherBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='weatherBody'>
        <div className='weatherBody_content'>
          <ContentHead city={this.props.city} />
          <ContentBottom />
        </div>
      </section>
    );
  }
}

export default WeatherBody;
