import React, { useEffect, useRef, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { theme } from '../global_styles';
import { Banner, BannerContainer, Slogan, SloganContainer } from './Home.styles';
import Products from '../components/Products';
import { LanguageContext, Language } from '../App';

export default (props: HomeProps) => {
  const text = {
    slogan1: {
      [Language.english]: 'BEAUTIFUL COATS.',
      [Language.german]: 'SCHÖNE MÄNTEL.',
    },
    slogan2: {
      [Language.english]: 'NEUTRAL COLORS.',
      [Language.german]: 'NEUTRALE FARBEN.',
    },
    slogan3: {
      [Language.english]: 'ELEGANT CUT.',
      [Language.german]: 'ELEGANTER SCHNITT.',
    },
  };

  const coatsRef = useRef<HTMLDivElement>(null);
  const { language } = useContext(LanguageContext);
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
        <Slogan>{text.slogan1[language]}</Slogan>
        <Slogan>{text.slogan2[language]}</Slogan>
        <Slogan>{text.slogan3[language]}</Slogan>
      </SloganContainer>
      <Products topRef={coatsRef} />
    </>
  );
};

type HomeProps = RouteComponentProps & {
  location: { state: { scrollTo: 'top' | 'coats' } };
};
