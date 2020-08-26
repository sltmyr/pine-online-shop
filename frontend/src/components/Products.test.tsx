import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Products from './Products';

afterEach(cleanup);

it('renders without checkout modal open ', () => {
  const { queryByTestId } = render(<Products />);
  expect(queryByTestId(/'checkout'/i)).not.toBeInTheDocument();
});

it('loads paypal script on render', () => {
  const loadPaypal = jest.fn();
  render(<Products loadPaypal={loadPaypal} />);
  expect(loadPaypal).toHaveBeenCalledTimes(1);
});

it('opens checkout modal on button click', () => {
  window.paypal = { Buttons: { driver: () => {} } };
  const loadPaypalScript = jest.fn((onLoad) => onLoad());
  const { getByTestId, queryByTestId } = render(<Products loadPaypal={loadPaypalScript} />);
  expect(queryByTestId(/modal/i)).not.toBeInTheDocument();
  fireEvent.click(getByTestId('buy-button'));
  expect(getByTestId('modal')).toBeInTheDocument();
});
