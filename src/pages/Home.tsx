import React from "react";
import { ButtonContainer, Button, LogoContainer, Grid, Logo } from "./Home.styles";

export default () => (
  <>
    <Grid>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonContainer>
        <Button color="pineBeige">our philosophy</Button>
        <Button color="pineGrey">products</Button>
        <Button>about us</Button>
        <Button color="pineNavy">contact</Button>
      </ButtonContainer>
    </Grid>
    <hr />
  </>
);
