import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import React, { useEffect, useState, RefObject } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from './Carousel';
import Checkout from './Checkout';
import { theme } from '../global_styles';
import beigeCoat1 from '../images/beige-coat-1.jpg';
import beigeCoat2 from '../images/beige-coat-2.jpg';
import navyCoat1 from '../images/blue-coat-1.jpg';
import navyCoat2 from '../images/blue-coat-2.jpg';
import navyCoat3 from '../images/blue-coat-3.jpg';
import greyCoat1 from '../images/grey-coat-1.jpg';
import greyCoat2 from '../images/grey-coat-2.jpg';
import greyCoat3 from '../images/grey-coat-3.jpg';
import { Grid, ParagraphGrey, ParagraphNavy, ParagraphRight, ParagraphTop, ParagraphHeader } from './Products.styles';

export type CoatColor = 'beige' | 'grey' | 'navy';

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

interface ProductsProps {
  topRef: RefObject<HTMLDivElement>;
  loadPaypal?: (onLoad: () => void) => void;
  stripeElememtsPromise?: Promise<Stripe | null>;
}

export default ({ loadPaypal = loadPaypalScript, stripeElememtsPromise = stripePromise, topRef }: ProductsProps) => {
  const [isCheckoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<CoatColor>('beige');
  const [isPaypalLoaded, setIsPaypalLoaded] = useState<boolean>(false);
  useEffect(() => {
    loadPaypal(() => setIsPaypalLoaded(true));
  }, [loadPaypal]);

  const onClickBuy = (color: CoatColor) => {
    setSelectedColor(color);
    isPaypalLoaded && setCheckoutOpen(true);
  };

  return (
    <>
      {isCheckoutOpen && (
        <Elements stripe={stripeElememtsPromise}>
          <Checkout selectedColor={selectedColor} onComplete={() => setCheckoutOpen(false)} />
        </Elements>
      )}
      <Grid ref={topRef}>
        <ParagraphTop>
          Our PINE coat is a timeless, classic design piece. It will always give you that effortlessly elegant look, no
          matter which style you combine it with. You can choose between 3 colors:{' '}
          <span style={{ color: theme.pineBeige }}>beige</span>, <span style={{ color: theme.pineGrey }}>grey</span>,
          and <span style={{ color: theme.pineNavy }}>navy</span>.
          <br />
          <br />
          10% cashmere, 70% wool, 20% polyamide <br />
          lining: 100% satin <br />
          300 €
        </ParagraphTop>
        <Carousel side='right' pictures={[greyCoat1, greyCoat2, greyCoat3]} />
        <ParagraphGrey onClick={() => onClickBuy('grey')}>
          <ParagraphHeader>The grey one </ParagraphHeader>
          You can combine our classic grey coat with virtually anything and you will always look and feel elegant.
        </ParagraphGrey>
        <Carousel side='left' pictures={[beigeCoat1, beigeCoat2]} />
        <ParagraphRight onClick={() => onClickBuy('beige')}>
          <ParagraphHeader>The beige one </ParagraphHeader>
          Our best seller and arguably the most elegant one of our three colors. In our camel colored coat you are
          definitely going to stand out.
        </ParagraphRight>
        <Carousel side='right' pictures={[navyCoat1, navyCoat2, navyCoat3]} />
        <ParagraphNavy onClick={() => onClickBuy('navy')}>
          <ParagraphHeader>The navy one </ParagraphHeader>
          Our navy coat is the right choice for anyone tired of wearing only black in the colder months of the year.
        </ParagraphNavy>
      </Grid>
    </>
  );
};
