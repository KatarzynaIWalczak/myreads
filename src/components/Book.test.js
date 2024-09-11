import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { bookDetails } from "../constants/constants";
import Book from "./Book";

describe("Book", () => {
  it("will check if the component correctly displays book details, including the title, author and thumbnail", () => {
    const component = render(<Book selectedBooks={bookDetails} />);
    const { title, authors, imageLinks } = bookDetails;

    const titleElement = component.getByTestId("book-title");
    const authorElement = component.getByTestId("book-authors");
    const thumbnailElement = component.getByTestId("book-cover");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);

    expect(authorElement).toBeInTheDocument();
    expect(authorElement).toHaveTextContent(authors.join(", "));

    expect(thumbnailElement).toBeInTheDocument();
    expect(thumbnailElement).toHaveStyle(
      `background-image: url(${imageLinks?.smallThumbnail})`
    );
  });
});
