import React from 'react';
import {
  PhilosophyHeader,
  HeaderRight,
  ParagraphRight,
  PhilosophyPicture,
  ButtonContainer,
  PhilosopyParagraph,
  ParagraphLeft,
  AboutPicture,
} from './About.styles';
import picture from '../images/about.jpg';
import { TwoColumnGrid, Button } from '../global_styles';
import bike from '../images/bike.jpg';
import { Link } from 'react-router-dom';

export default () => (
  <>
    <TwoColumnGrid>
      <PhilosophyHeader>Architecture meets fashion design</PhilosophyHeader>
      <PhilosopyParagraph>
        Going from architecture to fashion design made us realize that these two worlds have much in common. Beautiful
        thoughts turn into sketches, are then enhanced to prototypes and result in a finalized product.
      </PhilosopyParagraph>
      <HeaderRight>Craftmanship</HeaderRight>
      <ParagraphRight>
        At first glance it might not always be obvious, but most people can distinguish a poorly sewn garment from a
        quality piece when putting it on. Similarly, a carefully constructed building will always prove to be more
        durable than one where shortcuts were used during construction.
      </ParagraphRight>
      <HeaderRight>Materials</HeaderRight>
      <ParagraphRight>
        Picking the right material is an important part of the design process. A hotel lobby with a floor made out of
        Italian marble gives you a different feeling than one with an old-fashioned carpet flooring. The same goes for a
        coat made out of cashmere wool compared to polyester.
      </ParagraphRight>
      <HeaderRight>Design Process</HeaderRight>
      <ParagraphRight>
        In both disciplines, the design process contains sketches, schematic drawings, and construction guidelines.
      </ParagraphRight>
      <PhilosophyPicture src={bike} />
      <PhilosopyParagraph>
        The main difference between architecture and fashion design is the lifespan of the finished products. Until the
        early 2000s, fashion design had two seasons: spring/summer and fall/winter. Over time, this has evolved to a
        season starting every week, giving us 52 “micro-seasons” per year. Compare that to the expected lifespan of
        buildings that is longer than a human life. Our goal is to bring that longevity to fashion, creating timeless,
        well-crafted coats that stay with you.
      </PhilosopyParagraph>
      <ButtonContainer>
        <Link to={{ pathname: '/', state: { scrollTo: 'coats' } }}>
          <Button color='pineBeige'>our coats</Button>
        </Link>
      </ButtonContainer>
      <PhilosophyHeader>About Us</PhilosophyHeader>
      <ParagraphLeft>
        PINE is a small, family-run shop based in Munich, Germany. We produce and offer high quality coats at a fair
        price. Every coat is made from a nice, soft fabric (10% cashmere, 70% wool, 20% polyamide) and handmade in the
        heart of Istanbul's fashion district. We ship them directly to you from our store in Munich and can currently
        offer our coats to anyone in the european union. Shipping is free, and in the unlikely case that the coat does
        not live up to your expectations, returns are free as well.
      </ParagraphLeft>
      <AboutPicture src={picture} />
    </TwoColumnGrid>
  </>
);
