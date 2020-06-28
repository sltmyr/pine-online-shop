import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import beigeCoat from '../images/beige-coat-1.jpg';
import navyCoat from '../images/blue-coat-1.jpg';
import greyCoat from '../images/grey-coat-1.jpg';
import Spinner from '../images/spinner.svg';
import { CoatColor } from '../pages/Products';
import {
  AddressForm,
  CheckoutSectionHeader,
  CloseIcon,
  ConfirmationText,
  CreditCardWrapper,
  ErrorText,
  FormInput,
  FormLabel,
  FormRow,
  ModalBackground,
  ModalWindow,
  OrderNowButton,
  PaypalButtonContainer,
  RadioInput,
  RadioOption,
  StyledSpinner,
  Summary,
  SummaryPicture,
  SummaryText,
} from './Checkout.styles';

declare global {
  interface Window {
    paypal: any;
  }
}

const CHECKOUT_UNAVAILABLE = false; // set to true for publishing during development

const errorMessage = 'Something went wrong. Please try reloading the page.';
const addressElements: AddressElement[] = [
  { id: 'email', label: 'email', autoComplete: 'email', placeholder: 'jane.doe@gmail.com', type: 'email' },
  { id: 'name', label: 'full name', autoComplete: 'name', placeholder: 'Jane Doe', type: 'text' },
  {
    id: 'street',
    label: 'street & no.',
    autoComplete: 'street-address',
    placeholder: 'Beautifulstreet 12a',
    type: 'text',
  },
  {
    id: 'postalCode',
    label: 'postal code',
    autoComplete: 'postal-code',
    placeholder: '12345',
    type: 'number',
  },
  {
    id: 'city',
    label: 'city',
    autoComplete: 'address-level2',
    placeholder: 'Pine city',
    type: 'text',
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

const fetchClientSecret = async (): Promise<string | undefined> => {
  try {
    const response = await fetch('https://checkout.pinecoat.com/intent');
    const { clientSecret } = await response.json();
    return clientSecret;
  } catch {
    return undefined;
  }
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
  const [stripeError, setStripeError] = useState<string>('');
  const [address, setAddress] = useState({
    email: '',
    name: '',
    street: '',
    postalCode: '',
    city: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('creditCard');
  const [paymentSucceeded, setPaymentSucceeded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formComplete, setFormComplete] = useState<boolean>(false);
  const [showErrors, setShowErrors] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const secret = await fetchClientSecret();
      secret ? setStripeClientSecret(secret) : setStripeError(errorMessage);
    })();
  }, []);

  useEffect(() => {
    if (address.email && address.name && address.street && address.postalCode && address.city) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [address]);

  const stripe = useStripe();
  const elements = useElements();

  const processStripePayment = async () => {
    if (!stripe || !elements) return;
    const stripeCardElement = elements.getElement(CardElement);
    if (!stripeCardElement) return;

    setLoading(true);
    const result = await stripe.confirmCardPayment(stripeClientSecret, {
      payment_method: {
        card: stripeCardElement,
        billing_details: {
          name: address.name,
          email: address.email,
          address: { city: address.city, line1: address.street, postal_code: address.postalCode },
        },
      },
    });
    setLoading(false);
    if (result.error) {
      setStripeError(result.error.message || '');
    } else if (result.paymentIntent?.status === 'succeeded') {
      setPaymentSucceeded(true);
    }
  };

  const PaypalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

  return (
    <ModalBackground>
      <ModalWindow data-testid='modal'>
        <CloseIcon onClick={() => !loading && onComplete()} />
        {paymentSucceeded ? renderThankYouMessage() : renderCheckoutForm()}
        {renderSummary()}
        {!paymentSucceeded && renderOrderButton()}
        {showErrors && <ErrorText>An Error occured</ErrorText>}
      </ModalWindow>
    </ModalBackground>
  );

  function renderCheckoutForm() {
    return (
      <>
        <CheckoutSectionHeader>Address</CheckoutSectionHeader>
        <AddressForm>
          {addressElements.map((addressElement) => (
            <FormRow key={addressElement.id}>
              <FormLabel htmlFor={addressElement.id}>{addressElement.label}</FormLabel>
              <FormInput
                required
                id={addressElement.id}
                type={addressElement.type}
                placeholder={addressElement.placeholder}
                autoComplete={addressElement.autoComplete}
                value={address[addressElement.id]}
                onChange={(e) => setAddress({ ...address, [addressElement.id]: e.target.value })}
              />
            </FormRow>
          ))}
        </AddressForm>
        <CheckoutSectionHeader>Payment</CheckoutSectionHeader>
        <RadioOption>
          <RadioInput
            id='creditCard'
            type='radio'
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          <FormLabel htmlFor='creditCard'>Credit Card</FormLabel>
        </RadioOption>
        {paymentMethod === 'creditCard' && (
          <CreditCardWrapper>
            <CardElement options={stripeCardElementOptions} /> {stripeError && <ErrorText>{stripeError}</ErrorText>}
          </CreditCardWrapper>
        )}
        <RadioOption>
          <RadioInput
            id='paypal'
            type='radio'
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          <FormLabel htmlFor='paypal'>Paypal</FormLabel>
        </RadioOption>
      </>
    );
  }

  function renderThankYouMessage() {
    return (
      <>
        <CheckoutSectionHeader>Thank you for your order!</CheckoutSectionHeader>
        <ConfirmationText>You will shortly get the confirmation via email.</ConfirmationText>
      </>
    );
  }

  function renderSummary() {
    return (
      <>
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
      </>
    );
  }

  function renderOrderButton() {
    if (paymentMethod === 'creditCard' || !formComplete) {
      return (
        <OrderNowButton
          color={`pine${selectedColor.charAt(0).toUpperCase()}${selectedColor.slice(1)}`}
          onClick={() => {
            formComplete ? processStripePayment() : setShowErrors(true);
          }}
          disabled={loading}
        >
          {loading ? <StyledSpinner src={Spinner} alt='loading...' /> : 'Order now'}
        </OrderNowButton>
      );
    } else {
      return (
        <PaypalButtonContainer>
          <PaypalButton
            style={{ layout: 'horizontal', color: 'silver', height: 30, tagline: false, label: 'pay' }}
            createOrder={(data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{ amount: { currency_code: 'EUR', value: '234.56' } }],
              });
            }}
            onApprove={() => setPaymentSucceeded(true)}
          />
        </PaypalButtonContainer>
      );
    }
  }
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
  type: string;
};
type PaymentMethod = 'creditCard' | 'paypal';
