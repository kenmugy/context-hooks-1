import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <BookContextProvider>
          <BookList />
          <ToggleTheme />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
