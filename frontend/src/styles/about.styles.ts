import styled, { css } from "styled-components";
import { TwoColumnGrid, FancyText } from "../styles/global_styles";

export const Grid = styled(TwoColumnGrid)`
  margin-top: 1em;
`;

export const Paragraph = styled.div`
  font-size: 16px;
  width: 100%;
  grid-column: 2;
  margin-bottom: 1em;
  @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
    grid-column: 2 / 4;
  }
`;

const imageStyles = css`
  width: 80%;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 4;
  margin-top: 1em;
  margin-bottom: 2em;
  @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const PhilosophyImageWrapper = styled.div`
  ${imageStyles}
  @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
    grid-column: 2;
    grid-row: 3 / 9;
  }
`;

export const AboutImageWrapper = styled.div`
  ${imageStyles}
  @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
    grid-column: 3;
  }
`;

export const PhilosophyHeader = styled(FancyText)`
  font-size: 30px;
  margin-top: 2em;
  margin-bottom: 1em;
  grid-column: 2 / 4;
`;

export const PhilosopyParagraph = styled.p`
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  margin-top: 1em;
  margin-bottom: 1em;
  grid-column: 2 / 4;
`;

export const ParagraphRight = styled(PhilosopyParagraph)`
  @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
    grid-column: 3;
  }
`;

export const ParagraphLeft = styled(PhilosopyParagraph)`
  @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
    grid-column: 2;
  }
`;

export const HeaderRight = styled(FancyText)`
  font-size: 25px;
  margin-top: 2em;
  grid-column: 2 / 4;
  @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
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
