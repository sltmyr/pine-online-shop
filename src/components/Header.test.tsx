import React from "react";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

it("renders logo", () => {
  const { getByTestId } = render(<Header />);
  const header = getByTestId("logo");
  expect(header).toBeInTheDocument();
});

it("opens and closes menu when clicking on menu button", () => {
  const { getByTestId, queryByTestId } = render(<Header />);
  expect(queryByTestId(/menu-small/i)).toBeFalsy();
  fireEvent.click(getByTestId("hamburger"));
  expect(queryByTestId(/menu-small/i)).toBeTruthy();
  fireEvent.click(getByTestId("hamburger"));
  expect(queryByTestId(/menu-small/i)).toBeFalsy();
});

it("closes menu when clicking on page", () => {
  let clickCallback: (mockMouseEvent: { target: Node }) => void;
  document.addEventListener = jest.fn().mockImplementation((_event, cb) => {
    clickCallback = cb;
  });

  const { getByTestId, queryByTestId } = render(<Header />);

  fireEvent.click(getByTestId("hamburger"));
  expect(queryByTestId(/menu-small/i)).toBeTruthy();
  act(() => clickCallback({ target: document.createElement("div") }));
  expect(queryByTestId(/menu-small/i)).toBeFalsy();
});
