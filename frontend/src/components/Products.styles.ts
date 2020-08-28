import styled, { css } from 'styled-components';
import { TwoColumnGrid } from '../global_styles';
import { Link } from 'react-router-dom';

export const Grid = styled(TwoColumnGrid)`
  margin-top: 1em;
`;

export const PictureLeft = styled.img`
  width: 80%;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 4;
  margin-top: 1em;
  margin-bottom: 2em;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2;
  }
`;

export const Paragraph = styled.div`
  font-size: 20px;
  width: 100%;
  margin-bottom: 1em;
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2 / 4;
  }
`;

export const ParagraphTop = styled(Paragraph)`
  grid-column: 2 / 4;
`;

export const ParagraphLeft = styled(Paragraph)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-top: 10em;
  }
  text-align: left;
  grid-column: 2;
  width: 300px;
  justify-self: center;
`;

export const ParagraphRight = styled(Paragraph)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-top: 10em;
  }
  text-align: left;
  grid-column: 3;
  width: 300px;
  justify-self: center;
`;

export const ParagraphGrey = styled(ParagraphLeft)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-row: 2;
  }
`;

export const ParagraphNavy = styled(ParagraphLeft)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-row: 4;
  }
`;

export const ParagraphHeader = styled.p`
  text-decoration: underline;
  font-size: 30px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const SidePicture = styled.img<{ side: 'left' | 'right' }>`
  width: 80%;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 4;
  margin-top: 1em;
  margin-bottom: 2em;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    ${(props) =>
      props.side === 'left' &&
      css`
        grid-column: 2;
      `};
    ${(props) =>
      props.side === 'right' &&
      css`
        grid-column: 3;
      `};
  }
`;
