import React from "react";

class ContentHead extends React.Component {
  render() {
    return (
      <div className='contentHead'>
        <div className='contentHead_left'>
          <div className='contentHead_left_temperature'>
            <h1>12°</h1>
            <p>CLOUDY</p>
          </div>
          <ul>
            <li>
              <h1>HUMIDITY</h1>
              <p>64%</p>
            </li>
            <li>
              <h1>WIND</h1>
              <p>12 K/M</p>
            </li>
          </ul>
        </div>
        <h1 className='contentHead_right'>FRANCE</h1>
      </div>
    );
  }
}

export default ContentHead;
