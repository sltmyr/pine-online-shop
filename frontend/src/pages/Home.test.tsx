import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Header from '../components/Header';

afterEach(cleanup);

it('does not scroll on initial load', () => {
  render(
    <Router>
      <Route path='/' component={Home}></Route>
    </Router>
  );
  expect(window.scroll).not.toHaveBeenCalled();
});

it('scrolls to coat section', () => {
  const { getByTestId } = render(
    <Router>
      <Header />
      <Route path='/' component={Home}></Route>
    </Router>
  );
  fireEvent.click(getByTestId('hamburger'));
  fireEvent.click(getByTestId('coats-button'));
  expect(window.scroll).toHaveBeenCalledWith({ top: expect.any(Number), left: 0, behavior: 'smooth' });
  expect(window.scroll).not.toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
});

it('scrolls to top on click on logo', () => {
  const { getByTestId } = render(
    <Router>
      <Header />
      <Route path='/' component={Home}></Route>
    </Router>
  );
  fireEvent.click(getByTestId('logo'));
  expect(window.scroll).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
});
