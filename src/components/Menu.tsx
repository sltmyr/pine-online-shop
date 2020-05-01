import React from "react";
import { ButtonPair, StyledLink } from "./Menu.styles";
import { Button } from "../global_styles";

interface MenuProps {
  onClick?: () => void;
}

export default (props: MenuProps) => {
  const { onClick } = props;
  return (
    <>
      <ButtonPair>
        <StyledLink to={{ pathname: "/", state: { scrollTo: "philosophy" } }}>
          <Button color="pineBeige" onClick={onClick} data-testid="philosophy-button">
            our philosophy
          </Button>
        </StyledLink>
        <StyledLink to="/products">
          <Button color="pineGrey" onClick={onClick}>
            products
          </Button>
        </StyledLink>
      </ButtonPair>
      <ButtonPair>
        <StyledLink to="/about">
          <Button onClick={onClick}>about</Button>
        </StyledLink>
        <StyledLink to="/contact">
          <Button color="pineNavy" onClick={onClick}>
            contact
          </Button>
        </StyledLink>
      </ButtonPair>
    </>
  );
};
