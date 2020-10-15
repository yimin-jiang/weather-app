import React from "react";
import {
  TiWeatherShower,
  TiWeatherSunny,
  TiWeatherStormy,
} from "react-icons/ti";

class ContentBottom extends React.Component {
  render() {
    return (
      <div className='contentBottom'>
        <div className='contentBottom_left'>
          <h1>
            Twitter Feed <small>#France</small>
          </h1>
          <ul>
            <li>
              <div className='bullet'></div>
              <p>some text here</p>
            </li>
            <li>
              <div className='bullet'></div>
              <p>some text here</p>
            </li>
            <li>
              <div className='bullet'></div>
              <p>some text here</p>
            </li>
          </ul>
        </div>
        <div className='contentBottom_right'>
          <ul>
            <li>
              <h1>MON</h1>
              <p className='weatherIcon'>
                <TiWeatherShower />
              </p>
              <p>9°</p>
              <p>raining</p>
            </li>
            <li>
              <h1>tue</h1>
              <p className='weatherIcon'>
                <TiWeatherSunny />
              </p>
              <p>9°</p>
              <p>sunny</p>
            </li>
            <li>
              <h1>wed</h1>
              <p className='weatherIcon'>
                <TiWeatherStormy />
              </p>
              <p>9°</p>
              <p>storm</p>
            </li>
            <li>
              <h1>thur</h1>
              <p className='weatherIcon'>
                <TiWeatherShower />
              </p>
              <p>9°</p>
              <p>raining</p>
            </li>
            <li>
              <h1>fri</h1>
              <p className='weatherIcon'>
                <TiWeatherSunny />
              </p>
              <p>9°</p>
              <p>sunny</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContentBottom;
