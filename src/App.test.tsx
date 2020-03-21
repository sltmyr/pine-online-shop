import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders header", () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

//TODO
test("can use theme", () => {
  render(<App />);
  // const headerElement = getByTestId("header");
  expect(window.getComputedStyle(document.getRootNode)).toHaveStyle("font-family: freight-sans-pro, sans-serif;");
});
