import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import { showErrorMessage, removeErrorMessage } from "./utils/helpers";
import BookList from "./components/BookList";
import Search from "./components/Search";

function App() {
  const [selectedBooks, setSelectedBooks] = useState(null);
  const [searchedBooks, setSearchedBooks] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setSelectedBooks(res);
  };

  const updateBookLocation = (book, shelf) => {
    const changeBookshelf = async () => {
      await BooksAPI.update(book, shelf);

      const getBook = async () => {
        await BooksAPI.get(book.id);
        getBooks();
      };
      getBook();
    };
    changeBookshelf();
  };

  const searchBooks = (query) => {
    const search = async () => {
      removeErrorMessage();

      if (!query || query.trim() === "") {
        console.warn("Search query is empty.");
        return setSearchedBooks([]);
      }

      const res = await BooksAPI.search(query, 20);
      if (!res || res.error) {
        setSearchedBooks([]);
        showErrorMessage("No data returned. Please try again");
      } else {
        removeErrorMessage();

        const booksWithShelves = res.map((book) => ({
          ...book,
          shelf: book.shelf || "none",
        }));

        selectedBooks.forEach((selectedBook) => {
          booksWithShelves.forEach((bookWithShelves) => {
            if (selectedBook.id === bookWithShelves.id) {
              bookWithShelves.shelf = selectedBook.shelf;
            }
          });
        });
        setSearchedBooks(booksWithShelves);
      }
    };
    search();
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BookList
            selectedBooks={selectedBooks}
            onUpdateBookLocation={updateBookLocation}
            setSearchedBooks={setSearchedBooks}
          />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            searchedBooks={searchedBooks}
            onSearchBooks={searchBooks}
            onUpdateBookLocation={updateBookLocation}
          />
        }
      />
    </Routes>
  );
}

export default App;
