import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { bookDetails } from "../constants/constants";
import BookDetails from "./BookDetails";

describe("BookDetails", () => {
  it("will check if the book details appear in the dialog window", () => {
    const component = render(
      <BookDetails open={true} bookDetails={bookDetails} />
    );

    const closeButton = component.getByTestId("close-button");
    const tableBody = component.getByTestId("table-body");

    expect(closeButton).toBeInTheDocument();
    expect(tableBody.children.length).toBeGreaterThan(0);
  });
});
