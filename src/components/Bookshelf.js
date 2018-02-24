import React from 'react';
import PropTypes from 'prop-types';
import { BookPropType } from '../Utils';

import Book from './Book';

const BookShelf = ({ title, books, handleChange }) => (
	<div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      	{books.map(book => (
          <li key={book.id}><Book book={book} handleChange={handleChange}/></li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(BookPropType).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default BookShelf;