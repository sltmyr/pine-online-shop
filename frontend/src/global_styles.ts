import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: freight-sans-pro, sans-serif;
        font-weight: 300;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    :root {
        font-size: 30px;
    }
`;

export const theme = {
    pineNavy: "#212431",
    pineBeige: "#CEAE99",
    pineGrey: "#8D8D8D",
    mediumBreakpoint: 650,
    largeBreakpoint: 950,
    headerHeight: 80,
};

export const Button = styled.button`
    background: transparent;
    border: 1px solid ${props => props.theme.pineNavy};
    color: ${props => props.theme.pineNavy};
    padding: 0.25em 1em;
    width: 10em;
    height: 2em;
    ${props => props.color && props.theme[props.color] &&
        css`background-color: ${props.theme[props.color]};
            border: none;
            color: white;
        `};
`;

export const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    @media (max-width: ${props => props.theme.largeBreakpoint}px) {
        grid-template-columns: 7.5% 42.5% 42.5% 7.5%;   
    }
    @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
        grid-template-columns: 5% 45% 45% 5%;
    }
`;

export const SerifText = styled.p` 
    font-family: span, serif;
    font-weight: 200;
`;