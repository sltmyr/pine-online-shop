import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import beigeCoat from '../images/beige-coat-1.jpg';
import navyCoat from '../images/blue-coat-1.jpg';
import greyCoat from '../images/grey-coat-1.jpg';
import { CoatColor } from '../pages/Products';
import {
  AddressForm,
  CheckoutSectionHeader,
  CloseIcon,
  CreditCardWrapper,
  ErrorText,
  FormInput,
  FormLabel,
  FormRow,
  ModalBackground,
  ModalWindow,
  OrderNowButton,
  RadioInput,
  Summary,
  SummaryPicture,
  SummaryText,
} from './Checkout.styles';

// COMPONENT STILL UNDER DEVELOPMENT
const CHECKOUT_UNAVAILABLE = false; // set to true for publishing during development

const errorMessage = 'Something went wrong. Please try again later.';
const addressElements: AddressElement[] = [
  { id: 'email', label: 'email', autoComplete: 'email', placeholder: 'jane.doe@gmail.com' },
  {
    id: 'name',
    label: 'full name',
    autoComplete: 'name',
    placeholder: 'Jane Doe',
  },
  {
    id: 'street',
    label: 'street & no.',
    autoComplete: 'street-address',
    placeholder: 'Beautifulstreet 12a',
  },
  {
    id: 'postalCode',
    label: 'postal code',
    autoComplete: 'postal-code',
    placeholder: '12345',
  },
  {
    id: 'city',
    label: 'city',
    autoComplete: 'address-level2',
    placeholder: 'Pine city',
  },
];

const summaryPicture = {
  beige: beigeCoat,
  navy: navyCoat,
  grey: greyCoat,
};

const stripeCardElementOptions = {
  style: {
    base: {
      fontFamily: 'freight-sans-pro, sans-serif',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      color: 'black',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

export default ({ onComplete, selectedColor }: Props) => {
  if (CHECKOUT_UNAVAILABLE) {
    return (
      <ModalBackground>
        <ModalWindow data-testid='modal'>
          The shop at pinecoat.com is currently under construction. Soon you will be able to order your coat here.
          <OrderNowButton color='pineBeige' onClick={onComplete} data-testid='modal-button'>
            Got it
          </OrderNowButton>
        </ModalWindow>
      </ModalBackground>
    );
  }

  const [stripeClientSecret, setStripeClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [address, setAddress] = useState({
    email: '',
    name: '',
    street: '',
    postalCode: '',
    city: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('creditCard');

  const fetchClientSecret = async () => {
    try {
      const response = await fetch('https://checkout.pinecoat.com/intent');
      const { clientSecret } = await response.json();
      !clientSecret && setError(errorMessage);
      setStripeClientSecret(clientSecret);
    } catch {
      setError(errorMessage);
    }
  };
  useEffect(() => {
    fetchClientSecret();
  }, []);

  const stripe = useStripe();
  const elements = useElements();

  const processStripePayment = async () => {
    if (!stripe || !elements) {
      return;
    }
    const stripeCardElement = elements.getElement(CardElement);
    if (!stripeCardElement) {
      return;
    }
    const result = await stripe.confirmCardPayment(stripeClientSecret, {
      payment_method: {
        card: stripeCardElement,
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });
    if (result.error) {
      setError(result.error.message || '');
    } else if (result.paymentIntent?.status === 'succeeded') {
      setError(result.paymentIntent.description || '');
    }
  };

  return (
    <ModalBackground>
      <ModalWindow data-testid='modal'>
        <CloseIcon onClick={onComplete} />
        <CheckoutSectionHeader>Address</CheckoutSectionHeader>
        <AddressForm>
          {addressElements.map((addressElement) => (
            <FormRow key={addressElement.id}>
              <FormLabel htmlFor={addressElement.id}>{addressElement.label}</FormLabel>
              <FormInput
                id={addressElement.id}
                type='text'
                placeholder={addressElement.placeholder}
                required
                autoComplete={addressElement.autoComplete}
                value={address[addressElement.id]}
                onChange={(e) => setAddress({ ...address, [addressElement.id]: e.target.value })}
              />
            </FormRow>
          ))}
        </AddressForm>
        <CheckoutSectionHeader>Payment</CheckoutSectionHeader>
        <FormRow>
          <RadioInput
            id='creditCard'
            type='radio'
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          <FormLabel htmlFor='creditCard'>Credit Card</FormLabel>
        </FormRow>
        {paymentMethod === 'creditCard' && (
          <CreditCardWrapper>
            <CardElement options={stripeCardElementOptions} /> {error && <ErrorText>{error}</ErrorText>}
          </CreditCardWrapper>
        )}
        <FormRow>
          <RadioInput
            id='paypal'
            type='radio'
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          <FormLabel htmlFor='paypal'>Paypal</FormLabel>
        </FormRow>
        <CheckoutSectionHeader>Order Summary</CheckoutSectionHeader>
        <Summary>
          <SummaryPicture src={summaryPicture[selectedColor]} />
          <SummaryText>
            model: the classic PINE coat <br />
            color: {selectedColor} <br />
            size: L <br />
            shipping: 2-3 business days in Germany, 5-7 in EU <br />
            price: 300 euro
          </SummaryText>
        </Summary>
        <OrderNowButton
          color={`pine${selectedColor.charAt(0).toUpperCase()}${selectedColor.slice(1)}`}
          onClick={() => {
            paymentMethod === 'creditCard' ? processStripePayment() : console.log('do paypal stuff');
          }}
        >
          Order now
        </OrderNowButton>
      </ModalWindow>
    </ModalBackground>
  );
};

type Props = {
  onComplete: () => void;
  selectedColor: CoatColor;
};

type AddressElement = {
  id: 'email' | 'name' | 'street' | 'postalCode' | 'city';
  label: string;
  autoComplete: string;
  placeholder: string;
};
type PaymentMethod = 'creditCard' | 'paypal';
