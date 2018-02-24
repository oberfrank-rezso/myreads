import React from 'react';
import PropTypes from 'prop-types';
import { BookPropType } from '../Utils';

import { Link } from 'react-router-dom';
import Book from './Book';

const SearchPage = (props) => (
	<div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.query}
            onChange={(e) => {props.handleSearch(e.target.value)}}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
	        {props.results.map(book => (
      		  <li key={book.id}>
              <Book
                book={book}
                handleChange={props.handleChange}
              />
            </li>
      	  ))}
        </ol>
      </div>
  </div>
);

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(BookPropType).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchPage;