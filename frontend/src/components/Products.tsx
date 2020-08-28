import React, { RefObject } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { theme } from '../global_styles';
import beigeCoat1 from '../images/beige-coat-1.jpg';
import navyCoat1 from '../images/blue-coat-1.jpg';
import greyCoat1 from '../images/grey-coat-1.jpg';
import {
  Grid,
  ParagraphGrey,
  ParagraphNavy,
  ParagraphRight,
  ParagraphTop,
  ParagraphHeader,
  LinkWrapper,
  SidePicture,
} from './Products.styles';

export default ({ topRef }: { topRef: RefObject<HTMLDivElement> }) => {
  return (
    <Grid ref={topRef}>
      <ParagraphTop>
        Our PINE coat is a timeless, classic design piece. It will always give you that effortlessly elegant look, no
        matter which style you combine it with. You can choose between 3 colors:{' '}
        <span style={{ color: theme.pineBeige }}>beige</span>, <span style={{ color: theme.pineGrey }}>grey</span>, and{' '}
        <span style={{ color: theme.pineNavy }}>navy</span>.
        <br />
        <br />
        10% cashmere, 70% wool, 20% polyamide <br />
        lining: 100% satin <br />
        300 €
      </ParagraphTop>
      <SidePicture src={greyCoat1} side='right' />
      <ParagraphGrey data-aos='fade-right' data-testid='buy-button'>
        <LinkWrapper to='/coat/grey'>
          <ParagraphHeader>The grey one </ParagraphHeader>
          You can combine our classic grey coat with virtually anything and you will always look and feel elegant.
        </LinkWrapper>
      </ParagraphGrey>
      <SidePicture src={beigeCoat1} side='left' />
      <ParagraphRight data-aos='fade-left'>
        <LinkWrapper to='/coat/beige'>
          <ParagraphHeader>The beige one </ParagraphHeader>
          Our best seller and arguably the most elegant one of our three colors. In our camel colored coat you are
          definitely going to stand out.
        </LinkWrapper>
      </ParagraphRight>
      <SidePicture src={navyCoat1} side='right' />
      <ParagraphNavy data-aos='fade-right'>
        <LinkWrapper to='/coat/navy'>
          <ParagraphHeader>The navy one </ParagraphHeader>
          Our navy coat is the right choice for anyone tired of wearing only black in the colder months of the year.
        </LinkWrapper>
      </ParagraphNavy>
    </Grid>
  );
};
