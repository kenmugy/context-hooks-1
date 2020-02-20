import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    light: { bg: '#eee', ui: '#ddd', color: '#555' },
    dark: {
      bg: '#555',
      ui: '#333',
      color: '#eee'
    },
    isLight: true
  };

  toggleTheme = () => {};

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
