# MyReads Book Library Project

Welcome to the MyReads Book Library! This project is a dynamic web app designed to help you manage your book collection with ease. Whether you want to search for new books, add them to your collection, or organize them on a virtual shelf, this app provides an intuitive interface to do just that. Built with React, it leverages modern web technologies to deliver a smooth user experience.

# Features

-   Search for Books: Quickly find books using search functionality. You can search by title, author, or ISBN. This app integrates with an external book API to provide real-time search results.
-   Add Books: Add new books using search functionality. Just enter your query and move selected book to a new book shelf using book shelf control located in the bottom-right corner of the book.
-   Drag and Drop Books: Organise your book shelves by dragging and dropping books into different categories, including "currently reading", "want to read" and "read".
-   View book details: Click on any book to view more detailed information, including title, author, and description etc.
-   Error handling: This app includes robust error handling to manage errors and provide clear feedback to users.
-   Jest testing: This project includes tests to ensure the reliability and correctness of its components and functionality.

## Usage

To get started developing right away:

- Clone this repository from [GitHub]() into a folder of your choice.
- navigate to your project directory.
- install all project dependencies with `npm install`.
- start the development server with `npm start`.
- you will be redirected to http://localhost:3000 where you can start using the app.

## Project Structure

```bash
├── README.md                           # This file. Contains information about the project, setup, and usage.
├── package.json                        # npm package manager file. Contains project dependencies and scripts.
├── public
│   ├── favicon.ico                     # React Icon. You may change this if you wish.
│   └── index.html                      # DO NOT MODIFY. The main HTML file for the React app.
└── src
    ├── App.css                         # Styles for your app. Feel free to customize this as you desire.
    ├── App.js                          # The root component of your app. Contains the main application logic.
    ├── icons                           # Folder for helpful images used in your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css                       # Global styles. You probably won't need to change anything here.
    ├── index.js                        # Entry point for the React application. Renders the app to the DOM.
    ├── constants           
    │   └── constants.js                # Defines constants used throughout the app.
    ├── utils                           # Utility functions and constants used across the app.
    │   ├── BooksAPI.js                 # JS API for interacting with the Udacity backend. Contains methods for fetching and managing books.
    │   └── helpers.js                  # Utility functions for common tasks.
    └── components                      # Folder for React components. Organize your app's UI here.
        ├── Book.js                     # Component for displaying a single book.
        ├── Book.test.js                # Jest test file for the Book component.
        ├── BookDetails.js              # Component for displaying details of a single book.
        ├── BookDetails.test.js         # Jest test file for the BookDetails component.
        ├── BookList.js                 # Component for displaying a list of books.
        ├── Bookshelf.js                # Component for managing and displaying book shelves.
        ├── Bookshelf.test.js           # Jest test file for the Bookshelf component.
        ├── BookshelfControl.js         # Component for displaying book shelf controls.
        ├── BookshelfControl.test.js    # Jest test file for the BookshelfControl component.
        └── Search.js                   # Component for managing search and displaying book results.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Acknowledgments

Special thanks to the React community for providing the tools that made this project possible. Inspired by the Udacity React Nanodegree project.
