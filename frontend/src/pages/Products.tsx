import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
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
import {
  CarouselLeft,
  CarouselRight,
  GoLeftButton,
  GoRightButton,
  Grid,
  LeftArrow,
  ParagraphGrey,
  ParagraphNavy,
  ParagraphRight,
  ParagraphTop,
  PictureLeft,
  RightArrow,
} from './Products.styles';

export type CoatColor = 'beige' | 'grey' | 'navy';
const stripePromise = loadStripe('<ENTER PUBLISHABLE KEY HERE>');

export default () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<CoatColor>('beige');
  useEffect(() => window.scroll({ top: 0, left: 0 }));
  return (
    <>
      {isModalOpen && (
        <Elements stripe={stripePromise}>
          <Checkout selectedColor={selectedColor} onComplete={() => setModalOpen(false)} />
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
        <CarouselRight
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <GoLeftButton onClick={onClickHandler}>
              <LeftArrow />
            </GoLeftButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <GoRightButton onClick={onClickHandler}>
              <RightArrow />
            </GoRightButton>
          )}
        >
          <img src={greyCoat1} alt='' />
          <img src={greyCoat2} alt='' />
          <img src={greyCoat3} alt='' />
        </CarouselRight>

        <ParagraphGrey>
          The grey one <br />
          <Button
            color='pineGrey'
            onClick={() => {
              setSelectedColor('grey');
              setModalOpen(true);
            }}
            data-testid='buy-button'
          >
            Buy now
          </Button>
        </ParagraphGrey>
        <CarouselLeft
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <GoLeftButton onClick={onClickHandler}>
              <LeftArrow />
            </GoLeftButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <GoRightButton onClick={onClickHandler}>
              <RightArrow />
            </GoRightButton>
          )}
        >
          <img src={beigeCoat1} alt='' />
          <img src={beigeCoat2} alt='' />
          {/* <img src={beigeCoat3} alt="" /> */}
        </CarouselLeft>
        <ParagraphRight>
          The beige one <br />
          <Button
            color='pineBeige'
            onClick={() => {
              setSelectedColor('beige');
              setModalOpen(true);
            }}
          >
            Buy now
          </Button>
        </ParagraphRight>
        <CarouselRight
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <GoLeftButton onClick={onClickHandler}>
              <LeftArrow />
            </GoLeftButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <GoRightButton onClick={onClickHandler}>
              <RightArrow />
            </GoRightButton>
          )}
        >
          <img src={navyCoat1} alt='' />
          <img src={navyCoat2} alt='' />
          <img src={navyCoat3} alt='' />
        </CarouselRight>
        <ParagraphNavy>
          The navy one <br />
          <Button
            color='pineNavy'
            onClick={() => {
              setSelectedColor('navy');
              setModalOpen(true);
            }}
          >
            Buy now
          </Button>
        </ParagraphNavy>
      </Grid>
    </>
  );
};
