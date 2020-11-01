import React, { useEffect, useState, useContext } from "react";
import logo from "../images/pine-logo.svg";
import {
  DummyHeader,
  Grid,
  HamburgerContainer,
  HorizontalLine,
  LineBottom,
  LineMiddle,
  LineTop,
  Logo,
  LogoContainer,
  MenuContainer,
  PositionWrapper,
  SplashScreenCover,
  MenuContainerSmall,
  AnimatedLogo,
} from "./header.styles";
import Menu from "./menu";
import { theme } from "../styles/global_styles";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { InitialLoadContext } from "../context/initialLoadContext";

const Header: React.FC = () => {
  const [smallWindow, setSmallWindow] = useState<boolean>(
    typeof window !== `undefined`
      ? window.matchMedia(`(max-width: ${theme.mediumBreakpoint}px)`).matches
      : false
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const mediaQuery = window.matchMedia(`(max-width: ${theme.mediumBreakpoint}px)`);
      const handleWindowSizeChange = (event: MediaQueryListEvent) => setSmallWindow(event.matches);
      mediaQuery.addListener(handleWindowSizeChange);
      return () => mediaQuery.removeListener(handleWindowSizeChange);
    }
  });

  const { isInitialLoad, setInitialLoad } = useContext(InitialLoadContext);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false);
    }, 3000);
  }, [isInitialLoad]);

  return (
    <DummyHeader>
      <PositionWrapper>
        <Grid>
          {isInitialLoad && <SplashScreenCover />}
          <LogoContainer>
            <AnchorLink to={"/#home"}>
              {isInitialLoad ? <AnimatedLogo src={logo} /> : <Logo src={logo} />}
            </AnchorLink>
          </LogoContainer>
          <MenuContainer onClick={() => setExpanded(!expanded)}>
            {smallWindow ? (
              <HamburgerContainer>
                <LineTop expanded={expanded} />
                <LineMiddle expanded={expanded} />
                <LineBottom expanded={expanded} />
              </HamburgerContainer>
            ) : (
              <Menu />
            )}
          </MenuContainer>
          <HorizontalLine />
        </Grid>
        {smallWindow && expanded && (
          <MenuContainerSmall>
            <Menu onClickCloseMenu={() => setExpanded(false)} />
          </MenuContainerSmall>
        )}
      </PositionWrapper>
    </DummyHeader>
  );
};

export default Header;
