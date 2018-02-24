import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/App.css';

import * as BooksAPI from '../BooksAPI';
import * as Utils from '../Utils';

import SearchPage from './SearchPage';
import HomePage from './HomePage';

class BooksApp extends React.Component {

	state = {
    books: [],
    results: [],
    query: ''
  };

	componentDidMount() {

    // FETCH BOOKS
		BooksAPI.getAll().then(data => {
			this.setState({ books: data });
		});

	}

  handleSearch = (query) => {

    // RETURN ON EMPTY QUERY
    if (query === '') {
      this.setState({ query, results: [] });
      return;
    }

    // CONTROL FORM & CLEAR SEARCH PAGE
    this.setState({ query, results: [] });

    // SEND REQUEST TO SERVER
    BooksAPI.search(query).then(results => {

      // NO BOOKS FOUND
      if (results.error) return;

      // UPDATE SEARCH PAGE
      this.setState(prevState => ({
        results: Utils.assignShelf(results, prevState.books)
      }));

    });

  };

  handleChange = (book, shelf) => {

    // UPDATE SHELF ON SERVER
    BooksAPI.update(book,shelf).then(res => {

      this.setState( prevState => {

        const bIndex = Utils.findIndexById(book,prevState.books);
        const rIndex = Utils.findIndexById(book,prevState.results);

        // REMOVE FROM BOOKS
        if (shelf === 'none') {
          prevState.books.splice(bIndex,1);
        }

        // ADD TO BOOKS
        else if (bIndex === -1) {
          book.shelf = shelf;
          prevState.books.push(book);
        }

        // REMOVE FROM BOOKS
        else {
          prevState.books[bIndex].shelf = shelf;
        }

        // UPDATE ON SEARCH PAGE
        if (rIndex !== -1) {
          prevState.results[rIndex].shelf = shelf;
        }

        return prevState;

      });
    });
  };

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<HomePage
						books={this.state.books}
						handleChange={this.handleChange}
					/>
				)}/>
				<Route path="/search" render={() => (
					<SearchPage
            query={this.state.query}
						results={this.state.results}
            handleSearch={this.handleSearch}
						handleChange={this.handleChange}
					/>
				)}/>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
  return ({
    hihi: 'hihi'
  });
}

function mapDispatchToProps(dispatch, props) {
  return ({});
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksApp);
