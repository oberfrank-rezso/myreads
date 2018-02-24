import React from 'react';
import PropTypes from 'prop-types';
import { BookPropType } from '../Utils';

import coverUnavailable from '../images/cover-unavailable.svg';

const Book = ({ book, handleChange }) => (
  <div className="book">
    <div className="book-top">
      <img
        className="book-cover"
        src={book.imageLinks ? book.imageLinks.smallThumbnail : coverUnavailable}
        alt={`Cover of the book '${book.title}' by ${book.authors ? book.authors.join(', ') : 'Unknown'}`}
      />
      <div className="book-shelf-changer">
        <select
        	value={book.shelf ? book.shelf : 'none'}
        	onChange={(e) => { handleChange(book,e.target.value) }}
        >
          <option value="" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown'}</div>
  </div>
);

Book.propTypes = {
  book: BookPropType.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Book;