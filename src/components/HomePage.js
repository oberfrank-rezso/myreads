import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ShowBooks = (props) => {

  const books = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  props.books.forEach(book => {
    books[book.shelf].push(book);
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
            books={books.currentlyReading}
            handleChange={props.handleChange}
          />
          <Bookshelf
            title='Want to Read'
            books={books.wantToRead}
            handleChange={props.handleChange}
          />
          <Bookshelf
            title='Read'
            books={books.read}
            handleChange={props.handleChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default ShowBooks;