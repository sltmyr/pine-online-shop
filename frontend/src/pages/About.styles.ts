import styled from 'styled-components';
import { TwoColumnGrid, SerifText } from '../global_styles';

export const Grid = styled(TwoColumnGrid)`
  margin-top: 1em;
`;

export const Paragraph = styled.div`
  font-size: 20px;
  width: 100%;
  grid-column: 2;
  margin-bottom: 1em;
  @media (max-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2 / 4;
  }
`;

export const Picture = styled.img`
  width: 80%;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 4;
  margin-top: 1em;
  margin-bottom: 2em;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const PhilosophyPicture = styled(Picture)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2;
    grid-row: 3 / 9;
  }
`;

export const AboutPicture = styled(Picture)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 3;
  }
`;

export const PhilosophyHeader = styled(SerifText)`
  margin-top: 1em;
  grid-column: 2 / 4;
`;

export const PhilosopyParagraph = styled.p`
  font-size: 20px;
  text-align: justify;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  grid-column: 2 / 4;
`;

export const ParagraphRight = styled(PhilosopyParagraph)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 3;
  }
`;

export const ParagraphLeft = styled(PhilosopyParagraph)`
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 2;
  }
`;

export const HeaderRight = styled(SerifText)`
  font-size: 20px;
  grid-column: 2 / 4;
  @media (min-width: ${(props) => props.theme.mediumBreakpoint}px) {
    grid-column: 3;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 2 / 4;
  grid-row: 10;
  align-self: center;
  justify-self: center;
  margin-bottom: 2em;
`;
