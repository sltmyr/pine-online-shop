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