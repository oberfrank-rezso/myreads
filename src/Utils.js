import PropTypes from 'prop-types';

/**
* @description Finds index of book in list
* @param {Object}   book
* @param {string}   book.id
* @param {Object[]} bookList
* @returns {number} Index of a book in an array of books or -1 if the book is not in array.
*/

const findIndexById = (val, arr) => (
  arr.findIndex(element => ( element.id === val.id ))
)

/**
* @description Assign shelf property to an array of books from an other array of books
* @param {Object[]} target - books to assign the shelf property to
* @param {Object[]} source - books to get the shelf property from
* @returns {Object[]} Copy of target with shelf properties from source
*/

const assignShelf = (target, source) => {

  const sourceShelves =
    source.reduce((accumulator, newValue) => {
      return {
        ...accumulator,
        [newValue.id]: newValue.shelf
      }
    },{});

  return (
    target.map(book => ({
        ...book,
        shelf: (sourceShelves.hasOwnProperty(book.id) ? sourceShelves[book.id] : 'none')
      })
    )
  );

}

/**
* @description React PropType for book props
*/

const BookPropType =
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.object
  });

export { findIndexById, assignShelf, BookPropType };