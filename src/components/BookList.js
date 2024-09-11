import { Link } from "react-router-dom";
import { bookshelfType } from "../constants/constants";
import Bookshelf from "./Bookshelf";

const BookList = ({
  selectedBooks,
  onUpdateBookLocation,
  setSearchedBooks,
}) => {
  const onSearchRedirect = () => {
    setSearchedBooks(null);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads Book Library</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelfType.map((type) => {
            return (
              <Bookshelf
                key={type}
                selectedBooks={
                  selectedBooks &&
                  selectedBooks?.filter((book) => book.shelf.includes(type))
                }
                type={type}
                onUpdateBookLocation={onUpdateBookLocation}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" onClick={onSearchRedirect}>
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default BookList;
