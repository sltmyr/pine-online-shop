import * as stripe from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Checkout, { intentUrl } from './Checkout';

afterEach(cleanup);

function renderCheckout() {
  const onComplete = jest.fn();
  const { getByTestId, queryByTestId, queryAllByTestId } = render(
    <Elements stripe={new Promise(() => null)}>
      <Checkout onComplete={onComplete} selectedColor='grey' />
    </Elements>
  );
  const modal = getByTestId('modal');
  const closeIcon = getByTestId('close-icon');
  const addressForm = getByTestId('address-form');
  const inputEmail = getByTestId('input-email');
  const inputName = getByTestId('input-name');
  const inputStreet = getByTestId('input-street');
  const inputPostalCode = getByTestId('input-postalCode');
  const inputCity = getByTestId('input-city');
  const creditCardInput = getByTestId('credit-card-input');
  const summary = getByTestId('summary');
  const orderButton = getByTestId('order-button');
  return {
    queryByTestId,
    queryAllByTestId,
    modal,
    closeIcon,
    addressForm,
    inputEmail,
    inputName,
    inputStreet,
    inputPostalCode,
    inputCity,
    creditCardInput,
    summary,
    orderButton,
    onComplete,
  };
}

it('renders modal and closes it when clicking on X', () => {
  const { modal, closeIcon, onComplete } = renderCheckout();
  expect(modal).toBeInTheDocument();
  fireEvent.click(closeIcon);
  expect(onComplete).toHaveBeenCalledTimes(1);
});

it('fetches stripe client secret on render', () => {
  const mockedFetch = jest.spyOn(window, 'fetch').mockImplementationOnce(() => new Promise(() => 'testSecret'));
  renderCheckout();
  expect(mockedFetch).toHaveBeenCalledWith(intentUrl);
});

it('initially renders checkout form, summary, and order button', () => {
  const { queryByTestId, addressForm, creditCardInput, summary, orderButton } = renderCheckout();
  expect(addressForm).toBeInTheDocument();
  expect(creditCardInput).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(orderButton).toBeInTheDocument();
  expect(queryByTestId(/paypal-button/i)).toBeFalsy();
  expect(queryByTestId(/thank-you-message/i)).toBeFalsy();
});

it('highlights input errors only after clicking order button, hides errors on valid input', () => {
  const { queryByTestId, queryAllByTestId, orderButton, inputEmail } = renderCheckout();
  expect(queryByTestId(/address-input-error/i)).toBeFalsy();
  fireEvent.click(orderButton);
  expect(queryAllByTestId(/address-input-error/i)).toHaveLength(5);
  fireEvent.change(inputEmail, { target: { value: 'pine@coat.com' } });
  expect(queryAllByTestId(/address-input-error/i)).toHaveLength(4);
});

it('processes stripe payment', async () => {
  const mockGetElement = jest.fn(() => 'test-element');
  const mockUseElements = jest.spyOn(stripe, 'useElements').mockImplementation(() => ({ getElement: mockGetElement }));
  const mockConfirmCardPayment = jest.fn(() => '42');
  const mockUseStripe = jest
    .spyOn(stripe, 'useStripe')
    .mockImplementation(() => ({ confirmCardPayment: mockConfirmCardPayment }));

  const { orderButton, inputEmail, inputName, inputStreet, inputPostalCode, inputCity } = renderCheckout();

  expect(mockUseStripe).toHaveBeenCalled();
  expect(mockUseElements).toHaveBeenCalled();
  expect(mockGetElement).not.toHaveBeenCalled();
  expect(mockConfirmCardPayment).not.toHaveBeenCalled();

  fireEvent.change(inputEmail, { target: { value: 'pine@coat.com' } });
  fireEvent.change(inputName, { target: { value: 'pinest coats' } });
  fireEvent.change(inputStreet, { target: { value: 'under the pines 123c' } });
  fireEvent.change(inputPostalCode, { target: { value: '12345' } });
  fireEvent.change(inputCity, { target: { value: 'Pine City' } });

  fireEvent.click(orderButton);

  await waitFor(() => expect(mockGetElement).toHaveBeenCalled());
  await waitFor(() => expect(mockConfirmCardPayment).toHaveBeenCalled());

  //   expect(queryByTestId(/stripe-error/i)).toBeFalsy();
  //   expect(mockConfirmCardPayment).toHaveBeenCalled();
});
