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

  toggleTheme = () => {
    this.setState({ isLight: !this.state.isLight });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
