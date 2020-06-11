
import styled from 'styled-components';
import { SerifText } from '../global_styles';
import banner from '../images/banner.jpg';

export const BannerContainer = styled.div`
    padding-top: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: calc(70vh - ${props => props.theme.headerHeight}px);
`;

export const Banner = styled.div`
    display: flex;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    height: 100%;
    width: 70vw;

    @media (max-width: ${props => props.theme.largeBreakpoint}px) {
        width: 85vw;
    }
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        width: 90vw;
    }
`;

export const BannerText = styled.div`
    margin-left: 1em;
    margin-bottom: 10vh;
    align-self: flex-end;
    color: white;
`;

export const SloganContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    height: 30vh;
`;

export const Slogan = styled.div`
    color: ${props => props.theme.pineNavy};
    margin-right: 1em;
    @media (max-width: ${props => props.theme.largeBreakpoint}px) {
        font-size: 25px;
    }
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        width: 60vw;
    }
`

export const PhilosophyPicture = styled.img`
    width: 80%;
    align-self: center;
    justify-self: center;
    grid-column: 2 / 4;
    margin-top: 1em;
    margin-bottom: 2em;
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        margin-top: 0;
        margin-bottom: 0;
        grid-column: 2;
        grid-row: 3 / 9;
    }
`;

export const PhilosophyHeader = styled(SerifText)`
    grid-column: 2 / 4;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    text-align: justify;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    grid-column: 2 / 4;
`;

export const ParagraphRight = styled(Paragraph)`
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 3;
    }
`;

export const HeaderRight = styled(SerifText)`
    font-size: 20px;
    grid-column: 2 / 4;
    @media (min-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 3;
    }
`;

export const ButtonContainer = styled.div`
    grid-column: 2 / 4;
    grid-row: 100;
    align-self: center;
    justify-self: center;
    margin-bottom: 3em;
`;