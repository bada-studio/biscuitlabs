import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className='TopNavBox'>
          <div className="TopNavC">
            <span className="Title">BISCUITLABS</span>
          </div>
          <div className="TopNavR">
            <a href="#">Mission</a>
            <a href="#">Product</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;