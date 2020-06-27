import React from 'react';
import { Button } from '../global_styles';
import { ButtonPair, StyledLink } from './Menu.styles';

interface MenuProps {
  onClickCloseMenu?: () => void;
}

export default (props: MenuProps) => {
  const { onClickCloseMenu } = props;
  return (
    <>
      <ButtonPair>
        <StyledLink to={{ pathname: '/', state: { scrollTo: 'philosophy' } }}>
          <Button color='pineBeige' onClick={onClickCloseMenu} data-testid='philosophy-button'>
            our philosophy
          </Button>
        </StyledLink>
        <StyledLink to='/products'>
          <Button color='pineGrey' onClick={onClickCloseMenu} data-testid='products-button'>
            products
          </Button>
        </StyledLink>
      </ButtonPair>
      <ButtonPair>
        <StyledLink to='/about'>
          <Button onClick={onClickCloseMenu}>about</Button>
        </StyledLink>
        <StyledLink to='/contact'>
          <Button color='pineNavy' onClick={onClickCloseMenu}>
            contact
          </Button>
        </StyledLink>
      </ButtonPair>
    </>
  );
};
