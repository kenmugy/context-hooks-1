import React, { Component } from 'react';

class BookList extends Component {
  state = {};
  render() {
    return (
      <div className=''>
        <h3>book lists</h3>
        <ul className="books">
          <li>Things fall Apart</li>
          <li>Reciepe for disaster</li>
          <li>Among the fools</li>
          <li>Empre strikes back</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
