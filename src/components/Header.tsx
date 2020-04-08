import React, { useState } from "react";
import {
  MenuContainer,
  Button,
  ButtonPair,
  LogoContainer,
  Grid,
  Logo,
  Line,
  HamburgerLogo,
  SmallMenuWrapper,
} from "./Header.styles";
import hamburger from "../images/hamburger.svg";
import logo from "../images/logo.png";
import { theme } from "../global_styles";

const mediaQuery = window.matchMedia(`(max-width: ${theme.mediumBreakpoint}px)`);

const Menu = () => (
  <>
    <ButtonPair>
      <Button color="pineBeige">our philosophy</Button>
      <Button color="pineGrey">products</Button>
    </ButtonPair>
    <ButtonPair>
      <Button>about us</Button>
      <Button color="pineNavy">contact</Button>
    </ButtonPair>
  </>
);

export default () => {
  const [smallWindow, setSmallWindow] = useState<boolean>(mediaQuery.matches);
  mediaQuery.addListener((event) => setSmallWindow(event.matches));

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div data-testid="header">
      <Grid>
        <LogoContainer>
          <Logo src={logo} data-testid="logo" />
        </LogoContainer>
        <MenuContainer onClick={() => setExpanded(!expanded)}>
          {smallWindow ? <HamburgerLogo src={hamburger} data-testid="hamburger" /> : <Menu />}
        </MenuContainer>
        <Line />
      </Grid>
      {smallWindow && expanded && (
        <SmallMenuWrapper>
          <MenuContainer data-testid="menu-small">
            <Menu />
          </MenuContainer>
        </SmallMenuWrapper>
      )}
    </div>
  );
};
