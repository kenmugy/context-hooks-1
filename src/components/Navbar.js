import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, dark, light } = this.context;
    const theme = isLight ? light : dark
    return (
      <div style={{background: theme.ui, color: theme.color}}>
        <h2>Context APP</h2>
        <ul className='nav'>
          <li >Home</li>
          <li>About</li>
          <li>More</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
