import React, { useEffect, useRef } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, theme, TwoColumnGrid } from '../global_styles';
import bike from '../images/bike.jpg';
import {
  Banner,
  BannerContainer,
  BannerText,
  ButtonContainer,
  HeaderRight,
  Paragraph,
  ParagraphRight,
  PhilosophyHeader,
  PhilosophyPicture,
  Slogan,
  SloganContainer,
} from './Home.styles';

type HomeProps = RouteComponentProps & {
  location: { state: { scrollTo: 'top' | 'philosophy' } };
};

export default (props: HomeProps) => {
  const philosophyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props?.location?.state?.scrollTo === 'philosophy') {
      window.scroll({
        top: (philosophyRef.current && philosophyRef.current.offsetTop - theme.headerHeight) || 0,
        left: 0,
        behavior: 'smooth',
      });
    } else if (props?.location?.state?.scrollTo === 'top') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  });

  return (
    <>
      <BannerContainer data-testid='banner'>
        <Banner>
          <BannerText>
            back to basics. <br />
            clean cut. <br />
            neutral colours.
          </BannerText>
        </Banner>
      </BannerContainer>
      <SloganContainer>
        <Slogan>one timeless model. </Slogan>
        <Slogan>three basic colours. </Slogan>
        <Slogan>effortless style.</Slogan>
      </SloganContainer>

      <TwoColumnGrid ref={philosophyRef}>
        <PhilosophyHeader>Architecture meets fashion design</PhilosophyHeader>
        <Paragraph>
          Starting my career as an architect and transitioning to fashion design made me realize that these two worlds
          have much in common. Beautiful thoughts turn into sketches, are then enhanced to prototypes and result in a
          finalized product.
        </Paragraph>
        <HeaderRight>Craftmanship</HeaderRight>
        <ParagraphRight>
          At first glance it might not always be obvious, but most people can distinguish a poorly sewn garment from a
          quality piece when putting it on. Similarly, a carefully constructed building will always prove to be more
          durable than one where shortcuts were used during construction.
        </ParagraphRight>
        <HeaderRight>Materials</HeaderRight>
        <ParagraphRight>
          Picking the right material is an important part of the design process. A hotel lobby with a floor made out of
          Italian marble gives you a different feeling than one with an old-fashioned carpet flooring. The same goes for
          a coat made out of cashmere wool compared to polyester.
        </ParagraphRight>
        <HeaderRight>Design Process</HeaderRight>
        <ParagraphRight>
          In both disciplines, the design process contains sketches, schematic drawings, and construction guidelines.
        </ParagraphRight>
        <PhilosophyPicture src={bike} />
        <Paragraph>
          The main difference between architecture and fashion design is the lifespan of the finished products. Until
          the early 2000s, fashion design had two seasons: spring/summer and fall/winter. Over time, this has evolved to
          a season starting every week, giving us 52 “micro-seasons” per year. Compare that to the expected lifespan of
          buildings that is longer than a human life. Our goal is to bring that longevity to fashion, creating timeless,
          well-crafted coats that stay with you.
        </Paragraph>
        <ButtonContainer>
          <Link to='/products'>
            <Button color='pineGrey'>our products</Button>
          </Link>
        </ButtonContainer>
      </TwoColumnGrid>
    </>
  );
};
