import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

it("renders logo", () => {
  const { getByTestId } = render(<Header />);
  const header = getByTestId("logo");
  expect(header).toBeInTheDocument();
});

it("opens and closes menu", () => {
  const { getByTestId, queryByTestId } = render(<Header />);
  expect(queryByTestId(/menu-small/i)).toBeFalsy();
  fireEvent.click(getByTestId("hamburger"));
  expect(queryByTestId(/menu-small/i)).toBeTruthy();
  fireEvent.click(getByTestId("hamburger"));
  expect(queryByTestId(/menu-small/i)).toBeFalsy();
});
