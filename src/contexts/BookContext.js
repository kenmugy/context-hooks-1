import React, { useState, createContext } from 'react';
import uuid from 'uuid/v4'

export const BookContext = createContext();

let myBooks= [
  {
    id: uuid(),
    title: 'Things fall Apart'
  },
  {
    id: uuid(),
    title: 'Reciepe for disaster'
  },
  {
    id: uuid(),
    title: 'Empre strikes back'
  }
]

const BookContextProvider = (props) => {
  const [books] = useState(myBooks)
    return (
      <BookContext.Provider value={{books}}>
        {props.children}
      </BookContext.Provider>
    );
  }


export default BookContextProvider;
