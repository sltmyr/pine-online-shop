import React, { useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { theme } from '../global_styles';
import { Banner, BannerContainer, Slogan, SloganContainer } from './Home.styles';
import Products from '../components/Products';

type HomeProps = RouteComponentProps & {
  location: { state: { scrollTo: 'top' | 'coats' } };
};

export default (props: HomeProps) => {
  const coatsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props?.location?.state?.scrollTo === 'coats') {
      window.scroll({
        top: (coatsRef.current && coatsRef.current.offsetTop - theme.headerHeight) || 0,
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
        <Banner />
      </BannerContainer>
      <SloganContainer>
        <Slogan>BEAUTIFUL COATS. </Slogan>
        <Slogan>NEUTRAL COLOURS. </Slogan>
        <Slogan>ELEGANT CUT.</Slogan>
      </SloganContainer>
      <Products topRef={coatsRef} />
    </>
  );
};
