import React from 'react';

import coverUnavailable from '../images/cover-unavailable.svg';

const Book = (props) => (
  <div className="book">
    <div className="book-top">
      <img
        className="book-cover"
        src={props.book.imageLinks ? props.book.imageLinks.smallThumbnail : coverUnavailable}
        alt={`Cover of the book '${props.book.title}' by ${props.book.authors ? props.book.authors.join(', ') : 'Unknown'}`}
      />
      <div className="book-shelf-changer">
        <select
        	value={props.book.shelf ? props.book.shelf : 'none'}
        	onChange={(e) => { props.handleChange(props.book,e.target.value) }}
        >
          <option value="" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors ? props.book.authors.join(', ') : 'Unknown'}</div>
  </div>
);

export default Book;