import React from "react";
import { ButtonContainer, Button, ButtonPair, LogoContainer, Grid, Logo, Line } from "./Header.styles";

export default () => (
  <div data-testid="header">
    <Grid>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonContainer>
        <ButtonPair>
          <Button color="pineBeige">our philosophy</Button>
          <Button color="pineGrey">products</Button>
        </ButtonPair>
        <ButtonPair>
          <Button>about us</Button>
          <Button color="pineNavy">contact</Button>
        </ButtonPair>
      </ButtonContainer>
      <Line />
    </Grid>
  </div>
);
