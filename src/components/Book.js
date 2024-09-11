import { useState } from "react";
import BookshelfControl from "./BookshelfControl";
import BookDetails from "./BookDetails";

const Book = ({ selectedBooks, onUpdateBookLocation }) => {
  const [detailsDialog, setDetailsDialog] = useState(false);

  const handleDialogOpen = () => {
    setDetailsDialog(true);
  };

  const handleDialogClose = () => {
    setDetailsDialog(false);
  };

  return (
    <>
      <div className="book" draggable="true">
        <div className="book-top">
          <div
            className="book-cover"
            data-testid="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                selectedBooks && selectedBooks?.imageLinks?.smallThumbnail
              })`,
            }}
            onClick={handleDialogOpen}
          ></div>
          <BookshelfControl
            selectedBookshelfType={
              selectedBooks?.shelf ? selectedBooks?.shelf : "none"
            }
            book={selectedBooks}
            onUpdateBookLocation={onUpdateBookLocation}
          />
        </div>
        <div className="book-title" data-testid="book-title">
          {selectedBooks && selectedBooks.title}
        </div>
        <div className="book-authors" data-testid="book-authors">
          {selectedBooks && selectedBooks?.authors?.join(", ")}
        </div>
      </div>
      <BookDetails
        open={detailsDialog}
        onClose={handleDialogClose}
        bookDetails={selectedBooks}
      />
    </>
  );
};

export default Book;
