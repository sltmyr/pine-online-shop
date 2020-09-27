import React, { RefObject } from 'react';
import { theme } from '../global_styles';
import beigeCoat1 from '../images/coat.jpg';
import navyCoat1 from '../images/navy.jpg';
import greyCoat1 from '../images/grey.jpg';
import {
  Grid,
  ParagraphGrey,
  ParagraphNavy,
  ParagraphRight,
  ParagraphTop,
  ParagraphHeader,
  LinkWrapper,
  PictureLinkWrapper,
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

      <PictureLinkWrapper data-aos='fade-up' side='right' to='/coat/grey'>
        <SidePicture src={greyCoat1} />
      </PictureLinkWrapper>
      <ParagraphGrey data-aos='fade-up' data-testid='buy-button'>
        <LinkWrapper to='/coat/grey'>
          <ParagraphHeader>THE GREY ONE</ParagraphHeader>
          You can combine our classic grey coat with virtually anything and you will always look and feel great.
        </LinkWrapper>
      </ParagraphGrey>

      <PictureLinkWrapper data-aos='fade-up' side='left' to='/coat/beige'>
        <SidePicture src={beigeCoat1} />
      </PictureLinkWrapper>
      <ParagraphRight data-aos='fade-up'>
        <LinkWrapper to='/coat/beige'>
          <ParagraphHeader>THE BEIGE ONE</ParagraphHeader>
          Our best seller, and with good reason. In our camel colored coat you are definitely going to stand out.
        </LinkWrapper>
      </ParagraphRight>

      <PictureLinkWrapper data-aos='fade-up' side='right' to='/coat/navy'>
        <SidePicture src={navyCoat1} />
      </PictureLinkWrapper>
      <ParagraphNavy data-aos='fade-up'>
        <LinkWrapper to='/coat/navy'>
          <ParagraphHeader>THE NAVY ONE</ParagraphHeader>
          Our navy coat is the right choice for anyone tired of wearing only black in the colder months of the year.
        </LinkWrapper>
      </ParagraphNavy>
    </Grid>
  );
};
