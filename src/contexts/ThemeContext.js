import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    light: { bg: '#eee', ui: '#ddd', color: '#555' },
    dark: {
      bg: '#555',
      ui: '#333',
      color: '#eee'
    },
    isLight: true
  });

  const toggleTheme = () => {
    setTheme({ ...theme, isLight: !theme.isLight });
  };
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
