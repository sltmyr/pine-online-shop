import styled, { css } from 'styled-components';
import { TwoColumnGrid, FancyText } from '../global_styles';
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
  font-size: 16px;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 8em;
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2 / 4;
  }
`;

export const ParagraphTop = styled(Paragraph)`
  grid-column: 2 / 4;
  width: 70vw;
  max-width: 400px;
`;

export const ParagraphLeft = styled(Paragraph)`
  text-align: left;
  grid-column: 2;
  width: 90%;
  justify-self: right;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-top: 10em;
    justify-self: center;
    width: 300px;
  }
`;

export const ParagraphRight = styled(Paragraph)`
  text-align: left;
  grid-column: 3;
  width: 90%;
  max-width: 300px;
  justify-self: left;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-top: 10em;
    justify-self: center;
    width: 300px;
  }
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

export const ParagraphHeader = styled(FancyText)`
  font-size: 35px;
  margin-bottom: 0.5em;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const PictureLinkWrapper = styled(Link)<{ side: 'left' | 'right' }>`
  width: 90%;
  align-self: center;
  ${(props) =>
    props.side === 'left'
      ? css`
          justify-self: left;
        `
      : css`
          justify-self: right;
        `};

  grid-column: 2 / 4;
  margin-top: 1em;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-bottom: 10em;
    ${(props) =>
      props.side === 'left' &&
      css`
        grid-column: 2;
        justify-self: center;
      `};
    ${(props) =>
      props.side === 'right' &&
      css`
        grid-column: 3;
        justify-self: center;
      `};
  }
`;

export const SidePicture = styled.img`
  width: 100%;
`;
