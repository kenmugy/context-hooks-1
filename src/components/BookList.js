import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <div style={{ background: theme.bg, color: theme.color }}>
      <h3>book lists</h3>
      <ul className='books'>
        {books.map(book => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BookList;
