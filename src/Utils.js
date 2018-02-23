/**
* @description Finds index of book in list
* @param {Object}   book
* @param {string}   book.id
* @param {Object[]} bookList
* @returns {number} Index of a book in an array of books or -1 if the book is not in array.
*/

function indexOfBook(book, bookList) {

  for (let i = 0; i < bookList.length; i++) {
    if (book.id === bookList[i].id) {
      return i;
    }
  }
  return -1;

}

/**
* @description Assign shelf property to an array of books from an other array of books
* @param {Object[]} target - books to assign the shelf property to
* @param {Object[]} source - books to get the shelf property from
* @returns {Object[]} Copy of target with shelf properties from source
*/

function assignShelf(target, source) {

  let to = [];

  for (let i = 0; i < target.length; i++) {

    const book  = target[i];
    const index = this.indexOfBook(book, source);

    let updated = JSON.parse(JSON.stringify(target[i]));

    if (index !== -1) {
      updated.shelf = source[i].shelf;
    }

    to.push(updated);

  }

  return to;
}

export { indexOfBook, assignShelf };