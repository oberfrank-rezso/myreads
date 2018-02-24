# MyReads: A Book Lending App

A React.js application that allows you to select and categorize books you have read, are currently reading, or want to read. You can search for new books and move your existing ones between your shelves.

MyReads was created for the final assessment project for the **Udacity's React Fundamentals** course.

## Quickstart

Clone the repository and install project dependecies. Run the development server using `npm start`.

```bash
$ git clone https://github.com/oberfrank-rezso/reactnd-project-myreads
$ cd reactnd-project-myreads
$ npm install
$ npm start
```

## File Structure
```bash
├── README.md
├── package.json
├── public
│ ├── favicon.ico
│ └── index.html
└── src
  ├── BooksAPI.js
  ├── index.js
  └── components
    ├── App.js
    ├── Book.js
    ├── Bookshelf.js
    ├── HomePage.js
    └── SearchPage.js
  └── images
    ├── add.svg
    ├── arrow-back.svg
    ├── arrow-drop-down.svg
    └── cover-unavailable.svg
  └── styles
    ├── index.css
    └── App.css
```

## Search Terms

The following terms are available after clicking the  **Add button** in the lower left corner:

`Android`, `Art`, `Artificial Intelligence`, `Astronomy`, `Austen`, `Baseball`, `Basketball`, `Bhagat`, `Biography`, `Brief`, `Business`, `Camus`, `Cervantes`, `Christie`, `Classics`, `Comics`, `Cook`, `Cricket`, `Cycling`, `Desai`, `Design`, `Development`, `Digital Marketing`, `Drama`, `Drawing`, `Dumas`, `Education`, `Everything`, `Fantasy`, `Film`, `Finance`, `First`, `Fitness`, `Football`, `Future`, `Games`, `Gandhi`, `Homer`, `Horror`, `Hugo`, `Ibsen`, `Journey`, `Kafka`, `King`, `Lahiri`, `Larsson`, `Learn`, `Literary Fiction`, `Make`, `Manage`, `Marquez`, `Money`, `Mystery`, `Negotiate`, `Painting`, `Philosophy`, `Photography`, `Poetry`, `Production`, `Programming`, `React`, `Redux`, `River`, `Robotics`, `Rowling`, `Satire`, `Science Fiction`, `Shakespeare`, `Singh`, `Swimming`, `Tale`, `Thrun`, `Time`, `Tolstoy`, `Travel`, `Ultimate`, `Virtual Reality`, `Web Development`, `iOS`

## TODO

In the near future, the following features are going to be added to the project:

- [ ] error handling
- [ ] drag'n'drop
- [ ] tests