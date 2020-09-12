import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../global_styles';
import logo from '../images/pine-logo.svg';
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
} from './Header.styles';
import Menu from './Menu';

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <DummyHeader ref={headerRef} data-testid='header'>
      <PositionWrapper>
        <Grid>
          <SplashScreenCover data-testid='cover' />
          <LogoContainer>
            <Link to={{ pathname: '/', state: { scrollTo: 'top' } }}>
              <Logo src={logo} data-testid='logo' />
            </Link>
          </LogoContainer>
          <MenuContainer onClick={() => setExpanded(!expanded)}>
            {smallWindow ? (
              <HamburgerContainer data-testid='hamburger'>
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
          <MenuContainerSmall data-testid='menu-small'>
            <Menu onClickCloseMenu={() => setExpanded(false)} />
          </MenuContainerSmall>
        )}
      </PositionWrapper>
    </DummyHeader>
  );
};
