import React from 'react';
import { StyledLink, StyledButton } from './Menu.styles';

interface MenuProps {
  onClickCloseMenu?: () => void;
}

export default (props: MenuProps) => {
  const { onClickCloseMenu } = props;
  return (
    <>
      <StyledLink to={{ pathname: '/', state: { scrollTo: 'coats' } }}>
        <StyledButton color='pineBeige' onClick={onClickCloseMenu} data-testid='coats-button'>
          COATS
        </StyledButton>
      </StyledLink>
      <StyledLink to='/about'>
        <StyledButton color='pineGrey' onClick={onClickCloseMenu}>
          ABOUT
        </StyledButton>
      </StyledLink>
      <StyledLink to='/contact'>
        <StyledButton color='pineNavy' onClick={onClickCloseMenu}>
          CONTACT
        </StyledButton>
      </StyledLink>
    </>
  );
};
