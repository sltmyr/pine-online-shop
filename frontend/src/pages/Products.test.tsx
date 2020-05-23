import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Products from "./Products";

afterEach(cleanup);

it("renders without modal window", () => {
  const { queryByTestId } = render(<Products />);
  expect(queryByTestId(/modal/i)).not.toBeInTheDocument();
});

it("opens and closes modal window on button click", () => {
  const { getByTestId, queryByTestId } = render(<Products />);
  fireEvent.click(getByTestId("buy-button"));
  expect(getByTestId("modal")).toBeInTheDocument();
  fireEvent.click(getByTestId("modal-button"));
  expect(queryByTestId(/modal/i)).not.toBeInTheDocument();
});
