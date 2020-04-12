import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup);

it("scrolls to philosophy section", () => {
  window.scroll = jest.fn();
  const { getByTestId } = render(<Home />);
  fireEvent.click(getByTestId("hamburger"));
  fireEvent.click(getByTestId("philosophy-button"));
  expect(window.scroll).toHaveBeenCalled();
});
