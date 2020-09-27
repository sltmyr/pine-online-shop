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
        <StyledButton color='pineNavy' onClick={onClickCloseMenu} data-testid='coats-button'>
          coats
        </StyledButton>
      </StyledLink>
      <StyledLink to='/about'>
        <StyledButton color='pineNavy' onClick={onClickCloseMenu}>
          about
        </StyledButton>
      </StyledLink>
      <StyledLink to='/contact'>
        <StyledButton color='pineNavy' onClick={onClickCloseMenu}>
          contact
        </StyledButton>
      </StyledLink>
    </>
  );
};
