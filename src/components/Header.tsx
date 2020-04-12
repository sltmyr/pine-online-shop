import React, { useState, useEffect, useRef } from "react";
import {
  MenuContainer,
  ButtonPair,
  LogoContainer,
  Grid,
  Logo,
  Line,
  HamburgerLogo,
  DummyHeader,
  PositionWrapper,
} from "./Header.styles";
import hamburger from "../images/hamburger.svg";
import logo from "../images/logo.png";
import { theme, Button } from "../global_styles";

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
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setExpanded(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <DummyHeader ref={ref} data-testid="header">
      <PositionWrapper>
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
          <MenuContainer data-testid="menu-small">
            <Menu />
          </MenuContainer>
        )}
      </PositionWrapper>
    </DummyHeader>
  );
};
