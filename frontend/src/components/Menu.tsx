import React, { useContext } from 'react';
import { StyledLink, StyledButton } from './Menu.styles';
import { Language, LanguageContext } from '../App';

interface MenuProps {
  onClickCloseMenu?: () => void;
}

export default (props: MenuProps) => {
  const text = {
    coats: {
      [Language.english]: 'coats',
      [Language.german]: 'Mäntel',
    },
    about: {
      [Language.english]: 'about',
      [Language.german]: 'Über uns',
    },
    contact: {
      [Language.english]: 'contact',
      [Language.german]: 'Kontakt',
    },
  };
  const { language } = useContext(LanguageContext);
  const { onClickCloseMenu } = props;
  return (
    <>
      <StyledLink to={{ pathname: '/', state: { scrollTo: 'coats' } }}>
        <StyledButton color='pineNavy' onClick={onClickCloseMenu} data-testid='coats-button'>
          {text.coats[language]}
        </StyledButton>
      </StyledLink>
      <StyledLink to='/about'>
        <StyledButton color='pineNavy' onClick={onClickCloseMenu}>
          {text.about[language]}
        </StyledButton>
      </StyledLink>
      <StyledLink to='/contact'>
        <StyledButton color='pineNavy' onClick={onClickCloseMenu}>
          {text.contact[language]}
        </StyledButton>
      </StyledLink>
    </>
  );
};
