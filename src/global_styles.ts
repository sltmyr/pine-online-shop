import { createGlobalStyle } from "styled-components";

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
    largeBreakpoint: 950
};
