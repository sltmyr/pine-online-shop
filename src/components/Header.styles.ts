import styled, { css } from "styled-components";
import logo from '../images/logo.png'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 15% 15% 55% 15%;
    @media (max-width: 960px) {
        grid-template-columns: 7.5% 15% 70% 7.5%;   
    }
    @media (max-width: 425px) {
        grid-template-columns: 0 25% 75% 0;   
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
`;

export const ButtonContainer = styled.div`
    grid-column: 3;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    height: 80px;
    `;

export const ButtonPair = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* align-content: center; */
`;

export const Button = styled.button`
    background: transparent;
    border: 1px solid ${props => props.theme.pineNavy};
    color: ${props => props.theme.pineNavy};
    margin: 0 1em;
    padding: 0.25em 1em;
    width: 10em;
    height: 2em;
    ${props => props.color && props.theme[props.color] &&
        css`background-color: ${props.theme[props.color]};
            border: none;
            color: white;
        `};
`;

export const Logo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 90px;
    height: 50px;
`;

export const Line = styled.hr`
    grid-column-start: 2;
    grid-column-end: 4;
`;