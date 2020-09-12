import styled from 'styled-components';

export const HorizontalLine = styled.hr`
  margin-top: 40px;
  grid-column-start: 2;
  grid-column-end: 4;
`;

export const FooterContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  min-height: ${(props) => props.theme.footerHeight}px;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    justify-content: flex-start;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.pineNavy};
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-bottom: 0.5em;
  }
`;
