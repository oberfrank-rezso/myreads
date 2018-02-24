import React from 'react';
import PropTypes from 'prop-types';
import { BookPropType } from '../Utils';

import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const HomePage = ({ books, handleChange }) => {

  const filteredBooks = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  books.forEach(book => {
    filteredBooks[book.shelf].push(book);
  });

	return (
		<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        	<Bookshelf
            title='Currently Reading'
            books={filteredBooks.currentlyReading}
            handleChange={handleChange}
          />
          <Bookshelf
            title='Want to Read'
            books={filteredBooks.wantToRead}
            handleChange={handleChange}
          />
          <Bookshelf
            title='Read'
            books={filteredBooks.read}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

HomePage.PropTypes = {
  books: PropTypes.arrayOf(BookPropType).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default HomePage;