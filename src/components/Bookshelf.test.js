import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Bookshelf from "./Bookshelf";
import { formatTitle } from "../utils/helpers";

describe("Bookshelf", () => {
  it("will check if the shelf title is correctly displayed", () => {
    const bookshelf = "currentlyReading";
    const type = formatTitle(bookshelf);
    const component = render(<Bookshelf type={type} />);

    const bookshelfTitle = component.getByTestId("bookshelf-title");
    expect(bookshelfTitle).toHaveTextContent("Currently Reading");
  });
});
