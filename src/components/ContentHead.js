import React from "react";
import CurrentWeather from "./CurrentWeather";

class ContentHead extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='contentHead'>
        <CurrentWeather city={this.props.city} />
        <h1 className='contentHead_right'>{this.props.city}</h1>
      </div>
    );
  }
}

export default ContentHead;
