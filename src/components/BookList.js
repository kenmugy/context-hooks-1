import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

class BookList extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <BookContext.Consumer>
        {bookCont => (
          <ThemeContext.Consumer>
            {themeCont => {
              const { books } = bookCont;
              const { isLight, dark, light } = themeCont;
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
            }}
          </ThemeContext.Consumer>
        )}
      </BookContext.Consumer>
    );
  }
}

export default BookList;
