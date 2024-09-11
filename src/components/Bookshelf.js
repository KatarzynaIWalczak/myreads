import Book from "./Book";
import { formatTitle } from "../utils/helpers";

const Bookshelf = ({ selectedBooks, type, onUpdateBookLocation }) => {
  const dropBook = (e) => {
    const bookData = e.dataTransfer.getData("application/json");
    const droppedBook = JSON.parse(bookData);
    onUpdateBookLocation(droppedBook, e.target.id);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const dragBook = (e) => {
    const draggedBook = e.target.children[1].textContent;
    selectedBooks.forEach((book) => {
      if (book.title.includes(draggedBook)) {
        e.dataTransfer.setData("application/json", JSON.stringify(book));
      }
    });
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title" data-testid="bookshelf-title">
        {formatTitle(type)}
      </h2>
      <div className="bookshelf-books">
        <ol
          className="books-grid"
          id={type}
          draggable
          onDrop={(e) => dropBook(e)}
          onDragOver={(e) => allowDrop(e)}
          onDragStart={(e) => dragBook(e)}
        >
          {selectedBooks &&
            selectedBooks.map((book, i) => (
              <li key={i}>
                <Book
                  key={book.id}
                  selectedBooks={book}
                  onUpdateBookLocation={onUpdateBookLocation}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
