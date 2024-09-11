import { useState } from "react";
import { bookshelfType } from "../constants/constants";
import { formatTitle } from "../utils/helpers";

const BookshelfControl = ({
  selectedBookshelfType,
  book,
  onUpdateBookLocation,
}) => {
  const [shelf, setShelf] = useState(selectedBookshelfType);

  const onMoveBook = (book, shelf) => {
    setShelf(shelf);
    onUpdateBookLocation(book, shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={shelf}
        onChange={(e) => onMoveBook(book, e.target.value)}
        data-testid="shelf-control"
      >
        <option value="moveto" disabled>
          Move to...
        </option>
        {bookshelfType &&
          bookshelfType.map((bookshelf) => (
            <option key={bookshelf} value={bookshelf}>
              {formatTitle(bookshelf)}
            </option>
          ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfControl;
