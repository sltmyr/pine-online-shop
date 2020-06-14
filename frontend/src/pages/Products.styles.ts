import { ChevronLeft, ChevronRight } from "@styled-icons/feather";
import { Carousel } from 'react-responsive-carousel';
import styled, { css } from "styled-components";
import { TwoColumnGrid } from "../global_styles";

export const Grid = styled(TwoColumnGrid)`
    margin-top: 1em;
`;

const pictureStyle = css`
    width: 80%;
    align-self: center;
    justify-self: center;
    grid-column: 2 / 4;
    margin-top: 1em;
    margin-bottom: 2em;
`;

export const PictureLeft = styled.img`
    ${pictureStyle}
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2;
    }
`;

export const CarouselLeft = styled(Carousel)`
    ${pictureStyle}
     @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2;
    }   
`;

export const CarouselRight = styled(Carousel)`
    ${pictureStyle}
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 3;
    }
`;

export const GoLeftButton = styled.div`
    position: absolute;
    z-index: 2;
    width: 60px;
    height: 100%;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    border: 0;
    display: flex;
    &:hover {
        background-color: rgba(0,0,0,0.1)
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
    background-color: rgba(0,0,0,0);
    border: 0;
    display: flex;
    &:hover {
        background-color: rgba(0,0,0,0.1)
    }
`;

export const RightArrow = styled(ChevronRight)`
    width: 50px;
    color: white;
`;

export const Paragraph = styled.div`
    font-size: 20px;
    width: 100%;
    margin-bottom: 1em;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2 / 4;
    }
`;

export const ParagraphTop = styled(Paragraph)`
    grid-column: 3;
`;

export const ParagraphLeft = styled(Paragraph)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        margin-top: 10em;
    }
    text-align: center;
    grid-column: 2;
`;

export const ParagraphRight = styled(Paragraph)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        margin-top: 10em;
    }
    text-align: center;
    grid-column: 3;
`;

export const ParagraphGrey = styled(ParagraphLeft)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-row: 2;
    }
`;

export const ParagraphNavy = styled(ParagraphLeft)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-row: 4;
    }
`;
