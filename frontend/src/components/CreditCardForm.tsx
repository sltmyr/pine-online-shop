import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { ErrorText, StripeForm } from './CreditCardForm.styles';

const errorMessage = 'Something went wrong. Please try again later.';

// COMPONENT STILL UNDER DEVELOPMENT
export default () => {
  const [stripeClientSecret, setStripeClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <StripeForm onSubmit={handleSubmit}>
      <CardElement />
      {error && <ErrorText>{error}</ErrorText>}
    </StripeForm>
  );
};
