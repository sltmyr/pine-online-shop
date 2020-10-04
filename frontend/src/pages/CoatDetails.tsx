import React, { useEffect, useState, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import {
  Grid,
  ErrorMessage,
  MainPicture,
  Description,
  Title,
  RigthPicture,
  LeftPicture,
  BuyButton,
  SubTitle,
  ButtonContainer,
} from './CoatDetails.styles';
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
import SizeSelector from '../components/SizeSelector';
import { LanguageContext, Language } from '../App';

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

export default function CoatDetails({
  loadPaypal = loadPaypalScript,
  stripeElememtsPromise = stripePromise,
}: CoatDetailsProps) {
  const text = {
    error: {
      [Language.english]: 'Could not find product',
      [Language.german]: 'Konnte folgendes Produkt nicht finden:',
    },
    title: {
      [Language.english]: 'OUR CLASSIC COAT',
      [Language.german]: 'UNSER KLASSISCHER MANTEL',
    },
    price: {
      [Language.english]: '300 € including taxes and shipping.',
      [Language.german]: '300 € inkl. Steuern und Versand.',
    },
    material: {
      [Language.english]: 'MATERIAL',
      [Language.german]: 'MATERIAL',
    },
    cashmere: {
      [Language.english]: '10% cashmere',
      [Language.german]: '10% Kaschmir',
    },
    wool: {
      [Language.english]: '70% wool',
      [Language.german]: '70% Wolle',
    },
    polyamide: {
      [Language.english]: '20% polyamide',
      [Language.german]: '20% Polyamid',
    },
    lining: {
      [Language.english]: 'lining: 100% satin',
      [Language.german]: 'Futter: 100% Satin',
    },
    shipping: {
      [Language.english]: 'SHIPPING',
      [Language.german]: 'VERSAND',
    },
    shippingText: {
      [Language.english]: '2-3 business days in Germany, 5-7 in EU. See shipping/returns.',
      [Language.german]: '2-3 Werktage in Deutschland, 5-7 in der EU. Siehe auch Versand/Rückgabe.',
    },
    chooseSize: {
      [Language.english]: 'CHOOSE YOUR SIZE',
      [Language.german]: 'WÄHLE DEINE GRÖSSE',
    },
    orderNow: {
      [Language.english]: 'ORDER NOW',
      [Language.german]: 'JETZT BESTELLEN',
    },
  };
  const { language } = useContext(LanguageContext);
  const { model } = useParams<{ model: string }>();
  const [isCheckoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [isPaypalLoaded, setIsPaypalLoaded] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<number>(44);

  useEffect(() => {
    loadPaypal(() => setIsPaypalLoaded(true));
  }, [loadPaypal]);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  const onClickBuy = () => {
    isPaypalLoaded && setCheckoutOpen(true);
  };

  const helper = (size: number) => setSelectedSize(size);

  if (!models.includes(model)) {
    return (
      <Grid>
        <ErrorMessage>
          {text.error[language]} {model}.
        </ErrorMessage>
      </Grid>
    );
  }
  return (
    <>
      {isCheckoutOpen && (
        <Elements stripe={stripeElememtsPromise}>
          <Checkout
            selectedColor={model as CoatColor}
            selectedSize={selectedSize}
            onComplete={() => setCheckoutOpen(false)}
          />
        </Elements>
      )}
      <Grid>
        <MainPicture src={mainPicture[model]} />
        <Description>
          <Title>{text.title[language]}</Title>
          {text.price[language]}
          <br />
          <SubTitle>{text.material[language]}</SubTitle>
          {text.cashmere[language]}
          <br />
          {text.wool[language]}
          <br />
          {text.polyamide[language]}
          <br />
          {text.lining[language]}
          <br />
          <SubTitle>{text.shipping[language]}</SubTitle>
          {text.shippingText[language]} <br />
          <SubTitle>{text.chooseSize[language]}</SubTitle>
          <SizeSelector selectedSize={selectedSize} setSelectedSize={helper} />
          <ButtonContainer>
            <BuyButton color={`pine${model.charAt(0).toUpperCase()}${model.slice(1)}`} onClick={onClickBuy}>
              {text.orderNow[language]}
            </BuyButton>
          </ButtonContainer>
        </Description>
        {additionalPictures[model].map((picture, index) => {
          return index % 2 ? <RigthPicture key={picture} src={picture} /> : <LeftPicture key={picture} src={picture} />;
        })}
      </Grid>
    </>
  );
}
