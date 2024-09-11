import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookshelfControl from "./BookshelfControl";

describe("BookshelfControl", () => {
  it("will check if the dropdown control shows correct shelves for each book", () => {
    const component = render(<BookshelfControl />);

    const shelfControl = component.getByTestId("shelf-control");
    const options = Array.from(shelfControl.options);
    expect(options.map((option) => option.value)).toEqual([
      "moveto",
      "currentlyReading",
      "wantToRead",
      "read",
      "none",
    ]);
  });
});
