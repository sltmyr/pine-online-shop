import React, { useState, useEffect, useRef } from "react";
import {
  MenuContainer,
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
import { theme } from "../global_styles";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const mediaQuery = window.matchMedia(`(max-width: ${theme.mediumBreakpoint}px)`);

export default () => {
  const [smallWindow, setSmallWindow] = useState<boolean>(mediaQuery.matches);
  const handleWindowSizeChange = (event: MediaQueryListEvent) => setSmallWindow(event.matches);
  useEffect(() => {
    mediaQuery.addListener(handleWindowSizeChange);
    return () => mediaQuery.removeListener(handleWindowSizeChange);
  });

  const [expanded, setExpanded] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
      setExpanded(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <DummyHeader ref={headerRef} data-testid="header">
      <PositionWrapper>
        <Grid>
          <LogoContainer>
            <Link to={{ pathname: "/", state: { scrollTo: "top" } }}>
              <Logo src={logo} data-testid="logo" />
            </Link>
          </LogoContainer>
          <MenuContainer onClick={() => setExpanded(!expanded)}>
            {smallWindow ? <HamburgerLogo src={hamburger} data-testid="hamburger" /> : <Menu />}
          </MenuContainer>
          <Line />
        </Grid>
        {smallWindow && expanded && (
          <MenuContainer data-testid="menu-small">
            <Menu onClick={() => setExpanded(false)} />
          </MenuContainer>
        )}
      </PositionWrapper>
    </DummyHeader>
  );
};
