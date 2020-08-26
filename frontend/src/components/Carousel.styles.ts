import { ChevronLeft, ChevronRight } from '@styled-icons/feather';
import { Carousel } from 'react-responsive-carousel';
import styled, { css } from 'styled-components';

export const PictureCarousel = styled(Carousel)<{ side: 'left' | 'right' }>`
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

export const GoLeftButton = styled.div`
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LeftArrow = styled(ChevronLeft)`
  width: 50px;
  color: white;
`;

export const GoRightButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 60px;
  height: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const RightArrow = styled(ChevronRight)`
  width: 50px;
  color: white;
`;
