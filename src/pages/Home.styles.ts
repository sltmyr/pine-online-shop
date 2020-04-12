
import styled from 'styled-components';
import banner from '../images/coat1.jpg';

export const BannerContainer = styled.div`
    padding-top: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: calc(70vh - ${props => props.theme.headerHeight});
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
    margin-bottom: 1em;
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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    @media (max-width: ${props => props.theme.largeBreakpoint}px) {
        grid-template-columns: 7.5% 42.5% 42.5% 7.5%;   
    }
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-template-columns: 5% 45% 45% 5%;
    }
`;

export const PilosophyPicture = styled.img`
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
        grid-row: 1 / -1;
    }
`;

export const PhilosophyParagraph = styled.p`
    font-size: 20px;
    width: 100%;
    grid-column: 3;
    margin-bottom: 1em;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2 / 4;
    }
`;

export const ButtonContainer = styled.div`
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-column: 2 / 4;
        grid-row: 4;
        margin-bottom: 3em;
    }
`;