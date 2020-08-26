import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders header', () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

it('global styles set', () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId('header');
  expect(headerElement).toHaveStyle('font-family: freight-sans-pro,sans-serif;');
});
