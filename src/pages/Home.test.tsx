import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Header from "../components/Header";

afterEach(cleanup);

it("does not scroll on initial load", () => {
  window.scroll = jest.fn();
  render(
    <Router>
      <Route path="/" component={Home}></Route>
    </Router>
  );
  expect(window.scroll).not.toHaveBeenCalled();
});

it("scrolls to philosophy section", () => {
  window.scroll = jest.fn();
  const { getByTestId } = render(
    <Router>
      <Header />
      <Route path="/" component={Home}></Route>
    </Router>
  );
  fireEvent.click(getByTestId("hamburger"));
  fireEvent.click(getByTestId("philosophy-button"));
  expect(window.scroll).toHaveBeenCalledWith({ top: expect.any(Number), left: 0, behavior: "smooth" });
  expect(window.scroll).not.toHaveBeenCalledWith({ top: 0, left: 0, behavior: "smooth" });
});

it("scrolls to top on click on logo", () => {
  window.scroll = jest.fn();
  const { getByTestId } = render(
    <Router>
      <Header />
      <Route path="/" component={Home}></Route>
    </Router>
  );
  fireEvent.click(getByTestId("logo"));
  expect(window.scroll).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "smooth" });
});
