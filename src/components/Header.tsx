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

const Menu = (props: { onClickPhilosophy: () => void }) => {
  const { onClickPhilosophy } = props;
  return (
    <>
      <ButtonPair>
        <Button color="pineBeige" onClick={onClickPhilosophy} data-testid="philosophy-button">
          our philosophy
        </Button>
        <Button color="pineGrey">products</Button>
      </ButtonPair>
      <ButtonPair>
        <Button>about us</Button>
        <Button color="pineNavy">contact</Button>
      </ButtonPair>
    </>
  );
};

export default (props: { scrollToPhilosophy: () => void }) => {
  const { scrollToPhilosophy } = props;
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

  const scrollToTop = () => {
    setExpanded(false);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const onClickPhilosophy = () => {
    setExpanded(false);
    scrollToPhilosophy();
  };

  return (
    <DummyHeader ref={ref} data-testid="header">
      <PositionWrapper>
        <Grid>
          <LogoContainer>
            <Logo src={logo} data-testid="logo" onClick={scrollToTop} />
          </LogoContainer>
          <MenuContainer onClick={() => setExpanded(!expanded)}>
            {smallWindow ? (
              <HamburgerLogo src={hamburger} data-testid="hamburger" />
            ) : (
              <Menu onClickPhilosophy={onClickPhilosophy} />
            )}
          </MenuContainer>
          <Line />
        </Grid>
        {smallWindow && expanded && (
          <MenuContainer data-testid="menu-small">
            <Menu onClickPhilosophy={onClickPhilosophy} />
          </MenuContainer>
        )}
      </PositionWrapper>
    </DummyHeader>
  );
};
