import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ searchedBooks, onSearchBooks, onUpdateBookLocation }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => onSearchBooks(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.map((book) => (
              <Book
                key={book.id}
                selectedBooks={book}
                onUpdateBookLocation={onUpdateBookLocation}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
