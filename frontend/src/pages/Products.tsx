import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from '../components/Carousel';
import Checkout from '../components/Checkout';
import { Button, theme } from '../global_styles';
import beigeCoat1 from '../images/beige-coat-1.jpg';
import beigeCoat2 from '../images/beige-coat-2.jpg';
import navyCoat1 from '../images/blue-coat-1.jpg';
import navyCoat2 from '../images/blue-coat-2.jpg';
import navyCoat3 from '../images/blue-coat-3.jpg';
import greyCoat1 from '../images/grey-coat-1.jpg';
import greyCoat2 from '../images/grey-coat-2.jpg';
import greyCoat3 from '../images/grey-coat-3.jpg';
import picture from '../images/tailor.jpg';
import { Grid, ParagraphGrey, ParagraphNavy, ParagraphRight, ParagraphTop, PictureLeft } from './Products.styles';

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
  loadPaypal?: (onLoad: () => void) => void;
  stripeElememtsPromise?: Promise<Stripe | null>;
}

export default ({ loadPaypal = loadPaypalScript, stripeElememtsPromise = stripePromise }: ProductsProps) => {
  const [isCheckoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<CoatColor>('beige');
  const [isPaypalLoaded, setIsPaypalLoaded] = useState<boolean>(false);
  useEffect(() => window.scroll({ top: 0, left: 0 }), []);
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
      <Grid>
        <PictureLeft src={picture} />
        <ParagraphTop>
          The pinecoat is a timeless, classic design piece. It goes well with different styles and will always give you
          that effortlessly elegant look. You can choose between 3 colors:{' '}
          <span style={{ color: theme.pineBeige }}>beige</span>, <span style={{ color: theme.pineGrey }}>grey</span>,
          and <span style={{ color: theme.pineNavy }}>navy</span>.
          <br />
          <br />
          30% Cashmere, 70% wool <br />
          300 €
        </ParagraphTop>
        <Carousel side='right' pictures={[greyCoat1, greyCoat2, greyCoat3]} />
        <ParagraphGrey>
          The grey one <br />
          <Button color='pineGrey' onClick={() => onClickBuy('grey')} data-testid='buy-button'>
            Buy now
          </Button>
        </ParagraphGrey>
        <Carousel side='left' pictures={[beigeCoat1, beigeCoat2]} />
        <ParagraphRight>
          The beige one <br />
          <Button color='pineBeige' onClick={() => onClickBuy('beige')}>
            Buy now
          </Button>
        </ParagraphRight>
        <Carousel side='right' pictures={[navyCoat1, navyCoat2, navyCoat3]} />
        <ParagraphNavy>
          The navy one <br />
          <Button color='pineNavy' onClick={() => onClickBuy('navy')}>
            Buy now
          </Button>
        </ParagraphNavy>
      </Grid>
    </>
  );
};
