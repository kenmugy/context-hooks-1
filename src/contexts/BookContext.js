import React, { Component, createContext } from 'react';

export const BookContext = createContext();

class BookContextProvider extends Component {
  state = {
    books: [
      {
        id: 0,
        title: 'Things fall Apart'
      },
      {
        id: 0,
        title: 'Reciepe for disaster'
      },
      {
        id: 0,
        title: 'Empre strikes back'
      }
    ]
  };
  render() {
    return (
      <BookContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;
