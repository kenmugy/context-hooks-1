import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, dark, light } = this.context;
    const theme = isLight ? light : dark;
    return (
      <div style={{ background: theme.bg, color: theme.color }}>
        <h3>book lists</h3>
        <ul className='books'>
          <li style={{ background: theme.ui }}>Things fall Apart</li>
          <li style={{ background: theme.ui }}>Reciepe for disaster</li>
          <li style={{ background: theme.ui }}>Among the fools</li>
          <li style={{ background: theme.ui }}>Empre strikes back</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
