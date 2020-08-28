import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { Grid, ErrorMessage, MainPicture, Description, Title, RigthPicture, LeftPicture } from './CoatDetails.styles';
import beigeCoat from '../images/beige-coat-1.jpg';
import beigeCoat2 from '../images/beige-coat-2.jpg';
import beigeCoat3 from '../images/beige-coat-3.jpg';
import navyCoat from '../images/blue-coat-1.jpg';
import navyCoat2 from '../images/blue-coat-2.jpg';
import navyCoat3 from '../images/blue-coat-3.jpg';
import greyCoat from '../images/grey-coat-1.jpg';
import greyCoat2 from '../images/grey-coat-2.jpg';
import greyCoat3 from '../images/grey-coat-3.jpg';
import Checkout from '../components/Checkout';
import { Button } from '../global_styles';

const models = ['beige', 'grey', 'navy'];
export type CoatColor = 'beige' | 'grey' | 'navy';

const mainPicture: { [model: string]: string } = {
  beige: beigeCoat,
  navy: navyCoat,
  grey: greyCoat,
};

const additionalPictures: { [model: string]: string[] } = {
  beige: [beigeCoat2, beigeCoat3],
  navy: [navyCoat2, navyCoat3],
  grey: [greyCoat2, greyCoat3],
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const loadPaypalScript = (onLoad: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=EUR`;
  script.async = true;
  script.onload = onLoad;
  script.onerror = () => console.log('Paypal SDK could not be loaded.');
  document.body.appendChild(script);
};

interface CoatDetailsProps {
  loadPaypal?: (onLoad: () => void) => void;
  stripeElememtsPromise?: Promise<Stripe | null>;
}

export default ({ loadPaypal = loadPaypalScript, stripeElememtsPromise = stripePromise }: CoatDetailsProps) => {
  const { model } = useParams<{ model: string }>();
  const [isCheckoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [isPaypalLoaded, setIsPaypalLoaded] = useState<boolean>(false);
  useEffect(() => {
    loadPaypal(() => setIsPaypalLoaded(true));
  }, [loadPaypal]);

  const onClickBuy = () => {
    isPaypalLoaded && setCheckoutOpen(true);
  };
  if (!models.includes(model)) {
    return (
      <Grid>
        <ErrorMessage>Could not find product {model}.</ErrorMessage>
      </Grid>
    );
  }
  return (
    <>
      {isCheckoutOpen && (
        <Elements stripe={stripeElememtsPromise}>
          <Checkout selectedColor={model as CoatColor} onComplete={() => setCheckoutOpen(false)} />
        </Elements>
      )}
      <Grid>
        <MainPicture src={mainPicture[model]} />
        <Description>
          <Title>The classic PINE coat</Title>
          color: {model} <br />
          fabric: 10% cashmere, 70% wool, 20% polyamide <br />
          lining: 100% satin <br />
          shipping: 2-3 business days in Germany, 5-7 in EU <br />
          price: 300 euro <br />
          sizes: S M L <br />
          <Button color={`pine${model.charAt(0).toUpperCase()}${model.slice(1)}`} onClick={onClickBuy}>
            BUY NOW
          </Button>
        </Description>
        {additionalPictures[model].map((picture, index) => {
          return index % 2 ? <RigthPicture src={picture} /> : <LeftPicture src={picture} />;
        })}
      </Grid>
    </>
  );
};
