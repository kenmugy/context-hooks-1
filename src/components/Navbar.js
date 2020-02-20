import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className=''>
        <h2>Context APP</h2>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>More</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
