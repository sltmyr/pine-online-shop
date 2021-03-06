import styled, { css, keyframes } from "styled-components";

export const DummyHeader = styled.div`
  height: ${props => props.theme.headerHeight}px;
`;

export const PositionWrapper = styled.div`
  z-index: 10;
  position: fixed;
  background-color: ${props => props.theme.globalBackground};
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 55% 15%;
  @media (max-width: ${props => props.theme.largeBreakpoint}px) {
    grid-template-columns: 7.5% 15% 70% 7.5%;
  }
  @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
    grid-template-columns: 5% 45% 45% 5%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
`;

export const MenuContainer = styled.div`
  grid-column: 3;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: ${props => props.theme.headerHeight}px;
  @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
    justify-content: flex-end;
  }
`;

export const MenuContainerSmall = styled(MenuContainer)`
  height: calc(100vh - ${props => props.theme.headerHeight}px);
  align-content: flex-start;
`;

export const HamburgerContainer = styled.div`
  display: inline-block;
  align-self: center;
  margin-right: 30px;
`;

export const LineBase = styled.div`
  height: 1px;
  width: 35px;
  background-color: ${props => props.theme.pineBeige};
  transition: 0.2s;
  margin: 6px 0;
`;
interface LineProps {
  readonly expanded: boolean;
}

export const LineTop = styled(LineBase)<LineProps>`
  ${props =>
    props.expanded &&
    css`
      -webkit-transform: translateY(-8px) rotate(-45deg);
      transform: translateY(8px) rotate(-45deg);
    `}
`;

export const LineMiddle = styled(LineBase)<LineProps>`
  ${props =>
    props.expanded &&
    css`
      opacity: 0;
    `}
`;

export const LineBottom = styled(LineBase)<LineProps>`
  ${props =>
    props.expanded &&
    css`
      -webkit-transform: translateY(-6px) rotate(45deg);
      transform: translateY(-6px) rotate(45deg);
    `}
`;

export const HorizontalLine = styled.hr`
  border-width: 0.1px;
  grid-column-start: 2;
  grid-column-end: 4;
`;

const disappear = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0; visibility: hidden}
`;

export const logoHeight = "40px";

const appearAndMove = keyframes`
    0% {
        opacity: 0;
        height: 150px;
        margin-top: calc(50vh - 100px);
        width: 300px;
        margin-left: 50vw;
    }
    75% {
        opacity: 1;
        height: 150px;
        margin-top: calc(50vh - 100px);
        width: 300px;
        margin-left: 50vw;
    }
    100% {
        opacity: 1;
        height: ${logoHeight};
        margin-top: 0;
        margin-left: 0;
    }
`;

export const SplashScreenCover = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: ${props => props.theme.globalBackground};
  animation: ${disappear} 0.5s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

export const AnimatedLogo = styled.img`
  animation: ${appearAndMove} 2s;
  animation-fill-mode: forwards;
`;

export const Logo = styled.img`
  opacity: 1;
  height: ${logoHeight};
  margin-top: 0;
  margin-left: 0;
`;
