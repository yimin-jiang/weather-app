import React from "react";

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}

export default TwitterFeed;
