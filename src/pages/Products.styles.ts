import styled from "styled-components";
import { TwoColumnGrid, Button } from "../global_styles";

export const Grid = styled(TwoColumnGrid)`
    margin-top: 1em;
`;

export const Picture = styled.img`
    width: 80%;
    align-self: center;
    justify-self: center;
    grid-column: 2 / 4;
    margin-top: 1em;
    margin-bottom: 2em;
`;
export const PictureLeft = styled(Picture)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2;
    }
`;

export const PictureRight = styled(Picture)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 3;
    }
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


export const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

export const ModalWindow = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    @media (max-width: ${props => props.theme.largeBreakpoint}px) {
        width: 85%;
    }
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        width: 90%;
    }
`;

export const ModalButton = styled(Button)`
    margin-top: 2em;
    margin-left: auto;
`;