import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <div style={{ background: theme.ui, color: theme.color }}>
      <h2>Context APP</h2>
      <ul className='nav'>
        <li>Home</li>
        <li>About</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default Navbar;
